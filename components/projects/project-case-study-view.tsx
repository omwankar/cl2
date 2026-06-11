import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Building2 } from 'lucide-react';
import type { ProjectGalleryImage, ProjectCaseStudy } from '@/lib/project-case-studies';

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-sm text-[#C5CEDF] md:text-base">
      {items.map((item) => (
        <li key={item} className="flex gap-2 leading-relaxed">
          <span className="text-[#F5B800]" aria-hidden>
            ›
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function InlineProjectImage({
  image,
  wide = false,
}: {
  image: ProjectGalleryImage;
  wide?: boolean;
}) {
  return (
    <figure
      className={`my-10 overflow-hidden rounded-md border border-white/10 bg-[#111620] ${
        wide ? 'w-full' : ''
      }`}
    >
      <div
        className={`relative w-full ${
          wide ? 'aspect-[21/9] md:aspect-[2.2/1]' : 'aspect-[16/10]'
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          unoptimized
          className="object-cover"
          sizes={wide ? '(max-width: 768px) 100vw, 896px' : '(max-width: 768px) 100vw, 640px'}
        />
      </div>
      <figcaption className="px-4 py-3 text-sm text-[#8A9BB8]">
        {image.caption}
      </figcaption>
    </figure>
  );
}

export function ProjectCaseStudyView({ study }: { study: ProjectCaseStudy }) {
  return (
    <div className="min-h-screen bg-[#0A0D12] text-[#E8ECF4]">
      <section className="relative min-h-[72vh] overflow-hidden border-b border-white/10">
        <Image
          src={study.heroImage}
          alt={`${study.title} — project hero`}
          fill
          priority
          className="object-cover opacity-35 mix-blend-luminosity"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D12]/40 via-[#0A0D12]/80 to-[#0A0D12]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,184,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,184,0,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden
        />

        <div className="app-container relative z-10 flex min-h-[72vh] max-w-5xl flex-col justify-end pb-16 pt-28 md:pb-20 md:pt-32">
          <Link
            href="/projects"
            className="mb-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#8A9BB8] transition-colors hover:text-[#F5B800]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All Projects
          </Link>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5B800]">
            Case Study · {study.category}
          </p>
          <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-bebas)] text-5xl leading-none tracking-wide text-white md:text-7xl">
            {study.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-[#8A9BB8] md:text-lg">
            {study.subheading}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[#E8ECF4]">
              {study.location}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[#E8ECF4]">
              Client: {study.client}
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-14 md:py-20">
        <div className="app-container max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5B800]">
                Background
              </h2>
              {study.background.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mb-6 mt-4 text-base leading-relaxed text-[#C5CEDF] md:text-lg"
                >
                  {paragraph}
                </p>
              ))}

              <h2 className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5B800]">
                Objective
              </h2>
              {study.objective.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mb-6 mt-4 text-base leading-relaxed text-[#C5CEDF] md:text-lg"
                >
                  {paragraph}
                </p>
              ))}

              {study.objectiveImage && (
                <InlineProjectImage image={study.objectiveImage} wide />
              )}
            </div>

            <aside className="space-y-6">
              <div className="rounded-lg border border-white/10 bg-[#111620] p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#8A9BB8]">
                  Key Result
                </p>
                <p className="mt-2 text-lg font-medium text-[#F5B800]">
                  {study.result}
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111620] p-5">
                <div className="flex gap-3">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F5B800]" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-white">Client</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#8A9BB8]">
                      {study.client}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111620] p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#8A9BB8]">
                  Key Outcomes
                </p>
                <BulletList items={study.keyOutcomes} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {study.transportModes.map((mode) => (
        <section
          key={mode.title}
          className="border-b border-white/10 py-14 md:py-20"
        >
          <div className="app-container max-w-5xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5B800]">
              Transport Mode
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-5xl">
              {mode.title.toUpperCase()}
            </h2>
            <p className="mt-4 max-w-3xl text-base text-[#8A9BB8]">{mode.summary}</p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-[#111620] p-5">
                <h3 className="text-sm font-semibold text-white">Key Activities</h3>
                <BulletList items={mode.activities} />
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111620] p-5">
                <h3 className="text-sm font-semibold text-white">Challenges</h3>
                <BulletList items={mode.challenges} />
              </div>
              <div className="rounded-lg border border-white/10 bg-[#111620] p-5">
                <h3 className="text-sm font-semibold text-white">Execution</h3>
                <BulletList items={mode.execution} />
              </div>
            </div>

            {mode.image && <InlineProjectImage image={mode.image} />}
          </div>
        </section>
      ))}

      <section className="border-b border-white/10 py-14 md:py-20">
        <div className="app-container max-w-5xl">
          <h2 className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-5xl">
            {(study.coordinationHeading ?? 'OUTCOMES — LAND & SEA COORDINATION').toUpperCase()}
          </h2>
          <BulletList items={study.coordinationOutcomes} />

          <h2 className="mt-12 font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-5xl">
            {(study.outcomesHeading ?? 'KEY OUTCOMES').toUpperCase()}
          </h2>
          <BulletList items={study.keyOutcomes} />

          {study.outcomesImage && (
            <InlineProjectImage image={study.outcomesImage} wide />
          )}

          <h2 className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5B800]">
            Conclusion
          </h2>
          {study.conclusion.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="mb-6 mt-4 text-base leading-relaxed text-[#C5CEDF] md:text-lg"
            >
              {paragraph}
            </p>
          ))}

          {study.conclusionImage && (
            <InlineProjectImage image={study.conclusionImage} wide />
          )}
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="app-container max-w-5xl text-center">
          <h2 className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-5xl">
            PLAN YOUR NEXT MOVE
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#8A9BB8]">
            Speak with Clarusto Logistics about multimodal project cargo, heavy
            haulage, and energy-sector supply chain execution.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#F5B800] px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#0A0D12] transition-opacity hover:opacity-90"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
