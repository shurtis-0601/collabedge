import Link from "next/link";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import { coreOfferings } from "@/content/coreOfferings";

export const metadata = {
  title: "Core Offerings — CollabEdge Solutions",
  description:
    "Strategic consulting across NDIS & Aged Care, Data Governance, Healthcare Analytics, Digital Transformation and Workflow Automation & AI.",
};

export default function CoreOfferingsPage() {
  return (
    <>
      <Hero
        eyebrow="🎯 Core Offerings"
        title="Strategic Consulting & Advisory"
        subtitle="We solve your most critical operational challenges through hands-on expertise in five key areas."
      />

      <section className="section py-16 sm:py-20">
        <div className="mx-auto max-w-container space-y-6">
          {coreOfferings.map((o, i) => (
            <FadeIn key={o.slug} delay={i * 60}>
              <article
                id={o.slug}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 hover:border-gold/40 transition-colors grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8"
              >
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-white">{o.title}</h2>
                  <p className="mt-3 text-gold uppercase tracking-wider text-xs">
                    {o.tagline}
                  </p>
                </div>
                <div>
                  <p className="text-white/85 leading-relaxed">{o.description}</p>
                  <ul className="mt-5 space-y-2 text-white/90">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 rounded-full bg-gold shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
