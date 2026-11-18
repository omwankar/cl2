import { formatTrackDate } from '@/lib/tracking/format';
import type { TrackPortStop } from '@/lib/tracking/types';
import { cn } from '@/lib/utils';

function stopState(stop: TrackPortStop, index: number, stops: TrackPortStop[]) {
  if (stop.actual === true) return 'done';
  const previousActual = stops.slice(0, index).every((s) => s.actual === true);
  const anyLaterActual = stops.slice(index + 1).some((s) => s.actual === true);
  if (anyLaterActual) return 'done';
  if (previousActual || index === 0) return 'current';
  return 'upcoming';
}

function stopTitle(stop: TrackPortStop, isAir: boolean) {
  if (isAir) {
    if (stop.role === 'pol') return 'Origin';
    if (stop.role === 'pod') return 'Destination';
  }
  switch (stop.role) {
    case 'prepol':
      return 'Pre-POL';
    case 'pol':
      return 'Origin (POL)';
    case 'pod':
      return 'Destination (POD)';
    case 'postpod':
      return 'Post-POD';
    default:
      return stop.role.toUpperCase();
  }
}

export function TrackRouteProgress({
  stops,
  isAir = false,
}: {
  stops: TrackPortStop[];
  isAir?: boolean;
}) {
  if (!stops.length) return null;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-foreground">Route progress</h3>
        <p className="text-xs text-muted-foreground">
          {stops.length} stop{stops.length === 1 ? '' : 's'}
        </p>
      </div>
      <ol className="relative grid gap-4 sm:grid-cols-[repeat(auto-fit,minmax(9rem,1fr))]">
        {stops.map((stop, index) => {
          const state = stopState(stop, index, stops);
          return (
            <li
              key={`${stop.role}-${stop.locode ?? stop.name ?? index}`}
              className="relative min-w-0"
            >
              {index < stops.length - 1 ? (
                <span
                  aria-hidden
                  className={cn(
                    'absolute left-[1.15rem] top-4 hidden h-px sm:block',
                    'w-[calc(100%-0.5rem)] translate-x-4',
                    state === 'done' ? 'bg-amber-400' : 'bg-border'
                  )}
                />
              ) : null}
              <div className="relative flex gap-3 sm:flex-col sm:gap-2">
                <span
                  className={cn(
                    'relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold',
                    state === 'done' &&
                      'border-amber-400 bg-amber-400 text-[#0F1923]',
                    state === 'current' &&
                      'border-amber-400 bg-background text-amber-700 ring-4 ring-amber-400/20',
                    state === 'upcoming' &&
                      'border-border bg-muted text-muted-foreground'
                  )}
                >
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {stopTitle(stop, isAir)}
                  </p>
                  <p className="mt-1 font-mono text-base font-semibold text-foreground">
                    {stop.locode ?? stop.name ?? '—'}
                  </p>
                  {stop.name && stop.locode && stop.name !== stop.locode ? (
                    <p className="text-sm text-muted-foreground">{stop.name}</p>
                  ) : stop.country || stop.countryCode ? (
                    <p className="text-sm text-muted-foreground">
                      {[stop.country, stop.countryCode]
                        .filter(Boolean)
                        .join(' · ')}
                    </p>
                  ) : null}
                  <p className="mt-1 text-xs text-muted-foreground">
                    {formatTrackDate(stop.date)}
                    {stop.actual === true
                      ? ' · Actual'
                      : stop.actual === false
                        ? ' · Estimated'
                        : ''}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
