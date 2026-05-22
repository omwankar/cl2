export type SiteFaq = {
  question: string;
  answer: string;
};

/** Visible site-wide last updated date (ISO + display). Refresh monthly per GEO audit. */
export const SITE_LAST_UPDATED = '2026-05-22';
export const SITE_LAST_UPDATED_DISPLAY = '22 May 2026';

export const HOMEPAGE_FAQS: SiteFaq[] = [
  {
    question: 'What is Clarusto Logistics?',
    answer:
      'Clarusto Logistics is a UK-based freight forwarding and supply chain company, part of Clarusto Group, providing air freight, sea freight, customs brokerage, and end-to-end logistics across 5 continents since 1992.',
  },
  {
    question: 'How long does customs clearance take with Clarusto?',
    answer:
      'Standard UK import customs clearance typically completes within 24–48 hours when documentation is accurate. Complex or inspection-held shipments may take 3–5 business days.',
  },
  {
    question: 'What are typical international transit times?',
    answer:
      'Air freight: 1–5 days door-to-door on major lanes. Sea freight (FCL): 14–35 days depending on origin port. Last-mile UK delivery: 1–2 business days after customs release.',
  },
  {
    question: 'Which regions does Clarusto Logistics serve?',
    answer:
      'Clarusto operates globally with offices in the UK, Saudi Arabia, UAE, Germany, India, and China — covering Europe, Middle East, Asia-Pacific, and transatlantic trade lanes.',
  },
  {
    question: 'What is Clarusto Logistics on-time delivery rate?',
    answer:
      'Clarusto targets a 98% on-time delivery rate across managed supply chain programmes, with real-time milestone tracking from origin pickup to final delivery.',
  },
];

export const SERVICES_FAQS: SiteFaq[] = [
  {
    question: 'What freight services does Clarusto offer?',
    answer:
      'Air freight, sea freight, land transport, customs brokerage, customs clearance, warehousing, supply chain management, last-mile delivery, and project cargo handling.',
  },
  {
    question: 'How do I choose between air and sea freight?',
    answer:
      'Choose air for urgent or high-value shipments (1–5 days). Choose sea for cost-efficient bulk cargo (2–6 weeks). Clarusto can advise on FCL vs LCL based on volume and budget.',
  },
  {
    question: 'Does Clarusto handle customs documentation?',
    answer:
      'Yes. Clarusto prepares commercial invoices, packing lists, HS codes, and CDS declarations for UK imports and exports, reducing border delays and compliance risk.',
  },
];

export function buildFaqPageSchema(faqs: SiteFaq[], pageId: string) {
  return {
    '@type': 'FAQPage',
    '@id': pageId,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
