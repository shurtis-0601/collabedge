import Link from "next/link";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "NDIS Blogs — CollabEdge Solutions",
  description:
    "Practical guidance for NDIS providers on audit readiness, compliance, operations and growth.",
};

const POSTS = [
  {
    title: "Audit-ready in 90 days: what new NDIS providers get wrong",
    excerpt:
      "A practical checklist for documentation, processes and compliance frameworks — the same one we use with clients preparing for their first certification.",
    tag: "Audit & Compliance",
  },
  {
    title: "Systems vs. spreadsheets: when it's time to move on",
    excerpt:
      "Signs your NDIS operations have outgrown spreadsheets, and how to move to fit-for-purpose systems without blowing up your team's capacity.",
    tag: "Operations",
  },
  {
    title: "Rostering, incident reporting and the fundamentals of NDIS operational excellence",
    excerpt:
      "The three operational capabilities every NDIS provider should master — and how to build them without adding headcount.",
    tag: "Operations",
  },
];

export default function NdisPage() {
  return (
    <>
      <Hero
        eyebrow="NDIS Blogs"
        title="Practical guidance for NDIS providers"
        subtitle="Field-tested insights on audit readiness, operations and growth — written by the team that helps providers get there."
      />

      <section className="section py-16 sm:py-24">
        <div className="mx-auto max-w-container grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 80}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 hover:border-gold/40 transition-colors flex flex-col">
                <p className="text-gold text-xs uppercase tracking-wider">{p.tag}</p>
                <h3 className="mt-3 font-serif text-xl text-white">{p.title}</h3>
                <p className="mt-3 text-white/75 text-sm leading-relaxed">{p.excerpt}</p>
                <p className="mt-6 text-sm text-gold/80">Coming soon</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/appt" className="btn-primary">
            Talk to an NDIS specialist
          </Link>
        </div>
      </section>
    </>
  );
}
