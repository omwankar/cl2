import type { MetadataRoute } from 'next';
import { AI_CRAWLER_USER_AGENTS } from '@/lib/ai-crawlers';
import { absoluteUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLER_USER_AGENTS.map((userAgent) => ({
        userAgent,
        allow: '/' as const,
      })),
    ],
    sitemap: absoluteUrl('/sitemap_index.xml'),
  };
}
