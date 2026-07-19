import type { Metadata } from 'next'
import RetailPageClient from '@/components/analytics/retail/RetailPageClient'

export const metadata: Metadata = {
  title: 'Data Analytics for Retail | CollabEdge Solutions',
  description:
    'Physical retailers, omnichannel operators, specialty independents and wholesale businesses who want clear insight into sales performance, margin efficiency and supply chain risk. CollabEdge builds the reporting layer from the data you already have.',
}

export default function RetailAnalyticsPage() {
  return <RetailPageClient />
}
