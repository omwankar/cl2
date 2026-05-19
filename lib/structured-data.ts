import { absoluteUrl, siteConfig } from '@/lib/seo';
import { CLARUSTO_GROUP, UK_OFFICE_LAT, UK_OFFICE_LNG } from '@/lib/constants';

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

const LOGISTICS_SERVICE_ID = `${siteConfig.domain}/#logistics-service`;

export function buildSiteStructuredData() {
  const organizationId = `${siteConfig.domain}/#organization`;
  const websiteId = `${siteConfig.domain}/#website`;
  const parentOrganizationId = CLARUSTO_GROUP.organizationId;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': parentOrganizationId,
        name: CLARUSTO_GROUP.name,
        url: CLARUSTO_GROUP.url,
        subOrganization: [
          { '@id': organizationId },
          { '@id': 'https://www.clarusto.co.uk/#organization' },
        ],
      },
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
        alternateName: 'A Clarusto Group Company',
        url: siteConfig.domain,
        parentOrganization: { '@id': parentOrganizationId },
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/clarusto-logo-dark.png'),
          width: 512,
          height: 512,
        },
        image: absoluteUrl('/clarusto-logo-dark.png'),
        email: siteConfig.email,
        telephone: UK_PHONE,
        address: {
          '@type': 'PostalAddress',
          name: 'Clarusto Logistics UK',
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        },
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
        '@type': 'Service',
        '@id': LOGISTICS_SERVICE_ID,
        name: 'Logistics Services',
        alternateName: 'Clarusto Logistics Service',
        description:
          'Global freight forwarding, customs brokerage, sea freight, air freight, supply chain management, and last-mile delivery.',
        serviceType: 'Logistics and freight forwarding',
        provider: { '@id': organizationId },
        areaServed: [
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Place', name: 'Worldwide' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Clarusto Logistics Services',
          itemListElement: SITELINK_PAGES.map((page) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: page.name,
              url: absoluteUrl(page.path),
            },
          })),
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.domain}/#uk-office`,
        name: 'Clarusto Logistics UK',
        description:
          'Freight forwarding, customs brokerage, sea freight and supply chain management services in the United Kingdom.',
        url: siteConfig.domain,
        telephone: UK_PHONE,
        email: siteConfig.email,
        priceRange: '££',
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: UK_OFFICE_LAT,
          longitude: UK_OFFICE_LNG,
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
