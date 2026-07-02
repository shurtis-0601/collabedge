import React from "react";

export default function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark mb-2.5 ${className}`}>
      {children}
    </p>
  );
}
