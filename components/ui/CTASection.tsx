import Link from "next/link";

type Props = {
  heading: string;
  sub?: string;
  ctaLabel: string;
  ctaHref: string;
  ghost?: boolean;
};

export default function CTASection({ heading, sub, ctaLabel, ctaHref, ghost = false }: Props) {
  return (
    <section className="bg-navy py-14 px-10">
      <div className="max-w-container mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-[26px] font-bold text-white leading-tight tracking-[-0.02em]">
            {heading}
          </h2>
          {sub && <p className="mt-2 text-[16px] text-[#D1D5DB] leading-relaxed max-w-xl">{sub}</p>}
        </div>
        <div className="shrink-0">
          <Link href={ctaHref} className={ghost ? "btn-ghost" : "btn-gold"}>
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
