import {
  CheckCircle2,
  ClipboardCheck,
  Container,
  PackageOpen,
  Plane,
  RefreshCcw,
  Ship,
  Truck,
  Warehouse,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ProjectScopeIcon, ProjectScopeItem } from '@/lib/project-case-studies';
import { Reveal } from '@/components/projects/reveal';
import { SectionEyebrow } from '@/components/projects/section-eyebrow';

const ICONS: Record<ProjectScopeIcon, LucideIcon> = {
  container: Container,
  unloading: PackageOpen,
  customs: ClipboardCheck,
  inspection: CheckCircle2,
  truck: Truck,
  return: RefreshCcw,
  warehouse: Warehouse,
  ship: Ship,
  plane: Plane,
  check: CheckCircle2,
};

export function ScopeGrid({ items }: { items: ProjectScopeItem[] }) {
  if (items.length === 0) return null;

  return (
    <section
      className="border-b border-white/10 bg-[#0A0F1C] py-16 md:py-20"
      aria-labelledby="scope-heading"
    >
      <div className="app-container">
        <Reveal>
          <SectionEyebrow>Delivery Scope</SectionEyebrow>
          <h2
            id="scope-heading"
            className="mt-4 font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-white md:text-4xl"
          >
            SCOPE OF WORK
          </h2>
        </Reveal>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = ICONS[item.icon ?? 'check'];
            return (
              <Reveal key={item.label} delay={index * 0.08} as="li">
                <div className="group flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-[#151C28] to-[#0F1629] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5B800]/40 hover:shadow-[0_12px_40px_rgba(245,184,0,0.12)]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#0A0F1C]/70 text-[#F5B800]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="pt-1.5 text-sm leading-relaxed text-[#CBD5E1]">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
