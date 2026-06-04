import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { SEO } from '@/lib/seo';
import { UK_OFFICE_ADDRESS_LINE } from '@/lib/constants';

export const metadata = SEO({
  title: 'Clarusto Logistics Opens New China Office in Wuhan Hub',
  description:
    'Clarusto Logistics opens its new China office in Wuhan, Hubei, to strengthen freight, logistics, and supply chain support for global customers and partners.',
  url: '/clarusto-logistics-new-office-wuhan-china',
  image: '/clarusto-logistics-wuhan-china-reception.png',
  keywords: [
    'Clarusto Logistics Wuhan',
    'China logistics office',
    'freight forwarding Wuhan',
    'Hubei supply chain',
    'international logistics China',
  ],
  openGraphType: 'article',
  modifiedTime: '2026-05-27T09:00:00.000Z',
});

const WUHAN_ADDRESS =
  'Room 2210, No. 83 Yanjiang Avenue, Wuhan, Hubei Province, China, 430022';

const WUHAN_OFFICE_IMAGES = [
  {
    src: '/clarusto-logistics-wuhan-china-reception.png',
    alt: 'Clarusto Logistics reception and branding at Wuhan office',
    caption:
      'Reception area with Clarusto Logistics branding and local partner signage.',
  },
  {
    src: '/clarusto-logistics-wuhan-china-office-interior.png',
    alt: 'Clarusto Logistics Wuhan office workspace and meeting area',
    caption:
      'Office workspace and meeting area supporting regional coordination and client service.',
  },
] as const;

export default function WuhanOfficePressReleasePage() {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Clarusto Logistics Announces the Opening of Its New Office in Wuhan, China"
        subtitle="Press Release · 27 May 2026"
        description="Strengthening our presence in central China with dedicated freight, logistics, and customer support from Wuhan, Hubei Province."
        ctaText="View All Press Releases"
        ctaHref="/press-releases"
        backgroundImage="/clarusto-logistics-wuhan-china-reception.png"
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
            Wuhan, Hubei Province, China — 27 May 2026
          </p>

          <div className="prose prose-slate mt-8 max-w-none text-[#1A1A2E]/90 prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg">
            <p>
              Clarusto Logistics is pleased to announce the opening of its new office in
              Wuhan, China, strengthening the company&apos;s presence in one of the
              country&apos;s most important commercial and logistics hubs.
            </p>

            <div className="not-prose my-8 flex gap-3 rounded-xl border border-amber-200/80 bg-white p-5 shadow-sm">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-[#0F1923]">New office address</p>
                <p className="mt-1 text-sm text-slate-600">{WUHAN_ADDRESS}</p>
              </div>
            </div>

            <section
              className="not-prose my-10"
              aria-labelledby="wuhan-office-gallery-heading"
            >
              <h2
                id="wuhan-office-gallery-heading"
                className="text-lg font-bold text-[#0F1923] md:text-xl"
              >
                Our new Wuhan office
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {WUHAN_OFFICE_IMAGES.map((item, index) => (
                  <figure
                    key={item.src}
                    className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 432px"
                        priority={index === 0}
                      />
                    </div>
                    <figcaption className="px-4 py-3 text-sm text-slate-600">
                      {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <p>
              This expansion marks an important milestone for Clarusto Logistics as the
              company continues to grow its international network and enhance its
              logistics support for clients across China and global markets. The Wuhan
              office will help improve operational coordination, customer service,
              shipment handling, and regional business development.
            </p>

            <p>
              Wuhan is strategically positioned in central China and is widely recognized
              as a key transportation and trade center. By establishing a dedicated
              office in the city, Clarusto Logistics aims to provide faster
              communication, stronger local support, and more efficient logistics
              solutions for businesses operating in and around the region.
            </p>

            <blockquote className="not-prose my-8 border-l-4 border-amber-400 bg-white/80 py-4 pl-6 pr-4 italic text-slate-700">
              &ldquo;The opening of our Wuhan office reflects our commitment to expanding
              our service capabilities and building closer relationships with our clients
              and partners in China. This new location will allow us to serve customers
              more efficiently and support the growing demand for reliable logistics
              solutions.&rdquo;
              <footer className="mt-3 text-sm font-semibold not-italic text-slate-900">
                — Clarusto Logistics representative
              </footer>
            </blockquote>

            <p>
              Clarusto Logistics continues to focus on delivering professional, timely,
              and customer-focused logistics services. The company&apos;s expansion into
              Wuhan supports its broader goal of building a stronger international
              presence while maintaining high standards of service, reliability, and
              operational excellence.
            </p>

            <p>
              With the launch of the new China office, Clarusto Logistics looks forward
              to creating new business opportunities, improving regional connectivity,
              and offering enhanced logistics support to customers across industries.
            </p>
          </div>

          <section className="mt-12 rounded-2xl border border-[#24344A] bg-[#0F1923] p-6 text-white md:p-8">
            <h2 className="text-lg font-bold text-white">About Clarusto Logistics</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              Clarusto Logistics is a logistics and supply chain service provider
              committed to offering dependable transportation, freight, and logistics
              solutions. The company works with clients to support smooth cargo movement,
              efficient coordination, and reliable service across domestic and
              international markets.
            </p>
            <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-amber-300">
              Media Contact
            </h3>
            <p className="mt-2 text-sm text-white/85">
              Clarusto Logistics
              <br />
              UK Office: {UK_OFFICE_ADDRESS_LINE}
              <br />
              Email:{' '}
              <a
                href="mailto:ansu@clarusto.co.uk"
                className="font-medium text-amber-300 hover:text-amber-200"
              >
                ansu@clarusto.co.uk
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
