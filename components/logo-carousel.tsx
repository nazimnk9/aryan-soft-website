// "use client"

// import { useEffect, useRef } from "react"

// const companies = [
//   { name: "Google", logo: "🔍" },
//   { name: "Microsoft", logo: "🪟" },
//   { name: "Amazon", logo: "📦" },
//   { name: "Meta", logo: "👥" },
//   { name: "Apple", logo: "🍎" },
//   { name: "Netflix", logo: "🎬" },
//   { name: "Tesla", logo: "⚡" },
//   { name: "Spotify", logo: "🎵" },
//   { name: "Adobe", logo: "🎨" },
//   { name: "Salesforce", logo: "☁️" },
//   { name: "Oracle", logo: "🔴" },
//   { name: "IBM", logo: "💼" },
// ]

// export default function LogoCarousel() {
//   const scrollRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const scrollContainer = scrollRef.current
//     if (!scrollContainer) return

//     let animationFrameId: number
//     let scrollPosition = 0

//     const animate = () => {
//       scrollPosition += 0.5
//       if (scrollPosition >= scrollContainer.scrollWidth / 2) {
//         scrollPosition = 0
//       }
//       scrollContainer.scrollLeft = scrollPosition
//       animationFrameId = requestAnimationFrame(animate)
//     }

//     animationFrameId = requestAnimationFrame(animate)

//     return () => {
//       cancelAnimationFrame(animationFrameId)
//     }
//   }, [])

//   return (
//     <div className="w-full overflow-hidden py-12 relative sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//       {/* Gradient overlays for fade effect */}
//       <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
//       <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

//       <div ref={scrollRef} className="flex gap-16 overflow-x-hidden scrollbar-hide" style={{ scrollBehavior: "auto" }}>
//         {/* Duplicate the logos twice for seamless loop */}
//         {[...companies, ...companies].map((company, index) => (
//           <div
//             key={`${company.name}-${index}`}
//             className="flex-shrink-0 flex flex-col items-center justify-center gap-3 group py-2"
//           >
//             <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center text-5xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 border border-primary/10 dark:border-primary/20">
//               {company.logo}
//             </div>
//             <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
//               {company.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }


"use client"

import { useEffect, useRef } from "react"

const companies = [
  {
    name: "LEVANA",
    logo: (
      <svg viewBox="0 0 120 40" fill="none" className="w-full h-full">
        <path d="M15 8L20 13L15 18L10 13L15 8Z" fill="currentColor" opacity="0.6" />
        <path d="M20 13L25 18L20 23L15 18L20 13Z" fill="currentColor" />
        <text x="35" y="25" className="font-bold text-[14px]" fill="currentColor">
          LEVANA
        </text>
      </svg>
    ),
  },
  {
    name: "Newwaiter.de",
    logo: (
      <svg viewBox="0 0 140 40" fill="none" className="w-full h-full">
        <text x="5" y="25" className="font-semibold text-[14px]" fill="currentColor">
          Newwaiter.de
        </text>
      </svg>
    ),
  },
  {
    name: "Olive Tree Mortgages",
    logo: (
      <svg viewBox="0 0 180 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 20C15 20 17 15 20 15C23 15 25 20 25 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M15 20C15 20 17 25 20 25C23 25 25 20 25 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text x="38" y="18" className="font-bold text-[11px]" fill="currentColor">
          Olive Tree
        </text>
        <text x="38" y="28" className="text-[9px]" fill="currentColor" opacity="0.8">
          Mortgages
        </text>
      </svg>
    ),
  },
  {
    name: "qap",
    logo: (
      <svg viewBox="0 0 80 40" fill="none" className="w-full h-full">
        <text x="10" y="28" className="font-bold text-[24px]" fill="currentColor" style={{ letterSpacing: "0.05em" }}>
          qap
        </text>
      </svg>
    ),
  },
  {
    name: "trip trip",
    logo: (
      <svg viewBox="0 0 140 40" fill="none" className="w-full h-full">
        <rect x="5" y="8" width="16" height="16" rx="2" fill="currentColor" opacity="0.8" />
        <text x="28" y="25" className="font-bold text-[16px]" fill="currentColor">
          trip trip
        </text>
      </svg>
    ),
  },
  {
    name: "BC MORTGAGES",
    logo: (
      <svg viewBox="0 0 160 40" fill="none" className="w-full h-full">
        <path d="M8 10H12L16 20L12 30H8L12 20L8 10Z" fill="currentColor" opacity="0.7" />
        <path d="M16 10H20L24 20L20 30H16L20 20L16 10Z" fill="currentColor" opacity="0.9" />
        <text x="32" y="25" className="font-bold text-[13px]" fill="currentColor" style={{ letterSpacing: "0.1em" }}>
          BC MORTGAGES
        </text>
      </svg>
    ),
  },
  {
    name: "BANESCO",
    logo: (
      <svg viewBox="0 0 140 40" fill="none" className="w-full h-full">
        <rect x="5" y="8" width="24" height="24" rx="3" fill="currentColor" opacity="0.15" />
        <text x="10" y="24" className="font-bold text-[14px]" fill="currentColor">
          BANESCO
        </text>
        <text x="35" y="28" className="text-[8px]" fill="currentColor" opacity="0.7">
          Financial Services
        </text>
      </svg>
    ),
  },
  {
    name: "CITYPLUS FINANCE",
    logo: (
      <svg viewBox="0 0 180 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16 20L19 23L24 17"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="38" y="25" className="font-bold text-[13px]" fill="currentColor" style={{ letterSpacing: "0.05em" }}>
          CITYPLUS FINANCE
        </text>
      </svg>
    ),
  },
]

export default function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = scrollContainer.scrollWidth / 2

    const animate = () => {
      scrollPosition -= 1.5
      if (scrollPosition <= 0) {
        scrollPosition = scrollContainer.scrollWidth / 2
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
    <div className="container mx-auto w-full overflow-hidden py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-18 2xl:py-20 relative bg-[#0a2540]">
      <div className="absolute left-0 right-0 top-0 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />

      <div className="absolute left-0 right-0 bottom-0 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />

      <div className="absolute left-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 bg-gradient-to-r from-[#0a2540] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 bg-gradient-to-l from-[#0a2540] to-transparent z-10 pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div 
        ref={scrollRef} 
        className="flex gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-18 2xl:gap-20 overflow-x-hidden scrollbar-hide" 
        style={{ scrollBehavior: "auto" }}
      >
        {[...companies, ...companies, ...companies].map((company, index) => (
          <div key={`${company.name}-${index}`} className="flex-shrink-0 flex items-center justify-center">
            <div className="w-24 h-10 xs:w-28 xs:h-11 sm:w-32 sm:h-12 md:w-36 md:h-13 lg:w-40 lg:h-16 xl:w-44 xl:h-18 2xl:w-48 2xl:h-20 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-300">
              {company.logo}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// "use client"

// import { useEffect, useRef } from "react"

// const companies = [
//   {
//     name: "LEVANA",
//     logo: (
//       <svg viewBox="0 0 120 40" fill="none" className="w-full h-full">
//         <path d="M15 8L20 13L15 18L10 13L15 8Z" fill="currentColor" opacity="0.6" />
//         <path d="M20 13L25 18L20 23L15 18L20 13Z" fill="currentColor" />
//         <text x="35" y="25" className="font-bold text-[14px]" fill="currentColor">
//           LEVANA
//         </text>
//       </svg>
//     ),
//   },
//   {
//     name: "Newwaiter.de",
//     logo: (
//       <svg viewBox="0 0 140 40" fill="none" className="w-full h-full">
//         <text x="5" y="25" className="font-semibold text-[14px]" fill="currentColor">
//           Newwaiter.de
//         </text>
//       </svg>
//     ),
//   },
//   {
//     name: "Olive Tree Mortgages",
//     logo: (
//       <svg viewBox="0 0 180 40" fill="none" className="w-full h-full">
//         <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
//         <path d="M15 20C15 20 17 15 20 15C23 15 25 20 25 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
//         <path d="M15 20C15 20 17 25 20 25C23 25 25 20 25 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
//         <text x="38" y="18" className="font-bold text-[11px]" fill="currentColor">
//           Olive Tree
//         </text>
//         <text x="38" y="28" className="text-[9px]" fill="currentColor" opacity="0.8">
//           Mortgages
//         </text>
//       </svg>
//     ),
//   },
//   {
//     name: "qap",
//     logo: (
//       <svg viewBox="0 0 80 40" fill="none" className="w-full h-full">
//         <text x="10" y="28" className="font-bold text-[24px]" fill="currentColor" style={{ letterSpacing: "0.05em" }}>
//           qap
//         </text>
//       </svg>
//     ),
//   },
//   {
//     name: "trip trip",
//     logo: (
//       <svg viewBox="0 0 140 40" fill="none" className="w-full h-full">
//         <rect x="5" y="8" width="16" height="16" rx="2" fill="currentColor" opacity="0.8" />
//         <text x="28" y="25" className="font-bold text-[16px]" fill="currentColor">
//           trip trip
//         </text>
//       </svg>
//     ),
//   },
//   {
//     name: "BC MORTGAGES",
//     logo: (
//       <svg viewBox="0 0 160 40" fill="none" className="w-full h-full">
//         <path d="M8 10H12L16 20L12 30H8L12 20L8 10Z" fill="currentColor" opacity="0.7" />
//         <path d="M16 10H20L24 20L20 30H16L20 20L16 10Z" fill="currentColor" opacity="0.9" />
//         <text x="32" y="25" className="font-bold text-[13px]" fill="currentColor" style={{ letterSpacing: "0.1em" }}>
//           BC MORTGAGES
//         </text>
//       </svg>
//     ),
//   },
//   {
//     name: "BANESCO",
//     logo: (
//       <svg viewBox="0 0 140 40" fill="none" className="w-full h-full">
//         <rect x="5" y="8" width="24" height="24" rx="3" fill="currentColor" opacity="0.15" />
//         <text x="10" y="24" className="font-bold text-[14px]" fill="currentColor">
//           BANESCO
//         </text>
//         <text x="35" y="28" className="text-[8px]" fill="currentColor" opacity="0.7">
//           Financial Services
//         </text>
//       </svg>
//     ),
//   },
//   {
//     name: "CITYPLUS FINANCE",
//     logo: (
//       <svg viewBox="0 0 180 40" fill="none" className="w-full h-full">
//         <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
//         <path
//           d="M16 20L19 23L24 17"
//           stroke="currentColor"
//           strokeWidth="2"
//           fill="none"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <text x="38" y="25" className="font-bold text-[13px]" fill="currentColor" style={{ letterSpacing: "0.05em" }}>
//           CITYPLUS FINANCE
//         </text>
//       </svg>
//     ),
//   },
// ]

// export default function LogoCarousel() {
//   const scrollRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const scrollContainer = scrollRef.current
//     if (!scrollContainer) return

//     let animationFrameId: number
//     let scrollPosition = 0

//     const animate = () => {
//       scrollPosition += 3 // Increased speed from 1.5 to 3 (2x faster)
//       if (scrollPosition >= scrollContainer.scrollWidth / 2) {
//         scrollPosition = 0
//       }
//       scrollContainer.scrollLeft = scrollPosition
//       animationFrameId = requestAnimationFrame(animate)
//     }

//     animationFrameId = requestAnimationFrame(animate)

//     return () => {
//       cancelAnimationFrame(animationFrameId)
//     }
//   }, [])

//   return (
//     <div className="container mx-auto w-full overflow-hidden py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-18 2xl:py-20 relative bg-[#0a2540]">
//       <div className="absolute left-0 right-0 top-0 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />

//       <div className="absolute left-0 right-0 bottom-0 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />

//       <div className="absolute left-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 bg-gradient-to-r from-[#0a2540] to-transparent z-10 pointer-events-none" />
//       <div className="absolute right-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 bg-gradient-to-l from-[#0a2540] to-transparent z-10 pointer-events-none" />
//       <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
//       <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

//       <div 
//         ref={scrollRef} 
//         className="flex gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-18 2xl:gap-20 overflow-x-hidden scrollbar-hide" 
//         style={{ scrollBehavior: "auto" }}
//       >
//         {[...companies, ...companies, ...companies].map((company, index) => (
//           <div key={`${company.name}-${index}`} className="flex-shrink-0 flex items-center justify-center">
//             <div className="w-24 h-10 xs:w-28 xs:h-11 sm:w-32 sm:h-12 md:w-36 md:h-13 lg:w-40 lg:h-16 xl:w-44 xl:h-18 2xl:w-48 2xl:h-20 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-300">
//               {company.logo}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }