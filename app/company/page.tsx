import Link from "next/link";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Company — CollabEdge Solutions",
  description:
    "Australian-owned, Melbourne-based consultancy bringing 30+ years of Fortune 500 expertise to healthcare providers and enterprises.",
};

const VALUES = [
  {
    title: "Outcomes over output",
    body: "We measure ourselves on the problems we solve for clients, not the hours we bill.",
  },
  {
    title: "Plain-language expertise",
    body: "Deep technical chops explained in the language of the business — no jargon moats.",
  },
  {
    title: "Built to be handed over",
    body: "Our engagements end with your team confident, capable and self-sufficient.",
  },
  {
    title: "Local accountability",
    body: "Australian-owned, Melbourne-based, responsive in your time zone.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <Hero
        eyebrow="About CollabEdge"
        title="Trusted technology, delivered the Australian way"
        subtitle="Three decades of Fortune 500 programme delivery, refocused on Australian healthcare providers, NDIS operators and enterprises that want real outcomes."
      />

      <section className="section py-16 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-10 text-lg leading-relaxed text-white/85">
          <FadeIn>
            <p>
              CollabEdge Solutions was founded to bridge a gap we saw across the
              Australian market: organisations ready to grow, weighed down by
              fragmented systems, fragile processes and technology decisions made
              without experienced guidance.
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              Our founding team has spent 30+ years inside Fortune 500 enterprises —
              designing data platforms, running transformation programmes, and
              embedding governance that holds up under audit. We now bring that
              discipline to Australian businesses with the pragmatism they need to
              move quickly.
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              From Melbourne, we partner with NDIS and Aged Care providers, healthcare
              networks, telcos, property operators and logistics businesses — pairing
              strategic consulting with a curated ecosystem of vetted technology
              partners.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section py-16 sm:py-24 border-t border-white/10">
        <div className="mx-auto max-w-container">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-center">
              What we believe
            </h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-gold/40 transition-colors">
                  <h3 className="font-serif text-xl text-gold">{v.title}</h3>
                  <p className="mt-3 text-white/80">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-16">
        <div className="mx-auto max-w-container text-center">
          <Link href="/appt" className="btn-solid">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
