import type { Metadata } from "next";
import UrlEncoderDecoderClient from "./UrlEncoderDecoderClient";

export const metadata: Metadata = {
  title: "URL Encoder / Decoder - Toolnest",
  description:
    "Encode URLs safely for sharing or decode URL-encoded text back into readable form.",
};

export default function UrlEncoderDecoderPage() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2.5rem", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>
        URL Encoder / Decoder
      </h1>
      <p style={{ maxWidth: 720, marginBottom: "1.5rem" }}>
        Convert text into URL-safe strings or decode URL-encoded values in seconds.
      </p>
      <UrlEncoderDecoderClient />
    </main>
  );
}
