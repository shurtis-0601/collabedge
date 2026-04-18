import Link from "next/link";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Solutions — CollabEdge Solutions",
  description:
    "Explore our Core Offerings, Specialised Solutions and MedPrivacy — strategic consulting and vetted enterprise platforms for Australian businesses.",
};

const LINKS = [
  {
    title: "Core Offerings",
    blurb: "Strategic consulting across NDIS, data governance, healthcare analytics, transformation and automation.",
    href: "/core-offerings",
  },
  {
    title: "Specialised Solutions",
    blurb: "Enterprise platforms implemented with vetted partners — security, CRM, data quality, PropTech, telco and logistics.",
    href: "/specialised-solutions",
  },
  {
    title: "MedPrivacy",
    blurb: "Our flagship privacy and compliance platform, built for Australian healthcare.",
    href: "/medprivacy",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Hero
        eyebrow="Solutions"
        title="Two ways we create edge"
        subtitle="Strategic consulting where senior judgement matters most — paired with curated enterprise platforms where technology does the heavy lifting."
      />

      <section className="section py-16 sm:py-24">
        <div className="mx-auto max-w-container grid grid-cols-1 md:grid-cols-3 gap-6">
          {LINKS.map((l, i) => (
            <FadeIn key={l.href} delay={i * 80}>
              <Link
                href={l.href}
                className="group h-full block rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-gold/40 transition-colors"
              >
                <h3 className="font-serif text-2xl text-gold">{l.title}</h3>
                <p className="mt-3 text-white/80">{l.blurb}</p>
                <p className="mt-6 text-sm text-gold/80 group-hover:text-gold">
                  Explore →
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
