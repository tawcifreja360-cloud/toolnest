"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              <span>{item.question}</span>
              <span className="text-lg">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? (
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
