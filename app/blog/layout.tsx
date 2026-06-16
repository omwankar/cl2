import type { Metadata } from 'next';
import { PAGE_SEO } from '@/lib/page-seo';
import { SEO } from '@/lib/seo';

export const metadata: Metadata = SEO({
  title: PAGE_SEO.blog.title,
  description: PAGE_SEO.blog.description,
  url: '/blog',
  image: '/clarusto-logo-dark.png',
  locale: 'en-GB',
  exactTitle: true,
  keywords: [
    'logistics blog',
    'freight shipping',
    'supply chain',
    'warehousing',
    'air cargo',
    'ocean freight',
    'customs',
    'last mile delivery',
  ],
});

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
