import Link from "next/link";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Resources — CollabEdge Solutions",
  description:
    "Blogs and field guides from CollabEdge Solutions — data security, NDIS operations, and more.",
};

const RESOURCES = [
  {
    title: "Blog — Data Security",
    blurb: "Field-tested perspectives on modern data security for Australian businesses.",
    href: "https://www.hurtiscollabedgesolutions.com.au/blog/nu3z35pb4fzq9e7bpxf3tkktyyxn52-z5974",
    external: true,
  },
  {
    title: "NDIS Blogs",
    blurb: "Practical guidance for NDIS providers on audits, operations and growth.",
    href: "/ndis",
    external: false,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Hero
        eyebrow="Resources"
        title="Notes from the field"
        subtitle="Short, practical pieces from the projects we're working on — no filler, no fluff."
      />

      <section className="section py-16 sm:py-24">
        <div className="mx-auto max-w-container grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESOURCES.map((r, i) => (
            <FadeIn key={r.title} delay={i * 80}>
              {r.external ? (
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-full block rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-gold/40 transition-colors"
                >
                  <h3 className="font-serif text-2xl text-gold">{r.title}</h3>
                  <p className="mt-3 text-white/80">{r.blurb}</p>
                  <p className="mt-6 text-sm text-gold/80 group-hover:text-gold">
                    Read ↗
                  </p>
                </a>
              ) : (
                <Link
                  href={r.href}
                  className="group h-full block rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-gold/40 transition-colors"
                >
                  <h3 className="font-serif text-2xl text-gold">{r.title}</h3>
                  <p className="mt-3 text-white/80">{r.blurb}</p>
                  <p className="mt-6 text-sm text-gold/80 group-hover:text-gold">
                    Read →
                  </p>
                </Link>
              )}
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
