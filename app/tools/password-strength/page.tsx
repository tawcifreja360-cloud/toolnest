import type { Metadata } from "next";
import PasswordStrengthClient from "./PasswordStrengthClient";

export const metadata: Metadata = {
  title: "Password Strength Checker - Toolnest",
  description:
    "Evaluate how strong a password is with clear scoring and improvement tips.",
};

export default function PasswordStrengthPage() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2.5rem", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>
        Password Strength Checker
      </h1>
      <p style={{ maxWidth: 720, marginBottom: "1.5rem" }}>
        Measure the strength of your password and get suggestions for making it more
        secure.
      </p>
      <PasswordStrengthClient />
    </main>
  );
}
