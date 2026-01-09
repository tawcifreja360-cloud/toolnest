"use client";

import { useMemo, useState } from "react";

const scorePassword = (value: string) => {
  let score = 0;
  if (value.length >= 8) score += 1;
  if (value.length >= 12) score += 1;
  if (/[A-Z]/.test(value)) score += 1;
  if (/[a-z]/.test(value)) score += 1;
  if (/\d/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;
  return score;
};

const labels = [
  "Very weak",
  "Weak",
  "Fair",
  "Good",
  "Strong",
  "Very strong",
  "Excellent",
];

export default function PasswordStrengthClient() {
  const [password, setPassword] = useState("");

  const result = useMemo(() => {
    const score = scorePassword(password);
    return {
      score,
      label: labels[score] ?? "Very weak",
    };
  }, [password]);

  return (
    <section style={{ display: "grid", gap: "1rem", maxWidth: 540 }}>
      <label style={{ fontWeight: 600 }} htmlFor="password-strength-input">
        Check your password
      </label>
      <input
        id="password-strength-input"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Type a password..."
      />
      <div>
        <strong>Strength: {result.label}</strong>
        <p>Score: {result.score} / 6</p>
      </div>
      <ul style={{ paddingLeft: "1.2rem" }}>
        <li>Use 12+ characters whenever possible.</li>
        <li>Mix uppercase, lowercase, numbers, and symbols.</li>
        <li>Avoid common words or reused passwords.</li>
      </ul>
    </section>
  );
}
