// Server component — static SVG, no client state needed

export type StatCardData = {
  value: string
  label: string
}

export type BarChartConfig = {
  type: 'bar'
  title: string
  labels: string[]
  values: number[]
  yMax?: number
  yUnit?: string
}

export type TrendConfig = {
  type: 'trend'
  title: string
  points: number[]
  xLabels?: string[]
  yMax?: number
  yUnit?: string
}

export type ChartConfig = BarChartConfig | TrendConfig

type Props = {
  dashboardTitle: string
  statCards: StatCardData[]
  chart: ChartConfig
}

// Colour constants — no Tailwind inside SVG
const C = {
  navy: '#030F23',
  gold: '#D4941E',
  textDark: '#1F2937',
  textMid: '#374151',
  textMuted: '#6B7280',
  border: '#E5E7EB',
  panelBg: '#F9FAFB',
  white: '#FFFFFF',
}

// SVG canvas dimensions
const W = 760
const H = 350

// Chart plot area
const CX = 52   // left edge (leaves room for y-axis labels)
const CY = 148  // top edge
const CW = 692  // width
const CH = 142  // height
const CB = CY + CH  // bottom edge

function BarChart({ chart }: { chart: BarChartConfig }) {
  const yMax = chart.yMax ?? 100
  const unit = chart.yUnit ?? '%'
  const count = chart.values.length
  const slotW = CW / count
  const barW = Math.min(slotW * 0.55, 70)
  const yLevels = [0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(f * yMax))

  return (
    <>
      <text x={CX} y={CY - 10} fontSize={12} fill={C.textMuted} fontFamily="Inter, system-ui, sans-serif">
        {chart.title}
      </text>

      {yLevels.map((val) => {
        const y = CB - (val / yMax) * CH
        return (
          <g key={val}>
            <line
              x1={CX} y1={y} x2={CX + CW} y2={y}
              stroke={C.border} strokeWidth={1}
              strokeDasharray={val === 0 ? '' : '3,3'}
            />
            <text x={CX - 6} y={y + 4} fontSize={10} fill={C.textMuted} textAnchor="end" fontFamily="Inter, system-ui, sans-serif">
              {val}{unit}
            </text>
          </g>
        )
      })}

      {chart.values.map((val, i) => {
        const bh = (val / yMax) * CH
        const bx = CX + i * slotW + (slotW - barW) / 2
        const by = CB - bh
        return (
          <g key={i}>
            <rect x={bx} y={by} width={barW} height={bh} rx={3} fill={C.gold} opacity={0.9} />
            <text
              x={bx + barW / 2} y={CB + 15}
              fontSize={10} fill={C.textMuted} textAnchor="middle"
              fontFamily="Inter, system-ui, sans-serif"
            >
              {chart.labels[i]}
            </text>
          </g>
        )
      })}

      <line x1={CX} y1={CB} x2={CX + CW} y2={CB} stroke={C.border} strokeWidth={1.5} />
    </>
  )
}

function TrendChart({ chart }: { chart: TrendConfig }) {
  const yMax = chart.yMax ?? 100
  const unit = chart.yUnit ?? '%'
  const n = chart.points.length
  const xStep = n > 1 ? CW / (n - 1) : 0
  const yLevels = [0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(f * yMax))

  const pts = chart.points.map((v, i) => ({
    x: CX + i * xStep,
    y: CB - (v / yMax) * CH,
  }))

  const polyPts = pts.map((p) => `${p.x},${p.y}`).join(' ')
  const areaD = [
    `M${CX},${CB}`,
    ...pts.map((p) => `L${p.x},${p.y}`),
    `L${pts[n - 1].x},${CB}`,
    'Z',
  ].join(' ')

  return (
    <>
      <text x={CX} y={CY - 10} fontSize={12} fill={C.textMuted} fontFamily="Inter, system-ui, sans-serif">
        {chart.title}
      </text>

      {yLevels.map((val) => {
        const y = CB - (val / yMax) * CH
        return (
          <g key={val}>
            <line
              x1={CX} y1={y} x2={CX + CW} y2={y}
              stroke={C.border} strokeWidth={1}
              strokeDasharray={val === 0 ? '' : '3,3'}
            />
            <text x={CX - 6} y={y + 4} fontSize={10} fill={C.textMuted} textAnchor="end" fontFamily="Inter, system-ui, sans-serif">
              {val}{unit}
            </text>
          </g>
        )
      })}

      <path d={areaD} fill={C.gold} opacity={0.1} />
      <polyline
        points={polyPts}
        fill="none"
        stroke={C.gold}
        strokeWidth={2.5}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={3.5} fill={C.gold} stroke={C.white} strokeWidth={1.5} />
      ))}

      {chart.xLabels && chart.xLabels.map((label, i) => (
        <text
          key={i}
          x={CX + i * xStep} y={CB + 15}
          fontSize={10} fill={C.textMuted} textAnchor="middle"
          fontFamily="Inter, system-ui, sans-serif"
        >
          {label}
        </text>
      ))}

      <line x1={CX} y1={CB} x2={CX + CW} y2={CB} stroke={C.border} strokeWidth={1.5} />
    </>
  )
}

export default function CampaignDashboardMock({ dashboardTitle, statCards, chart }: Props) {
  // Stat card layout: 4 cards across 760px with 12px padding and 8px gaps
  const cardW = 178
  const cardGap = 8
  const totalW = 4 * cardW + 3 * cardGap
  const cardsX = (W - totalW) / 2

  return (
    <figure>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto rounded-xl overflow-hidden border border-[#E5E7EB] shadow-sm"
        aria-hidden="true"
        role="img"
      >
        {/* Canvas background */}
        <rect width={W} height={H} fill={C.white} />

        {/* Header strip */}
        <rect x={0} y={0} width={W} height={44} fill={C.navy} />
        <text
          x={16} y={27}
          fontSize={13} fontWeight="600" fill={C.white}
          fontFamily="Inter, system-ui, sans-serif"
        >
          {dashboardTitle}
        </text>
        <rect x={W - 112} y={10} width={100} height={22} rx={4} fill={C.white} opacity={0.1} />
        <text
          x={W - 62} y={25}
          fontSize={11} fill={C.white} opacity={0.6} textAnchor="middle"
          fontFamily="Inter, system-ui, sans-serif"
        >
          Illustrative
        </text>

        {/* Stat cards background */}
        <rect x={0} y={44} width={W} height={76} fill={C.panelBg} />

        {/* Stat cards */}
        {statCards.slice(0, 4).map((card, i) => {
          const cx = cardsX + i * (cardW + cardGap)
          return (
            <g key={i}>
              <rect x={cx} y={52} width={cardW} height={60} rx={6} fill={C.white} stroke={C.border} strokeWidth={1} />
              <text x={cx + 12} y={78} fontSize={17} fontWeight="700" fill={C.textDark} fontFamily="Inter, system-ui, sans-serif">
                {card.value}
              </text>
              <text x={cx + 12} y={100} fontSize={11} fill={C.textMuted} fontFamily="Inter, system-ui, sans-serif">
                {card.label}
              </text>
            </g>
          )
        })}

        {/* Section separator */}
        <line x1={0} y1={120} x2={W} y2={120} stroke={C.border} strokeWidth={1} />

        {/* Chart */}
        {chart.type === 'bar' ? <BarChart chart={chart} /> : <TrendChart chart={chart} />}

        {/* Caption strip */}
        <rect x={0} y={H - 30} width={W} height={30} fill={C.panelBg} />
        <line x1={0} y1={H - 30} x2={W} y2={H - 30} stroke={C.border} strokeWidth={1} />
        <text
          x={W / 2} y={H - 11}
          fontSize={11} fill={C.textMuted} textAnchor="middle"
          fontFamily="Inter, system-ui, sans-serif"
        >
          Illustrative example. Not real client data.
        </text>
      </svg>
      <figcaption className="sr-only">
        {dashboardTitle}: illustrative dashboard example, not real client data.
      </figcaption>
    </figure>
  )
}
