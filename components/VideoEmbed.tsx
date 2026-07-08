'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

type VideoEmbedProps = {
  videoId: string
  title: string
  duration: string
}

export default function VideoEmbed({ videoId, title, duration }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-navy-deep">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group relative w-full aspect-video rounded-xl overflow-hidden bg-navy-deep block text-left"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/25 transition-colors duration-200" />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <Play size={26} className="text-navy ml-1" fill="currentColor" />
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-deep/95 to-transparent p-4">
        <p className="text-[14px] font-semibold text-white leading-snug">{title}</p>
        <p className="text-[13px] text-[#D1D5DB] mt-0.5">{duration}</p>
      </div>
    </button>
  )
}
