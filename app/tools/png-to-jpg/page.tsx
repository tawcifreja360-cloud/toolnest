import type { Metadata } from "next";
import PngToJpgClient from "./PngToJpgClient";

export const metadata: Metadata = {
  title: "PNG to JPG - Toolnest",
  description:
    "Convert PNG images to JPG format directly in your browser with instant previews.",
};

export default function PngToJpgPage() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2.5rem", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>PNG to JPG</h1>
      <p style={{ maxWidth: 720, marginBottom: "1.5rem" }}>
        Turn PNG files into lightweight JPGs with white background filling for
        transparency.
      </p>
      <PngToJpgClient />
    </main>
  );
}
