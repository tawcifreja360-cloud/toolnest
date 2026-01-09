import Link from "next/link";

const tools = [
  { href: "/tools/word-counter", label: "Word Counter" },
  { href: "/tools/case-converter", label: "Case Converter" },
  { href: "/tools/remove-extra-spaces", label: "Remove Extra Spaces" },
  { href: "/tools/password-generator", label: "Password Generator" },
  { href: "/tools/password-strength", label: "Password Strength Checker" },
  { href: "/tools/base64", label: "Base64 Encoder / Decoder" },
  { href: "/tools/url-encoder-decoder", label: "URL Encoder / Decoder" },
  { href: "/tools/image-resizer", label: "Image Resizer" },
  { href: "/tools/image-compressor", label: "Image Compressor" },
  { href: "/tools/png-to-jpg", label: "PNG to JPG" },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <section className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">Toolnest</h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          A growing collection of quick, browser-based utilities for text and image
          tasks. Pick a tool below to get started.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <h2 className="text-xl font-semibold">Popular Tools</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
            >
              {tool.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
