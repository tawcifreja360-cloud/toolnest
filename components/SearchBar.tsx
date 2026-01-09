"use client";

import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export default function SearchBar({
  placeholder = "Search tools",
  onSearch,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setValue(nextValue);
    onSearch?.(nextValue);
  };

  return (
    <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <span className="text-sm text-slate-400">🔍</span>
      <input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200"
        type="search"
      />
    </div>
  );
}
