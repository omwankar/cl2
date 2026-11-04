/** Parse blog display dates like "Nov 04, 2026" as noon UTC to avoid timezone day-shift. */
const MONTHS: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

export function parseBlogDate(date: string): Date {
  const trimmed = date.trim();
  const match = trimmed.match(/^([A-Za-z]{3})\s+(\d{1,2}),\s+(\d{4})$/);
  if (match) {
    const month = MONTHS[match[1]];
    if (month !== undefined) {
      return new Date(Date.UTC(Number(match[3]), month, Number(match[2]), 12, 0, 0));
    }
  }

  const isoDay = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoDay) {
    return new Date(
      Date.UTC(Number(isoDay[1]), Number(isoDay[2]) - 1, Number(isoDay[3]), 12, 0, 0)
    );
  }

  const parsed = new Date(trimmed);
  if (!Number.isNaN(parsed.getTime())) return parsed;
  return new Date(0);
}

export function blogDateToIso(date: string): string {
  return parseBlogDate(date).toISOString();
}

export function getBlogTimestamp(date: string): number {
  const parsed = parseBlogDate(date).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
}
