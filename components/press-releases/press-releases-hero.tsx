import Image from 'next/image';
import { Building2, Globe2 } from 'lucide-react';
import type { PressRelease } from '@/lib/press-release-types';

type PressReleasesHeroProps = {
  companyCount: number;
  latestRelease?: PressRelease;
};

export function PressReleasesHero({
  companyCount,
  latestRelease,
}: PressReleasesHeroProps) {
  const previewImage = latestRelease?.image ?? '/press-releases-hero.jpg';
  const previewAlt =
    latestRelease?.title ?? 'Logistics operations overlooking a global shipping port';
  const previewLabel = latestRelease?.category ?? 'Media & Announcements';
  const previewTitle =
    latestRelease?.title ?? 'Official Clarusto announcements and industry headlines';

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/press-releases-hero.jpg"
          alt="Logistics operations overlooking a global shipping port"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/85 via-[#0F1923]/78 to-[#0a0a0a]/88" />
      </div>

      <div className="app-container relative z-10 grid items-center gap-10 py-14 md:grid-cols-[1fr_min(420px,42%)] md:py-20">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
            Media & Announcements
          </span>
          <h1
            className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.45)' }}
          >
            Press Releases & Industry Headlines
          </h1>
          <p className="mt-4 text-base text-white/90 md:text-lg">
            Official Clarusto announcements and curated supply chain, freight, and
            logistics news — connecting global trade with precision and visibility.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white/90 backdrop-blur-sm">
              <Building2 className="h-4 w-4 text-accent" aria-hidden />
              {companyCount} company releases
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white/90 backdrop-blur-sm">
              <Globe2 className="h-4 w-4 text-accent" aria-hidden />
              Live industry feed
            </span>
          </div>
        </div>

        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 shadow-2xl md:block">
          <Image
            src={previewImage}
            alt={previewAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 0vw, 420px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/70 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#0F1923]/80 px-4 py-3 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-300">
              Latest announcement
            </p>
            <p className="mt-1 line-clamp-2 text-sm text-white/85">{previewTitle}</p>
            <p className="mt-1 text-xs text-white/60">{previewLabel}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
