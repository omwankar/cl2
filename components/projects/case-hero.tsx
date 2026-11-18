'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Building2, ChevronDown, MapPin, Tags } from 'lucide-react';
import type { ProjectCaseStudy, ProjectGalleryImage, ProjectStat } from '@/lib/project-case-studies';
import { SectionEyebrow } from '@/components/projects/section-eyebrow';
import { StatsStrip } from '@/components/projects/stats-strip';

type CaseHeroProps = {
  study: ProjectCaseStudy;
  heroImage: ProjectGalleryImage;
  stats: ProjectStat[];
};

export function CaseHero({ study, heroImage, stats }: CaseHeroProps) {
  const chips = [
    { icon: MapPin, label: study.location },
    { icon: Building2, label: study.client },
    { icon: Tags, label: study.category.split('·')[0]?.trim() || study.category },
  ];

  return (
    <header className="relative isolate min-h-[85vh] overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjEwIiBmaWxsPSIjMEEwRjFDIi8+PC9zdmc+"
        />
        {/* Lighter overlays so the photo remains visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C]/88 via-[#0A0F1C]/55 to-[#0A0F1C]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/35 to-[#0A0F1C]/30" />
      </div>

      <div className="app-container relative z-10 flex min-h-[85vh] flex-col justify-end pb-10 pt-28 md:pb-14 md:pt-32">
        <div className="max-w-3xl">
          <Link
            href="/projects"
            className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#E2E8F0] backdrop-blur-sm transition-colors hover:border-[#F5B800]/40 hover:text-[#F5B800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All Projects
          </Link>

          <SectionEyebrow>Case Study · {study.category}</SectionEyebrow>

          <h1
            className="mt-5 max-w-[14ch] font-[family-name:var(--font-bebas)] leading-[0.95] tracking-wide text-white"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            {study.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#CBD5E1] md:text-lg">
            {study.subheading}
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {chips.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-[#E2E8F0] sm:text-sm"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-[#F5B800]" aria-hidden />
                <span className="truncate">{label}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          <StatsStrip stats={stats} />
        </div>

        <a
          href="#project-background"
          className="mx-auto mt-8 inline-flex flex-col items-center gap-1 text-[#94A3B8] transition-colors hover:text-[#F5B800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800]"
          aria-label="Scroll to project background"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden />
        </a>
      </div>
    </header>
  );
}
