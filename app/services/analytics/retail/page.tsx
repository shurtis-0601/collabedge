import type { Metadata } from 'next'
import RetailPageClient from '@/components/analytics/retail/RetailPageClient'

export const metadata: Metadata = {
  title: 'Data Analytics for Retail | CollabEdge Solutions',
  description:
    'Physical retailers, omnichannel operators, specialty independents and wholesale businesses who want clear insight into sales performance, margin efficiency and supply chain risk. CollabEdge builds the reporting layer from the data you already have.',
  openGraph: {
    title: 'Data Analytics for Retail | CollabEdge Solutions',
    description:
      'Physical retailers, omnichannel operators, specialty independents and wholesale businesses who want clear insight into sales performance, margin efficiency and supply chain risk. CollabEdge builds the reporting layer from the data you already have.',
    url: 'https://www.collabedgesolutions.com.au/services/analytics/retail',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function RetailAnalyticsPage() {
  return <RetailPageClient />
}
