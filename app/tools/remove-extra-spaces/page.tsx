import type { Metadata } from "next";
import RemoveExtraSpacesClient from "./RemoveExtraSpacesClient";

export const metadata: Metadata = {
  title: "Remove Extra Spaces - Toolnest",
  description:
    "Clean up text by removing repeated spaces and trimming extra whitespace in one click.",
};

export default function RemoveExtraSpacesPage() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2.5rem", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>Remove Extra Spaces</h1>
      <p style={{ maxWidth: 720, marginBottom: "1.5rem" }}>
        Normalize spacing in your text so it is easier to read or copy into other tools.
      </p>
      <RemoveExtraSpacesClient />
    </main>
  );
}
