import type { Metadata } from "next";
import ImageCompressorClient from "./ImageCompressorClient";

export const metadata: Metadata = {
  title: "Image Compressor - Toolnest",
  description:
    "Compress images in your browser and download lighter JPEGs with adjustable quality.",
};

export default function ImageCompressorPage() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2.5rem", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>Image Compressor</h1>
      <p style={{ maxWidth: 720, marginBottom: "1.5rem" }}>
        Reduce image file sizes by adjusting compression quality and previewing the
        output before downloading.
      </p>
      <ImageCompressorClient />
    </main>
  );
}
