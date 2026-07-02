"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQBlock({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className="divide-y divide-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <li key={i}>
            <button
              className="w-full flex items-center justify-between py-5 text-left gap-4"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-[15px] font-semibold text-text-dark leading-snug">{item.question}</span>
              <svg
                viewBox="0 0 16 16"
                className={`h-4 w-4 text-brand-goldDark shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                aria-hidden="true"
              >
                <path d="M2 5l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {isOpen && (
              <p className="pb-5 text-[16px] text-slate leading-relaxed">{item.answer}</p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
