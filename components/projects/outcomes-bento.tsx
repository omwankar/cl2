import Image from 'next/image';
import type { ProjectGalleryImage } from '@/lib/project-case-studies';
import { Reveal } from '@/components/projects/reveal';
import { SectionEyebrow } from '@/components/projects/section-eyebrow';

type OutcomesBentoProps = {
  heading?: string;
  outcomes: string[];
  image?: ProjectGalleryImage;
};

export function OutcomesBento({
  heading = 'KEY OUTCOMES',
  outcomes,
  image,
}: OutcomesBentoProps) {
  if (outcomes.length === 0) return null;

  return (
    <section
      className="border-b border-white/10 bg-[#0A0F1C] py-20 md:py-28"
      aria-labelledby="outcomes-heading"
    >
      <div className="app-container">
        <Reveal>
          <SectionEyebrow>Results</SectionEyebrow>
          <h2
            id="outcomes-heading"
            className="mt-4 font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-5xl"
          >
            {heading.toUpperCase()}
          </h2>
        </Reveal>

        <div
          className={`mt-10 grid gap-4 ${
            image
              ? 'lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]'
              : ''
          }`}
        >
          <ul className="grid gap-3 sm:grid-cols-2">
            {outcomes.map((outcome, index) => {
              const isLastOdd =
                outcomes.length % 2 === 1 && index === outcomes.length - 1;
              return (
                <Reveal
                  key={outcome}
                  delay={index * 0.06}
                  as="li"
                  className={isLastOdd ? 'sm:col-span-2' : undefined}
                >
                  <div className="group flex h-full gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-[#151C28] to-[#0F1629] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5B800]/45 hover:shadow-[0_14px_40px_rgba(245,184,0,0.14)]">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-[#F5B800]/50 bg-[#F5B800]/10 font-mono text-[11px] tabular-nums text-[#F5B800]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-[#CBD5E1] md:text-[15px]">
                      {outcome}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>

          {image && (
            <Reveal delay={0.1} className="min-h-[280px] lg:min-h-full">
              <figure className="relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjE2IiBmaWxsPSIjMEEwRjFDIi8+PC9zdmc+"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 via-transparent to-transparent" />
                {image.caption && (
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm text-[#E2E8F0]">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
