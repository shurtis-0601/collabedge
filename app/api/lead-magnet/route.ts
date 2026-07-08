import { NextRequest, NextResponse } from 'next/server'

// TODO before launch: this destination address and the email service
// credentials are placeholders and must be confirmed and wired up by
// the site owner. Nothing is actually emailed yet. Options once
// credentials exist: Resend, Postmark, SendGrid, or a CRM webhook.
// Destination address: leads@collabedgesolutions.com.au

const LEAD_NOTIFICATION_ADDRESS = 'leads@collabedgesolutions.com.au'

const TEMPLATE_LABELS: Record<string, string> = {
  'funding-tracker': 'NDIS Funding Tracker Template',
  'participant-summary': 'Participant Funding Summary Template',
  'business-questions': 'NDIS Business Questions and Scenarios Template',
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string; template?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request body.' }, { status: 400 })
  }

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const template = (body.template ?? '').trim()

  if (!name || !email || !template) {
    return NextResponse.json(
      { success: false, error: 'Name, email, and template are required.' },
      { status: 400 }
    )
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: 'Enter a valid email address.' },
      { status: 400 }
    )
  }

  if (!TEMPLATE_LABELS[template]) {
    return NextResponse.json(
      { success: false, error: 'Unknown template selection.' },
      { status: 400 }
    )
  }

  const submission = {
    name,
    email,
    template,
    templateLabel: TEMPLATE_LABELS[template],
    submittedAt: new Date().toISOString(),
  }

  // Log the submission. Once an email service is wired up, this is
  // where the notification to LEAD_NOTIFICATION_ADDRESS and the
  // template delivery email to the submitter should be sent.
  console.log('[lead-magnet] New download request:', submission)
  console.log(`[lead-magnet] Notification would be sent to: ${LEAD_NOTIFICATION_ADDRESS}`)

  return NextResponse.json({ success: true })
}
