"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SLIDES = [
  {
    quote:
      "Working with CollabEdge Solutions over the past three months has completely transformed my business. The team streamlined our operations, reviewed our systems, and guided us toward better solutions. Critically, they helped us prepare for our NDIS audit — ensuring our documentation, processes, and compliance frameworks were audit-ready.",
    author: "Rebecca Delaney",
    role: "Director",
    company: "Enhance Ability Services",
  },
  {
    quote:
      "Sinclair and the CollabEdge team brought clarity to what felt like an overwhelming compliance landscape. Their hands-on guidance meant we were fully prepared and confident going into our audit. The structured approach they gave us has become the backbone of how we run our practice.",
    author: "Katelyn Leighton",
    role: "Principal",
    company: "Leighton Care Group",
  },
  {
    quote:
      "CollabEdge Solutions doesn't just advise — they roll up their sleeves and get things done. The workflow automation they implemented saved us hours every week and gave our team the breathing room to focus on what matters: our clients.",
    author: "Dale Beaumont",
    role: "CEO",
    company: "Impact Services Australia",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (index: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 250);
  };

  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);
  const next = () => goTo((current + 1) % SLIDES.length);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = SLIDES[current];

  return (
    <div>
      {/* Slide */}
      <div
        className="transition-opacity duration-250"
        style={{ opacity: fading ? 0 : 1 }}
        role="region"
        aria-live="polite"
        aria-label="Testimonials"
      >
        <span className="block font-serif text-gold text-5xl leading-none mb-4" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="text-[17px] text-white/90 leading-relaxed font-serif italic max-w-2xl mb-5">
          {slide.quote}
        </blockquote>
        <p className="text-[13px] text-white/50">
          — <span className="text-white font-semibold">{slide.author}</span>, {slide.role},{" "}
          {slide.company}
        </p>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
            <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-gold" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Google review strip */}
      <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-[13px] text-white/60">
        <span className="text-gold">★★★★★</span>
        <span>5.0 on Google · 11 reviews ·</span>
        <Link
          href="https://g.page/r/collabedge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline"
        >
          Read all reviews →
        </Link>
      </div>
    </div>
  );
}
