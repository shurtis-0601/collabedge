import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import CampaignBanner from "@/components/CampaignBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CollabEdge Solutions",
  alternateName: ["Hurtis CollabEdge Solutions"],
  identifier: {
    "@type": "PropertyValue",
    propertyID: "ABN",
    value: "38 557 169 242",
  },
  url: "https://www.collabedgesolutions.com.au",
  logo: "https://www.collabedgesolutions.com.au/images/logo.png",
  description:
    "NDIS audit preparation, compliance, AI and workflow automation, data security and Managed Services for providers in Wyndham, Melbourne and Geelong.",
  email: "info@collabedgesolutions.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wyndham",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  telephone: "+61426464442",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Wyndham, Victoria" },
    { "@type": "City", name: "Melbourne" },
    { "@type": "City", name: "Geelong" },
    { "@type": "City", name: "Geelong West" },
    { "@type": "City", name: "Point Cook" },
    { "@type": "City", name: "Truganina" },
    { "@type": "City", name: "Wyndham Vale" },
    { "@type": "City", name: "Hoppers Crossing" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Place", name: "Asia Pacific" },
  ],
  sameAs: ["https://www.linkedin.com/company/collabedge-solutions/"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "CollabEdge Solutions services",
    itemListElement: [
      "NDIS Compliance and Audit",
      "Document Governance",
      "Healthcare Workflow Automation",
      "AI Advisory",
      "Managed Services",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
  founder: {
    "@type": "Person",
    name: "Sinclair Hurtis",
    jobTitle: "Founder and Principal Consultant",
  },
};

export const metadata: Metadata = {
  title: "CollabEdge Solutions | NDIS Compliance and Enterprise Technology",
  description:
    "NDIS compliance, workflow automation, and enterprise technology consulting for Australian healthcare providers and businesses. Melbourne-based, Australian-owned.",
  metadataBase: new URL("https://www.collabedgesolutions.com.au"),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-navy text-white min-h-screen flex flex-col">
        <SiteHeader />
        <CampaignBanner />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
