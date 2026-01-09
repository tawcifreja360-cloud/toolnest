import Link from "next/link";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  tag?: string;
}

export default function ToolCard({ title, description, href, tag }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <div>
        {tag ? (
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800 dark:text-slate-300">
            {tag}
          </span>
        ) : null}
        <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
      <span className="mt-6 text-sm font-medium text-slate-600 transition group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white">
        Open tool →
      </span>
    </Link>
  );
}
