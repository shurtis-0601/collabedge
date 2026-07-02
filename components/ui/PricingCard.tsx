import Link from "next/link";

type Props = {
  tier: string;
  price: string;
  period?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

export default function PricingCard({ tier, price, period, features, ctaLabel, ctaHref, featured = false }: Props) {
  return (
    <div
      className={`rounded-lg p-[22px] flex flex-col ${
        featured
          ? "bg-navy border-2 border-gold shadow-gold-soft"
          : "bg-white border border-border shadow-sm"
      }`}
    >
      {featured && (
        <p className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark mb-3">
          Most Popular
        </p>
      )}
      <h3 className={`text-[16px] font-bold mb-1 ${featured ? "text-white" : "text-text-dark"}`}>
        {tier}
      </h3>
      <p className={`text-[30px] font-bold tracking-tight mb-1 ${featured ? "text-white" : "text-text-dark"}`}>
        {price}
      </p>
      {period && (
        <p className={`text-[14px] mb-5 ${featured ? "text-[#D1D5DB]" : "text-slate"}`}>{period}</p>
      )}
      <ul className="space-y-2.5 mb-6 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[14px]">
            <svg viewBox="0 0 16 16" className="h-4 w-4 text-brand-goldDark shrink-0 mt-0.5" fill="none" aria-hidden="true">
              <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={featured ? "text-[#F1F5F9]" : "text-slate"}>{f}</span>
          </li>
        ))}
      </ul>
      <Link href={ctaHref} className={featured ? "btn-gold w-full text-center" : "btn-ghost w-full text-center"}>
        {ctaLabel}
      </Link>
    </div>
  );
}
