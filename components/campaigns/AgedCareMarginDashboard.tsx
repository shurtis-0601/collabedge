'use client'

const BLUE   = '#3B82F6'
const RED    = '#EF4444'
const AMBER  = '#F59E0B'
const GOLD   = '#D4941E'
const TEAL   = '#0D9488'
const ORANGE = '#F97316'
const INDIGO = '#6366F1'
const BORDER = '#E5E7EB'
const TEXT_DARK  = '#1F2937'
const TEXT_MID   = '#374151'
const TEXT_MUTED = '#6B7280'
const FONT = 'Inter,system-ui,sans-serif'

const MONTHS = ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun']
const BILLED = [142, 138, 151, 144, 147, 130, 125, 148, 156, 149, 152, 158]
const COST   = [158, 152, 168, 159, 163, 148, 141, 165, 172, 163, 168, 175]
const GAP    = MONTHS.map((_, i) => COST[i] - BILLED[i])

const SHIFT_DATA = [
  { label: 'Evening',        value: 58, color: GOLD   },
  { label: 'Weekend',        value: 47, color: BLUE   },
  { label: 'Public holiday', value: 39, color: TEAL   },
  { label: 'Broken shift',   value: 42, color: ORANGE },
  { label: 'Night',          value: 32, color: INDIGO },
]

const TILES = [
  { label: 'Total Leakage YTD',      value: '$218k', color: '#DC2626' },
  { label: 'Overtime Cost',          value: '$94k',  color: AMBER     },
  { label: 'SCHADS Penalties',       value: '$71k',  color: ORANGE    },
  { label: 'Unbilled Cancellations', value: '$53k',  color: GOLD      },
]

// Grouped bar chart layout
const GCX = 42
const GCW = 666
const GCH = 154
const GCB = 14 + GCH   // = 168
const G_YMAX = 200
const G_BAR_W = 9
const G_BAR_GAP = 2
const G_SLOT_W = GCW / 12
const G_GROUP_W = 3 * G_BAR_W + 2 * G_BAR_GAP   // 31
const G_GROUP_OFF = (G_SLOT_W - G_GROUP_W) / 2

const gY = (v: number) => GCB - (v / G_YMAX) * GCH
const gH = (v: number) => (v / G_YMAX) * GCH

// Horizontal bar chart layout
const HLW   = 130
const HBARL = 134
const HBARR = 708
const HBW   = HBARR - HBARL   // 574
const H_XMAX = 65
const H_ROW  = 34
const H_BH   = 22
const H_YS   = 8
const H_AXY  = 180

const hX = (v: number) => (v / H_XMAX) * HBW

function GroupedBarChart() {
  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <span className="text-[12px] font-semibold text-[#374151]">
          Monthly Billed Hours Value vs Paid Hours Cost ($k)
        </span>
        <div className="flex items-center gap-3 text-[11px] text-[#6B7280]">
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-2.5 rounded-sm flex-shrink-0" style={{ background: BLUE }} />
            Billed hours value
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-2.5 rounded-sm flex-shrink-0" style={{ background: RED }} />
            Paid hours cost
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-2.5 rounded-sm flex-shrink-0" style={{ background: AMBER }} />
            Gap
          </span>
        </div>
      </div>
      <svg viewBox="0 0 720 195" className="w-full h-auto" aria-hidden="true">
        {[50, 100, 150, 200].map(v => {
          const y = gY(v)
          return (
            <g key={v}>
              <line x1={GCX} y1={y} x2={GCX + GCW} y2={y} stroke={BORDER} strokeWidth={1} strokeDasharray="3,3" />
              <text x={GCX - 4} y={y + 4} fontSize={10} fill={TEXT_MUTED} textAnchor="end" fontFamily={FONT}>{v}</text>
            </g>
          )
        })}
        <line x1={GCX} y1={GCB} x2={GCX + GCW} y2={GCB} stroke={BORDER} strokeWidth={1.5} />
        {MONTHS.map((month, i) => {
          const gx  = GCX + i * G_SLOT_W
          const b1x = gx + G_GROUP_OFF
          const b2x = b1x + G_BAR_W + G_BAR_GAP
          const b3x = b2x + G_BAR_W + G_BAR_GAP
          return (
            <g key={month}>
              <rect x={b1x} y={gY(BILLED[i])} width={G_BAR_W} height={gH(BILLED[i])} rx={2} fill={BLUE} />
              <rect x={b2x} y={gY(COST[i])}   width={G_BAR_W} height={gH(COST[i])}   rx={2} fill={RED}  />
              <rect x={b3x} y={gY(GAP[i])}    width={G_BAR_W} height={gH(GAP[i])}    rx={2} fill={AMBER}/>
              <text x={gx + G_SLOT_W / 2} y={GCB + 14} fontSize={10} fill={TEXT_MUTED} textAnchor="middle" fontFamily={FONT}>
                {month}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

function HorizontalBarChart() {
  return (
    <div>
      <span className="block text-[12px] font-semibold text-[#374151] mb-2">
        Leakage by Shift Type ($k)
      </span>
      <svg viewBox="0 0 720 200" className="w-full h-auto" aria-hidden="true">
        {[0, 20, 40, 60].map(v => {
          const x = HBARL + hX(v)
          return (
            <g key={v}>
              <line x1={x} y1={H_YS} x2={x} y2={H_AXY} stroke={BORDER} strokeWidth={1} strokeDasharray="3,3" />
              <text x={x} y={H_AXY + 14} fontSize={10} fill={TEXT_MUTED} textAnchor="middle" fontFamily={FONT}>
                ${v}k
              </text>
            </g>
          )
        })}
        <line x1={HBARL} y1={H_AXY} x2={HBARR} y2={H_AXY} stroke={BORDER} strokeWidth={1.5} />
        {SHIFT_DATA.map((d, i) => {
          const y  = H_YS + i * H_ROW
          const bw = hX(d.value)
          return (
            <g key={d.label}>
              <text x={HLW - 4} y={y + 15} fontSize={11} fill={TEXT_MID} textAnchor="end" fontFamily={FONT}>
                {d.label}
              </text>
              <rect x={HBARL} y={y + 2} width={bw} height={H_BH} rx={3} fill={d.color} />
              <text x={HBARL + bw + 5} y={y + 15} fontSize={11} fill={TEXT_DARK} fontFamily={FONT}>
                ${d.value}k
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default function AgedCareMarginDashboard() {
  return (
    <figure
      className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-sm bg-white"
      aria-label="Aged care workforce margin dashboard showing illustrative data"
    >
      <div className="bg-[#030F23] px-4 py-3 flex items-center justify-between">
        <span className="text-[13px] font-semibold text-white">
          Aged Care Workforce Margin Dashboard
        </span>
        <span className="text-[11px] text-[#9CA3AF] border border-[#1E3A5F] rounded px-2 py-0.5">
          Illustrative
        </span>
      </div>

      <div className="bg-[#F9FAFB] px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-b border-[#E5E7EB]">
        {TILES.map((tile) => (
          <div key={tile.label} className="bg-white rounded-lg border border-[#E5E7EB] p-3">
            <div className="text-[22px] font-bold leading-tight" style={{ color: tile.color }}>
              {tile.value}
            </div>
            <div className="text-[12px] text-[#6B7280] mt-0.5 leading-snug">{tile.label}</div>
          </div>
        ))}
      </div>

      <div className="px-5 pt-5 pb-3">
        <GroupedBarChart />
      </div>

      <div className="border-t border-[#E5E7EB] mx-5" />

      <div className="px-5 pt-5 pb-5">
        <HorizontalBarChart />
      </div>

      <div className="bg-[#F9FAFB] border-t border-[#E5E7EB] px-4 py-2.5">
        <p className="text-[11px] text-[#9CA3AF] text-center">
          All figures are illustrative mock data for demonstration purposes only.
        </p>
      </div>

      <figcaption className="sr-only">
        Aged care workforce margin dashboard with illustrative data. Total leakage year to date 218 thousand dollars, comprising 94 thousand overtime cost, 71 thousand SCHADS penalties, and 53 thousand unbilled cancellations. Monthly billed hours value compared to paid hours cost across July to June. Leakage by shift type: evening 58 thousand, weekend 47 thousand, broken shift 42 thousand, public holiday 39 thousand, night 32 thousand.
      </figcaption>
    </figure>
  )
}
