import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo';

export default function sitemapIndex(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl('/sitemap.xml'),
      lastModified: new Date(),
    },
  ];
}
