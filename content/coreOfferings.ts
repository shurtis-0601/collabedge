export type CoreOffering = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
};

export const coreOfferings: CoreOffering[] = [
  {
    slug: "ndis-aged-care",
    title: "NDIS & Aged Care Solutions",
    tagline: "Audit-ready operations for Australian care providers",
    description:
      "We help new and established NDIS and Aged Care providers structure their operations, compliance and client journeys so audits become milestones — not emergencies.",
    bullets: [
      "NDIS audit preparation and gap assessments",
      "Client intake, service agreements, rostering",
      "Incident reporting and continuous improvement",
      "Aged Care Quality Standards mapping",
    ],
  },
  {
    slug: "data-governance",
    title: "Data Governance & Strategy",
    tagline: "Turn data chaos into a trusted, compliant asset",
    description:
      "From ownership models to data quality pipelines, we stand up the policies, tooling and operating rhythm needed to treat data like the strategic asset it is.",
    bullets: [
      "Data governance frameworks and stewardship",
      "Privacy Act and APP compliance reviews",
      "Master data and reference data management",
      "Data catalogue and lineage implementation",
    ],
  },
  {
    slug: "healthcare-analytics-bi",
    title: "Healthcare Analytics & BI",
    tagline: "Decisions backed by evidence, not instinct",
    description:
      "We build analytics foundations tailored to healthcare — clinical KPIs, funding utilisation, workforce productivity — so leaders can see and act.",
    bullets: [
      "KPI design for clinical and operational performance",
      "Power BI / Tableau dashboards and self-service",
      "Funding, billing and utilisation analytics",
      "Predictive models for demand and risk",
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation Leadership",
    tagline: "Senior leadership, embedded in your team",
    description:
      "Fractional CIO / CDO capability that lands strategy, vendor selection, and change execution with the discipline of a Fortune 500 programme.",
    bullets: [
      "Technology roadmap and operating model",
      "Vendor evaluation and contract negotiation",
      "Programme delivery and assurance",
      "Change management and adoption",
    ],
  },
  {
    slug: "workflow-automation-ai",
    title: "Workflow Automation & AI",
    tagline: "Remove the busywork. Scale the expertise.",
    description:
      "Pragmatic automation and AI that compounds in back-office, clinical admin, and service delivery — deployed with governance from day one.",
    bullets: [
      "Process discovery and automation roadmap",
      "RPA, low-code and intelligent document processing",
      "Generative AI copilots with guardrails",
      "AI governance and responsible-use policies",
    ],
  },
];
