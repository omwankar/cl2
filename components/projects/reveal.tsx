'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'li' | 'article' | 'section';
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const motionProps = {
    className,
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 as const },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (as === 'li') return <motion.li {...motionProps}>{children}</motion.li>;
  if (as === 'article')
    return <motion.article {...motionProps}>{children}</motion.article>;
  if (as === 'section')
    return <motion.section {...motionProps}>{children}</motion.section>;
  return <motion.div {...motionProps}>{children}</motion.div>;
}
