import Link from "next/link";
import React from "react";
import FadeIn from "@/components/FadeIn";

type Props = {
  icon: React.ReactNode;
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
  index?: number;
};

export default function FeatureCard({ icon, title, body, href, linkLabel, index = 0 }: Props) {
  return (
    <FadeIn delay={index * 100} variant="fadeUp">
      <div className="bg-white border border-border rounded-lg p-[22px] shadow-sm flex flex-col hover:-translate-y-[2px] hover:shadow-md hover:border-gold/30 transition-all duration-200 group cursor-default h-full">
        <div className="text-2xl mb-3">{icon}</div>
        <h3 className="text-[18px] font-bold text-text-dark leading-snug mb-2">{title}</h3>
        <p className="text-[14px] text-slate leading-relaxed flex-1">{body}</p>
        {href && linkLabel && (
          <Link
            href={href}
            className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-brand-goldLight hover:underline"
          >
            {linkLabel}
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        )}
      </div>
    </FadeIn>
  );
}
