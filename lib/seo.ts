import type { Metadata } from 'next';
import { PRIMARY_CONTACT_EMAIL, UK_OFFICE_ADDRESS } from './constants';

export const siteConfig = {
  name: 'Clarusto Logistics',
  domain: 'https://clarustologistics.com',
  defaultTitle: 'Clarusto Logistics | UK Freight Forwarding',
  description:
    'UK freight forwarding, customs brokerage & supply chain from Scotland. 30+ years expertise. Call +44 330 094 6908.',
  ogImage: '/clarusto-logo-dark.png',
  defaultLocale: 'en-GB',
  phone: '+44-3300946908',
  email: PRIMARY_CONTACT_EMAIL,
  address: UK_OFFICE_ADDRESS,
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
  modifiedTime?: string;
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
  modifiedTime,
}: SeoInput): Metadata {
  const seoTitle = title
    ? title.includes(siteConfig.name)
      ? title
      : `${title} | ${siteConfig.name}`
    : siteConfig.defaultTitle;
  const seoDescription = description ?? siteConfig.description;
  const canonicalUrl = absoluteUrl(url);
  const imageUrl = image.startsWith('http') ? image : absoluteUrl(image);
  const alternates: Metadata['alternates'] = {
    canonical: canonicalUrl,
    languages: alternateLanguages ?? buildHreflangAlternates(url),
  };

  const isArticle = openGraphType === 'article';
  const openGraph: NonNullable<Metadata['openGraph']> = {
    title: seoTitle,
    description: seoDescription,
    url: canonicalUrl,
    siteName: siteConfig.name,
    type: isArticle ? 'article' : 'website',
    locale,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} logo`,
      },
    ],
    ...(modifiedTime ? { modifiedTime } : {}),
  };

  return {
    metadataBase: new URL(siteConfig.domain),
    title: seoTitle,
    description: seoDescription,
    keywords,
    alternates,
    openGraph,
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
  '/faq',
  '/supply-chain-management',
];
