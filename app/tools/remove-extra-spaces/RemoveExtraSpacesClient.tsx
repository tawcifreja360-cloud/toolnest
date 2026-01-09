"use client";

import { useState } from "react";

const normalizeSpaces = (value: string) =>
  value
    .replace(/\s+/g, " ")
    .replace(/\s*\n\s*/g, "\n")
    .trim();

export default function RemoveExtraSpacesClient() {
  const [text, setText] = useState("");
  const [cleaned, setCleaned] = useState("");

  const handleClean = () => {
    setCleaned(text ? normalizeSpaces(text) : "");
  };

  return (
    <section style={{ display: "grid", gap: "1rem", maxWidth: 720 }}>
      <label style={{ fontWeight: 600 }} htmlFor="remove-spaces-input">
        Input text
      </label>
      <textarea
        id="remove-spaces-input"
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={8}
        style={{ width: "100%", padding: "0.75rem" }}
        placeholder="Paste text with extra spaces..."
      />
      <button type="button" onClick={handleClean} style={{ width: "fit-content" }}>
        Remove extra spaces
      </button>
      <div>
        <strong>Cleaned output</strong>
        <pre style={{ whiteSpace: "pre-wrap", marginTop: "0.5rem" }}>
          {cleaned || "—"}
        </pre>
      </div>
    </section>
  );
}
