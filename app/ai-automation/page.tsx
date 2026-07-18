import type { Metadata } from 'next'
import AiAutomationHubClient from './AiAutomationHubClient'

export const metadata: Metadata = {
  title: 'AI and Automation Roadmap | CollabEdge Solutions',
  description:
    'Where our AI and automation roadmap is heading, covering NDIS automation on Microsoft 365 and Google Workspace, and a place to tell us what to automate.',
  openGraph: {
    title: 'AI and Automation Roadmap | CollabEdge Solutions',
    description:
      'A working roadmap of what CollabEdge is building now, next, and exploring, across NDIS, healthcare, and growth automation.',
    url: 'https://www.collabedgesolutions.com.au/ai-automation',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function AiAutomationHubPage() {
  return <AiAutomationHubClient />
}
