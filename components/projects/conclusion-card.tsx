import { Reveal } from '@/components/projects/reveal';
import { SectionEyebrow } from '@/components/projects/section-eyebrow';

export function ConclusionCard({ paragraphs }: { paragraphs: string[] }) {
  if (paragraphs.length === 0) return null;

  return (
    <section
      className="border-b border-white/10 bg-[#0A0F1C] py-20 md:py-28"
      aria-labelledby="conclusion-heading"
    >
      <div className="app-container">
        <Reveal>
          <SectionEyebrow>Closing</SectionEyebrow>
          <h2
            id="conclusion-heading"
            className="mt-4 font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-5xl"
          >
            CONCLUSION
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <blockquote className="relative mt-10 max-w-3xl rounded-2xl border border-white/10 border-l-[#F5B800] border-l-4 bg-gradient-to-br from-[#151C28] to-[#0F1629] p-6 md:p-10">
            <span
              className="pointer-events-none absolute -top-2 left-6 font-[family-name:var(--font-bebas)] text-8xl leading-none text-[#F5B800]/15 md:text-9xl"
              aria-hidden
            >
              “
            </span>
            <div className="relative space-y-5">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base leading-[1.85] text-[#CBD5E1] md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
