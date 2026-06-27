type Props = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export default function TestimonialBlock({ quote, author, role, company }: Props) {
  return (
    <section className="bg-navy-deep py-14 px-10">
      <div className="max-w-container mx-auto">
        <span className="block font-serif text-gold text-6xl leading-none mb-4" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="text-[18px] text-white/90 leading-relaxed font-serif italic max-w-3xl">
          {quote}
        </blockquote>
        <p className="mt-6 text-[13px] text-white/50">
          — <span className="text-white font-semibold">{author}</span>, {role}, {company}
        </p>
      </div>
    </section>
  );
}
