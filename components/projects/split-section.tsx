import Image from 'next/image';
import type { ProjectGalleryImage } from '@/lib/project-case-studies';
import { SectionEyebrow } from '@/components/projects/section-eyebrow';
import { Reveal } from '@/components/projects/reveal';

type SplitSectionProps = {
  id?: string;
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  image?: ProjectGalleryImage;
  badge?: string;
};

export function SplitSection({
  id,
  eyebrow,
  heading,
  paragraphs,
  image,
  badge,
}: SplitSectionProps) {
  const [lead, ...rest] = paragraphs;

  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-white/10 bg-[#0F1629] py-20 md:py-28"
      aria-labelledby={`${id ?? 'split'}-heading`}
    >
      <div className="app-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h2
              id={`${id ?? 'split'}-heading`}
              className="mt-4 font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-5xl"
            >
              {heading}
            </h2>
            {lead && (
              <p className="mt-6 text-xl leading-relaxed text-[#CBD5E1]">
                {lead}
              </p>
            )}
            <div className="mt-5 space-y-4">
              {rest.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base leading-[1.8] text-[#94A3B8] md:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          {image && (
            <Reveal className="order-1 lg:order-2" delay={0.08}>
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-2xl border border-[#F5B800]/35 shadow-[0_0_40px_rgba(245,184,0,0.12)]"
                  aria-hidden
                />
                <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111620]">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjMEYxNjI5Ii8+PC9zdmc+"
                    />
                  </div>
                  {(badge || image.caption) && (
                    <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-[#0A0F1C]/75 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                      {badge || image.caption}
                    </figcaption>
                  )}
                </figure>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
