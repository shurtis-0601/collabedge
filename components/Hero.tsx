import FadeIn from "./FadeIn";

export default function Hero({
  eyebrow,
  title,
  subtitle,
  meta,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  meta?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 50% 0%, rgba(198,151,63,0.15), transparent 60%), radial-gradient(900px 500px at 80% 100%, rgba(56,182,255,0.08), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-container px-6 pt-20 pb-16 sm:pt-28 sm:pb-24 text-center">
        {eyebrow && (
          <FadeIn>
            <p className="text-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-6">
              {eyebrow}
            </p>
          </FadeIn>
        )}
        <FadeIn delay={80}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] text-gold max-w-4xl mx-auto">
            {title}
          </h1>
        </FadeIn>
        {subtitle && (
          <FadeIn delay={200}>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </FadeIn>
        )}
        {meta && (
          <FadeIn delay={320}>
            <p className="mt-6 text-sm sm:text-base text-white/70">{meta}</p>
          </FadeIn>
        )}
        {children && (
          <FadeIn delay={420}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {children}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
