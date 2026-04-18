import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Team — CollabEdge Solutions",
  description:
    "Senior consultants with 30+ years of Fortune 500 and Australian healthcare experience.",
};

const PLACEHOLDERS = [
  { role: "Founder & Principal Consultant", focus: "Data strategy, governance, transformation leadership" },
  { role: "Director, Healthcare Practice", focus: "NDIS, Aged Care, clinical analytics" },
  { role: "Director, Enterprise Solutions", focus: "Security, CRM, automation, PropTech, logistics" },
  { role: "Principal, Data Quality & AI", focus: "Entity resolution, data quality, responsible AI" },
];

export default function TeamPage() {
  return (
    <>
      <Hero
        eyebrow="Our Team"
        title="Senior by default"
        subtitle="Every engagement is led and delivered by consultants with deep industry experience — you work with the seniors you met on day one."
      />

      <section className="section py-16 sm:py-24">
        <div className="mx-auto max-w-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLACEHOLDERS.map((p, i) => (
              <FadeIn key={p.role} delay={i * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-gold/30 to-transparent border border-gold/30 flex items-center justify-center">
                    <span className="font-serif text-gold text-2xl">CE</span>
                  </div>
                  <h3 className="mt-5 font-serif text-lg text-white">{p.role}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.focus}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="mt-12 text-center text-white/60 text-sm">
            Team bios and photos coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
