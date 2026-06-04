'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import type { PressRelease } from '@/lib/press-release-types';
import { ShareButtons } from '@/components/press-releases/share-buttons';

type PressReleaseCardProps = {
  release: PressRelease;
  variant?: 'featured' | 'default' | 'compact';
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(iso));
}

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

export function PressReleaseCard({
  release,
  variant = 'default',
}: PressReleaseCardProps) {
  const href = release.url ?? '#';
  const external = release.url ? isExternalUrl(release.url) : false;
  const isFeatured = variant === 'featured';

  const ReadMoreLink = () => {
    if (!release.url) return null;
    const className =
      'inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-[#FBBF24]';

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          Read More
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      );
    }

    return (
      <Link href={href} className={className}>
        Read More
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    );
  };

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/60 hover:shadow-lg ${
        isFeatured ? 'md:flex-row' : ''
      }`}
    >
      {release.image && (
        <div
          className={`relative shrink-0 overflow-hidden bg-slate-100 ${
            isFeatured ? 'h-56 w-full md:h-auto md:w-2/5' : 'aspect-[16/9] w-full'
          } ${variant === 'compact' ? 'aspect-[21/9]' : ''}`}
        >
          <Image
            src={release.image}
            alt={release.title}
            fill
            unoptimized
            sizes={isFeatured ? '(max-width: 768px) 100vw, 40vw' : '(max-width: 768px) 100vw, 33vw'}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 rounded-full bg-[#0F1923] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {release.sourceType === 'company' ? 'Company' : 'Industry'}
          </div>
        </div>
      )}

      <div className={`flex flex-1 flex-col p-5 md:p-6 ${isFeatured ? 'md:p-8' : ''}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium text-amber-800">
          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-amber-900 ring-1 ring-amber-200/80">
            {release.category}
          </span>
          <span className="flex items-center gap-1 text-slate-500">
            <Calendar className="h-3.5 w-3.5" aria-hidden />
            {formatDate(release.publishedAt)}
          </span>
        </div>

        <h3
          className={`font-bold text-[#0F1923] transition-colors group-hover:text-amber-700 ${
            isFeatured ? 'text-2xl md:text-3xl' : variant === 'compact' ? 'text-lg' : 'text-xl'
          }`}
        >
          {release.title}
        </h3>

        <p
          className={`mt-3 flex-1 text-slate-600 leading-relaxed ${
            isFeatured ? 'text-base md:text-lg' : 'text-sm md:text-base'
          }`}
        >
          {release.excerpt}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div className="text-sm text-slate-500">
            <span className="font-semibold text-slate-700">Source:</span>{' '}
            {release.source}
            {release.author ? ` · ${release.author}` : ''}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ShareButtons release={release} />
            <ReadMoreLink />
            {external && (
              <ExternalLink
                className="h-4 w-4 text-slate-400"
                aria-hidden
              />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
