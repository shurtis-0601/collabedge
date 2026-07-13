// LAUNCH CHECKLIST:
// 1. Uses the same Bigin credentials as the lead magnet
//    route (BIGIN_CLIENT_ID, BIGIN_CLIENT_SECRET,
//    BIGIN_REFRESH_TOKEN), already set in .env.local
//    and Vercel.
// 2. Submissions are tagged "automation-idea-submission"
//    in Bigin, separate from "website-lead-magnet", so
//    they can be filtered into their own view or list.
// 3. Test end to end: submit the form, confirm a new
//    Contact appears in Bigin with the tag
//    "automation-idea-submission" and the idea details
//    in the Description field.

import { NextRequest, NextResponse } from 'next/server'

const AREA_LABELS: Record<string, string> = {
  'ndis-healthcare': 'NDIS and Healthcare',
  'growth-marketing': 'Growth and Marketing',
  other: 'Other',
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
      console.error('[automation-idea] Bigin token exchange failed:', res.status, await res.text())
      return null
    }
    const data = await res.json()
    return data.access_token ?? null
  } catch (err) {
    console.error('[automation-idea] Bigin token exchange error:', err)
    return null
  }
}

async function createBiginContact(
  name: string,
  email: string,
  areaLabel: string,
  idea: string,
  teamSize: string
): Promise<void> {
  const accessToken = await getBiginAccessToken()
  if (!accessToken) return

  const parts = name.trim().split(/\s+/)
  const firstName = parts.length > 1 ? parts.slice(0, -1).join(' ') : ''
  const lastName = parts.length > 1 ? parts[parts.length - 1] : parts[0]

  const descriptionLines = [
    `Area: ${areaLabel}`,
    teamSize ? `Team size: ${teamSize}` : null,
    `Idea: ${idea}`,
  ].filter(Boolean)

  const body = {
    data: [
      {
        First_Name: firstName,
        Last_Name: lastName,
        Email: email,
        Tag: [{ name: 'automation-idea-submission' }],
        Description: descriptionLines.join('\n'),
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
      console.error('[automation-idea] Bigin contact creation failed:', res.status, await res.text())
    } else {
      console.log('[automation-idea] Bigin contact created successfully for:', email)
    }
  } catch (err) {
    console.error('[automation-idea] Bigin contact creation error:', err)
  }
}

export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string; area?: string; idea?: string; teamSize?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request body.' }, { status: 400 })
  }

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const area = (body.area ?? '').trim()
  const idea = (body.idea ?? '').trim()
  const teamSize = (body.teamSize ?? '').trim()

  if (!name || !email || !area || !idea) {
    return NextResponse.json(
      { success: false, error: 'Name, email, area, and idea are required.' },
      { status: 400 }
    )
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: 'Enter a valid email address.' },
      { status: 400 }
    )
  }

  if (!AREA_LABELS[area]) {
    return NextResponse.json(
      { success: false, error: 'Unknown area selection.' },
      { status: 400 }
    )
  }

  const areaLabel = AREA_LABELS[area]
  const submission = {
    name,
    email,
    area,
    areaLabel,
    idea,
    teamSize,
    submittedAt: new Date().toISOString(),
  }

  console.log('[automation-idea] New idea submission:', submission)

  await createBiginContact(name, email, areaLabel, idea, teamSize)

  return NextResponse.json({ success: true })
}
