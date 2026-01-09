import type { Metadata } from "next";
import Base64Client from "./Base64Client";

export const metadata: Metadata = {
  title: "Base64 Encoder / Decoder - Toolnest",
  description:
    "Encode text to Base64 or decode Base64 strings back into readable text instantly.",
};

export default function Base64Page() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2.5rem", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>
        Base64 Encoder / Decoder
      </h1>
      <p style={{ maxWidth: 720, marginBottom: "1.5rem" }}>
        Convert text to Base64 for safe transport, or decode Base64 strings back to
        their original form.
      </p>
      <Base64Client />
    </main>
  );
}
