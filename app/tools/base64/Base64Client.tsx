"use client";

import { useState } from "react";

export default function Base64Client() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleEncode = () => {
    setError(null);
    setOutput(btoa(unescape(encodeURIComponent(input))));
  };

  const handleDecode = () => {
    try {
      const decoded = decodeURIComponent(escape(atob(input)));
      setOutput(decoded);
      setError(null);
    } catch (err) {
      setError("Unable to decode. Please check the Base64 input.");
    }
  };

  return (
    <section style={{ display: "grid", gap: "1rem", maxWidth: 720 }}>
      <label style={{ fontWeight: 600 }} htmlFor="base64-input">
        Base64 input
      </label>
      <textarea
        id="base64-input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        rows={6}
        style={{ width: "100%", padding: "0.75rem" }}
        placeholder="Enter text or Base64..."
      />
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <button type="button" onClick={handleEncode}>
          Encode to Base64
        </button>
        <button type="button" onClick={handleDecode}>
          Decode from Base64
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
