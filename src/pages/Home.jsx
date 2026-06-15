import { useState } from 'react'
import { ChevronLeft, ChevronRight } from '../components/icons'

const slides = [
  {
    title: 'Welcome back to your Student Portal',
    subtitle: 'Stay on top of your courses, grades and university services.',
    color: 'from-portal-header to-portal-headerDark',
  },
  {
    title: 'Spring 2026 results are now available',
    subtitle: 'Head to Student Results to view your grades and attendance.',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    title: 'AASTMT — Smart Campus Initiative',
    subtitle: 'Discover the latest digital services for students.',
    color: 'from-amber-500 to-orange-600',
  },
]

const thumbs = [
  { label: 'Achievement', color: 'from-sky-300 to-sky-500' },
  { label: 'Calendar', color: 'from-emerald-200 to-emerald-400' },
  { label: 'Transcript', color: 'from-amber-200 to-amber-400' },
  { label: 'Clinic', color: 'from-indigo-300 to-indigo-500' },
]

export default function Home() {
  const [idx, setIdx] = useState(0)
  const slide = slides[idx]

  return (
    <div className="p-5 lg:p-7 space-y-5">
      <div className="relative bg-white rounded-md shadow-card border border-portal-border overflow-hidden">
        <div className={`bg-gradient-to-br ${slide.color} text-white p-10 min-h-[280px] flex flex-col items-center justify-center text-center`}>
          <h2 className="text-3xl font-semibold drop-shadow-sm">{slide.title}</h2>
          <p className="mt-3 text-white/90 max-w-xl">{slide.subtitle}</p>
        </div>
        <button
          onClick={() => setIdx((idx - 1 + slides.length) % slides.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur w-10 h-10 rounded-full flex items-center justify-center text-white"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setIdx((idx + 1) % slides.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur w-10 h-10 rounded-full flex items-center justify-center text-white"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2.5 h-2.5 rounded-full ${i === idx ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {thumbs.map((t) => (
          <div
            key={t.label}
            className={`bg-gradient-to-br ${t.color} rounded-md shadow-card border border-portal-border min-h-[140px] flex items-center justify-center text-white font-semibold text-lg`}
          >
            {t.label}
          </div>
        ))}
      </div>
    </div>
  )
}
