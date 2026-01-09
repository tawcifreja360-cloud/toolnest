import type { Metadata } from "next";
import WordCounterClient from "./WordCounterClient";

export const metadata: Metadata = {
  title: "Word Counter - Toolnest",
  description:
    "Count words, characters, and lines instantly with the Toolnest word counter tool.",
};

export default function WordCounterPage() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2.5rem", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>Word Counter</h1>
      <p style={{ maxWidth: 720, marginBottom: "1.5rem" }}>
        Get instant feedback on word counts, characters, and line totals for your text.
      </p>
      <WordCounterClient />
    </main>
  );
}
