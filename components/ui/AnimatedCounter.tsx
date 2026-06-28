'use client'
import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: string
  label: string
  dark?: boolean
}

export default function AnimatedCounter({ value, label, dark = true }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [displayed, setDisplayed] = useState('0')
  const [triggered, setTriggered] = useState(false)

  const match = value.match(/^(\d+)(.*)$/)
  const numericTarget = match ? parseInt(match[1]) : null
  const suffix = match ? match[2] : ''
  const isNonNumeric = !numericTarget

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !triggered) setTriggered(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [triggered])

  useEffect(() => {
    if (!triggered) return
    if (isNonNumeric) { setDisplayed(value); return }
    let start = 0
    const duration = 1200
    const step = 16
    const increment = numericTarget! / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= numericTarget!) {
        setDisplayed(`${numericTarget}${suffix}`)
        clearInterval(timer)
      } else {
        setDisplayed(`${Math.floor(start)}${suffix}`)
      }
    }, step)
    return () => clearInterval(timer)
  }, [triggered, numericTarget, suffix, isNonNumeric, value])

  return (
    <div ref={ref} className="flex flex-col">
      <span className={`text-[22px] font-extrabold leading-none tracking-tight ${dark ? 'text-white' : 'text-navy'}`}>
        {triggered ? displayed : (isNonNumeric ? value : `0${suffix}`)}
      </span>
      <span className={`text-[10px] mt-1 uppercase tracking-[.06em] ${dark ? 'text-white/35' : 'text-navy/60'}`}>
        {label}
      </span>
    </div>
  )
}
