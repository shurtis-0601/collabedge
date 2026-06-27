'use client'
import { useEffect, useRef, useState } from 'react'

interface FadeInProps {
  children: React.ReactNode
  variant?: 'fadeUp' | 'fadeIn' | 'slideRight'
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export default function FadeIn({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 400,
  threshold = 0.12,
  className = '',
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  const variants = {
    fadeUp: visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
    fadeIn: visible ? 'opacity-100' : 'opacity-0',
    slideRight: visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4',
  }

  return (
    <div
      ref={ref}
      className={`transition-all ${variants[variant]} ${className}`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
