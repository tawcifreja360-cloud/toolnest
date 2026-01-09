"use client";

import { useMemo, useState } from "react";

const toTitleCase = (value: string) =>
  value
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const toCamelCase = (value: string) => {
  const words = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(" ");
  return words
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join("");
};

const toSnakeCase = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/_{2,}/g, "_")
    .replace(/^_|_$/g, "");

export default function CaseConverterClient() {
  const [text, setText] = useState("");

  const converted = useMemo(
    () => ({
      uppercase: text.toUpperCase(),
      lowercase: text.toLowerCase(),
      title: toTitleCase(text),
      camel: toCamelCase(text),
      snake: toSnakeCase(text),
    }),
    [text],
  );

  return (
    <section style={{ display: "grid", gap: "1rem", maxWidth: 720 }}>
      <label style={{ fontWeight: 600 }} htmlFor="case-converter-input">
        Text to convert
      </label>
      <textarea
        id="case-converter-input"
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={8}
        style={{ width: "100%", padding: "0.75rem" }}
        placeholder="Enter text..."
      />
      <div style={{ display: "grid", gap: "0.5rem" }}>
        <div>
          <strong>UPPERCASE</strong>
          <p>{converted.uppercase || "—"}</p>
        </div>
        <div>
          <strong>lowercase</strong>
          <p>{converted.lowercase || "—"}</p>
        </div>
        <div>
          <strong>Title Case</strong>
          <p>{converted.title || "—"}</p>
        </div>
        <div>
          <strong>camelCase</strong>
          <p>{converted.camel || "—"}</p>
        </div>
        <div>
          <strong>snake_case</strong>
          <p>{converted.snake || "—"}</p>
        </div>
      </div>
    </section>
  );
}
