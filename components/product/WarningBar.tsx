import React from "react";

export default function WarningBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 px-5 py-4">
      <p className="text-[14px] text-amber-900 leading-relaxed flex gap-2 items-start">
        <span className="text-amber-500 mt-0.5" aria-hidden="true">⚠</span>
        {children}
      </p>
    </div>
  );
}
