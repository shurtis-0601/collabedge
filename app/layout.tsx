import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
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
  url: "https://collabedgesolutions.com.au",
  logo: "https://collabedgesolutions.com.au/images/logo.png",
  description:
    "NDIS compliance, workflow automation, and enterprise technology consulting. Melbourne, Australia.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Point Cook",
    addressRegion: "VIC",
    postalCode: "3030",
    addressCountry: "AU",
  },
  telephone: "0426464442",
  areaServed: "AU",
  founder: {
    "@type": "Person",
    name: "Sinclair Hurtis",
    jobTitle: "Founder and Principal Consultant",
  },
};

export const metadata: Metadata = {
  title: "CollabEdge Solutions — NDIS Compliance & Enterprise Technology",
  description:
    "NDIS compliance, workflow automation, and enterprise technology consulting for Australian healthcare providers and businesses. Melbourne-based, Australian-owned.",
  metadataBase: new URL("https://collabedgesolutions.com.au"),
  robots: {
    index: false,
    follow: false,
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
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
