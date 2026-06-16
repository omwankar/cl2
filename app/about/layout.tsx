import type { Metadata } from 'next';
import { PAGE_SEO } from '@/lib/page-seo';
import { SEO } from '@/lib/seo';

export const metadata: Metadata = SEO({
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
  url: '/about',
  image: '/clarusto-logo-dark.png',
  exactTitle: true,
});

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
