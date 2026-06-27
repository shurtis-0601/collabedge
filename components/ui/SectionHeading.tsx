import GoldRule from "./GoldRule";
import Eyebrow from "./Eyebrow";

type Props = {
  eyebrow?: string;
  heading: string;
  sub?: string;
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({ eyebrow, heading, sub, dark = false, className = "" }: Props) {
  return (
    <div className={className}>
      <GoldRule />
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`text-[26px] font-bold leading-tight tracking-[-0.02em] ${
          dark ? "text-white" : "text-text-dark"
        }`}
      >
        {heading}
      </h2>
      {sub && (
        <p className={`mt-3 text-[14px] leading-relaxed ${dark ? "text-white/70" : "text-slate"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
