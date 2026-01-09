import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toolnest Terms of Service",
  description:
    "Read the terms that apply when you use Toolnest utilities and services.",
};

export default function TermsPage() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2.5rem", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>Terms of Service</h1>
      <p style={{ maxWidth: 760 }}>
        By using Toolnest, you agree to use our tools responsibly. The utilities are
        provided as-is, and we continually improve them to serve your needs.
      </p>
    </main>
  );
}
