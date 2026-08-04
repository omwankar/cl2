'use client';

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { trackMetaContact } from '@/lib/meta-pixel';

type MetaContactLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  /** Optional content_name for Events Manager detail */
  contactMethod?: 'phone' | 'email' | 'other';
};

/**
 * Anchor for tel:/mailto: links that fires Meta Pixel Contact on click.
 */
export function MetaContactLink({
  children,
  contactMethod = 'other',
  onClick,
  ...props
}: MetaContactLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackMetaContact({
      content_name: contactMethod,
      content_category: 'contact',
    });
    onClick?.(event);
  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
