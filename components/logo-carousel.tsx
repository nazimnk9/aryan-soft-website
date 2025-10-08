"use client"

import { useEffect, useRef } from "react"

const companies = [
  { name: "Google", logo: "🔍" },
  { name: "Microsoft", logo: "🪟" },
  { name: "Amazon", logo: "📦" },
  { name: "Meta", logo: "👥" },
  { name: "Apple", logo: "🍎" },
  { name: "Netflix", logo: "🎬" },
  { name: "Tesla", logo: "⚡" },
  { name: "Spotify", logo: "🎵" },
  { name: "Adobe", logo: "🎨" },
  { name: "Salesforce", logo: "☁️" },
  { name: "Oracle", logo: "🔴" },
  { name: "IBM", logo: "💼" },
]

export default function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0

    const animate = () => {
      scrollPosition += 0.5
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden py-12 relative">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div ref={scrollRef} className="flex gap-16 overflow-x-hidden scrollbar-hide" style={{ scrollBehavior: "auto" }}>
        {/* Duplicate the logos twice for seamless loop */}
        {[...companies, ...companies].map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="flex-shrink-0 flex flex-col items-center justify-center gap-3 group py-2"
          >
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center text-5xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 border border-primary/10 dark:border-primary/20">
              {company.logo}
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
