import { absoluteUrl, siteConfig } from '@/lib/seo';

/** Key pages Google may use for sitelinks — keep in sync with main nav. */
export const SITELINK_PAGES = [
  { name: 'Customs Brokerage', path: '/services/customs-brokerage' },
  { name: 'Last Mile Delivery', path: '/services/last-mile-delivery' },
  { name: 'About Us', path: '/about' },
  { name: 'Supply Chain Management', path: '/services/supply-chain' },
  { name: 'Services', path: '/services' },
  { name: 'Sea Freight', path: '/services/sea-freight' },
] as const;

const UK_PHONE = '+443300946908';
const UK_PHONE_DISPLAY = '+44 330 094 6908';

export function buildSiteStructuredData() {
  const organizationId = `${siteConfig.domain}/#organization`;
  const websiteId = `${siteConfig.domain}/#website`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteConfig.domain,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { '@id': organizationId },
        inLanguage: 'en-GB',
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${siteConfig.domain}/blog?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        ],
      },
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteConfig.name,
        url: siteConfig.domain,
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/clarusto-logo-dark.png'),
          width: 512,
          height: 512,
        },
        image: absoluteUrl('/clarusto-logo-dark.png'),
        email: siteConfig.email,
        telephone: UK_PHONE,
        address: [
          {
            '@type': 'PostalAddress',
            name: 'Clarusto Logistics UK — Inchinnan',
            streetAddress: 'India Of Inchinnan, Greenock Road, Inchinnan',
            addressLocality: 'Renfrew',
            addressRegion: 'Scotland',
            postalCode: 'PA4 9LH',
            addressCountry: 'GB',
          },
          {
            '@type': 'PostalAddress',
            name: 'Clarusto Logistics UK — Glasgow',
            streetAddress: 'Bridgeton',
            addressLocality: 'Glasgow',
            addressRegion: 'Scotland',
            postalCode: 'G40 2QW',
            addressCountry: 'GB',
          },
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: UK_PHONE,
            contactType: 'customer service',
            email: siteConfig.email,
            areaServed: { '@type': 'Country', name: 'United Kingdom' },
            availableLanguage: ['English'],
          },
          {
            '@type': 'ContactPoint',
            telephone: UK_PHONE,
            contactType: 'sales',
            areaServed: 'Worldwide',
            availableLanguage: ['English'],
          },
        ],
        sameAs: siteConfig.socialLinks,
      },
      {
        '@type': ['LocalBusiness', 'LogisticsService'],
        '@id': `${siteConfig.domain}/#uk-office`,
        name: 'Clarusto Logistics UK',
        url: siteConfig.domain,
        telephone: UK_PHONE,
        email: siteConfig.email,
        priceRange: '££',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'India Of Inchinnan, Greenock Road, Inchinnan',
          addressLocality: 'Renfrew',
          addressRegion: 'Scotland',
          postalCode: 'PA4 9LH',
          addressCountry: 'GB',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 55.8868,
          longitude: -4.448,
        },
        areaServed: {
          '@type': 'Country',
          name: 'United Kingdom',
        },
        parentOrganization: { '@id': organizationId },
        sameAs: siteConfig.socialLinks,
      },
      {
        '@type': 'ItemList',
        '@id': `${siteConfig.domain}/#main-navigation`,
        name: 'Primary site navigation',
        itemListElement: SITELINK_PAGES.map((page, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: page.name,
          url: absoluteUrl(page.path),
        })),
      },
      ...SITELINK_PAGES.map((page) => ({
        '@type': 'WebPage',
        '@id': absoluteUrl(page.path),
        url: absoluteUrl(page.path),
        name: page.name,
        isPartOf: { '@id': websiteId },
        about: { '@id': organizationId },
        inLanguage: 'en-GB',
      })),
    ],
  };
}

export { UK_PHONE, UK_PHONE_DISPLAY };
