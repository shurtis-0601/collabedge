import Link from "next/link";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Partners — CollabEdge Solutions",
  description:
    "A curated ecosystem of vetted technology partners across security, healthcare CRM, data quality, PropTech, telco fraud and logistics.",
};

const CATEGORIES = [
  {
    name: "Security & Compliance",
    description: "Identity, endpoint, email and data-protection partners aligned to Essential Eight and ISO 27001.",
  },
  {
    name: "Healthcare CRM",
    description: "CRM platforms purpose-built for healthcare, NDIS and Aged Care providers.",
  },
  {
    name: "Data Quality Automation",
    description: "Entity resolution, deduplication and enrichment partners for scale-grade data hygiene.",
  },
  {
    name: "Property Technology",
    description: "Tenant, asset and portfolio platforms for modern property operators.",
  },
  {
    name: "Telecommunications Fraud Prevention",
    description: "Real-time fraud and revenue-assurance partners tailored to carrier economics.",
  },
  {
    name: "Warehouse & Logistics",
    description: "WMS, OMS and visibility platforms for high-throughput operations.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Hero
        eyebrow="Our Partners"
        title="Hand-picked technology. Delivered with accountability."
        subtitle="We only implement platforms we've stress-tested against real Australian workloads — so your investment delivers from day one."
      />

      <section className="section py-16 sm:py-24">
        <div className="mx-auto max-w-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((c, i) => (
            <FadeIn key={c.name} delay={i * 60}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 hover:border-gold/40 transition-colors">
                <h3 className="font-serif text-xl text-gold">{c.name}</h3>
                <p className="mt-3 text-white/80">{c.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section pb-24">
        <div className="mx-auto max-w-3xl text-center text-white/70">
          <p>
            Interested in becoming a CollabEdge partner? Reach out at{" "}
            <a className="text-gold hover:underline" href="mailto:info@collabedgesolutions.com.au">
              info@collabedgesolutions.com.au
            </a>
            .
          </p>
          <div className="mt-8">
            <Link href="/appt" className="btn-primary">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
