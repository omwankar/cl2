import { absoluteUrl } from '@/lib/seo';
import type { PressRelease } from '@/lib/press-release-types';

/** Build a stable absolute URL for sharing (SSR + client must match). */
export function getAbsoluteShareUrl(
  url: string | undefined,
  fallbackPath = '/press-releases'
): string {
  if (!url) return absoluteUrl(fallbackPath);
  if (url.startsWith('http')) return url;
  return absoluteUrl(url);
}

export function getShareLinks(release: PressRelease) {
  const shareUrl = encodeURIComponent(getAbsoluteShareUrl(release.url));
  const text = encodeURIComponent(release.title);
  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${text}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    absoluteUrl: getAbsoluteShareUrl(release.url),
  };
}
