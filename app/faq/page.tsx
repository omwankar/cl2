import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  Globe2,
  Headphones,
  MessageSquareText,
  PackageCheck,
  Plane,
  Ship,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FaqJsonLd } from '@/components/faq-json-ld';
import { InlineRichText } from '@/components/blog/inline-rich-text';
import {
  FAQ_PAGE_FAQS,
  HOMEPAGE_FAQS,
  SERVICES_FAQS,
  SUPPORT_FAQS,
  SITE_LAST_UPDATED,
} from '@/lib/site-faqs';
import { SEO, absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = SEO({
  title: 'Freight & Logistics FAQ',
  description:
    'Answers to common Clarusto Logistics questions about freight forwarding, customs clearance, transit times, coverage, tracking, and urgent shipments.',
  url: '/faq',
  image: '/services-hero.jpg',
  modifiedTime: `${SITE_LAST_UPDATED}T00:00:00.000Z`,
  keywords: [
    'Clarusto Logistics FAQ',
    'freight forwarding questions',
    'UK customs clearance FAQ',
    'shipping transit times',
    'logistics support UK',
  ],
});

const faqGroups = [
  {
    id: 'company',
    title: 'Company & Coverage',
    eyebrow: 'Start here',
    description: 'Who Clarusto is, where we operate, and how our logistics model works.',
    Icon: Globe2,
    faqs: HOMEPAGE_FAQS,
  },
  {
    id: 'services',
    title: 'Services & Modes',
    eyebrow: 'Freight options',
    description: 'Air, sea, road, customs, warehousing, and supply chain service questions.',
    Icon: PackageCheck,
    faqs: SERVICES_FAQS,
  },
  {
    id: 'support',
    title: 'Quotes & Support',
    eyebrow: 'Next steps',
    description: 'What to send, how urgent jobs are handled, and how updates are shared.',
    Icon: Headphones,
    faqs: SUPPORT_FAQS,
  },
];

const highlights = [
  { label: 'UK customs clearance', value: '24-48 hrs', Icon: FileText },
  { label: 'Major air lanes', value: '1-5 days', Icon: Plane },
  { label: 'Ocean freight lanes', value: '14-35 days', Icon: Ship },
  { label: 'Delivery target', value: '98%', Icon: Clock },
];

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd faqs={FAQ_PAGE_FAQS} pageId={absoluteUrl('/faq#faq')} />
      <Navbar />

      <HeroSection
        title="Freight & Logistics FAQs"
        subtitle="Clarusto Help Desk"
        description="Clear answers for freight forwarding, customs clearance, transit times, shipment visibility, and logistics support."
        ctaText="Ask for a Quote"
        ctaHref="/contact"
        backgroundImage="/services-hero.jpg"
        variant="compact"
      />

      <section className="bg-[#0F1923] py-8 text-white">
        <div className="app-container grid grid-cols-2 gap-3 md:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.Icon;
            return (
              <div
                key={item.label}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
              >
                <Icon className="mb-3 h-5 w-5 text-amber-400" />
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <div className="mt-1 text-xs leading-5 text-white/65">{item.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#F8F6F1] py-14 md:py-20" id="faq">
        <div className="app-container">
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
              <MessageSquareText className="h-4 w-4" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F1923] md:text-5xl">
              Practical answers for moving cargo with confidence.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Browse the most common questions clients ask before booking freight,
              customs clearance, and managed supply chain support with Clarusto.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <nav
                aria-label="FAQ categories"
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Categories
                </div>
                <div className="space-y-2">
                  {faqGroups.map((group) => {
                    const Icon = group.Icon;
                    return (
                      <Link
                        key={group.id}
                        href={`#${group.id}`}
                        className="flex min-h-11 items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold text-[#0F1923] transition-colors hover:bg-amber-50 hover:text-amber-700"
                      >
                        <Icon className="h-4 w-4 text-amber-500" />
                        {group.title}
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </aside>

            <div className="space-y-10">
              {faqGroups.map((group) => {
                const Icon = group.Icon;
                return (
                  <section key={group.id} id={group.id} className="scroll-mt-24">
                    <div className="mb-5 flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0F1923] text-amber-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">
                          {group.eyebrow}
                        </div>
                        <h3 className="mt-1 text-2xl font-bold text-[#0F1923]">
                          {group.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {group.faqs.map((faq) => (
                        <details
                          key={faq.question}
                          className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all open:border-amber-300 open:bg-white"
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-[#0F1923]">
                            <span>{faq.question}</span>
                            <ChevronDown className="h-5 w-5 shrink-0 text-amber-500 transition-transform group-open:rotate-180" />
                          </summary>
                          <div className="mt-4 border-t border-slate-100 pt-4 text-[15px] leading-7 text-slate-600">
                            <InlineRichText text={faq.answer} />
                          </div>
                        </details>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B111B] py-14 text-white md:py-18">
        <div className="app-container grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-amber-400">
              <CheckCircle2 className="h-5 w-5" />
              Ready when the details are.
            </div>
            <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
              Need an answer for a live shipment or upcoming quote?
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Send the route, cargo details, deadline, and paperwork you have. The
              Clarusto team can guide the right freight mode and clearance path.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber-400 px-6 font-bold text-[#0F1923] transition-colors hover:bg-amber-500"
          >
            Contact Clarusto
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
