import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import type { IndustrySolutionPage } from '@/lib/industry-solutions';

function SectionImage({
  image,
  className = '',
}: {
  image: { src: string; alt: string };
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border border-white/10 ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1024px"
      />
    </div>
  );
}

function CaseStudyView({ page }: { page: IndustrySolutionPage }) {
  return (
    <div className="bg-[#0a0a0a] text-[#f0f0f0]">
      <section className="relative min-h-[85vh] w-full">
        <div className="absolute inset-0">
          <Image
            src={page.heroImage}
            alt={`${page.title} — hero`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/75 via-[#0a0a0a]/82 to-[#0a0a0a]" />
        </div>

        <div className="app-container relative z-10 flex min-h-[85vh] max-w-5xl flex-col justify-center pb-20 pt-24 md:pb-24 md:pt-28">
          <div
            className="mb-6 h-1 w-24 max-w-[min(6rem,30vw)] rounded-full bg-gradient-to-r from-[#f5a623] via-[#f5a623]/60 to-transparent"
            aria-hidden
          />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f5a623]">
            Case Study
          </p>
          <h1 className="mt-4 max-w-4xl text-[clamp(2rem,7vw,4.25rem)] font-bold uppercase leading-[0.98] tracking-wide text-[#f0f0f0]">
            {page.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[#d8d4cc] md:text-xl">
            {page.subheading}
          </p>
          <p className="mt-3 max-w-xl text-base text-[#a0a0a0]">{page.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {page.location && (
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[#d8d4cc]">
                {page.location}
              </span>
            )}
            {page.client && (
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[#d8d4cc]">
                Client: {page.client}
              </span>
            )}
            {page.result && (
              <span className="rounded-full border border-[#f5a623]/30 bg-[#f5a623]/10 px-4 py-2 text-sm text-[#f5a623]">
                {page.result}
              </span>
            )}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#f5a623] px-6 py-3 text-base font-semibold tracking-wide text-[#0a0a0a] transition-opacity hover:opacity-90 md:px-8"
            >
              Get a Quote
            </Link>
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/25 px-6 py-3 text-base font-semibold tracking-wide text-[#f0f0f0] transition-colors hover:border-[#f5a623] hover:text-[#f5a623] md:px-8"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="app-container max-w-5xl">
          <h2 className="text-2xl font-bold text-white md:text-4xl">
            {page.introHeading}
          </h2>
          <div className="mt-8 space-y-6">
            {page.introParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="leading-[1.85] text-[#f0f0f0]/90 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {page.caseStudySections?.map((section) => (
        <section
          key={section.title}
          className="border-t border-white/10 bg-[#0c0c0c] py-16 even:bg-[#0a0a0a] md:py-24"
        >
          <div className="app-container max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f5a623]">
              Case Study
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white md:text-4xl">
              {section.title}
            </h2>
            <div className="mt-8 space-y-5">
              {section.content.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="leading-[1.85] text-[#f0f0f0]/90 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {section.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-md border border-white/10 bg-[#111111] px-4 py-3 text-sm text-[#d8d4cc]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#f5a623]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.image && (
              <SectionImage
                image={section.image}
                className="mt-12 aspect-[21/9] md:aspect-[2.6/1]"
              />
            )}
          </div>
        </section>
      ))}

      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="app-container max-w-4xl text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-white md:text-5xl">
            {page.ctaHeading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#a0a0a0] md:text-lg">
            {page.ctaBody}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-[#f5a623] px-8 py-4 text-base font-bold tracking-wide text-[#0a0a0a] transition-opacity hover:opacity-90"
          >
            Get a Quote
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceView({ page }: { page: IndustrySolutionPage }) {
  const secondaryCta =
    page.secondaryCtaLabel ?? 'Contact Our Logistics Specialists';
  const servicesHeading =
    page.serviceBlocksHeading ?? 'End-to-End Logistics Services';

  return (
    <div className="bg-[#0a0a0a] text-[#f0f0f0]">
      <section className="relative min-h-[85vh] w-full">
        <div className="absolute inset-0">
          <Image
            src={page.heroImage}
            alt={`${page.title} — hero`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/75 via-[#0a0a0a]/82 to-[#0a0a0a]" />
        </div>

        <div className="app-container relative z-10 flex min-h-[85vh] max-w-5xl flex-col justify-center pb-20 pt-24 md:pb-24 md:pt-28">
          <div
            className="mb-6 h-1 w-24 max-w-[min(6rem,30vw)] rounded-full bg-gradient-to-r from-[#f5a623] via-[#f5a623]/60 to-transparent"
            aria-hidden
          />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f5a623]">
            Industry Solutions
          </p>
          <h1 className="mt-4 max-w-4xl text-[clamp(2rem,7vw,4.25rem)] font-bold uppercase leading-[0.98] tracking-wide text-[#f0f0f0]">
            {page.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[#d8d4cc] md:text-xl">
            {page.subheading}
          </p>
          <p className="mt-3 max-w-xl text-base text-[#a0a0a0]">{page.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#f5a623] px-6 py-3 text-base font-semibold tracking-wide text-[#0a0a0a] transition-opacity hover:opacity-90 md:px-8"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/25 px-6 py-3 text-base font-semibold tracking-wide text-[#f0f0f0] transition-colors hover:border-[#f5a623] hover:text-[#f5a623] md:px-8"
            >
              {secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="app-container max-w-5xl">
          <h2 className="text-2xl font-bold text-white md:text-4xl">
            {page.introHeading}
          </h2>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              {page.introParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="leading-[1.85] text-[#f0f0f0]/90 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
              {page.expertiseNote && (
                <p className="leading-[1.85] text-[#a0a0a0]">{page.expertiseNote}</p>
              )}
            </div>
            {page.expertiseList && page.expertiseList.length > 0 && (
              <div className="rounded-lg border border-white/10 bg-[#111111] p-6 md:p-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#f5a623]">
                  Our expertise covers
                </h3>
                <ul className="mt-5 space-y-3">
                  {page.expertiseList.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] text-[#d8d4cc]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#f5a623]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {page.introImage && (
            <SectionImage
              image={page.introImage}
              className="mt-12 aspect-[21/9] md:aspect-[2.6/1]"
            />
          )}
        </div>
      </section>

      {page.serviceBlocks && page.serviceBlocks.length > 0 && (
        <section className="border-t border-white/10 bg-[#0c0c0c] py-16 md:py-24">
          <div className="app-container max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f5a623]">
              What We Deliver
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white md:text-4xl">
              {servicesHeading}
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {page.serviceBlocks.map((block) => (
                <article
                  key={block.title}
                  className="group overflow-hidden rounded-lg border border-white/10 bg-[#111111] transition-colors hover:border-[#f5a623]/40"
                >
                  {block.image && (
                    <div className="relative aspect-[16/8] w-full overflow-hidden">
                      <Image
                        src={block.image.src}
                        alt={block.image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#f5a623]/10 text-[#f5a623]">
                      <block.Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">{block.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#a0a0a0]">
                      {block.intro}
                    </p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-[#d8d4cc]">
                          <span className="text-[#f5a623]" aria-hidden>
                            ›
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.freightHeading && page.freightModes && page.freightModes.length > 0 && (
        <section className="border-t border-white/10 py-16 md:py-24">
          <div className="app-container max-w-6xl">
            <h2 className="text-2xl font-bold text-white md:text-4xl">
              {page.freightHeading}
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {page.freightModes.map((mode) => (
                <div
                  key={mode.title}
                  className="rounded-lg border border-white/10 bg-[#111111] p-6"
                >
                  <mode.Icon className="h-7 w-7 text-[#f5a623]" aria-hidden />
                  <h3 className="mt-4 text-lg font-bold text-white">{mode.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#a0a0a0]">
                    {mode.body}
                  </p>
                </div>
              ))}
            </div>

            {page.freightImage && (
              <SectionImage
                image={page.freightImage}
                className="mt-12 aspect-[21/9] md:aspect-[2.6/1]"
              />
            )}
          </div>
        </section>
      )}

      {page.customsHeading && page.customsItems && page.customsItems.length > 0 && (
        <section className="border-t border-white/10 bg-[#0c0c0c] py-16 md:py-24">
          <div className="app-container max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <h2 className="text-2xl font-bold text-white md:text-4xl">
                  {page.customsHeading}
                </h2>
                {page.customsIntro && (
                  <p className="mt-5 leading-[1.85] text-[#f0f0f0]/90 md:text-lg">
                    {page.customsIntro}
                  </p>
                )}
                {page.customsNote && (
                  <p className="mt-5 text-[#a0a0a0]">{page.customsNote}</p>
                )}
              </div>
              <div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {page.customsItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-md border border-white/10 bg-[#111111] px-4 py-3 text-sm text-[#d8d4cc]"
                    >
                      <Check className="h-4 w-4 shrink-0 text-[#f5a623]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                {page.customsImage && (
                  <SectionImage
                    image={page.customsImage}
                    className="mt-6 aspect-[16/8]"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {page.whyHeading && page.whyCards && page.whyCards.length > 0 && (
        <section className="border-t border-white/10 py-16 md:py-24">
          <div className="app-container max-w-6xl">
            <h2 className="text-2xl font-bold text-white md:text-4xl">
              {page.whyHeading}
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {page.whyCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-lg border border-white/10 bg-[#111111] p-6 transition-colors hover:border-[#f5a623]/40"
                >
                  <card.Icon className="h-6 w-6 text-[#f5a623]" aria-hidden />
                  <h3 className="mt-4 text-lg font-bold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#a0a0a0]">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>

            {page.whyImage && (
              <SectionImage
                image={page.whyImage}
                className="mt-12 aspect-[21/9] md:aspect-[2.6/1]"
              />
            )}
          </div>
        </section>
      )}

      {page.industriesHeading && page.industriesSupported && (
        <section className="border-t border-white/10 bg-[#0c0c0c] py-16 md:py-24">
          <div className="app-container max-w-5xl">
            <h2 className="text-2xl font-bold text-white md:text-4xl">
              {page.industriesHeading}
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {page.industriesSupported.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[#d8d4cc]"
                >
                  {industry}
                </span>
              ))}
            </div>

            {page.industriesImage && (
              <SectionImage
                image={page.industriesImage}
                className="mt-12 aspect-[21/9] md:aspect-[2.6/1]"
              />
            )}

            {page.closingHeading && (
              <h2 className="mt-16 text-2xl font-bold text-white md:text-3xl">
                {page.closingHeading}
              </h2>
            )}
            {page.closingParagraphs && (
              <div className="mt-6 space-y-5">
                {page.closingParagraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="leading-[1.85] text-[#f0f0f0]/90 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="app-container max-w-4xl text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-white md:text-5xl">
            {page.ctaHeading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#a0a0a0] md:text-lg">
            {page.ctaBody}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-[#f5a623] px-8 py-4 text-base font-bold tracking-wide text-[#0a0a0a] transition-opacity hover:opacity-90"
          >
            Get a Quote
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}

export function IndustrySolutionView({ page }: { page: IndustrySolutionPage }) {
  if (page.pageKind === 'case-study') {
    return <CaseStudyView page={page} />;
  }
  return <ServiceView page={page} />;
}
