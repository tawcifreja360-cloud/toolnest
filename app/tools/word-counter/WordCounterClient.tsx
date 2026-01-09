"use client";

import { useMemo, useState } from "react";

export default function WordCounterClient() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    return {
      words,
      characters: text.length,
      charactersNoSpaces: text.replace(/\s/g, "").length,
      lines: text ? text.split(/\n/).length : 0,
    };
  }, [text]);

  return (
    <section style={{ display: "grid", gap: "1rem", maxWidth: 720 }}>
      <label style={{ fontWeight: 600 }} htmlFor="word-counter-input">
        Paste or type your text
      </label>
      <textarea
        id="word-counter-input"
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={10}
        style={{ width: "100%", padding: "0.75rem" }}
        placeholder="Start typing..."
      />
      <div style={{ display: "grid", gap: "0.5rem" }}>
        <strong>Word count: {stats.words}</strong>
        <span>Characters: {stats.characters}</span>
        <span>Characters (no spaces): {stats.charactersNoSpaces}</span>
        <span>Lines: {stats.lines}</span>
      </div>
    </section>
  );
}
