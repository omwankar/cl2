import { TrackPositionCard } from '@/components/tracking/track-position';
import { formatTrackDate } from '@/lib/tracking/format';
import type { NormalizedShipment } from '@/lib/tracking/types';

export function TrackDetailsAside({ shipment }: { shipment: NormalizedShipment }) {
  const { metadata, containers, position, events } = shipment;
  const isAir = String(metadata.shipmentType).toUpperCase() === 'MAWB';
  const cargo = containers[0];

  return (
    <aside className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-foreground">Shipment details</h3>
        <dl className="mt-3 space-y-3">
          <div className="rounded-lg border border-border/70 bg-muted/20 px-3.5 py-3">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Reference
            </dt>
            <dd className="mt-1 font-mono text-sm font-medium text-foreground">
              {metadata.shipmentNumber}
            </dd>
          </div>
          <div className="rounded-lg border border-border/70 bg-muted/20 px-3.5 py-3">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Mode
            </dt>
            <dd className="mt-1 text-sm font-medium text-foreground">
              {isAir ? 'Air freight (MAWB)' : `Ocean · ${metadata.shipmentType}`}
            </dd>
          </div>
          {cargo?.sizeType ? (
            <div className="rounded-lg border border-border/70 bg-muted/20 px-3.5 py-3">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {isAir ? 'Cargo' : 'Equipment'}
              </dt>
              <dd className="mt-1 text-sm font-medium text-foreground">
                {cargo.sizeType}
              </dd>
            </div>
          ) : null}
          <div className="rounded-lg border border-border/70 bg-muted/20 px-3.5 py-3">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Timeline
            </dt>
            <dd className="mt-1 text-sm font-medium text-foreground">
              {events.length
                ? `${events.length} event${events.length === 1 ? '' : 's'}`
                : 'Awaiting carrier updates'}
            </dd>
            <dd className="mt-0.5 text-xs text-muted-foreground">
              Updated {formatTrackDate(metadata.updatedAt)}
            </dd>
          </div>
        </dl>
      </div>
      <TrackPositionCard position={position} />
    </aside>
  );
}
