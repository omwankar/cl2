'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  Container,
  ExternalLink,
  FileText,
  Loader2,
  MapPinned,
  Plane,
  RotateCcw,
  Search,
  Ship,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TrackDetailsAside } from '@/components/tracking/track-details-aside';
import { TrackEventTimeline } from '@/components/tracking/track-event-timeline';
import { TrackRouteProgress } from '@/components/tracking/track-route-progress';
import { TrackSkeleton } from '@/components/tracking/track-skeleton';
import { TrackSummaryCard } from '@/components/tracking/track-summary-card';
import { detectTrackNumber } from '@/lib/tracking/detect';
import {
  pushRecentSearch,
  readRecentSearches,
  type RecentTrackSearch,
} from '@/lib/tracking/recent-searches';
import type {
  NormalizedShipment,
  SealineOption,
  ShipmentType,
  TrackApiResponse,
} from '@/lib/tracking/types';
import { SHIPMENT_TYPES } from '@/lib/tracking/validate';
import { cn } from '@/lib/utils';

type TrackMode = 'CT' | 'BL' | 'MAWB' | 'AUTO';

const VERTICALS: Array<{
  id: TrackMode;
  label: string;
  hint: string;
  icon: typeof Container;
  example: string;
}> = [
  {
    id: 'CT',
    label: 'Container',
    hint: 'ISO 6346',
    icon: Container,
    example: 'MSKU0496560',
  },
  {
    id: 'BL',
    label: 'Bill of Lading',
    hint: 'B/L',
    icon: FileText,
    example: 'MAEU12345678',
  },
  {
    id: 'MAWB',
    label: 'Air Waybill',
    hint: 'MAWB',
    icon: Plane,
    example: '999-12345675',
  },
  {
    id: 'AUTO',
    label: 'Auto-detect',
    hint: 'Any',
    icon: Sparkles,
    example: '',
  },
];

type TrackState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: NormalizedShipment; cached: boolean }
  | {
      status: 'error';
      message: string;
      redirectUrl?: string;
      code?: string;
    };

function resolveApiType(mode: TrackMode, number: string): ShipmentType | 'MAWB' {
  if (mode === 'MAWB') return 'MAWB';
  if (mode === 'CT' || mode === 'BL') return mode;
  const detected = detectTrackNumber(number);
  if (detected.kind === 'MAWB') return 'MAWB';
  if (detected.shipmentType) return detected.shipmentType;
  return 'CT';
}

function modeFromApiType(type: string): TrackMode {
  const upper = type.toUpperCase();
  if (upper === 'MAWB') return 'MAWB';
  if (upper === 'BL' || upper === 'BK') return 'BL';
  if (upper === 'CT') return 'CT';
  return 'AUTO';
}

export function TrackPageClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [number, setNumber] = useState('');
  const [mode, setMode] = useState<TrackMode>('AUTO');
  const [sealine, setSealine] = useState('AUTO');
  const [sealines, setSealines] = useState<SealineOption[]>([]);
  const [recent, setRecent] = useState<RecentTrackSearch[]>([]);
  const [state, setState] = useState<TrackState>({ status: 'idle' });

  useEffect(() => {
    setRecent(readRecentSearches());
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/track/sealines')
      .then((res) => res.json())
      .then((json) => {
        if (cancelled || !json?.ok || !Array.isArray(json.data)) return;
        setSealines(json.data as SealineOption[]);
      })
      .catch(() => {
        // Carrier dropdown stays optional if this fails.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const runTrack = useCallback(
    async (
      input: { number: string; mode: TrackMode; sealine: string },
      pushUrl = true
    ) => {
      const trimmed = input.number.trim().toUpperCase();
      if (!trimmed) {
        setState({
          status: 'error',
          message: 'Paste a container, bill of lading, or air waybill number.',
        });
        return;
      }

      const apiType = resolveApiType(input.mode, trimmed);
      const nextMode =
        input.mode === 'AUTO' ? modeFromApiType(apiType) : input.mode;

      setNumber(trimmed);
      setMode(nextMode === 'AUTO' ? input.mode : nextMode);
      setSealine(input.sealine || 'AUTO');
      setState({ status: 'loading' });

      if (pushUrl) {
        const params = new URLSearchParams();
        params.set('number', trimmed);
        params.set('type', apiType === 'MAWB' ? 'MAWB' : apiType);
        if (input.sealine && input.sealine !== 'AUTO') {
          params.set('sealine', input.sealine);
        }
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      }

      try {
        const params = new URLSearchParams({
          number: trimmed,
          type: apiType === 'MAWB' ? 'MAWB' : apiType,
        });
        if (input.sealine && input.sealine !== 'AUTO') {
          params.set('sealine', input.sealine);
        }

        const response = await fetch(`/api/track?${params.toString()}`);
        const json = (await response.json()) as TrackApiResponse;

        if (!json.ok) {
          setState({
            status: 'error',
            message: json.message,
            redirectUrl: json.redirectUrl,
            code: json.code,
          });
          return;
        }

        const savedType =
          String(json.data.metadata.shipmentType).toUpperCase() === 'MAWB'
            ? 'MAWB'
            : ((['CT', 'BL', 'BK'].includes(
                String(json.data.metadata.shipmentType)
              )
                ? json.data.metadata.shipmentType
                : apiType === 'MAWB'
                  ? 'CT'
                  : apiType) as ShipmentType | 'MAWB');

        setRecent(
          pushRecentSearch({
            number: trimmed,
            type: savedType,
            sealine: input.sealine === 'AUTO' ? null : input.sealine,
            label: json.data.metadata.sealineName ?? undefined,
          })
        );
        setState({ status: 'success', data: json.data, cached: json.cached });
      } catch {
        setState({
          status: 'error',
          message: 'Something went wrong while tracking. Please try again.',
        });
      }
    },
    [pathname, router]
  );

  useEffect(() => {
    const urlNumber = searchParams.get('number');
    const urlType = (searchParams.get('type') ?? '').toUpperCase();
    const urlSealine = searchParams.get('sealine')?.toUpperCase() ?? 'AUTO';
    if (!urlNumber) return;

    let initialMode: TrackMode = 'AUTO';
    if (urlType === 'MAWB') initialMode = 'MAWB';
    else if (SHIPMENT_TYPES.includes(urlType as ShipmentType)) {
      initialMode = urlType === 'BK' ? 'BL' : (urlType as 'CT' | 'BL');
    } else {
      initialMode = modeFromApiType(resolveApiType('AUTO', urlNumber));
    }

    void runTrack(
      {
        number: urlNumber,
        mode: initialMode,
        sealine: urlSealine || 'AUTO',
      },
      false
    );
    // Intentionally run once for initial URL params.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    void runTrack({ number, mode, sealine });
  };

  const onNumberChange = (value: string) => {
    setNumber(value.toUpperCase());
  };

  const liveMessage = useMemo(() => {
    if (state.status === 'loading') return 'Looking up shipment…';
    if (state.status === 'error') return state.message;
    if (state.status === 'success') {
      return `Tracking results for ${state.data.metadata.shipmentNumber}`;
    }
    return '';
  }, [state]);

  const detectedHint = useMemo(() => {
    if (!number.trim()) return null;
    const d = detectTrackNumber(number);
    if (d.kind === 'UNKNOWN') return null;
    if (d.kind === 'MAWB') return `Detected air waybill ${d.display}`;
    if (d.kind === 'CT') return 'Detected ISO container number';
    if (d.kind === 'BL') return 'Detected bill of lading style number';
    if (d.kind === 'BK') return 'Detected booking-style reference';
    return null;
  }, [number]);

  const isAirResult =
    state.status === 'success' &&
    String(state.data.metadata.shipmentType).toUpperCase() === 'MAWB';
  const hideOceanCarrier = mode === 'MAWB' || Boolean(detectedHint?.includes('air waybill'));

  return (
    <div className="bg-[#0A0F1C]">
      <section className="relative overflow-hidden border-b border-white/10 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,184,0,0.16),transparent_42%)]" />
        <div className="app-container relative py-10 md:py-14">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
              <Ship className="h-3.5 w-3.5" />
              Live shipment tracking
            </p>
            <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[0.95] tracking-wide">
              PASTE THE NUMBER. WE DO THE REST.
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70 md:text-base">
              Containers, bills of lading, and air waybills — tracked in one
              Clarusto view.
            </p>
          </div>

          <div className="mx-auto mt-7 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white text-foreground shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
            <div className="border-b border-border/70 bg-[#F7F8FA] px-4 py-3 sm:px-5">
              <div className="flex gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {VERTICALS.map((vertical) => {
                  const Icon = vertical.icon;
                  const active = mode === vertical.id;
                  return (
                    <button
                      key={vertical.id}
                      type="button"
                      onClick={() => {
                        setMode(vertical.id);
                        if (vertical.example && !number.trim()) {
                          setNumber(vertical.example);
                        }
                      }}
                      className={cn(
                        'inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400',
                        active
                          ? 'border-amber-400 bg-amber-400 text-[#0F1923]'
                          : 'border-border bg-white text-muted-foreground hover:border-amber-400/50 hover:text-foreground'
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden />
                      <span className="font-medium">{vertical.label}</span>
                      <span
                        className={cn(
                          'hidden text-xs sm:inline',
                          active ? 'text-[#0F1923]/70' : 'opacity-60'
                        )}
                      >
                        {vertical.hint}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-4 p-4 sm:p-5">
              <div
                className={cn(
                  'grid gap-3',
                  hideOceanCarrier
                    ? 'md:grid-cols-[minmax(0,1fr)_9.5rem]'
                    : 'md:grid-cols-[minmax(0,1.4fr)_minmax(11rem,0.85fr)_9.5rem]'
                )}
              >
                <div>
                  <Label htmlFor="track-number">Tracking number</Label>
                  <Input
                    id="track-number"
                    name="number"
                    value={number}
                    onChange={(e) => onNumberChange(e.target.value)}
                    placeholder="e.g. MSKU0496560 or 020-12345675"
                    autoComplete="off"
                    spellCheck={false}
                    className="mt-2 h-11 font-mono uppercase"
                    aria-required
                  />
                  {detectedHint ? (
                    <p className="mt-2 text-xs font-medium text-amber-700">
                      {detectedHint}
                    </p>
                  ) : (
                    <p className="mt-2 text-xs text-muted-foreground">
                      Paste any common cargo reference.
                    </p>
                  )}
                </div>

                {!hideOceanCarrier ? (
                  <div>
                    <Label htmlFor="track-carrier">Ocean carrier</Label>
                    <Select value={sealine} onValueChange={setSealine}>
                      <SelectTrigger
                        id="track-carrier"
                        className="mt-2 h-11 w-full"
                      >
                        <SelectValue placeholder="Auto-detect" />
                      </SelectTrigger>
                      <SelectContent className="max-h-72">
                        <SelectItem value="AUTO">Auto-detect</SelectItem>
                        {sealines.map((option) => (
                          <SelectItem
                            key={`${option.scac}-${option.name}`}
                            value={option.scac}
                          >
                            {option.name} ({option.scac})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Optional for ocean cargo
                    </p>
                  </div>
                ) : null}

                <div className="flex flex-col justify-end">
                  <Button
                    type="submit"
                    className="h-11 w-full bg-amber-400 text-[#0F1923] hover:bg-amber-500"
                    disabled={state.status === 'loading'}
                  >
                    {state.status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Tracking…
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4" />
                        Track
                      </>
                    )}
                  </Button>
                  <p className="mt-2 hidden text-xs text-transparent md:block">
                    .
                  </p>
                </div>
              </div>

              {recent.length > 0 ? (
                <div className="border-t border-border/70 pt-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Recent
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {recent.map((item) => (
                      <button
                        key={`${item.number}-${item.type}-${item.sealine ?? 'auto'}-${item.at}`}
                        type="button"
                        onClick={() =>
                          void runTrack({
                            number: item.number,
                            mode: modeFromApiType(item.type),
                            sealine: item.sealine ?? 'AUTO',
                          })
                        }
                        className="rounded-full border border-border bg-[#F7F8FA] px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-amber-400 hover:bg-amber-50"
                      >
                        {item.number}
                        <span className="ml-1 text-muted-foreground">
                          · {item.type}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF1F5] py-8 md:py-10">
        <div className="app-container max-w-5xl">
          <div className="sr-only" aria-live="polite">
            {liveMessage}
          </div>

          {state.status === 'idle' ? (
            <div className="rounded-2xl border border-dashed border-border/80 bg-white/80 px-5 py-8 shadow-sm sm:px-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-700">
                    <MapPinned className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-foreground">
                      Ready when you are
                    </h2>
                    <p className="mt-1 max-w-lg text-sm text-muted-foreground">
                      Try a sample number or paste your own. Results stay on
                      this page and remain shareable via the URL.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {VERTICALS.filter((v) => v.id !== 'AUTO').map((vertical) => (
                    <Button
                      key={vertical.id}
                      type="button"
                      variant="outline"
                      className="bg-white"
                      onClick={() =>
                        void runTrack({
                          number: vertical.example,
                          mode: vertical.id,
                          sealine: 'AUTO',
                        })
                      }
                    >
                      Try {vertical.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {state.status === 'loading' ? <TrackSkeleton /> : null}

          {state.status === 'error' ? (
            <div className="rounded-2xl border border-destructive/25 bg-white px-5 py-6 shadow-sm sm:px-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    {state.code === 'REDIRECT'
                      ? 'Continue on carrier tracking'
                      : 'Unable to track'}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {state.message}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {state.redirectUrl ? (
                    <Button
                      asChild
                      className="bg-amber-400 text-[#0F1923] hover:bg-amber-500"
                    >
                      <a
                        href={state.redirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open carrier page
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : null}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => void runTrack({ number, mode, sealine })}
                  >
                    <RotateCcw className="h-4 w-4" />
                    Retry
                  </Button>
                </div>
              </div>
            </div>
          ) : null}

          {state.status === 'success' ? (
            <div className="space-y-3">
              {state.cached ? (
                <p className="text-center text-xs text-muted-foreground">
                  Showing a recently cached result to keep tracking responsive.
                </p>
              ) : null}

              <div className="overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm">
                <div className="border-b border-border/60 p-5 md:p-6">
                  <TrackSummaryCard shipment={state.data} compact />
                </div>

                {state.data.route.length ? (
                  <div className="border-b border-border/60 px-5 py-5 md:px-6">
                    <TrackRouteProgress
                      stops={state.data.route}
                      isAir={isAirResult}
                    />
                  </div>
                ) : null}

                <div className="grid lg:grid-cols-[minmax(0,1.55fr)_minmax(15rem,0.85fr)]">
                  <div className="p-5 md:p-6">
                    <TrackEventTimeline
                      events={state.data.events}
                      isAir={isAirResult}
                    />
                  </div>
                  <div className="border-t border-border/60 bg-[#F7F8FA]/80 p-5 md:border-l md:border-t-0 md:p-6">
                    <TrackDetailsAside shipment={state.data} />
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Ocean timelines use Sinay carrier feeds when available. Air waybills
            show in-page from airline cargo status. Updates may be delayed.
          </p>
        </div>
      </section>
    </div>
  );
}
