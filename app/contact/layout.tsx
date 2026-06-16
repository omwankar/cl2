import type { Metadata } from 'next';
import { PAGE_SEO } from '@/lib/page-seo';
import { SEO } from '@/lib/seo';

export const metadata: Metadata = SEO({
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  url: '/contact',
  image: '/clarusto-logo-dark.png',
  exactTitle: true,
});

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
