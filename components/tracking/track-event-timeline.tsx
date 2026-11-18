import { formatTrackDate } from '@/lib/tracking/format';
import type { TrackEvent } from '@/lib/tracking/types';
import { cn } from '@/lib/utils';

export function TrackEventTimeline({
  events,
  isAir = false,
}: {
  events: TrackEvent[];
  isAir?: boolean;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-foreground">Event timeline</h3>
        <p className="text-xs text-muted-foreground">
          {events.length
            ? `${events.length} update${events.length === 1 ? '' : 's'}`
            : 'No updates yet'}
        </p>
      </div>

      {!events.length ? (
        <p className="rounded-lg border border-dashed border-border bg-muted/30 px-4 py-6 text-sm text-muted-foreground">
          No detailed events are available for this shipment yet.
        </p>
      ) : (
        <ol className="relative space-y-0 border-l border-border/80 pl-5">
          {events.map((event, index) => {
            const place = [event.locationName, event.locode]
              .filter(Boolean)
              .filter((value, i, arr) => arr.indexOf(value) === i)
              .join(' · ');
            const flightOrVessel = isAir
              ? event.voyage || event.vesselName
              : [event.vesselName ? `Vessel ${event.vesselName}` : null, event.voyage ? `Voyage ${event.voyage}` : null]
                  .filter(Boolean)
                  .join(' · ');

            return (
              <li key={event.id} className="relative pb-5 last:pb-0">
                <span
                  className={cn(
                    'absolute -left-[1.41rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background',
                    event.isActual ? 'bg-amber-400' : 'bg-muted-foreground/35'
                  )}
                />
                <div className="grid gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <p className="text-sm font-semibold text-foreground">
                        {event.description}
                      </p>
                      <span
                        className={cn(
                          'rounded border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                          event.isActual
                            ? 'border-amber-200 bg-amber-50 text-amber-900'
                            : 'border-border bg-muted text-muted-foreground'
                        )}
                      >
                        {event.isActual ? 'Actual' : 'Est.'}
                      </span>
                      {index === 0 ? (
                        <span className="rounded border border-[#0A0F1C]/15 bg-[#0A0F1C]/5 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-foreground">
                          Latest
                        </span>
                      ) : null}
                      {event.eventCode ? (
                        <span className="font-mono text-[10px] text-muted-foreground">
                          {event.eventCode}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {place || 'Location unavailable'}
                      {event.facilityName ? ` · ${event.facilityName}` : ''}
                      {flightOrVessel ? ` · ${flightOrVessel}` : ''}
                    </p>
                  </div>
                  <p className="shrink-0 text-xs text-muted-foreground sm:pt-0.5 sm:text-right">
                    {formatTrackDate(event.date)}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
