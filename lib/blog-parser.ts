export type ParsedBlogSection = {
  heading: string;
  content?: string[];
  list?: string[];
  contentAfterList?: string[];
  image?: string;
};

export type ParsedBlogFAQ = {
  question: string;
  answer: string;
};

export type BlogBlock =
  | { type: 'standfirst'; text: string }
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string; id: string }
  | { type: 'h3'; text: string; id: string }
  | { type: 'lead'; text: string }
  | {
      type: 'measure';
      label: string;
      items: string[];
      takeaway?: string;
    }
  | { type: 'ul'; items: string[] }
  | { type: 'takeaway'; text: string }
  | { type: 'pullquote'; text: string }
  | { type: 'toc'; items: Array<{ id: string; label: string }> };

export type ParsedBlog = {
  title: string;
  blocks: BlogBlock[];
  sections: ParsedBlogSection[];
  faqs: ParsedBlogFAQ[];
};

export function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/['\u2019"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function stripBulletPrefix(line: string): string {
  return line.replace(/^[-*•]\s+/, '').replace(/^\d+[\).\s-]+/, '').trim();
}

function isSeoNoiseLine(line: string): boolean {
  return /^(seo\s*(title|package|parameters)?|meta\s*(title|description)|url\s*slug|primary keyword|secondary keywords?|blog excerpt|copy excerpt|suggested\s|h1:|tags?:)/i.test(
    line.trim()
  );
}

function isMeasureLabel(line: string): boolean {
  return /^what to measure:?$/i.test(line.trim());
}

/** Numbered section titles like "1. Time to Recover (TTR)" — requires 1. or 1) */
function isNumberedSectionHeading(line: string): boolean {
  const text = line.trim();
  const match = text.match(/^\d+[.)]\s+(.+)$/);
  if (!match) return false;
  const title = match[1].trim();
  if (title.length < 8 || title.length > 90) return false;
  if (/[.!?]$/.test(title)) return false;
  if (!/^[A-Z]/.test(title)) return false;
  if (title.length < 18 && !/[()]/.test(title) && title.split(/\s+/).length < 4) {
    return false;
  }
  return true;
}

function isH2Heading(line: string): boolean {
  const text = line.trim();
  if (!text) return false;
  if (isMeasureLabel(text)) return false;
  if (/^[-*•]\s+/.test(text)) return false;
  if (/^\d+[.)]\s+\S/.test(text)) return false;
  if (/\[[^\]]+\]\([^)]+\)/.test(text)) return false;
  if (text.endsWith(':')) {
    // Short labels (e.g. "Key Trends:") become H2 — except measure labels
    return text.length <= 55 && !/,/.test(text);
  }
  if (text.length > 90) return false;
  if (/^(https?:\/\/|source:)/i.test(text)) return false;
  if (/[.!?]$/.test(text)) return false;
  if (/^[A-Za-z0-9&(),\-\/\s]+$/.test(text)) return true;
  return false;
}

function isListLikeLine(line: string): boolean {
  const text = line.trim();
  if (!text) return false;
  if (/^[-*•]\s+/.test(text)) return true;
  if (/^\d+[.)]\s+/.test(text)) return !isNumberedSectionHeading(text);
  return false;
}

function parseFaqs(lines: string[]): ParsedBlogFAQ[] {
  const faqs: ParsedBlogFAQ[] = [];
  let currentQuestion = '';
  let answerLines: string[] = [];

  const flush = () => {
    if (!currentQuestion) return;
    faqs.push({
      question: currentQuestion.trim(),
      answer: answerLines.join(' ').trim(),
    });
    currentQuestion = '';
    answerLines = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || isSeoNoiseLine(line)) continue;

    const questionMatch = line.match(/^\d+\.\s*(.+\?)$/);
    if (questionMatch) {
      flush();
      currentQuestion = questionMatch[1].trim();
      continue;
    }

    if (line.endsWith('?') && !isListLikeLine(line)) {
      flush();
      currentQuestion = line;
      continue;
    }

    answerLines.push(stripBulletPrefix(line));
  }

  flush();
  return faqs;
}

function flushList(blocks: BlogBlock[], items: string[]) {
  if (items.length === 0) return;
  blocks.push({ type: 'ul', items: [...items] });
  items.length = 0;
}

/**
 * Parse raw blog text into ordered semantic blocks.
 * Preserves source order: lead -> body -> measure label/list -> takeaway.
 */
export function parseRawBlogText(rawText: string): ParsedBlog {
  const lines = rawText.split(/\r?\n/).map((line) => line.trim());
  const nonEmpty = lines.filter(Boolean);
  const title = nonEmpty[0] ?? 'Untitled Blog';

  const faqStartIndex = lines.findIndex((line) => /^faqs?/i.test(line.trim()));
  const bodyLines =
    faqStartIndex >= 0 ? lines.slice(1, faqStartIndex) : lines.slice(1);
  const faqLines = faqStartIndex >= 0 ? lines.slice(faqStartIndex + 1) : [];

  const blocks: BlogBlock[] = [];
  const pendingList: string[] = [];
  let seenParagraph = false;
  let awaitingLeadForH3 = false;
  let inMeasure = false;
  let measureLabel = 'What to measure:';
  let measureItems: string[] = [];
  let lastH2Id: string | null = null;

  const finishMeasure = (takeaway?: string) => {
    if (!inMeasure) return;
    blocks.push({
      type: 'measure',
      label: measureLabel,
      items: [...measureItems],
      takeaway,
    });
    inMeasure = false;
    measureItems = [];
  };

  for (const line of bodyLines) {
    if (!line || isSeoNoiseLine(line)) continue;

    const imageMatch = line.match(/^\[image:\s*([^\]]+)\]$/i);
    if (imageMatch) continue;

    if (isMeasureLabel(line)) {
      flushList(blocks, pendingList);
      finishMeasure();
      inMeasure = true;
      measureLabel = line.endsWith(':') ? line : `${line}:`;
      measureItems = [];
      awaitingLeadForH3 = false;
      continue;
    }

    if (isNumberedSectionHeading(line)) {
      flushList(blocks, pendingList);
      finishMeasure();
      const id = generateSlugFromTitle(line);
      blocks.push({ type: 'h3', text: line, id });
      awaitingLeadForH3 = true;
      continue;
    }

    if (isH2Heading(line)) {
      flushList(blocks, pendingList);
      finishMeasure();
      const id = generateSlugFromTitle(line);
      blocks.push({ type: 'h2', text: line, id });
      lastH2Id = id;
      awaitingLeadForH3 = false;
      continue;
    }

    if (isListLikeLine(line)) {
      const item = stripBulletPrefix(line);
      if (inMeasure) {
        measureItems.push(item);
      } else {
        pendingList.push(item);
      }
      awaitingLeadForH3 = false;
      continue;
    }

    if (inMeasure) {
      finishMeasure(line);
      awaitingLeadForH3 = false;
      continue;
    }

    flushList(blocks, pendingList);

    if (awaitingLeadForH3 && line.endsWith('?')) {
      blocks.push({ type: 'lead', text: line });
      awaitingLeadForH3 = false;
      continue;
    }
    awaitingLeadForH3 = false;

    if (!seenParagraph) {
      blocks.push({ type: 'standfirst', text: line });
      seenParagraph = true;
      continue;
    }

    if (
      lastH2Id === 'the-real-measure-of-resilience-is-what-happens-next' &&
      /^A resilient supply chain is not one that never fails/i.test(line)
    ) {
      blocks.push({ type: 'pullquote', text: line });
      continue;
    }

    blocks.push({ type: 'p', text: line });
  }

  flushList(blocks, pendingList);
  finishMeasure();

  const tocItems = blocks
    .filter((b): b is Extract<BlogBlock, { type: 'h3' }> => b.type === 'h3')
    .map((b) => ({ id: b.id, label: b.text }));

  if (tocItems.length > 0) {
    const firstH2Index = blocks.findIndex((b) => b.type === 'h2');
    const firstH3Index = blocks.findIndex((b) => b.type === 'h3');
    const insertAt =
      firstH2Index >= 0
        ? firstH2Index + 1
        : firstH3Index >= 0
          ? firstH3Index
          : -1;
    if (insertAt >= 0) {
      blocks.splice(insertAt, 0, { type: 'toc', items: tocItems });
    }
  }

  const faqs = parseFaqs(faqLines);
  const sections = blocksToLegacySections(blocks);

  return {
    title,
    blocks,
    sections,
    faqs,
  };
}

function blocksToLegacySections(blocks: BlogBlock[]): ParsedBlogSection[] {
  const sections: ParsedBlogSection[] = [];
  let current: ParsedBlogSection | null = null;

  const pushCurrent = () => {
    if (!current) return;
    if (
      !current.content?.length &&
      !current.list?.length &&
      !current.contentAfterList?.length
    ) {
      if (current.heading && current.heading !== 'Overview') {
        sections.push(current);
      }
    } else {
      sections.push(current);
    }
    current = null;
  };

  for (const block of blocks) {
    if (block.type === 'toc') continue;

    if (block.type === 'h2' || block.type === 'h3') {
      pushCurrent();
      current = { heading: block.text, content: [] };
      continue;
    }

    if (!current) {
      current = { heading: 'Overview', content: [] };
    }

    if (block.type === 'measure') {
      current.list = [...(current.list ?? []), ...block.items];
      if (block.takeaway) {
        current.contentAfterList = [
          ...(current.contentAfterList ?? []),
          block.takeaway,
        ];
      }
      continue;
    }

    if (block.type === 'ul') {
      current.list = [...(current.list ?? []), ...block.items];
      continue;
    }

    if (
      block.type === 'p' ||
      block.type === 'standfirst' ||
      block.type === 'lead' ||
      block.type === 'takeaway' ||
      block.type === 'pullquote'
    ) {
      if (current.list?.length) {
        current.contentAfterList = [
          ...(current.contentAfterList ?? []),
          block.text,
        ];
      } else {
        current.content = [...(current.content ?? []), block.text];
      }
    }
  }

  pushCurrent();
  return sections;
}

export const SAMPLE_RAW_BLOG_INPUT = `Future of Last-Mile Logistics in 2026
Introduction:
Last-mile delivery is changing rapidly due to customer expectations and operating costs.
Companies now focus on route optimization and delivery visibility.

Key Trends:
- Real-time tracking for end customers
- Micro-fulfillment in urban areas
- AI-assisted route planning

Operational Challenges
Driver shortages and fuel price volatility continue to affect service levels.
Many operators are redesigning delivery windows to preserve reliability.

FAQs:
1. Why is last-mile delivery expensive?
It includes failed attempts, route inefficiencies, and labor intensity.
2. How can businesses reduce last-mile cost?
Use dynamic routing, delivery slot controls, and localized fulfillment nodes.`;

export const SAMPLE_PARSED_BLOG_JSON = parseRawBlogText(SAMPLE_RAW_BLOG_INPUT);
