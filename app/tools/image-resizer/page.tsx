import type { Metadata } from "next";
import ImageResizerClient from "./ImageResizerClient";

export const metadata: Metadata = {
  title: "Image Resizer - Toolnest",
  description:
    "Resize images directly in your browser with adjustable width and height settings.",
};

export default function ImageResizerPage() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2.5rem", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>Image Resizer</h1>
      <p style={{ maxWidth: 720, marginBottom: "1.5rem" }}>
        Upload an image, adjust the dimensions, and download the resized version without
        leaving your browser.
      </p>
      <ImageResizerClient />
    </main>
  );
}
