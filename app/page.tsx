import Link from "next/link";
import Hero from "@/components/Hero";
import OfferingColumn from "@/components/OfferingColumn";
import SectionDivider from "@/components/SectionDivider";
import Testimonial from "@/components/Testimonial";
import FadeIn from "@/components/FadeIn";

const EAS_LOGO =
  "https://images.squarespace-cdn.com/content/v1/663abc9bb2142153b3780b43/3c351b84-81fe-43c0-85a0-ce1b3982d76d/EAS+Logo.png";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Empowering Australian Businesses with Trusted Technology"
        subtitle="30+ years of Fortune 500 expertise, now empowering Australian healthcare providers and enterprises."
        meta={
          <>
            Australian-owned <span className="text-gold">|</span> 📍 Melbourne-based{" "}
            <span className="text-gold">|</span> ⭐ 30+ years experience
          </>
        }
      >
        <Link href="/appt" className="btn-primary">
          Book a free 30 min consult
        </Link>
      </Hero>

      {/* How we transform */}
      <section className="section py-16 sm:py-24">
        <div className="mx-auto max-w-container">
          <SectionDivider label="How we transform Australian Businesses" />
          <FadeIn>
            <p className="mt-8 text-center text-lg sm:text-xl text-white/85 max-w-3xl mx-auto">
              We combine strategic expertise with technology partnerships to deliver complete solutions.
            </p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <OfferingColumn
              icon="🎯"
              heading="Core Offerings"
              subheading="Strategic Consulting & Advisory"
              description="We solve your most critical operational challenges through hands-on expertise in five key areas."
              items={[
                "NDIS & Aged Care Solutions",
                "Data Governance & Strategy",
                "Healthcare Analytics & BI",
                "Digital Transformation Leadership",
                "Workflow Automation & AI",
              ]}
              cta="Explore Core Offerings"
              ctaHref="/core-offerings"
            />
            <OfferingColumn
              icon="🤝"
              heading="Specialised Solutions"
              subheading="Enterprise Technology Platforms"
              description="We implement enterprise-grade platforms through strategic partnerships with vetted technology partners."
              items={[
                "Security & Compliance",
                "Healthcare CRM",
                "Data Quality Automation",
                "Property Technology (PropTech)",
                "Telecommunications Fraud Prevention",
                "Warehouse & Logistics",
              ]}
              cta="Explore Specialised Solutions"
              ctaHref="/specialised-solutions"
              delay={120}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section py-16 sm:py-24 border-t border-white/10">
        <div className="mx-auto max-w-container">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
              What our Clients say
            </h2>
            <p className="mt-4 text-center text-white/80 text-lg">
              Real results from organisations we have partnered with
            </p>
          </FadeIn>

          <div className="mt-14 max-w-5xl mx-auto">
            <Testimonial
              logoSrc={EAS_LOGO}
              logoAlt="Enhance Ability Services logo"
              quote={
                <>
                  <p>
                    As a new NDIS provider, I felt like I was constantly 'winging it'
                    with little guidance on how to run things efficiently. Working with
                    CollabEdge Solutions over the past three months has completely
                    transformed my business.
                  </p>
                  <p>
                    The team streamlined our operations, reviewed our systems, and
                    guided us toward better solutions. Critically, they helped us
                    prepare for our NDIS audit — ensuring our documentation, processes,
                    and compliance frameworks were audit-ready. Their expertise gave us
                    confidence going into the audit process.
                  </p>
                  <p>
                    What really stands out is that CollabEdge Solutions didn't just do
                    the work for us — they taught us along the way. Our business now
                    runs with structure and clarity, and their hands-on mentorship has
                    turned what once felt overwhelming into something clear, structured,
                    and exciting.
                  </p>
                </>
              }
              author="Rebecca Delaney"
              role="Director"
              company="Enhance Ability Services"
              companyHref="https://www.enhanceabilityservices.com"
            />
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="section py-16 sm:py-20">
        <div className="mx-auto max-w-container rounded-2xl border border-gold/30 bg-gradient-to-br from-white/[0.03] to-gold/[0.06] px-8 py-12 sm:py-16 text-center">
          <FadeIn>
            <h3 className="font-serif text-2xl sm:text-4xl font-semibold">
              Ready to talk through your challenge?
            </h3>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Book a complimentary 30-minute consultation — no obligation, just a
              clear view of where we could help.
            </p>
            <div className="mt-8">
              <Link href="/appt" className="btn-solid">
                Book a free 30 min consult
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
