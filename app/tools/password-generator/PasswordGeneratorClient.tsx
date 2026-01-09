"use client";

import { useMemo, useState } from "react";

const CHAR_SETS = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

const buildPool = (options: {
  includeLowercase: boolean;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}) => {
  let pool = "";
  if (options.includeLowercase) pool += CHAR_SETS.lowercase;
  if (options.includeUppercase) pool += CHAR_SETS.uppercase;
  if (options.includeNumbers) pool += CHAR_SETS.numbers;
  if (options.includeSymbols) pool += CHAR_SETS.symbols;
  return pool;
};

const generatePassword = (length: number, pool: string) => {
  if (!pool || length <= 0) return "";
  const values = crypto.getRandomValues(new Uint32Array(length));
  return Array.from(values, (value) => pool[value % pool.length]).join("");
};

export default function PasswordGeneratorClient() {
  const [length, setLength] = useState(16);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const pool = useMemo(
    () =>
      buildPool({
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols,
      }),
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase],
  );

  const handleGenerate = () => {
    setPassword(generatePassword(length, pool));
  };

  return (
    <section style={{ display: "grid", gap: "1rem", maxWidth: 540 }}>
      <label style={{ fontWeight: 600 }} htmlFor="password-length">
        Password length
      </label>
      <input
        id="password-length"
        type="number"
        min={6}
        max={64}
        value={length}
        onChange={(event) => setLength(Number(event.target.value))}
      />
      <fieldset style={{ border: "1px solid #ddd", padding: "1rem" }}>
        <legend style={{ fontWeight: 600 }}>Include characters</legend>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(event) => setIncludeLowercase(event.target.checked)}
          />{" "}
          Lowercase (a-z)
        </label>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(event) => setIncludeUppercase(event.target.checked)}
          />{" "}
          Uppercase (A-Z)
        </label>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(event) => setIncludeNumbers(event.target.checked)}
          />{" "}
          Numbers (0-9)
        </label>
        <label style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(event) => setIncludeSymbols(event.target.checked)}
          />{" "}
          Symbols (!@#$)
        </label>
      </fieldset>
      <button type="button" onClick={handleGenerate}>
        Generate password
      </button>
      <div>
        <strong>Your password</strong>
        <p style={{ wordBreak: "break-all" }}>{password || "—"}</p>
      </div>
    </section>
  );
}
