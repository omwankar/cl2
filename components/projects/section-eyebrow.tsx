export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#F5B800]">
      <span className="h-px w-8 bg-[#F5B800]/60" aria-hidden />
      {children}
    </p>
  );
}
