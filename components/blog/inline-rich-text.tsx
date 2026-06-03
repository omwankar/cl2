import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';

const MARKDOWN_LINK = /\[([^\]]+)\]\(([^)]+)\)/;
const SOURCE_WITH_URL =
  /Source:\s*(https?:\/\/[^\s<>"')\]]+)/i;
const BARE_URL = /https?:\/\/[^\s<>"')\]]+/gi;

const linkClassName =
  'font-medium text-amber-600 underline underline-offset-2 hover:text-amber-700 break-all';

function trimTrailingPunctuation(url: string): string {
  return url.replace(/[.,;:!?)]+$/, '');
}

function ExternalLink({ href, children }: { href: string; children: string }) {
  const safeHref = trimTrailingPunctuation(href);
  return (
    <a
      href={safeHref}
      className={linkClassName}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function InternalOrExternalLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={linkClassName}>
        {label}
      </Link>
    );
  }
  return <ExternalLink href={href}>{label}</ExternalLink>;
}

/**
 * Renders plain text with [label](/path) markdown links, Source: URLs, and bare http(s) URLs.
 */
export function InlineRichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  const pushText = (chunk: string) => {
    if (!chunk) return;
    nodes.push(<Fragment key={key++}>{chunk}</Fragment>);
  };

  while (cursor < text.length) {
    const rest = text.slice(cursor);
    const mdAt = rest.search(/\[/);
    const sourceAt = rest.search(/Source:\s*https?:\/\//i);
    const urlAt = rest.search(/https?:\/\//i);

    const candidates = [
      mdAt >= 0 ? { type: 'md' as const, index: mdAt } : null,
      sourceAt >= 0 ? { type: 'source' as const, index: sourceAt } : null,
      urlAt >= 0 ? { type: 'url' as const, index: urlAt } : null,
    ].filter(Boolean) as { type: 'md' | 'source' | 'url'; index: number }[];

    if (candidates.length === 0) {
      pushText(rest);
      break;
    }

    const next = candidates.reduce((a, b) => (a.index <= b.index ? a : b));

    if (next.index > 0) {
      pushText(rest.slice(0, next.index));
      cursor += next.index;
      continue;
    }

    const slice = text.slice(cursor);

    if (next.type === 'md') {
      const mdMatch = slice.match(MARKDOWN_LINK);
      if (mdMatch && mdMatch.index === 0) {
        nodes.push(
          <InternalOrExternalLink
            key={key++}
            href={mdMatch[2]}
            label={mdMatch[1]}
          />
        );
        cursor += mdMatch[0].length;
        continue;
      }
      pushText('[');
      cursor += 1;
      continue;
    }

    if (next.type === 'source') {
      const sourceMatch = slice.match(SOURCE_WITH_URL);
      if (sourceMatch && sourceMatch.index === 0) {
        pushText('Source: ');
        nodes.push(
          <ExternalLink key={key++} href={sourceMatch[1]}>
            {sourceMatch[1]}
          </ExternalLink>
        );
        cursor += sourceMatch[0].length;
        continue;
      }
    }

    const urlMatch = slice.match(BARE_URL);
    if (urlMatch && urlMatch.index === 0) {
      nodes.push(
        <ExternalLink key={key++} href={urlMatch[0]}>
          {urlMatch[0]}
        </ExternalLink>
      );
      cursor += urlMatch[0].length;
      continue;
    }

    pushText(slice[0]);
    cursor += 1;
  }

  return <>{nodes}</>;
}
