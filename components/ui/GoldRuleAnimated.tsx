'use client'
import { useEffect, useRef, useState } from 'react'

export default function GoldRuleAnimated({ className = '', center = false }: { className?: string; center?: boolean }) {
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
    <div ref={ref} className={`mb-3 ${center ? 'flex justify-center' : ''} ${className}`}>
      <div
        className="h-[2px] bg-gold transition-all duration-500 ease-out"
        style={{ width: visible ? (center ? '60px' : '36px') : '0px' }}
      />
    </div>
  )
}
