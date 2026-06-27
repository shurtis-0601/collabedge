import React from "react";

export default function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[11px] font-semibold tracking-[.16em] uppercase text-gold mb-2.5 ${className}`}>
      {children}
    </p>
  );
}
