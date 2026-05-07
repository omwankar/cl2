import type { Metadata } from 'next';
import { SEO } from '@/lib/seo';

export const metadata: Metadata = SEO({
  title: 'Logistics & Freight Services | Clarusto Global Solutions',
  description:
    'Explore Clarusto Logistics services: air, sea & land freight, warehousing, customs brokerage, and e-commerce delivery. Scalable solutions for global business.',
  url: '/services',
  image: '/clarusto-logo-dark.png',
});

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
