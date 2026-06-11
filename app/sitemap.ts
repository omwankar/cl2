import type { MetadataRoute } from 'next';
import { absoluteUrl, seoRoutes } from '@/lib/seo';
import { SITELINK_PAGES } from '@/lib/structured-data';
import { SERVICE_DETAIL_SLUGS } from '@/lib/service-detail-pages';
import { getAllProjectSlugs } from '@/lib/project-case-studies';
import { getAllIndustrySolutionSlugs } from '@/lib/industry-solutions';
import { getAllBlogs } from '@/lib/blogs.server';

/** Higher priority for pages you want in UK sitelinks. */
const HIGH_PRIORITY_PATHS = new Set([
  '/',
  '/about',
  '/services',
  '/contact',
  '/supply-chain-management',
  ...SITELINK_PAGES.map((p) => p.path),
]);

function getRoutePriority(route: string): number {
  if (route === '/') return 1;
  if (HIGH_PRIORITY_PATHS.has(route)) return 0.9;
  if (route.startsWith('/services/')) return 0.8;
  if (route === '/blog') return 0.7;
  if (route.startsWith('/blog/')) return 0.6;
  if (route.startsWith('/projects/')) return 0.65;
  return 0.5;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const serviceRoutes = SERVICE_DETAIL_SLUGS.map((slug) => `/services/${slug}`);
  const blogs = await getAllBlogs();
  const blogRoutes = blogs.map((post) => `/blog/${post.slug}`);
  const projectRoutes = getAllProjectSlugs().map((slug) => `/projects/${slug}`);
  const industryRoutes = getAllIndustrySolutionSlugs().map((slug) => `/${slug}`);

  const routes = Array.from(
    new Set([
      ...seoRoutes,
      ...serviceRoutes,
      ...blogRoutes,
      ...projectRoutes,
      ...industryRoutes,
    ])
  );

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency:
      route === '/' || route === '/blog' || route.startsWith('/blog/')
        ? 'weekly'
        : 'monthly',
    priority: getRoutePriority(route),
  }));
}
