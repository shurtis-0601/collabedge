import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'CollabEdge Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// NOTE ON SAFE ZONE:
// Some Facebook surfaces (Groups, Messenger link cards, certain mobile feed
// placements) center-crop this 1200x630 image down to a roughly square
// 630x630 region rather than showing the full 1.91:1 banner. That means
// anything outside the centre ~630px wide band (roughly x=285 to x=915)
// can be clipped off on the left and right. All content below is centred
// and width-constrained so it survives both the full wide crop and the
// square crop intact.

export default async function OpengraphImage() {
  const logoData = await readFile(
    join(process.cwd(), 'public/images/logo.png')
  )
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#030F23',
          padding: '60px 80px',
        }}
      >
        <div
          style={{
            width: 64,
            height: 4,
            backgroundColor: '#C6973F',
            marginBottom: 32,
            display: 'flex',
          }}
        />
        <img
          src={logoSrc}
          width={360}
          height={93}
          style={{ marginBottom: 36, display: 'flex' }}
        />
        <div
          style={{
            fontSize: 50,
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.2,
            maxWidth: 600,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Simplify. Streamline. Automate. Grow.
        </div>
        <div
          style={{
            fontSize: 23,
            color: '#D1D5DB',
            marginTop: 26,
            maxWidth: 560,
            textAlign: 'center',
            lineHeight: 1.4,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          NDIS compliance, automation, and enterprise technology for Australian and Asia Pacific businesses.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
