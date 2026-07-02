import React from "react";
import GoldRule from "@/components/ui/GoldRule";

type Props = {
  question: string;
  answer: string;
  children?: React.ReactNode;
};

export default function AEOSection({ question, answer, children }: Props) {
  return (
    <section className="py-14 px-10">
      <div className="max-w-container mx-auto">
        <GoldRule />
        <h2 className="text-[26px] font-bold text-text-dark leading-tight tracking-[-0.02em] max-w-2xl mb-4">
          {question}
        </h2>
        <p className="text-[15px] text-slate leading-relaxed max-w-2xl">
          {answer}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
