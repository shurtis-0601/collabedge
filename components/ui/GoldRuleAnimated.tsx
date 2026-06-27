'use client'
import { useEffect, useRef, useState } from 'react'

export default function GoldRuleAnimated({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`h-[2px] bg-gold mb-3 transition-all duration-500 ease-out ${className}`}
      style={{ width: visible ? '36px' : '0px' }}
    />
  )
}
