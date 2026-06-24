import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { SEO } from '@/lib/seo';
import {
  PRIMARY_CONTACT_EMAIL,
  PRIMARY_CONTACT_EMAIL_HREF,
  UK_OFFICE_ADDRESS_LINE,
} from '@/lib/constants';

export const metadata = SEO({
  title: 'Clarusto Logistics Wins Global Startup of the Year 2026',
  description:
    'Clarusto Logistics wins Global Startup of the Year at the Scotland StartUp Awards 2026 in Edinburgh, recognising its growing international freight and logistics network.',
  url: '/clarusto-logistics-wins-global-startup-of-the-year-scotland-startup-awards-2026',
  image: '/clarusto-global-startup-award-2026-hero.jpg',
  keywords: [
    'Clarusto Logistics Global Startup of the Year',
    'Scotland StartUp Awards 2026',
    'Logistics Company Scotland',
    'Freight Forwarding UK',
    'Glasgow Logistics Company',
    'International Logistics',
  ],
  openGraphType: 'article',
  modifiedTime: '2026-06-23T09:00:00.000Z',
});

const SCOTLAND_STARTUP_AWARDS_URL =
  'https://startupawards.uk/regional-winners#region-Scotland';

const AWARD_LINK_CLASS =
  'font-semibold text-[#2563EB] underline decoration-[#2563EB] decoration-2 underline-offset-[3px] transition-colors hover:text-[#1D4ED8] hover:decoration-[#1D4ED8]';

const AWARD_IMAGE = {
  src: '/clarusto-global-startup-award-2026-hero.jpg',
  alt: 'Clarusto Logistics receiving the Global Startup of the Year award at the Scotland StartUp Awards 2026 in Edinburgh.',
  caption:
    'Clarusto Logistics was named Global Startup of the Year at the Scotland StartUp Awards 2026 in Edinburgh.',
} as const;

export default function GlobalStartupAwardPressReleasePage() {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Clarusto Logistics wins Global Startup of the Year at Scotland StartUp Awards 2026"
        subtitle="Press Release · 23 June 2026"
        description="A proud milestone for our Glasgow-based team as we grow international freight, road transport, customs coordination, and end-to-end logistics support."
        ctaText="View All Press Releases"
        ctaHref="/press-releases"
        backgroundImage={AWARD_IMAGE.src}
        variant="compact"
      />

      <article className="bg-[#F5F5F0] py-12 md:py-16">
        <div className="app-container max-w-4xl">
          <Link
            href="/press-releases"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0F1923] transition-colors hover:text-amber-700"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to Press Releases
          </Link>

          <p className="text-sm font-medium text-slate-600">
            Edinburgh, Scotland — 23 June 2026
          </p>

          <figure className="not-prose mt-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={AWARD_IMAGE.src}
                alt={AWARD_IMAGE.alt}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>
            <figcaption className="px-4 py-3 text-sm text-slate-600">
              {AWARD_IMAGE.caption}
            </figcaption>
          </figure>

          <div className="prose prose-slate mt-8 max-w-none text-[#1A1A2E]/90 prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg">
            <p>
              Clarusto Logistics has been named{' '}
              <a
                href={SCOTLAND_STARTUP_AWARDS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={AWARD_LINK_CLASS}
              >
                Global Startup of the Year
              </a>{' '}
              at the{' '}
              <a
                href={SCOTLAND_STARTUP_AWARDS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={AWARD_LINK_CLASS}
              >
                Scotland StartUp Awards 2026
              </a>
              , held in Edinburgh on Tuesday, 23 June.
            </p>

            <p>
              The award is a proud milestone for Clarusto Logistics, a Glasgow-based
              logistics company building its presence across international freight, road
              transport, customs coordination and end-to-end logistics support.
            </p>

            <p>
              Clarusto Logistics was selected from three finalists in the category. The
              recognition reflects the company&apos;s early growth and its work in helping
              businesses move goods across key markets, including the UK, Europe, the
              Middle East, China, India and North America.
            </p>

            <p className="font-semibold text-[#0F1923]">Ramiah John, CEO of Clarusto Logistics, said:</p>

            <blockquote className="not-prose my-6 border-l-4 border-amber-400 bg-white/80 py-4 pl-6 pr-4 italic text-slate-700">
              &ldquo;This is a proud moment for Clarusto Logistics and for everyone who has
              supported us on this journey. We are still a young company, but we have always
              been clear about what we want to build — a reliable logistics business from
              Scotland that can support customers across international markets. This award
              gives our team fresh encouragement to keep growing, improving and serving our
              customers well.&rdquo;
            </blockquote>

            <p>
              The win comes at an important stage in Clarusto Logistics&apos; journey. Earlier
              this year, the company opened its Wuhan office in China, strengthening its
              ability to support customers with international coordination, sourcing support
              and cross-border logistics.
            </p>

            <p>
              For Clarusto Logistics, the award is not only a celebration of progress so far,
              but also a reminder of the work still ahead.
            </p>

            <p className="font-semibold text-[#0F1923]">Ramiah added:</p>

            <blockquote className="not-prose my-6 border-l-4 border-amber-400 bg-white/80 py-4 pl-6 pr-4 italic text-slate-700">
              &ldquo;We are grateful to our team, customers and partners for the trust they
              have placed in us. Logistics is a practical business. Customers need clear
              communication, dependable service and people who will take responsibility for
              the movement of their goods. That is what we are focused on building every
              day.&rdquo;
            </blockquote>

            <p>
              Clarusto Logistics will continue to build its services across air freight, sea
              freight, road transport and customs-related logistics, with a focus on
              supporting businesses that need responsive and reliable freight solutions
              across domestic and international routes.
            </p>

            <p>
              This award marks a meaningful step forward for the company as it continues to
              grow from its base in Scotland and strengthen its role in global logistics.
            </p>
          </div>

          <section className="mt-12 rounded-2xl border border-[#24344A] bg-[#0F1923] p-6 text-white md:p-8">
            <h2 className="text-lg font-bold uppercase tracking-widest text-amber-300">
              Media Contact
            </h2>
            <p className="mt-4 text-sm text-white/85">
              Clarusto Logistics
              <br />
              UK Office: {UK_OFFICE_ADDRESS_LINE}
              <br />
              Email:{' '}
              <a
                href={PRIMARY_CONTACT_EMAIL_HREF}
                className="font-medium text-amber-300 hover:text-amber-200"
              >
                {PRIMARY_CONTACT_EMAIL}
              </a>
              <br />
              Website:{' '}
              <a
                href="https://www.clarustologistics.com"
                className="font-medium text-amber-300 hover:text-amber-200"
              >
                www.clarustologistics.com
              </a>
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </>
  );
}
