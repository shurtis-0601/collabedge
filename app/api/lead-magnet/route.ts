// LAUNCH CHECKLIST:
// 1. Replace placeholder values in .env.local with
//    real Bigin credentials (Client ID, Client Secret,
//    Refresh Token from Zoho API Console)
// 2. Add the same three variables to Vercel dashboard:
//    Project Settings > Environment Variables >
//    Production
// 3. Verify the Bigin Workflow Rule "Website Lead
//    Magnet Download - Send Guide" is active
// 4. Test end to end: submit the form, confirm a new
//    Contact appears in Bigin with the tag
//    "website-lead-magnet", and confirm the email
//    arrives

import { NextRequest, NextResponse } from 'next/server'

const LEAD_NOTIFICATION_ADDRESS = 'leads@collabedgesolutions.com.au'

const TEMPLATE_LABELS: Record<string, string> = {
  'ai-prompts-by-role': '100 NDIS AI Prompts by Role',
  'funding-tracker-template': 'NDIS Funding Tracker Template',
  'participant-summary-template': 'Participant Funding Summary Template',
  'business-questions-template': 'NDIS Business Questions and Scenarios Template',
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function getBiginAccessToken(): Promise<string | null> {
  try {
    const params = new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: process.env.BIGIN_CLIENT_ID ?? '',
      client_secret: process.env.BIGIN_CLIENT_SECRET ?? '',
      refresh_token: process.env.BIGIN_REFRESH_TOKEN ?? '',
    })
    const res = await fetch('https://accounts.zoho.com.au/oauth/v2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
    if (!res.ok) {
      console.error('[lead-magnet] Bigin token exchange failed:', res.status, await res.text())
      return null
    }
    const data = await res.json()
    return data.access_token ?? null
  } catch (err) {
    console.error('[lead-magnet] Bigin token exchange error:', err)
    return null
  }
}

async function createBiginContact(name: string, email: string, template: string): Promise<void> {
  const accessToken = await getBiginAccessToken()
  if (!accessToken) return

  const parts = name.trim().split(/\s+/)
  const firstName = parts.length > 1 ? parts.slice(0, -1).join(' ') : ''
  const lastName = parts.length > 1 ? parts[parts.length - 1] : parts[0]

  const body = {
    data: [
      {
        First_Name: firstName,
        Last_Name: lastName,
        Email: email,
        Tag: [{ name: 'website-lead-magnet' }],
        Description: `Downloaded: ${template}`,
      },
    ],
  }

  try {
    const res = await fetch('https://www.zohoapis.com.au/bigin/v1/Contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (!res.ok) {
      console.error('[lead-magnet] Bigin contact creation failed:', res.status, await res.text())
    } else {
      console.log('[lead-magnet] Bigin contact created successfully for:', email)
    }
  } catch (err) {
    console.error('[lead-magnet] Bigin contact creation error:', err)
  }
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

  const templateLabel = TEMPLATE_LABELS[template]
  const submission = {
    name,
    email,
    template,
    templateLabel,
    submittedAt: new Date().toISOString(),
  }

  console.log('[lead-magnet] New download request:', submission)
  console.log(`[lead-magnet] Notification would be sent to: ${LEAD_NOTIFICATION_ADDRESS}`)

  await createBiginContact(name, email, templateLabel)

  return NextResponse.json({ success: true })
}
