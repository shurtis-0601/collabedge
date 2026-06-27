import Link from "next/link";
import React from "react";
import GoldRule from "@/components/ui/GoldRule";
import Eyebrow from "@/components/ui/Eyebrow";

type Props = {
  eyebrow?: string;
  h1: string;
  answerBlock?: string;
  ctaLabel?: string;
  ctaHref?: string;
  children?: React.ReactNode;
};

export default function PageHero({ eyebrow, h1, answerBlock, ctaLabel, ctaHref, children }: Props) {
  return (
    <section className="bg-navy py-14 px-10">
      <div className="max-w-container mx-auto">
        <GoldRule />
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="text-[36px] sm:text-[44px] font-bold text-white leading-tight tracking-[-0.035em] max-w-2xl">
          {h1}
        </h1>
        {answerBlock && (
          <p className="mt-5 text-[15px] text-white/75 leading-relaxed max-w-xl">
            {answerBlock}
          </p>
        )}
        {ctaLabel && ctaHref && (
          <div className="mt-7">
            <Link href={ctaHref} className="btn-gold">
              {ctaLabel}
            </Link>
          </div>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
