"use client";

import { useState } from "react";

export default function UrlEncoderDecoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleEncode = () => {
    setError(null);
    setOutput(encodeURIComponent(input));
  };

  const handleDecode = () => {
    try {
      setOutput(decodeURIComponent(input));
      setError(null);
    } catch (err) {
      setError("Unable to decode. Please check the URL-encoded input.");
    }
  };

  return (
    <section style={{ display: "grid", gap: "1rem", maxWidth: 720 }}>
      <label style={{ fontWeight: 600 }} htmlFor="url-encoder-input">
        URL input
      </label>
      <textarea
        id="url-encoder-input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        rows={6}
        style={{ width: "100%", padding: "0.75rem" }}
        placeholder="Enter text or URL-encoded string..."
      />
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <button type="button" onClick={handleEncode}>
          Encode URL
        </button>
        <button type="button" onClick={handleDecode}>
          Decode URL
        </button>
      </div>
      {error ? <p style={{ color: "crimson" }}>{error}</p> : null}
      <div>
        <strong>Output</strong>
        <pre style={{ whiteSpace: "pre-wrap", marginTop: "0.5rem" }}>
          {output || "—"}
        </pre>
      </div>
    </section>
  );
}
