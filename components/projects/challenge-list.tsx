'use client';

import Image from 'next/image';
import { AlertTriangle } from 'lucide-react';
import type { ProjectGalleryImage } from '@/lib/project-case-studies';
import { Reveal } from '@/components/projects/reveal';
import { SectionEyebrow } from '@/components/projects/section-eyebrow';

type ChallengeListProps = {
  phaseLabel?: string;
  title: string;
  summary: string;
  challenges: string[];
  image?: ProjectGalleryImage;
};

export function ChallengeList({
  phaseLabel = 'Phase 01',
  title,
  summary,
  challenges,
  image,
}: ChallengeListProps) {
  if (challenges.length === 0 && !summary) return null;

  return (
    <section
      className="border-b border-white/10 bg-[#0F1629] py-20 md:py-28"
      aria-labelledby="challenge-heading"
    >
      <div className="app-container">
        <div className="grid gap-10 lg:grid-cols-[88px_minmax(0,1fr)] lg:gap-12">
          <div className="hidden lg:flex lg:flex-col lg:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-[#F5B800]/40 bg-[#F5B800]/10 font-[family-name:var(--font-bebas)] text-2xl tabular-nums text-[#F5B800]">
              01
            </span>
            <span
              className="mt-4 w-px flex-1 bg-gradient-to-b from-[#F5B800]/50 to-transparent"
              aria-hidden
            />
          </div>

          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center whitespace-nowrap rounded-full border border-[#F5B800]/40 bg-[#F5B800]/10 font-[family-name:var(--font-bebas)] text-xl tabular-nums text-[#F5B800] lg:hidden">
                  01
                </span>
                <SectionEyebrow>{phaseLabel}</SectionEyebrow>
              </div>
              <h2
                id="challenge-heading"
                className="mt-4 font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-5xl"
              >
                {title.toUpperCase()}
              </h2>
              {summary && (
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#94A3B8] md:text-lg">
                  {summary}
                </p>
              )}
            </Reveal>

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_min(380px,40%)] lg:items-start">
              <ul className="grid gap-3 sm:grid-cols-2">
                {challenges.map((item, index) => (
                  <Reveal key={item} delay={index * 0.08} as="li">
                    <div className="flex h-full gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-[#151C28] to-[#0F1629] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5B800]/35 hover:shadow-[0_12px_36px_rgba(245,184,0,0.1)]">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#F5B800]/25 bg-[#F5B800]/10 text-[#F5B800]">
                        <AlertTriangle className="h-4 w-4" aria-hidden />
                      </span>
                      <p className="text-sm leading-relaxed text-[#CBD5E1]">
                        {item}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>

              {image && (
                <Reveal delay={0.12} className="lg:sticky lg:top-28">
                  <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#111620] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                    <div className="relative aspect-[4/5] w-full sm:aspect-[16/11] lg:aspect-[4/5]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 380px"
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjE1IiBmaWxsPSIjMEYxNjI5Ii8+PC9zdmc+"
                      />
                    </div>
                    {image.caption && (
                      <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-[#94A3B8]">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
