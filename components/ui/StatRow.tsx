type Stat = {
  value: string;
  label: string;
};

export default function StatRow({ stats, dark = true }: { stats: Stat[]; dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className={`text-[28px] font-bold tracking-tight leading-none ${dark ? "text-white" : "text-text-dark"}`}>
            {stat.value}
          </p>
          <p className={`text-[12px] mt-1 ${dark ? "text-white/60" : "text-slate"}`}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
