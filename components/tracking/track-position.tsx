import type { TrackPosition } from '@/lib/tracking/types';

export function TrackPositionCard({ position }: { position: TrackPosition | null }) {
  if (!position) return null;

  return (
    <div className="rounded-lg border border-border/70 bg-muted/20 p-4">
      <h3 className="text-sm font-semibold text-foreground">Reported position</h3>
      {position.label ? (
        <p className="mt-1 text-sm text-muted-foreground">{position.label}</p>
      ) : null}
      <p className="mt-2 font-mono text-sm text-foreground">
        {position.lat.toFixed(5)}, {position.lng.toFixed(5)}
      </p>
      <a
        href={`https://www.openstreetmap.org/?mlat=${position.lat}&mlon=${position.lng}#map=5/${position.lat}/${position.lng}`}
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-flex text-sm font-medium text-amber-700 underline-offset-4 hover:underline"
      >
        Open map
      </a>
    </div>
  );
}
