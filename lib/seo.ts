import type { Metadata } from 'next';
import { PRIMARY_CONTACT_EMAIL } from './constants';

export const siteConfig = {
  name: 'Clarusto Logistics',
  domain: 'https://clarustologistics.com',
  defaultTitle:
    'Clarusto Logistics UK | Freight Forwarding, Customs & Supply Chain',
  description:
    'Clarusto Logistics UK — freight forwarding, customs brokerage, sea freight and supply chain management from Scotland. Global network, UK-based support.',
  ogImage: '/clarusto-logo-dark.png',
  defaultLocale: 'en-GB',
  phone: '+44-3300946908',
  email: PRIMARY_CONTACT_EMAIL,
  address: {
    streetAddress: 'India Of Inchinnan, Greenock Road, Inchinnan',
    addressLocality: 'Renfrew',
    addressRegion: 'Scotland',
    postalCode: 'PA4 9LH',
    addressCountry: 'GB',
  },
  socialLinks: [
    'https://www.linkedin.com/company/clarusto-logistics',
    'https://www.facebook.com/Clarustologistics',
    'https://www.instagram.com/clarustologistics',
    'https://x.com/ClarLogistics',
    'https://in.pinterest.com/clarustologistics/clarusto-logistics/',
  ],
};

type SeoInput = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
  keywords?: string[];
  openGraphType?: string;
  twitterCard?: string;
  locale?: string;
  alternateLanguages?: Record<string, string>;
};

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.domain).toString();
}

/**
 * hreflang for a single-locale site (en-GB).
 * Use the same canonical URL for en-GB and x-default.
 * Do not add en-IN (or other locales) unless you publish separate localized URLs.
 */
export function buildHreflangAlternates(path = '/') {
  const pageUrl = absoluteUrl(path);
  return {
    'en-GB': pageUrl,
    'x-default': pageUrl,
  } as const;
}

// Reusable SEO function requested by user prompt.
export function SEO({
  title,
  description,
  image = siteConfig.ogImage,
  url = '/',
  noIndex = false,
  keywords,
  openGraphType = 'website',
  twitterCard = 'summary_large_image',
  locale = siteConfig.defaultLocale,
  alternateLanguages,
}: SeoInput): Metadata {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle;
  const seoDescription = description ?? siteConfig.description;
  const canonicalUrl = absoluteUrl(url);
  const imageUrl = image.startsWith('http') ? image : absoluteUrl(image);
  const alternates: Metadata['alternates'] = {
    canonical: canonicalUrl,
    languages: alternateLanguages ?? buildHreflangAlternates(url),
  };

  return {
    metadataBase: new URL(siteConfig.domain),
    title: seoTitle,
    description: seoDescription,
    keywords,
    alternates,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: openGraphType as 'website' | 'article',
      locale,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} logo`,
        },
      ],
    },
    twitter: {
      card: twitterCard as 'summary_large_image' | 'summary',
      title: seoTitle,
      description: seoDescription,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

export const seoRoutes = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/projects',
  '/blog',
  '/supply-chain-management',
];
