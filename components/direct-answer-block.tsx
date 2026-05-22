'use client';

import { SITE_LAST_UPDATED_DISPLAY } from '@/lib/site-faqs';

const KEY_STATS = [
  { label: 'Years in logistics', value: '30+' },
  { label: 'On-time delivery target', value: '98%' },
  { label: 'Global office locations', value: '7' },
  { label: 'UK customs clearance', value: '24–48 hrs' },
];

type DirectAnswerBlockProps = {
  /** Short direct answer for AI citation (first 150 words zone). */
  answer: string;
  className?: string;
};

export function DirectAnswerBlock({ answer, className = '' }: DirectAnswerBlockProps) {
  return (
    <section
      className={`direct-answer border border-amber-500/30 bg-amber-500/5 rounded-xl p-6 md:p-8 ${className}`}
      aria-label="Summary"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
        TL;DR · Last updated {SITE_LAST_UPDATED_DISPLAY}
      </p>
      <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{answer}</p>
      <dl className="key-facts mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {KEY_STATS.map((stat) => (
          <div key={stat.label} className="rounded-lg bg-background/80 px-3 py-2 ring-1 ring-border">
            <dt className="text-xs text-muted-foreground">{stat.label}</dt>
            <dd className="text-lg font-bold text-foreground">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
