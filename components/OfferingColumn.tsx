import Link from "next/link";
import FadeIn from "./FadeIn";

export default function OfferingColumn({
  icon,
  heading,
  subheading,
  description,
  items,
  cta,
  ctaHref,
  delay = 0,
}: {
  icon: string;
  heading: string;
  subheading: string;
  description: string;
  items: string[];
  cta: string;
  ctaHref: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay} className="h-full">
      <div className="h-full flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 hover:border-gold/40 transition-colors">
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
          <span className="mr-2">{icon}</span>
          {heading}
        </h3>
        <p className="mt-4 text-gold tracking-wide uppercase text-xs">
          {subheading}
        </p>
        <p className="mt-3 text-white/80 leading-relaxed">{description}</p>
        <ul className="mt-6 space-y-2.5 text-white/90">
          {items.map((i) => (
            <li key={i} className="flex gap-3">
              <span className="text-gold mt-1.5 h-1 w-1 rounded-full bg-gold shrink-0" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-8">
          <Link href={ctaHref} className="btn-primary">
            {cta}
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}
