import React from "react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

export default function ProductFeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-border">
      {features.map((f) => (
        <div key={f.title} className="bg-white p-[22px]">
          <div className="text-2xl mb-3">{f.icon}</div>
          <h3 className="text-[18px] font-bold text-text-dark leading-snug mb-2">{f.title}</h3>
          <p className="text-[14px] text-slate leading-relaxed">{f.body}</p>
        </div>
      ))}
    </div>
  );
}
