import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toolnest Privacy Policy",
  description:
    "Review Toolnest's privacy approach and learn how we handle your data responsibly.",
};

export default function PrivacyPage() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2.5rem", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>Privacy Policy</h1>
      <p style={{ maxWidth: 760 }}>
        Toolnest tools run in your browser and do not upload your content. We keep
        analytics to a minimum and focus on giving you reliable utilities without
        collecting unnecessary personal data.
      </p>
    </main>
  );
}
