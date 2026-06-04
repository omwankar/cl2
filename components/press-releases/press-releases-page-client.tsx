'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Building2,
  Filter,
  Globe2,
  Loader2,
  Mail,
  Newspaper,
  Search,
} from 'lucide-react';
import { PRIMARY_CONTACT_EMAIL } from '@/lib/constants';
import type { IndustryNewsResponse, PressRelease } from '@/lib/press-release-types';
import { PressReleaseCard } from '@/components/press-releases/press-release-card';

type TabId = 'company' | 'industry';

type PressReleasesPageClientProps = {
  companyReleases: PressRelease[];
  initialIndustry: IndustryNewsResponse;
};

const PAGE_SIZE = 6;
const ARCHIVE_DAYS = 90;

const DATE_FILTERS = [
  { label: 'All time', days: null as number | null },
  { label: 'Last 7 days', days: 7 },
  { label: 'Last 30 days', days: 30 },
  { label: 'Last 90 days', days: 90 },
];

function isWithinDays(iso: string, days: number | null) {
  if (days === null) return true;
  const published = new Date(iso).getTime();
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
  return published >= cutoff;
}

export function PressReleasesPageClient({
  companyReleases,
  initialIndustry,
}: PressReleasesPageClientProps) {
  const [activeTab, setActiveTab] = useState<TabId>('company');
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sourceFilter, setSourceFilter] = useState('All');
  const [dateFilterDays, setDateFilterDays] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const [industryArticles, setIndustryArticles] = useState<PressRelease[]>(
    initialIndustry.articles
  );
  const [industryPage, setIndustryPage] = useState(initialIndustry.page);
  const [industryHasMore, setIndustryHasMore] = useState(initialIndustry.hasMore);
  const [industryLoading, setIndustryLoading] = useState(false);
  const [industryError, setIndustryError] = useState(initialIndustry.error);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const activeReleases = activeTab === 'company' ? companyReleases : industryArticles;

  const categories = useMemo(() => {
    const set = new Set(activeReleases.map((r) => r.category));
    return ['All', ...Array.from(set).sort()];
  }, [activeReleases]);

  const sources = useMemo(() => {
    const set = new Set(activeReleases.map((r) => r.source));
    return ['All', ...Array.from(set).sort()];
  }, [activeReleases]);

  const filteredReleases = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return [...activeReleases]
      .filter((release) => {
        const categoryMatch =
          categoryFilter === 'All' || release.category === categoryFilter;
        const sourceMatch =
          sourceFilter === 'All' || release.source === sourceFilter;
        const dateMatch = isWithinDays(release.publishedAt, dateFilterDays);
        const searchMatch =
          !normalized ||
          release.title.toLowerCase().includes(normalized) ||
          release.excerpt.toLowerCase().includes(normalized) ||
          release.source.toLowerCase().includes(normalized) ||
          release.category.toLowerCase().includes(normalized);

        return categoryMatch && sourceMatch && dateMatch && searchMatch;
      })
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  }, [activeReleases, categoryFilter, sourceFilter, dateFilterDays, query]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    setCategoryFilter('All');
    setSourceFilter('All');
  }, [activeTab, query, dateFilterDays]);

  const featuredRelease = useMemo(() => {
    const pinned =
      activeTab === 'company'
        ? filteredReleases.find((r) => r.featured)
        : filteredReleases[0];
    return pinned ?? filteredReleases[0] ?? null;
  }, [filteredReleases, activeTab]);

  const releasesWithoutFeatured = useMemo(() => {
    if (!featuredRelease) return filteredReleases;
    return filteredReleases.filter((r) => r.id !== featuredRelease.id);
  }, [filteredReleases, featuredRelease]);

  const archiveCutoff = Date.now() - ARCHIVE_DAYS * 24 * 60 * 60 * 1000;

  const recentReleases = useMemo(
    () =>
      releasesWithoutFeatured.filter(
        (r) => new Date(r.publishedAt).getTime() >= archiveCutoff
      ),
    [releasesWithoutFeatured, archiveCutoff]
  );

  const archiveReleases = useMemo(
    () =>
      releasesWithoutFeatured.filter(
        (r) => new Date(r.publishedAt).getTime() < archiveCutoff
      ),
    [releasesWithoutFeatured, archiveCutoff]
  );

  const visibleRecent = recentReleases.slice(0, visibleCount);
  const hasMoreRecent = visibleCount < recentReleases.length;

  const loadMoreIndustry = useCallback(async () => {
    if (activeTab !== 'industry' || !industryHasMore || industryLoading) return;

    setIndustryLoading(true);
    try {
      const nextPage = industryPage + 1;
      const response = await fetch(
        `/api/press-releases/industry?page=${nextPage}&pageSize=12`
      );
      const data = (await response.json()) as IndustryNewsResponse;

      if (data.error) {
        setIndustryError(data.error);
      } else {
        setIndustryArticles((prev) => {
          const existing = new Set(prev.map((a) => a.id));
          const merged = [...prev];
          for (const article of data.articles) {
            if (!existing.has(article.id)) merged.push(article);
          }
          return merged;
        });
        setIndustryPage(data.page);
        setIndustryHasMore(data.hasMore);
        setIndustryError(undefined);
      }
    } catch {
      setIndustryError('Could not load more industry headlines.');
    } finally {
      setIndustryLoading(false);
    }
  }, [activeTab, industryHasMore, industryLoading, industryPage]);

  const handleLoadMore = () => {
    if (hasMoreRecent) {
      setVisibleCount((c) => c + PAGE_SIZE);
      return;
    }
    if (activeTab === 'industry' && industryHasMore) {
      void loadMoreIndustry();
    }
  };

  const handleNewsletterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const email = newsletterEmail.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterStatus('error');
      return;
    }
    window.location.href = `mailto:${PRIMARY_CONTACT_EMAIL}?subject=Press%20Releases%20Newsletter&body=Please%20subscribe%20${encodeURIComponent(email)}%20to%20Clarusto%20press%20updates.`;
    setNewsletterStatus('success');
    setNewsletterEmail('');
  };

  const showLoadMore =
    hasMoreRecent || (activeTab === 'industry' && industryHasMore && !hasMoreRecent);

  return (
    <main className="min-h-screen bg-[#F5F5F0]">
      <div className="app-container py-10 md:py-14">
        {/* Tabs + search + filters */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="inline-flex rounded-xl bg-[#F5F5F0] p-1 ring-1 ring-slate-200/80">
              <button
                type="button"
                onClick={() => setActiveTab('company')}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                  activeTab === 'company'
                    ? 'bg-[#0F1923] text-white shadow'
                    : 'text-slate-600 hover:text-[#0F1923]'
                }`}
              >
                <Building2 className="h-4 w-4" aria-hidden />
                Company News
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('industry')}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                  activeTab === 'industry'
                    ? 'bg-[#0F1923] text-white shadow'
                    : 'text-slate-600 hover:text-[#0F1923]'
                }`}
              >
                <Newspaper className="h-4 w-4" aria-hidden />
                Industry News
              </button>
            </div>

            <label className="relative flex-1 lg:max-w-md">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search headlines, sources, or topics..."
                className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none transition-shadow focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
              />
            </label>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <Filter className="h-3.5 w-3.5" aria-hidden />
              Filters
            </span>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              aria-label="Filter by category"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All categories' : cat}
                </option>
              ))}
            </select>
            <select
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              aria-label="Filter by source"
            >
              {sources.map((src) => (
                <option key={src} value={src}>
                  {src === 'All' ? 'All sources' : src}
                </option>
              ))}
            </select>
            <select
              value={dateFilterDays === null ? 'all' : String(dateFilterDays)}
              onChange={(e) => {
                const v = e.target.value;
                setDateFilterDays(v === 'all' ? null : Number(v));
              }}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              aria-label="Filter by date"
            >
              {DATE_FILTERS.map((f) => (
                <option
                  key={f.label}
                  value={f.days === null ? 'all' : String(f.days)}
                >
                  {f.label}
                </option>
              ))}
            </select>
          </div>

          {activeTab === 'industry' && industryError && (
            <p className="mt-4 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800">
              {industryError} Add <code className="font-mono">NEWS_API_KEY</code> to
              your environment variables to enable the live industry feed.
            </p>
          )}
        </div>

        {/* Featured */}
        {featuredRelease && (
          <section className="mt-10" aria-labelledby="featured-release-heading">
            <h2
              id="featured-release-heading"
              className="mb-4 text-sm font-bold uppercase tracking-widest text-amber-700"
            >
              Featured Release
            </h2>
            <PressReleaseCard release={featuredRelease} variant="featured" />
          </section>
        )}

        {/* Recent grid */}
        <section className="mt-12" aria-labelledby="recent-releases-heading">
          <h2
            id="recent-releases-heading"
            className="mb-6 text-2xl font-bold text-[#0F1923]"
          >
            Recent Releases
          </h2>

          {visibleRecent.length === 0 ? (
            <p className="rounded-xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center text-slate-500">
              No releases match your filters. Try another search or tab.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleRecent.map((release) => (
                <PressReleaseCard key={release.id} release={release} />
              ))}
            </div>
          )}

          {showLoadMore && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                disabled={industryLoading}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-[#FBBF24] disabled:opacity-60"
              >
                {industryLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    Loading...
                  </>
                ) : (
                  <>
                    Load More
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </>
                )}
              </button>
            </div>
          )}
        </section>

        {/* Archive */}
        {archiveReleases.length > 0 && (
          <section className="mt-14" aria-labelledby="archive-heading">
            <h2
              id="archive-heading"
              className="mb-2 text-2xl font-bold text-[#0F1923]"
            >
              Archive
            </h2>
            <p className="mb-6 text-sm text-slate-500">
              Releases older than {ARCHIVE_DAYS} days
            </p>
            <div className="space-y-4">
              {archiveReleases.map((release) => (
                <PressReleaseCard
                  key={release.id}
                  release={release}
                  variant="compact"
                />
              ))}
            </div>
          </section>
        )}

        {/* Newsletter */}
        <section
          className="mt-16 overflow-hidden rounded-2xl border border-[#24344A] bg-[#0F1923] p-8 text-white md:p-10"
          aria-labelledby="newsletter-heading"
        >
          <div className="mx-auto max-w-2xl text-center">
            <Mail className="mx-auto h-10 w-10 text-accent" aria-hidden />
            <h2 id="newsletter-heading" className="mt-4 text-2xl font-bold md:text-3xl">
              Stay Updated on Logistics News
            </h2>
            <p className="mt-3 text-white/90">
              Subscribe to receive Clarusto press announcements, market briefs, and
              curated supply chain headlines.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => {
                  setNewsletterEmail(e.target.value);
                  setNewsletterStatus('idle');
                }}
                placeholder="you@company.com"
                className="min-w-0 flex-1 rounded-xl border-0 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50 sm:max-w-xs"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-colors hover:bg-[#FBBF24]"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </form>
            {newsletterStatus === 'success' && (
              <p className="mt-3 text-sm text-white/95">
                Thank you — your email client will open to complete signup.
              </p>
            )}
            {newsletterStatus === 'error' && (
              <p className="mt-3 text-sm text-red-100">
                Please enter a valid email address.
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
