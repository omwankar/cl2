'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { ProjectStat } from '@/lib/project-case-studies';

function useCountUp(target: number | undefined, active: boolean, duration = 900) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (target == null) return;
    if (!active || reduce) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration, reduce]);

  return value;
}

function StatCell({
  stat,
  active,
}: {
  stat: ProjectStat;
  active: boolean;
}) {
  const counted = useCountUp(stat.countTo, active);
  const display =
    stat.countTo != null
      ? `${stat.prefix ?? ''}${counted}${stat.suffix ?? ''}`.trim() || stat.value
      : stat.value;

  return (
    <div className="min-w-0 px-4 py-3 text-center sm:px-6">
      <p className="font-[family-name:var(--font-bebas)] text-[clamp(1.6rem,3.2vw,2.4rem)] leading-none tracking-wide text-white">
        {display}
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#94A3B8]">
        {stat.label}
      </p>
    </div>
  );
}

export function StatsStrip({ stats }: { stats: ProjectStat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  if (stats.length === 0) return null;

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
    >
      <div
        className={`grid divide-y divide-white/10 sm:divide-x sm:divide-y-0 ${
          stats.length === 4
            ? 'sm:grid-cols-4'
            : stats.length === 3
              ? 'sm:grid-cols-3'
              : 'sm:grid-cols-2'
        }`}
      >
        {stats.map((stat) => (
          <StatCell key={`${stat.value}-${stat.label}`} stat={stat} active={active} />
        ))}
      </div>
    </div>
  );
}
