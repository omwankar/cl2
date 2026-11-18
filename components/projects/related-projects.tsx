import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectCaseStudy } from '@/lib/project-case-studies';
import { Reveal } from '@/components/projects/reveal';
import { SectionEyebrow } from '@/components/projects/section-eyebrow';

export function RelatedProjects({ studies }: { studies: ProjectCaseStudy[] }) {
  if (studies.length === 0) return null;

  return (
    <section
      className="bg-[#0F1629] py-20 md:py-28"
      aria-labelledby="related-heading"
    >
      <div className="app-container">
        <Reveal>
          <SectionEyebrow>More Work</SectionEyebrow>
          <h2
            id="related-heading"
            className="mt-4 font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-5xl"
          >
            RELATED PROJECTS
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.08} as="li">
              <Link
                href={`/projects/${study.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#151C28] to-[#0F1629] transition-all duration-300 hover:-translate-y-1 hover:border-[#F5B800]/40 hover:shadow-[0_16px_48px_rgba(245,184,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={study.heroImage}
                    alt={study.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/70 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 items-start justify-between gap-3 p-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#F5B800]">
                      {study.category}
                    </p>
                    <h3 className="mt-2 text-base font-semibold leading-snug text-white md:text-lg">
                      {study.title}
                    </h3>
                  </div>
                  <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#F5B800] transition-colors group-hover:border-[#F5B800] group-hover:bg-[#F5B800] group-hover:text-[#0A0F1C]">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
