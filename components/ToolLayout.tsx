import type { ReactNode } from "react";

import AdSlot from "./AdSlot";

interface ToolLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  sidebar?: ReactNode;
}

export default function ToolLayout({
  title,
  description,
  children,
  sidebar,
}: ToolLayoutProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-8">
          <header className="space-y-2">
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
              {title}
            </h1>
            {description ? (
              <p className="text-base text-slate-500 dark:text-slate-400">
                {description}
              </p>
            ) : null}
          </header>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            {children}
          </div>

          <AdSlot label="Sponsored" className="w-full" />
        </div>

        <aside className="hidden space-y-6 lg:block">
          {sidebar ?? (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
              Pin your favorite tools and tips here.
            </div>
          )}
          <AdSlot label="Sponsored" />
        </aside>
      </div>
    </section>
  );
}
