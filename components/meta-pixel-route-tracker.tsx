'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackMetaEvent } from '@/lib/meta-pixel';

/**
 * Fires Meta Pixel PageView on client-side route changes (App Router SPA navigations).
 * Initial PageView still comes from the base pixel in layout.tsx.
 */
export function MetaPixelRouteTracker() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    trackMetaEvent('PageView');
  }, [pathname]);

  return null;
}
