import type { Metadata } from 'next';
import { SEO } from '@/lib/seo';

export const metadata: Metadata = SEO({
  title: 'Logistics Blog | Supply Chain Insights & Trends',
  description:
    'Read logistics insights, freight updates, warehousing strategies, and supply chain trends from Clarusto Logistics experts.',
  url: '/blog',
  image: '/clarusto-logo-dark.png',
  locale: 'en-GB',
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
