import { buildSiteStructuredData } from '@/lib/structured-data';

export function OrganizationJsonLd() {
  const schema = buildSiteStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
