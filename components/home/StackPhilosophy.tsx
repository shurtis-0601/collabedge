import GoldRule from "@/components/ui/GoldRule";
import Eyebrow from "@/components/ui/Eyebrow";

const STACK_ITEMS = [
  {
    icon: "🔷",
    name: "Microsoft 365",
    desc: "Teams, SharePoint, Copilot — the platform most Australian organisations already pay for.",
  },
  {
    icon: "🔵",
    name: "Google Workspace",
    desc: "Drive, Docs, Gemini — collaborative, cloud-native, and deeply integrated.",
  },
  {
    icon: "🤖",
    name: "AI — Applied",
    desc: "Copilot, Gemini, and purpose-built AI automations layered on what you already have.",
  },
];

type Props = {
  heading?: string;
  body?: string;
};

export default function StackPhilosophy({
  heading = "Your existing stack. Fully unlocked.",
  body = "Most organisations have Microsoft 365 or Google Workspace. They're using 20% of what they've already paid for. We close the gap — adding AI where it compounds, automating what wastes time, and building on the foundation you already own.",
}: Props) {
  return (
    <section className="bg-navy-mid py-14 px-10">
      <div className="max-w-container mx-auto">
        <GoldRule />
        <Eyebrow>The CollabEdge Stack Philosophy</Eyebrow>
        <h2 className="text-[26px] font-bold text-white leading-tight tracking-[-0.02em] mb-3 max-w-xl">
          {heading}
        </h2>
        <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-xl mb-10">{body}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[2px] bg-white/10">
          {STACK_ITEMS.map((item) => (
            <div key={item.name} className="bg-navy-mid p-6">
              <span className="text-3xl block mb-3">{item.icon}</span>
              <h3 className="text-[18px] font-bold text-white mb-1.5">{item.name}</h3>
              <p className="text-[14px] text-[#D1D5DB] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[18px] font-bold text-brand-goldDark">
          M365 + Google + AI = enough.
        </p>
      </div>
    </section>
  );
}
