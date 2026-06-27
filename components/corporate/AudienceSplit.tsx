import Link from "next/link";
import GoldRule from "@/components/ui/GoldRule";

type Props = {
  leftHeading: string;
  leftBody: string;
  leftCta: string;
  leftCtaHref: string;
  rightHeading: string;
  rightBody: string;
  rightCta: string;
  rightCtaHref: string;
};

export default function AudienceSplit({
  leftHeading,
  leftBody,
  leftCta,
  leftCtaHref,
  rightHeading,
  rightBody,
  rightCta,
  rightCtaHref,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {/* SME panel — light */}
      <div className="bg-offwhite py-14 px-10">
        <GoldRule />
        <h3 className="text-[20px] font-bold text-text-dark leading-tight tracking-[-0.02em] mb-3">
          {leftHeading}
        </h3>
        <p className="text-[14px] text-slate leading-relaxed mb-6">{leftBody}</p>
        <Link href={leftCtaHref} className="btn-gold">
          {leftCta}
        </Link>
      </div>

      {/* Enterprise panel — dark */}
      <div className="bg-navy py-14 px-10">
        <GoldRule />
        <h3 className="text-[20px] font-bold text-white leading-tight tracking-[-0.02em] mb-3">
          {rightHeading}
        </h3>
        <p className="text-[14px] text-white/70 leading-relaxed mb-6">{rightBody}</p>
        <Link href={rightCtaHref} className="btn-ghost">
          {rightCta}
        </Link>
      </div>
    </div>
  );
}
