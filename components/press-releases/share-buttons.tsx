'use client';

import { Facebook, Link2, Linkedin } from 'lucide-react';
import type { PressRelease } from '@/lib/press-release-types';
import { getShareLinks } from '@/lib/press-release-share';

type ShareButtonsProps = {
  release: PressRelease;
};

export function ShareButtons({ release }: ShareButtonsProps) {
  const links = getShareLinks(release);

  const copyLink = async () => {
    if (!release.url) return;
    try {
      await navigator.clipboard.writeText(links.absoluteUrl);
    } catch {
      /* ignore */
    }
  };

  const iconClass =
    'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#0F1923] transition-colors hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800';

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Share this release">
      <a
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" aria-hidden />
      </a>
      <a
        href={links.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Share on X"
      >
        <span className="text-xs font-bold" aria-hidden>
          𝕏
        </span>
      </a>
      <a
        href={links.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Share on Facebook"
      >
        <Facebook className="h-4 w-4" aria-hidden />
      </a>
      {release.url && (
        <button
          type="button"
          onClick={() => void copyLink()}
          className={iconClass}
          aria-label="Copy link"
        >
          <Link2 className="h-4 w-4" aria-hidden />
        </button>
      )}
    </div>
  );
}
