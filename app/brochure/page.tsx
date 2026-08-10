import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Download, FileText, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEO } from '@/lib/seo';

export const metadata: Metadata = SEO({
  title: 'Clarusto Logistics Company Brochure | Global Freight Solutions',
  description:
    'Download the Clarusto Logistics company brochure — global freight forwarding, air, sea and land transport, customs clearance, and supply chain solutions.',
  url: '/brochure',
  image: '/clarusto-logistics-brochure-og.jpg',
  keywords: [
    'Clarusto Logistics brochure',
    'company brochure',
    'freight forwarding brochure',
    'logistics company profile',
    'Clarusto Logistics PDF',
  ],
  exactTitle: true,
});

export default function BrochurePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0A0D12] text-[#E8ECF4]">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0">
            <Image
              src="/clarusto-logistics-brochure-og.jpg"
              alt="Clarusto Logistics company brochure preview"
              fill
              priority
              className="object-cover opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D12] via-[#0A0D12]/90 to-[#0A0D12]/55" />
          </div>

          <div className="app-container relative z-10 max-w-4xl py-24 md:py-32">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F5B800]">
              Company Profile
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-bebas)] text-5xl tracking-wide text-white md:text-7xl">
              CLARUSTO LOGISTICS BROCHURE
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#AEB8CB] md:text-lg">
              Download our company brochure for an overview of Clarusto Logistics —
              global freight forwarding, multimodal transport, customs, and supply
              chain solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/clarusto-logistics-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-[#F5B800] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-[#0A0D12] transition-colors hover:bg-[#FFD040]"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download PDF
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-[#F5B800]/50 hover:text-[#F5B800]"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="app-container max-w-4xl">
            <div className="rounded-2xl border border-white/10 bg-[#111620] p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-xl border border-white/10 md:max-w-md">
                  <Image
                    src="/clarusto-logistics-brochure-og.jpg"
                    alt="Clarusto Logistics brochure cover — Global Logistics Solutions"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 448px"
                  />
                </div>
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 text-[#F5B800]">
                    <FileText className="h-5 w-5" aria-hidden />
                    <span className="font-mono text-xs uppercase tracking-[0.18em]">
                      PDF · 23 pages
                    </span>
                  </div>
                  <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-white md:text-4xl">
                    COMPANY BROCHURE
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#8A9BB8] md:text-base">
                    Use this page link on LinkedIn and other social channels so the
                    correct Clarusto preview image appears. The PDF opens directly
                    from the download button.
                  </p>
                  <a
                    href="/clarusto-logistics-brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F5B800] underline-offset-4 hover:underline"
                  >
                    Open clarusto-logistics-brochure.pdf
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
