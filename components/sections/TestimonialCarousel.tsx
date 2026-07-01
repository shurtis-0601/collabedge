'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "It is so rare to come across an individual like Sinclair. His energy is infectious and his passion is so pure. The most impressive thing about Sinclair is his willingness to always learn and being there for everyone as a team player. In a short period of time he established himself as a subject matter expert on digital initiatives and independently drove a number of digital transformation projects working with various stakeholders across Citi. I was so lucky to have him in my team and would not hesitate to hire him again.",
    name: "Dr. Bala Venkat",
    role: "Data Leader and Digital Banking Executive",
    context: "Managed Sinclair directly at Citibank Singapore",
    year: "2024",
  },
  {
    quote: "Working with Sinclair is just simply amazing. He always gives his best in everything he does. When encountering an issue, his positive mentality will put you in good stead. He is known as: Sincere, Intelligent, Natural, Capable, Legendary, Adaptable, Impressive, Rare.",
    name: "Beth Lim",
    role: "Assistant Banker",
    context: "Colleague at Citibank Singapore",
    year: "2024",
  },
  {
    quote: "I was part of Sinclair's team. Working with him gave me exposure to project management and taught me how to think outside the box. His energy is infectious and he leads teams with vigour and life. It is almost impossible to have low morale around him.",
    name: "Sneha Sanjay",
    role: "Head of Growth, Podium",
    context: "Reported to Sinclair at Citibank Singapore",
    year: "2024",
  },
  {
    quote: "Sinclair is one of the most efficient and knowledgeable people I know. Our team always approaches him when we encounter problems in the systems. He swiftly addresses and solves issues. Very thankful to have him around.",
    name: "Valerie Yan",
    role: "Investment Counselor",
    context: "Colleague at Citibank Singapore",
    year: "2024",
  },
  {
    quote: "Sinclair worked in one of my strategic BI projects, first as the project manager, then as the test manager. In both roles, Sinclair has shown that he is a trustworthy team member who will complete tasks independently and with minimal supervision. In many occasions, Sinclair not only delivered what he committed to, but also took on additional assignments to ensure the project was delivered within the agreed schedule.",
    name: "Pang Siong Ong",
    role: "Executive IT Leader, Data Strategy and Enterprise Architecture",
    context: "Client at DBS Singapore",
    year: "2013",
  },
  {
    quote: "In his role as Delivery Lead at NAB, he truly led the team and was inspirational in his positive and effective attitude towards overcoming obstacles. His perseverance and resoluteness was matched by his aptitude for absorbing and understanding technical issues. I have no doubt that Sinclair will succeed in whatever role he pursues.",
    name: "John Castillo",
    role: "NAB Marketing Data Infrastructure",
    context: "Colleague at NAB",
    year: "2012",
  },
  {
    quote: "Sinclair provided valuable expertise and professionalism within the Customer Analysis unit I managed at NAB. During the initial period of the uplift activity, his can-do attitude, willingness to challenge, eye for detail and push for higher quality outcomes was crucial. I would not hesitate to endorse Sinclair's abilities to achieve similar outcomes going forward.",
    name: "Kenneth Domantay",
    role: "Senior Manager and Consultant, Analytics and Data Warehousing",
    context: "Managed Sinclair directly at NAB",
    year: "2012",
  },
  {
    quote: "Sinclair managed delivery of a very complex and involved Data Warehousing product utilising MicroStrategy. Without his input, the project would not have delivered.",
    name: "Richard Hartas",
    role: "VP, Global Technology Enterprise Systems, DFS Group",
    context: "Client engagement",
    year: "2010",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [paused])

  const handlePrev = () => {
    setClicked(true)
    setPaused(true)
    setCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1))
  }

  const handleNext = () => {
    setClicked(true)
    setPaused(true)
    setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1))
  }

  const t = testimonials[current]

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { if (!clicked) setPaused(false) }}
    >
      <div className="text-[36px] text-gold/25 font-serif leading-none mb-4">&ldquo;</div>
      <blockquote className="font-serif italic text-[15px] md:text-[17px] text-white leading-relaxed mb-6 min-h-[120px]">
        {t.quote}
      </blockquote>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-[14px] font-semibold text-white">{t.name}</p>
          <p className="text-[12px] text-gold">{t.role}</p>
          <p className="text-[11px] text-white/40 mt-0.5">
            {t.context} &middot; {t.year}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/[0.15] flex items-center justify-center hover:bg-white/[0.15] transition-colors"
          >
            <ChevronLeft size={16} className="text-white" />
          </button>
          <span className="text-[12px] text-white/40">
            {current + 1} / {testimonials.length}
          </span>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/[0.15] flex items-center justify-center hover:bg-white/[0.15] transition-colors"
          >
            <ChevronRight size={16} className="text-white" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-6 flex-wrap">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => { setClicked(true); setPaused(true); setCurrent(i) }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-6 bg-gold' : 'w-1.5 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}