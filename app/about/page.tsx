import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Toolnest",
  description:
    "Learn about Toolnest and our mission to provide fast, browser-based productivity tools.",
};

export default function AboutPage() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2.5rem", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>About Toolnest</h1>
      <p style={{ maxWidth: 760 }}>
        Toolnest is a collection of lightweight utilities designed to help you get
        quick answers for text and image tasks without leaving your browser. We focus
        on simplicity, speed, and privacy-first workflows.
      </p>
    </main>
  );
}
