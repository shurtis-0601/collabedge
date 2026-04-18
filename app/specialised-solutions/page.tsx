import Link from "next/link";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import { specialisedSolutions } from "@/content/specialisedSolutions";

export const metadata = {
  title: "Specialised Solutions — CollabEdge Solutions",
  description:
    "Enterprise technology platforms implemented with vetted technology partners across security, healthcare CRM, data quality, PropTech, telco fraud and logistics.",
};

export default function SpecialisedSolutionsPage() {
  return (
    <>
      <Hero
        eyebrow="🤝 Specialised Solutions"
        title="Enterprise Technology Platforms"
        subtitle="We implement enterprise-grade platforms through strategic partnerships with vetted technology partners."
      />

      <section className="section py-16 sm:py-20">
        <div className="mx-auto max-w-container grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialisedSolutions.map((s, i) => (
            <FadeIn key={s.slug} delay={i * 60}>
              <article
                id={s.slug}
                className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-gold/40 transition-colors"
              >
                <h2 className="font-serif text-2xl text-white">{s.title}</h2>
                <p className="mt-2 text-gold uppercase tracking-wider text-xs">
                  {s.tagline}
                </p>
                <p className="mt-4 text-white/85 leading-relaxed">{s.description}</p>
                <ul className="mt-5 space-y-2 text-white/90">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 rounded-full bg-gold shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section pb-24">
        <div className="mx-auto max-w-container text-center">
          <Link href="/appt" className="btn-primary">
            Discuss your needs
          </Link>
        </div>
      </section>
    </>
  );
}
