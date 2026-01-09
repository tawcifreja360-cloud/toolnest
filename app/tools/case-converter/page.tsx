import type { Metadata } from "next";
import CaseConverterClient from "./CaseConverterClient";

export const metadata: Metadata = {
  title: "Case Converter - Toolnest",
  description:
    "Convert text into uppercase, lowercase, title case, camelCase, or snake_case instantly.",
};

export default function CaseConverterPage() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2.5rem", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>Case Converter</h1>
      <p style={{ maxWidth: 720, marginBottom: "1.5rem" }}>
        Quickly transform your text into common casing formats for emails, code, or
        documents.
      </p>
      <CaseConverterClient />
    </main>
  );
}
