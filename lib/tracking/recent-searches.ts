import type { ShipmentType } from './types';

export type RecentTrackMode = ShipmentType | 'MAWB';

export type RecentTrackSearch = {
  number: string;
  type: RecentTrackMode;
  sealine: string | null;
  label?: string;
  at: number;
};

const STORAGE_KEY = 'clarusto.track.recent';
const MAX_ITEMS = 5;

export function readRecentSearches(): RecentTrackSearch[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as RecentTrackSearch[];
    if (!Array.isArray(parsed)) return [];
    return parsed.slice(0, MAX_ITEMS);
  } catch {
    return [];
  }
}

export function pushRecentSearch(
  entry: Omit<RecentTrackSearch, 'at'>
): RecentTrackSearch[] {
  if (typeof window === 'undefined') return [];
  const next: RecentTrackSearch = { ...entry, at: Date.now() };
  const existing = readRecentSearches().filter(
    (item) =>
      !(
        item.number === next.number &&
        item.type === next.type &&
        (item.sealine ?? null) === (next.sealine ?? null)
      )
  );
  const merged = [next, ...existing].slice(0, MAX_ITEMS);
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {
    // ignore quota / private mode
  }
  return merged;
}
