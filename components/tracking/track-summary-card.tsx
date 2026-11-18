import { Card, CardContent } from '@/components/ui/card';
import {
  formatTrackDate,
  statusBadgeClass,
  statusLabel,
} from '@/lib/tracking/format';
import type { NormalizedShipment } from '@/lib/tracking/types';
import { cn } from '@/lib/utils';

export function TrackSummaryCard({
  shipment,
  compact = false,
}: {
  shipment: NormalizedShipment;
  compact?: boolean;
}) {
  const { metadata, eta, containers, route } = shipment;
  const primaryContainer = containers[0];
  const isAir = String(metadata.shipmentType).toUpperCase() === 'MAWB';
  const origin = route.find((s) => s.role === 'pol');
  const destination = route.find((s) => s.role === 'pod');

  return (
    <Card
      className={cn(
        'overflow-hidden border-border/70 shadow-sm',
        compact && 'border-0 shadow-none'
      )}
    >
      <CardContent className={cn('p-5 md:p-6', compact && 'p-0')}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {isAir ? 'Air waybill' : 'Shipment'}
            </p>
            <h2 className="mt-1 font-mono text-2xl font-semibold tracking-tight text-foreground md:text-[1.75rem]">
              {metadata.shipmentNumber}
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {[
                metadata.sealineName ?? metadata.sealine,
                primaryContainer?.sizeType,
              ]
                .filter(Boolean)
                .join(' · ') || 'Carrier details pending'}
            </p>
          </div>
          <span
            className={cn(
              'inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold',
              statusBadgeClass(metadata.shippingStatus)
            )}
          >
            {statusLabel(metadata.shippingStatus)}
          </span>
        </div>

        <dl className="mt-5 grid gap-3 border-t border-border/70 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Carrier
            </dt>
            <dd className="mt-1 text-sm font-medium text-foreground">
              {metadata.sealineName ?? metadata.sealine ?? '—'}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {isAir ? 'Route' : 'ETA'}
            </dt>
            <dd className="mt-1 text-sm font-medium text-foreground">
              {isAir && origin && destination
                ? `${origin.locode ?? origin.name ?? '—'} → ${destination.locode ?? destination.name ?? '—'}`
                : formatTrackDate(eta)}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {isAir ? 'ETA' : 'Last updated'}
            </dt>
            <dd className="mt-1 text-sm font-medium text-foreground">
              {isAir
                ? formatTrackDate(eta)
                : formatTrackDate(metadata.updatedAt)}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {isAir ? 'Last updated' : 'Type'}
            </dt>
            <dd className="mt-1 text-sm font-medium text-foreground">
              {isAir
                ? formatTrackDate(metadata.updatedAt)
                : String(metadata.shipmentType)}
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
