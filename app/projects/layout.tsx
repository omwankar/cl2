import type { Metadata } from 'next';
import { SEO } from '@/lib/seo';

export const metadata: Metadata = SEO({
  title: 'Logistics Projects | Cargo & Supply Chain Case Studies',
  description:
    'Explore logistics projects and case studies featuring freight transport, heavy cargo handling, and global delivery solutions.',
  url: '/projects',
  image: '/clarusto-logo-dark.png',
});

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
