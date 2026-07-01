import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  MapPin,
  ShieldAlert,
  Truck,
} from 'lucide-react';
import type {
  ProjectGalleryImage,
  ProjectCaseStudy,
  TransportModeSection,
} from '@/lib/project-case-studies';

const BLOCK_META: Record<
  string,
  { icon: LucideIcon; accent: string }
> = {
  'Key Activities': { icon: ClipboardList, accent: 'border-[#F5B800]/40 bg-[#F5B800]/5' },
  Challenges: { icon: ShieldAlert, accent: 'border-amber-500/30 bg-amber-500/5' },
  Execution: { icon: Truck, accent: 'border-sky-500/30 bg-sky-500/5' },
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#F5B800]">
      <span className="h-px w-8 bg-[#F5B800]/60" aria-hidden />
      {children}
    </p>
  );
}

function BulletList({ items, compact = false }: { items: string[]; compact?: boolean }) {
  if (items.length === 0) return null;

  return (
    <ul className={`space-y-3 ${compact ? 'mt-0' : 'mt-4'}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-relaxed text-[#C5CEDF] md:text-[15px]"
        >
          <CheckCircle2
            className="mt-0.5 h-4 w-4 shrink-0 text-[#F5B800]"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ModeDetailGrid({ mode }: { mode: TransportModeSection }) {
  const blocks = [
    { title: 'Key Activities', items: mode.activities },
    { title: 'Challenges', items: mode.challenges },
    { title: 'Execution', items: mode.execution },
  ].filter((block) => block.items.length > 0);

  if (blocks.length === 0) return null;

  return (
    <div
      className={`mt-8 grid gap-5 ${
        blocks.length === 1
          ? 'grid-cols-1'
          : blocks.length === 2
            ? 'grid-cols-1 lg:grid-cols-2'
            : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
      }`}
    >
      {blocks.map((block) => {
        const meta = BLOCK_META[block.title] ?? BLOCK_META['Key Activities'];
        const Icon = meta.icon;

        return (
          <div
            key={block.title}
            className={`rounded-xl border p-5 md:p-6 ${meta.accent}`}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0A0D12]/60">
                <Icon className="h-5 w-5 text-[#F5B800]" aria-hidden />
              </span>
              <h3 className="text-sm font-semibold tracking-wide text-white md:text-base">
                {block.title}
              </h3>
            </div>
            <BulletList items={block.items} compact />
          </div>
        );
      })}
    </div>
  );
}

function ProjectImage({
  image,
  wide = false,
  className = '',
}: {
  image: ProjectGalleryImage;
  wide?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`group overflow-hidden rounded-xl border border-white/10 bg-[#111620] shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          wide ? 'aspect-[21/9] md:aspect-[2.1/1]' : 'aspect-[16/10]'
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes={wide ? '(max-width: 768px) 100vw, 896px' : '(max-width: 768px) 100vw, 480px'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12]/50 via-transparent to-transparent" />
      </div>
      <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-[#8A9BB8] md:px-5">
        {image.caption}
      </figcaption>
    </figure>
  );
}

export function ProjectCaseStudyView({ study }: { study: ProjectCaseStudy }) {
  const overviewParagraphs = [...study.background, ...study.objective];
  const showCoordination =
    study.coordinationOutcomes.length > 0 &&
    !study.transportModes.some((mode) =>
      mode.title.toLowerCase().includes('approach')
    );

  return (
    <div className="min-h-screen bg-[#0A0D12] text-[#E8ECF4]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src={study.heroImage}
            alt={`${study.title} — project hero`}
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D12] via-[#0A0D12]/92 to-[#0A0D12]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-transparent to-[#0A0D12]/40" />
        </div>

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,184,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,184,0,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden
        />

        <div className="app-container relative z-10 grid min-h-[62vh] max-w-6xl items-end gap-8 pb-12 pt-24 sm:min-h-[68vh] sm:gap-10 sm:pb-14 sm:pt-28 md:min-h-[74vh] md:grid-cols-[1.15fr_0.85fr] md:pb-20 md:pt-32">
          <div>
            <Link
              href="/projects"
              className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#C5CEDF] backdrop-blur-sm transition-colors hover:border-[#F5B800]/40 hover:text-[#F5B800]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All Projects
            </Link>

            <SectionEyebrow>Case Study · {study.category}</SectionEyebrow>

            <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-bebas)] text-5xl leading-[0.95] tracking-wide text-white md:text-7xl">
              {study.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#AEB8CB] md:text-lg">
              {study.subheading}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#E8ECF4]">
                <MapPin className="h-4 w-4 text-[#F5B800]" aria-hidden />
                {study.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#E8ECF4]">
                <Building2 className="h-4 w-4 text-[#F5B800]" aria-hidden />
                {study.client}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-[#F5B800]/25 bg-gradient-to-br from-[#151C28] to-[#0E1219] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A9BB8]">
              Project Highlight
            </p>
            <p className="mt-3 font-[family-name:var(--font-bebas)] text-3xl leading-tight tracking-wide text-[#F5B800] md:text-4xl">
              {study.result}
            </p>
            <div className="mt-6 h-px bg-white/10" />
            <p className="mt-6 text-sm leading-relaxed text-[#8A9BB8]">
              {study.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-white/10 bg-[#0E1219] py-16 md:py-24">
        <div className="app-container max-w-4xl">
          <SectionEyebrow>Overview</SectionEyebrow>
          <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-5xl">
            PROJECT BACKGROUND
          </h2>
          <div className="mt-8 space-y-5">
            {overviewParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-base leading-[1.8] text-[#C5CEDF] md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {study.objectiveImage && (
            <ProjectImage image={study.objectiveImage} wide className="mt-10" />
          )}
        </div>
      </section>

      {/* Phases */}
      {study.transportModes.map((mode, index) => {
        const hasDetailGrid =
          mode.activities.length > 0 ||
          mode.challenges.length > 0 ||
          mode.execution.length > 0;
        const isAlt = index % 2 === 1;

        return (
          <section
            key={mode.title}
            className={`border-b border-white/10 py-16 md:py-24 ${
              isAlt ? 'bg-[#0A0D12]' : 'bg-[#0E1219]'
            }`}
          >
            <div className="app-container max-w-6xl">
              <div className="grid gap-10 lg:grid-cols-[88px_1fr] lg:gap-12">
                <div className="hidden lg:flex lg:flex-col lg:items-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#F5B800]/40 bg-[#F5B800]/10 font-[family-name:var(--font-bebas)] text-2xl text-[#F5B800]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {index < study.transportModes.length - 1 && (
                    <span className="mt-4 w-px flex-1 bg-gradient-to-b from-[#F5B800]/50 to-transparent" />
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F5B800]/40 bg-[#F5B800]/10 font-[family-name:var(--font-bebas)] text-xl text-[#F5B800] lg:hidden">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <SectionEyebrow>
                      {study.transportModes.length > 1
                        ? `Phase ${String(index + 1).padStart(2, '0')}`
                        : 'Project Phase'}
                    </SectionEyebrow>
                  </div>
                  <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-5xl">
                    {mode.title.toUpperCase()}
                  </h2>
                  <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#8A9BB8] md:text-lg">
                    {mode.summary}
                  </p>

                  {mode.image ? (
                    <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_min(340px,42%)] xl:items-start">
                      <ProjectImage
                        image={mode.image}
                        className="order-1 xl:order-2 xl:mt-0"
                      />
                      {hasDetailGrid && (
                        <div className="order-2 xl:order-1">
                          <ModeDetailGrid mode={mode} />
                        </div>
                      )}
                    </div>
                  ) : (
                    hasDetailGrid && <ModeDetailGrid mode={mode} />
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Results & conclusion */}
      <section className="border-b border-white/10 bg-[#0E1219] py-16 md:py-24">
        <div className="app-container max-w-6xl">
          {showCoordination && (
            <div className="mb-16 rounded-2xl border border-white/10 bg-[#111620] p-6 md:p-8">
              <SectionEyebrow>{study.coordinationHeading ?? 'Coordination'}</SectionEyebrow>
              <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-white md:text-4xl">
                {(study.coordinationHeading ?? 'LAND & SEA COORDINATION').toUpperCase()}
              </h2>
              <BulletList items={study.coordinationOutcomes} />
            </div>
          )}

          <div className="grid gap-12 lg:grid-cols-[1fr_min(380px,42%)] lg:items-start">
            <div>
              <SectionEyebrow>Results</SectionEyebrow>
              <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-5xl">
                {(study.outcomesHeading ?? 'KEY OUTCOMES').toUpperCase()}
              </h2>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {study.keyOutcomes.map((outcome, i) => (
                  <div
                    key={outcome}
                    className="flex gap-3 rounded-xl border border-white/10 bg-[#111620] p-4 transition-colors hover:border-[#F5B800]/30"
                  >
                    <span className="font-mono text-xs font-bold text-[#F5B800]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm leading-relaxed text-[#C5CEDF] md:text-[15px]">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {study.outcomesImage && (
              <ProjectImage image={study.outcomesImage} className="lg:sticky lg:top-28" />
            )}
          </div>

          <div className="mt-16 rounded-2xl border border-[#F5B800]/20 bg-gradient-to-br from-[#151C28] to-[#0E1219] p-6 md:p-10">
            <SectionEyebrow>Conclusion</SectionEyebrow>
            <div className="mt-6 space-y-5">
              {study.conclusion.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="max-w-4xl text-base leading-[1.85] text-[#C5CEDF] md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {study.conclusionImage && (
            <ProjectImage image={study.conclusionImage} wide className="mt-10" />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 0%, rgba(245,184,0,0.35), transparent 55%)',
          }}
          aria-hidden
        />
        <div className="app-container relative max-w-3xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F5B800]">
            Next Steps
          </p>
          <h2 className="mt-5 font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-6xl">
            PLAN YOUR NEXT MOVE
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#8A9BB8] md:text-lg">
            Speak with Clarusto Logistics about multimodal project cargo, heavy
            haulage, and complex international supply chain execution.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-[#F5B800] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#0A0D12] shadow-[0_12px_40px_rgba(245,184,0,0.25)] transition-all hover:bg-[#FFD040] hover:shadow-[0_16px_48px_rgba(245,184,0,0.35)]"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
