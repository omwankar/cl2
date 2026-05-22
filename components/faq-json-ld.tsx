import type { SiteFaq } from '@/lib/site-faqs';
import { buildFaqPageSchema } from '@/lib/site-faqs';

type FaqJsonLdProps = {
  faqs: SiteFaq[];
  pageId: string;
};

export function FaqJsonLd({ faqs, pageId }: FaqJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    ...buildFaqPageSchema(faqs, pageId),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
