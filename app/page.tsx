import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Toolnest - Simple Online Utilities",
  description:
    "Toolnest brings together lightweight utilities like word counts, converters, and image tools in one place.",
};

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
    <main style={{ fontFamily: "system-ui", padding: "2.5rem", lineHeight: 1.6 }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Toolnest</h1>
        <p style={{ maxWidth: 720 }}>
          Welcome to Toolnest — a growing collection of quick utilities for text and
          image tasks. Pick a tool below to get started.
        </p>
      </header>
      <section>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>Popular Tools</h2>
        <ul style={{ paddingLeft: "1.2rem" }}>
          {tools.map((tool) => (
            <li key={tool.href} style={{ marginBottom: "0.35rem" }}>
              <Link href={tool.href}>{tool.label}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
