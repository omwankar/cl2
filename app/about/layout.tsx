import type { Metadata } from 'next';
import { SEO } from '@/lib/seo';

export const metadata: Metadata = SEO({
  title: 'About Clarusto Logistics | 30+ Years of Expertise',
  description:
    'Founded in 1992, Clarusto Logistics delivers trusted freight, warehousing, and supply chain solutions across global markets and industries.',
  url: '/about',
  image: '/clarusto-logo-dark.png',
});

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
