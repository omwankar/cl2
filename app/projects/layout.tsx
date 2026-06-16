import type { Metadata } from 'next';
import { PAGE_SEO } from '@/lib/page-seo';
import { SEO } from '@/lib/seo';

export const metadata: Metadata = SEO({
  title: PAGE_SEO.projects.title,
  description: PAGE_SEO.projects.description,
  url: '/projects',
  image: '/clarusto-logo-dark.png',
  exactTitle: true,
});

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
