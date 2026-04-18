import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Book a Consultation — CollabEdge Solutions",
  description:
    "Book a complimentary 30-minute consultation with CollabEdge Solutions. Australian-owned, Melbourne-based, 30+ years of experience.",
};

export default function ApptPage() {
  return (
    <>
      <Hero
        eyebrow="Book a Consultation"
        title="Let's talk through your challenge"
        subtitle="A complimentary 30-minute session with a senior consultant — no obligation, just a clear view of where we could help."
      />

      <section className="section py-12 sm:py-16">
        <div className="mx-auto max-w-container grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10">
          <FadeIn>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-gold mb-4">
                Pick a time that suits you
              </h2>
              <p className="text-white/75 text-sm mb-5">
                Use the scheduler below to book directly. Prefer email or phone?
                Reach us with the details to the right.
              </p>
              {/* Calendly / scheduler embed placeholder — swap the src for your real booking URL */}
              <div className="aspect-[4/5] w-full rounded-xl border border-white/10 bg-navy-deep flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-white/70 mb-3">Scheduler embed</p>
                  <p className="text-white/50 text-sm">
                    Replace this block with your Calendly / scheduler iframe.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-serif text-xl text-gold">Email</h3>
                <a
                  className="text-white/90 hover:text-gold"
                  href="mailto:info@collabedgesolutions.com.au"
                >
                  info@collabedgesolutions.com.au
                </a>
              </div>
              <div>
                <h3 className="font-serif text-xl text-gold">Phone</h3>
                <p className="text-white/90">(61) 426 464 442</p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-gold">LinkedIn</h3>
                <a
                  className="text-white/90 hover:text-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/collabedge-solutions/"
                >
                  linkedin.com/company/collabedge-solutions
                </a>
              </div>
              <div>
                <h3 className="font-serif text-xl text-gold">Where we are</h3>
                <p className="text-white/90">Melbourne, Australia</p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-white/60 text-sm">
                  Australian-owned · 30+ years Fortune 500 experience · Responsive in your time zone
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
