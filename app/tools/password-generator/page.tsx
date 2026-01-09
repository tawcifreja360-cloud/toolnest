import type { Metadata } from "next";
import PasswordGeneratorClient from "./PasswordGeneratorClient";

export const metadata: Metadata = {
  title: "Password Generator - Toolnest",
  description:
    "Generate strong, random passwords with custom length and character options.",
};

export default function PasswordGeneratorPage() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2.5rem", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>Password Generator</h1>
      <p style={{ maxWidth: 720, marginBottom: "1.5rem" }}>
        Create secure passwords using random character sets and adjust the length to
        meet your requirements.
      </p>
      <PasswordGeneratorClient />
    </main>
  );
}
