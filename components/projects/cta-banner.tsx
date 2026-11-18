import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/projects/reveal';

export function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 py-20 md:py-28"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(245,184,0,0.22), transparent 60%), linear-gradient(180deg, #0F1629 0%, #0A0F1C 100%)',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,184,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(245,184,0,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />

      <div className="app-container relative max-w-3xl text-center">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F5B800]">
            Next Steps
          </p>
          <h2
            id="cta-heading"
            className="mt-5 font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-6xl"
          >
            PLAN YOUR NEXT MOVE
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#94A3B8] md:text-lg">
            Speak with Clarusto Logistics about multimodal project cargo, heavy
            haulage, and complex international supply chain execution.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-[#F5B800] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#0A0F1C] shadow-[0_12px_40px_rgba(245,184,0,0.25)] transition-all hover:bg-[#FFD040] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1C]"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-[#F5B800]/50 hover:text-[#F5B800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800]"
            >
              View All Projects
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
