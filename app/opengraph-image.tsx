import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'CollabEdge Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#030F23',
          padding: '80px 90px',
        }}
      >
        <div
          style={{
            width: 64,
            height: 4,
            backgroundColor: '#C6973F',
            marginBottom: 36,
            display: 'flex',
          }}
        />
        <div
          style={{
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#E6B85C',
            marginBottom: 20,
            display: 'flex',
          }}
        >
          CollabEdge Solutions
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.15,
            maxWidth: 940,
            display: 'flex',
          }}
        >
          Simplify. Streamline. Automate. Grow.
        </div>
        <div
          style={{
            fontSize: 26,
            color: '#D1D5DB',
            marginTop: 28,
            maxWidth: 880,
            display: 'flex',
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
