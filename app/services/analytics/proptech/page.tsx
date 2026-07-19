import type { Metadata } from 'next'
import ProptechPageClient from '@/components/analytics/proptech/ProptechPageClient'

export const metadata: Metadata = {
  title: 'Data Analytics for Proptech | CollabEdge Solutions',
  description:
    'For property managers, mortgage brokers, builders and conveyancers wanting insight into portfolio risk, pipeline performance and compliance obligations.',
  openGraph: {
    title: 'Data Analytics for Proptech | CollabEdge Solutions',
    description:
      'For property managers, mortgage brokers, builders and conveyancers wanting insight into portfolio risk, pipeline performance and compliance obligations.',
    url: 'https://www.collabedgesolutions.com.au/services/analytics/proptech',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function ProptechAnalyticsPage() {
  return <ProptechPageClient />
}
