import type { Metadata } from 'next'
import HealthPageClient from '@/components/analytics/health/HealthPageClient'

export const metadata: Metadata = {
  title: 'Data Analytics for Health and Care Providers | CollabEdge Solutions',
  description:
    'For NDIS, allied health and aged care operators wanting insight into workforce cost, client outcomes and performance, built from data you already have.',
  openGraph: {
    title: 'Data Analytics for Health and Care Providers | CollabEdge Solutions',
    description:
      'For NDIS, allied health and aged care operators wanting insight into workforce cost, client outcomes and performance, built from data you already have.',
    url: 'https://www.collabedgesolutions.com.au/services/analytics/health',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function HealthAnalyticsPage() {
  return <HealthPageClient />
}
