import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Toolnest",
  description:
    "Get in touch with the Toolnest team for feedback, ideas, or support requests.",
};

export default function ContactPage() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2.5rem", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>Contact</h1>
      <p style={{ maxWidth: 760 }}>
        We love hearing from our users. Reach out with feedback or ideas for new tools
        and we will do our best to respond quickly.
      </p>
    </main>
  );
}
