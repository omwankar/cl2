'use client';

import type { SiteFaq } from '@/lib/site-faqs';
import { InlineRichText } from '@/components/blog/inline-rich-text';

type SiteFaqSectionProps = {
  faqs: SiteFaq[];
  title?: string;
};

export function SiteFaqSection({
  faqs,
  title = 'Frequently Asked Questions',
}: SiteFaqSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-secondary/10" aria-labelledby="site-faq-heading">
      <div className="app-container max-w-3xl">
        <h2 id="site-faq-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8 text-balance">
          {title}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-border bg-white p-4 open:bg-[#FFF7F2]"
            >
              <summary className="cursor-pointer list-none font-semibold text-[#0A1628]">
                {faq.question}
              </summary>
              <p className="mt-3 text-base text-foreground/90 leading-relaxed">
                <InlineRichText text={faq.answer} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
