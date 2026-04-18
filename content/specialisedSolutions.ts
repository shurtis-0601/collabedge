export type SpecialisedSolution = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
};

export const specialisedSolutions: SpecialisedSolution[] = [
  {
    slug: "security-compliance",
    title: "Security & Compliance",
    tagline: "Enterprise-grade protection, sized for your business",
    description:
      "Vetted security platforms and compliance tooling implemented with the rigour Fortune 500s expect — tailored to Australian regulatory obligations.",
    bullets: [
      "Zero-trust, identity, endpoint and email security",
      "Privacy Act, Essential Eight and ISO 27001 readiness",
      "Incident response and tabletop exercises",
    ],
  },
  {
    slug: "healthcare-crm",
    title: "Healthcare CRM",
    tagline: "One view of every client, carer and clinician",
    description:
      "Purpose-built CRM implementations for healthcare providers — aligned to the real flows of referrals, care plans, funding and outcomes.",
    bullets: [
      "Referral capture and care pathway automation",
      "Funding and billing integration",
      "Outcome measurement and reporting",
    ],
  },
  {
    slug: "data-quality-automation",
    title: "Data Quality Automation",
    tagline: "Cleaner data, automatically, at scale",
    description:
      "Automated profiling, matching, enrichment and monitoring so your systems of record stay accurate — without a team of humans in the loop.",
    bullets: [
      "Entity resolution and deduplication",
      "Continuous profiling and rules-based checks",
      "Address, identity and reference-data enrichment",
    ],
  },
  {
    slug: "proptech",
    title: "Property Technology (PropTech)",
    tagline: "Modern platforms for property operators",
    description:
      "Tenant, asset and portfolio technology that digitises the property lifecycle — from leasing to maintenance to investor reporting.",
    bullets: [
      "Tenant experience and self-service portals",
      "Asset and maintenance workflow automation",
      "Portfolio analytics and investor reporting",
    ],
  },
  {
    slug: "telco-fraud-prevention",
    title: "Telecommunications Fraud Prevention",
    tagline: "Stop fraud before it reaches your bill run",
    description:
      "Real-time fraud detection engineered for carrier economics — built on signal patterns that separate legitimate traffic from abuse.",
    bullets: [
      "Real-time call and SMS fraud detection",
      "Subscription and SIM-swap fraud defences",
      "Revenue assurance and leakage recovery",
    ],
  },
  {
    slug: "warehouse-logistics",
    title: "Warehouse & Logistics",
    tagline: "Visibility and velocity, from dock to door",
    description:
      "WMS, OMS and visibility platforms implemented with process discipline — cutting cycle times and lifting throughput where it matters most.",
    bullets: [
      "WMS / OMS platform selection and rollout",
      "Picking, packing and dispatch optimisation",
      "End-to-end freight and last-mile visibility",
    ],
  },
];
