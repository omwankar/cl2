import type { ShippingStatus } from './types';

export function formatTrackDate(
  value: string | null | undefined,
  options?: Intl.DateTimeFormatOptions
): string {
  if (!value) return '—';
  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) return value;
  try {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
      ...options,
    }).format(new Date(parsed));
  } catch {
    return new Date(parsed).toLocaleString();
  }
}

export function statusLabel(status: ShippingStatus | null | undefined): string {
  if (!status) return 'Unknown';
  return status
    .replace(/_/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function statusBadgeClass(status: ShippingStatus | null | undefined): string {
  const key = (status ?? 'UNKNOWN').toUpperCase();
  if (key.includes('DELIVER')) {
    return 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200';
  }
  if (key.includes('TRANSIT') || key.includes('IN_PROGRESS')) {
    return 'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200';
  }
  if (key.includes('PLAN')) {
    return 'border-sky-200 bg-sky-50 text-sky-900 dark:border-sky-800 dark:bg-sky-950/40 dark:text-sky-200';
  }
  return 'border-border bg-muted text-muted-foreground';
}

export function roleLabel(role: string): string {
  switch (role) {
    case 'prepol':
      return 'Pre-POL';
    case 'pol':
      return 'Origin (POL)';
    case 'pod':
      return 'Destination (POD)';
    case 'postpod':
      return 'Post-POD';
    default:
      return role.toUpperCase();
  }
}
