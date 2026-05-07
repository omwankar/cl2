import type { Metadata } from 'next';
import { SEO } from '@/lib/seo';

export const metadata: Metadata = SEO({
  title: 'Contact Clarusto Logistics | Freight & Logistics Support',
  description:
    'Contact Clarusto Logistics for freight forwarding, warehousing, transport solutions, quotes, and global logistics support.',
  url: '/contact',
  image: '/clarusto-logo-dark.png',
});

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
