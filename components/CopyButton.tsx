"use client";

import { useState } from "react";

interface CopyButtonProps {
  value: string;
  label?: string;
}

export default function CopyButton({ value, label = "Copy" }: CopyButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied">("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
      setTimeout(() => setStatus("idle"), 1500);
    } catch (error) {
      console.error("Failed to copy", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      {status === "copied" ? "Copied" : label}
    </button>
  );
}
