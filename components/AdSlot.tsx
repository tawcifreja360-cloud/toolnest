import type { ReactNode } from "react";

interface AdSlotProps {
  label?: string;
  children?: ReactNode;
  className?: string;
}

export default function AdSlot({
  label = "Advertisement",
  children,
  className = "",
}: AdSlotProps) {
  return (
    <aside
      aria-label={label}
      className={`rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-400 ${className}`}
    >
      <p className="font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
        {label}
      </p>
      <div className="mt-3 min-h-[90px]">{children ?? "Ad slot"}</div>
    </aside>
  );
}
