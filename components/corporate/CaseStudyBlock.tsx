import Link from "next/link";

type Props = {
  quote: string;
  author: string;
  role: string;
  company: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function CaseStudyBlock({ quote, author, role, company, ctaLabel, ctaHref }: Props) {
  return (
    <div className="bg-navy rounded-lg p-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 items-center">
      <div>
        <span className="block font-serif text-gold text-4xl leading-none mb-3" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="text-[15px] text-white/85 leading-relaxed font-serif italic">
          {quote}
        </blockquote>
        <p className="mt-4 text-[12px] text-white/50">
          — <span className="text-white font-semibold">{author}</span>, {role}, {company}
        </p>
      </div>
      {ctaLabel && ctaHref && (
        <div className="shrink-0">
          <Link href={ctaHref} className="btn-ghost whitespace-nowrap">
            {ctaLabel}
          </Link>
        </div>
      )}
    </div>
  );
}
