import type { ReactNode } from "react";

import "./globals.css";
import ThemeToggle from "../components/ThemeToggle";

export const metadata = {
  title: "Toolnest",
  description: "A nest of productivity tools.",
};

const themeInitScript = `
  (function () {
    try {
      var stored = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var shouldUseDark = stored ? stored === 'dark' : prefersDark;
      if (shouldUseDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      document.documentElement.classList.remove('dark');
    }
  })();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <head>
        {/* AdSense script placeholder */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" /> */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <div>
                <p className="text-lg font-semibold">Toolnest</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Curated tools for everyday tasks.
                </p>
              </div>
              <ThemeToggle />
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-950/80">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-sm text-slate-500 dark:text-slate-400">
              <span>© {new Date().getFullYear()} Toolnest</span>
              <span>Built for speed and focus.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
