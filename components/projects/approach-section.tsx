import { CheckCircle2 } from 'lucide-react';
import type { TransportModeSection } from '@/lib/project-case-studies';
import { Reveal } from '@/components/projects/reveal';
import { SectionEyebrow } from '@/components/projects/section-eyebrow';

type ApproachSectionProps = {
  mode: TransportModeSection;
  phaseIndex: number;
};

export function ApproachSection({ mode, phaseIndex }: ApproachSectionProps) {
  const steps = [
    ...mode.activities.map((item) => ({ kind: 'activity' as const, item })),
    ...mode.execution.map((item) => ({ kind: 'execution' as const, item })),
  ];

  if (!mode.summary && steps.length === 0) return null;

  const phase = String(phaseIndex + 1).padStart(2, '0');

  return (
    <section
      className="border-b border-white/10 bg-[#0A0F1C] py-20 md:py-28"
      aria-labelledby={`approach-heading-${phase}`}
    >
      <div className="app-container">
        <div className="grid gap-10 lg:grid-cols-[88px_minmax(0,1fr)] lg:gap-12">
          <div className="hidden lg:flex lg:flex-col lg:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-[#F5B800]/40 bg-[#F5B800]/10 font-[family-name:var(--font-bebas)] text-2xl tabular-nums text-[#F5B800]">
              {phase}
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
                  {phase}
                </span>
                <SectionEyebrow>Phase {phase}</SectionEyebrow>
              </div>
              <h2
                id={`approach-heading-${phase}`}
                className="mt-4 font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-5xl"
              >
                {mode.title.toUpperCase()}
              </h2>
              {mode.summary && (
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#94A3B8] md:text-lg">
                  {mode.summary}
                </p>
              )}
            </Reveal>

            {steps.length > 0 && (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {steps.map(({ item }, index) => (
                  <Reveal key={`${item}-${index}`} delay={index * 0.05} as="li">
                    <div className="flex h-full gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-[#151C28] to-[#0F1629] p-4">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#F5B800]"
                        aria-hidden
                      />
                      <p className="text-sm leading-relaxed text-[#CBD5E1]">
                        {item}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
