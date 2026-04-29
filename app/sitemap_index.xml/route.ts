import { NextResponse } from 'next/server';
import { absoluteUrl } from '@/lib/seo';
import { SERVICE_DETAIL_SLUGS } from '@/lib/service-detail-pages';
import { getAllBlogs } from '@/lib/blogs.server';

export async function GET() {
  const lastModified = new Date();
  const serviceRoutes = SERVICE_DETAIL_SLUGS.map((slug) => `/services/${slug}`);
  const blogs = await getAllBlogs();
  const blogRoutes = blogs.map((post) => `/blog/${post.slug}`);

  const routes = Array.from(new Set(['/', '/about', '/contact', '/services', '/projects', '/blog', ...serviceRoutes, ...blogRoutes]));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url>
    <loc>${absoluteUrl(route)}</loc>
    <lastmod>${lastModified.toISOString()}</lastmod>
    <changefreq>${route === '/' || route === '/blog' || route.startsWith('/blog/') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
