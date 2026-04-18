export default function SectionDivider({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <p className="gold-rule text-xs sm:text-sm">━━━━━━━━━━━━━━━━━━━</p>
      {label && (
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold my-4">
          {label}
        </h2>
      )}
      <p className="gold-rule text-xs sm:text-sm">━━━━━━━━━━━━━━━━━━━</p>
    </div>
  );
}
