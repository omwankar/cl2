import type { Metadata } from 'next';
import { PAGE_SEO } from '@/lib/page-seo';
import { SEO } from '@/lib/seo';
import { SITE_LAST_UPDATED } from '@/lib/site-faqs';

export const metadata: Metadata = SEO({
  title: PAGE_SEO.services.title,
  description: PAGE_SEO.services.description,
  url: '/services',
  image: '/clarusto-logo-dark.png',
  modifiedTime: `${SITE_LAST_UPDATED}T00:00:00.000Z`,
  exactTitle: true,
});

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
