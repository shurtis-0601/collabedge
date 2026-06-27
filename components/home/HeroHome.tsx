import Image from "next/image";
import Link from "next/link";
import GoldRule from "@/components/ui/GoldRule";
import Eyebrow from "@/components/ui/Eyebrow";
import StatRow from "@/components/ui/StatRow";

type Stat = { value: string; label: string };
type CTA = { label: string; href: string; ghost?: boolean };

type Props = {
  photoSrc: string;
  name: string;
  credential: string;
  eyebrow: string;
  h1: string;
  serifWord: string;
  sub: string;
  stats: Stat[];
  ctas: CTA[];
};

export default function HeroHome({
  photoSrc,
  name,
  credential,
  eyebrow,
  h1,
  serifWord,
  sub,
  stats,
  ctas,
}: Props) {
  return (
    <section className="relative min-h-[560px] flex items-center overflow-hidden bg-navy">
      {/* Photo — left side, desktop only */}
      <div className="absolute inset-y-0 left-0 w-[60%] hidden lg:block">
        <Image
          src={photoSrc}
          alt={name}
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay — right edge of photo blends into navy */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(7,38,56,0.2) 30%, rgba(7,38,56,0.75) 50%, rgba(7,38,56,0.96) 65%, rgba(7,38,56,1) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Mobile — photo full viewport, gradient from bottom */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={photoSrc}
          alt={name}
          fill
          className="object-cover object-top"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(7,38,56,1) 0%, rgba(7,38,56,0.9) 45%, transparent 80%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content — right side */}
      <div className="relative z-10 ml-auto w-full lg:w-[52%] px-6 py-16 lg:py-20 lg:pr-10 lg:pl-0">
        <GoldRule />
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-[36px] sm:text-[44px] font-bold text-white leading-tight tracking-[-0.035em] mb-2">
          {h1}{" "}
          <em className="font-serif not-italic text-gold">{serifWord}</em>
        </h1>
        <p className="text-[13px] text-white/60 mb-1">{name}</p>
        <p className="text-[12px] text-white/45 mb-5">{credential}</p>
        <p className="text-[14px] text-white/75 leading-relaxed max-w-md mb-8">{sub}</p>

        {ctas.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-10">
            {ctas.map((cta) => (
              <Link key={cta.href} href={cta.href} className={cta.ghost ? "btn-ghost" : "btn-gold"}>
                {cta.label}
              </Link>
            ))}
          </div>
        )}

        {stats.length > 0 && (
          <div className="pt-8 border-t border-white/15">
            <StatRow stats={stats} dark />
          </div>
        )}
      </div>
    </section>
  );
}
