import type { Metadata } from 'next';
import { SEO } from '@/lib/seo';
import { SITE_LAST_UPDATED } from '@/lib/site-faqs';

export const metadata: Metadata = SEO({
  title: 'Freight & Logistics Services',
  description:
    'Air freight, sea freight, customs brokerage, warehousing & supply chain services. Compare transit times and coverage. UK-based Clarusto Logistics.',
  url: '/services',
  image: '/clarusto-logo-dark.png',
  modifiedTime: `${SITE_LAST_UPDATED}T00:00:00.000Z`,
});

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
