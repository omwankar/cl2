import { addDays, format, parseISO } from 'date-fns';

/** Europe/London — posts go live at noon local time. */
export const BLOG_TIMEZONE = 'Europe/London';
export const BLOG_PUBLISH_HOUR = 12;

/**
 * Scheduled posts in release order — one per day at 12:00 Europe/London.
 * Override the start date with BLOG_SCHEDULE_FIRST_DAY=YYYY-MM-DD on Vercel.
 */
export const SCHEDULED_BLOG_SLUGS = [
  'ai-in-supply-chain-logistics-uk-global-trade',
  'supply-chain-trends-2026',
  'self-healing-supply-chain-2026',
  'decoding-incoterms-2020-definitive-guide',
  'uk-freight-forwarding-services',
  'steps-to-implement-jit-logistics-strategies',
] as const;

export type ScheduledBlogSlug = (typeof SCHEDULED_BLOG_SLUGS)[number];

/** First publish day (tomorrow from deploy). Set BLOG_SCHEDULE_FIRST_DAY env to change. */
export const BLOG_SCHEDULE_FIRST_DAY = '2026-06-02';

/**
 * Fixed UTC instants for 12:00 Europe/London on each release day.
 * These are used on blog posts so Vercel env vars cannot shift the schedule.
 */
export const SCHEDULED_BLOG_PUBLISH_AT: Record<ScheduledBlogSlug, string> = {
  'ai-in-supply-chain-logistics-uk-global-trade': '2026-06-02T11:00:00.000Z',
  'supply-chain-trends-2026': '2026-06-03T11:00:00.000Z',
  'self-healing-supply-chain-2026': '2026-06-04T11:00:00.000Z',
  'decoding-incoterms-2020-definitive-guide': '2026-06-05T11:00:00.000Z',
  'uk-freight-forwarding-services': '2026-06-06T11:00:00.000Z',
  'steps-to-implement-jit-logistics-strategies': '2026-06-07T11:00:00.000Z',
};

function getLondonCalendarDate(date: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: BLOG_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

function addCalendarDays(ymd: string, days: number): string {
  return format(addDays(parseISO(ymd), days), 'yyyy-MM-dd');
}

/** Resolve 12:00 on a London calendar day to a UTC instant (handles GMT/BST). */
export function londonNoonUtc(ymd: string): Date {
  const [year, month, day] = ymd.split('-').map(Number);

  for (let offsetHours = -2; offsetHours <= 2; offsetHours++) {
    const candidate = new Date(
      Date.UTC(year, month - 1, day, BLOG_PUBLISH_HOUR - offsetHours, 0, 0)
    );
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: BLOG_TIMEZONE,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      hour12: false,
    }).formatToParts(candidate);

    const get = (type: Intl.DateTimeFormatPartTypes) =>
      parts.find((p) => p.type === type)?.value;

    const londonYmd = `${get('year')}-${get('month')}-${get('day')}`;
    const londonHour = Number(get('hour'));

    if (londonYmd === ymd && londonHour === BLOG_PUBLISH_HOUR) {
      return candidate;
    }
  }

  throw new Error(`Unable to resolve London noon for ${ymd}`);
}

export function getBlogScheduleFirstDay(): string {
  const fromEnv = process.env.BLOG_SCHEDULE_FIRST_DAY?.trim();
  if (fromEnv && /^\d{4}-\d{2}-\d{2}$/.test(fromEnv)) return fromEnv;
  return BLOG_SCHEDULE_FIRST_DAY;
}

export function getScheduledPublishAt(slug: string): Date | null {
  const fixed = SCHEDULED_BLOG_PUBLISH_AT[slug as ScheduledBlogSlug];
  if (fixed) return new Date(fixed);

  const index = SCHEDULED_BLOG_SLUGS.indexOf(slug as ScheduledBlogSlug);
  if (index < 0) return null;

  const publishDay = addCalendarDays(getBlogScheduleFirstDay(), index);
  return londonNoonUtc(publishDay);
}

export function resolvePublishAt(post: { slug: string; publishAt?: string }): Date | null {
  if (post.publishAt) {
    const at = new Date(post.publishAt);
    if (!Number.isNaN(at.getTime())) return at;
  }

  const fixed = SCHEDULED_BLOG_PUBLISH_AT[post.slug as ScheduledBlogSlug];
  if (fixed) return new Date(fixed);

  return getScheduledPublishAt(post.slug);
}

export function isBlogPublished(
  post: { slug: string; publishAt?: string },
  now: Date = new Date()
): boolean {
  const publishAt = resolvePublishAt(post);
  if (publishAt) return now >= publishAt;
  return true;
}

export function filterPublishedBlogs<T extends { slug: string; publishAt?: string }>(
  posts: T[],
  now: Date = new Date()
): T[] {
  return posts.filter((post) => isBlogPublished(post, now));
}

export function formatBlogPublishDate(ymd: string): string {
  const [year, month, day] = ymd.split('-').map(Number);
  const display = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: BLOG_TIMEZONE,
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(display);
}

export function getScheduledDisplayDate(slug: string): string | null {
  const index = SCHEDULED_BLOG_SLUGS.indexOf(slug as ScheduledBlogSlug);
  if (index < 0) return null;
  const publishDay = addCalendarDays(getBlogScheduleFirstDay(), index);
  return formatBlogPublishDate(publishDay);
}

/** Tomorrow's calendar date in Europe/London — use when setting BLOG_SCHEDULE_FIRST_DAY. */
export function getTomorrowLondonYmd(now: Date = new Date()): string {
  return addCalendarDays(getLondonCalendarDate(now), 1);
}
