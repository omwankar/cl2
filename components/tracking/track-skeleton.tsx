import { Skeleton } from '@/components/ui/skeleton';

export function TrackSkeleton() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm"
      aria-hidden
    >
      <div className="space-y-4 border-b border-border/60 p-5 md:p-6">
        <Skeleton className="h-3 w-24 bg-muted" />
        <Skeleton className="h-8 w-56 bg-muted" />
        <Skeleton className="h-4 w-72 bg-muted" />
        <div className="grid gap-3 pt-2 sm:grid-cols-4">
          <Skeleton className="h-12 w-full bg-muted" />
          <Skeleton className="h-12 w-full bg-muted" />
          <Skeleton className="h-12 w-full bg-muted" />
          <Skeleton className="h-12 w-full bg-muted" />
        </div>
      </div>
      <div className="border-b border-border/60 p-5 md:p-6">
        <Skeleton className="mb-4 h-4 w-32 bg-muted" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Skeleton className="h-20 w-full bg-muted" />
          <Skeleton className="h-20 w-full bg-muted" />
        </div>
      </div>
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.55fr)_minmax(14rem,0.85fr)]">
        <div className="space-y-3 p-5 md:p-6">
          <Skeleton className="h-4 w-28 bg-muted" />
          <Skeleton className="h-16 w-full bg-muted" />
          <Skeleton className="h-16 w-full bg-muted" />
          <Skeleton className="h-16 w-full bg-muted" />
        </div>
        <div className="space-y-3 border-t border-border/60 p-5 md:border-l md:border-t-0 md:p-6">
          <Skeleton className="h-4 w-32 bg-muted" />
          <Skeleton className="h-16 w-full bg-muted" />
          <Skeleton className="h-16 w-full bg-muted" />
        </div>
      </div>
    </div>
  );
}
