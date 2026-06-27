import Link from "next/link";
import GoldRule from "@/components/ui/GoldRule";
import Eyebrow from "@/components/ui/Eyebrow";
import StatRow from "@/components/ui/StatRow";

type Stat = { value: string; label: string };

type Props = {
  eyebrow?: string;
  h1: string;
  sub?: string;
  stats?: Stat[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function ProductHero({ eyebrow, h1, sub, stats, ctaLabel, ctaHref }: Props) {
  return (
    <section className="bg-navy-deep py-16 px-10">
      <div className="max-w-container mx-auto">
        <GoldRule />
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="text-[38px] sm:text-[50px] font-bold text-white leading-tight tracking-[-0.035em] max-w-2xl mb-4">
          {h1}
        </h1>
        {sub && (
          <p className="text-[15px] text-white/70 leading-relaxed max-w-xl mb-7">{sub}</p>
        )}
        {ctaLabel && ctaHref && (
          <Link href={ctaHref} className="btn-gold mb-10 inline-flex">
            {ctaLabel}
          </Link>
        )}
        {stats && stats.length > 0 && (
          <div className={ctaLabel ? "mt-10 pt-10 border-t border-white/10" : "mt-6"}>
            <StatRow stats={stats} dark />
          </div>
        )}
      </div>
    </section>
  );
}
