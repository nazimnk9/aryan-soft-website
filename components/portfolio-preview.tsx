// "use client"

// import type React from "react"

// import { motion } from "framer-motion"
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// import { SectionHeading } from "@/components/section-heading"
// import { AnimatedButton } from "@/components/animated-button"
// import Image from "next/image"
// import { ExternalLink } from "lucide-react"

// const featuredProjects = [
//   {
//     title: "E-Commerce Platform",
//     category: "Web Development",
//     image: "/modern-ecommerce-dashboard.png",
//     gradient: "from-cyan-500 to-blue-500",
//   },
//   {
//     title: "Healthcare App",
//     category: "Mobile Development",
//     image: "/healthcare-mobile-app.png",
//     gradient: "from-blue-500 to-purple-500",
//   },
//   {
//     title: "Analytics Dashboard",
//     category: "Data Visualization",
//     image: "/analytics-dashboard-charts.png",
//     gradient: "from-purple-500 to-pink-500",
//   },
// ]

// export function PortfolioPreview() {
//   const router = useRouter()

//   const handleViewAllProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault()
//     router.push("/portfolio")
//   }

//   return (
//     <section id="portfolio" className="relative py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
//       <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//         <SectionHeading
//           title="Featured Projects"
//           subtitle="Explore our portfolio of successful software solutions across various industries"
//         />

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
//           {featuredProjects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="glass rounded-2xl overflow-hidden group hover-lift"
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
//                 />
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
//                 <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                   <ExternalLink className="w-5 h-5 text-white" />
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div
//                   className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white mb-3`}
//                 >
//                   {project.category}
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                 <p className="text-white text-sm font-medium">Innovative solution delivering exceptional results</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="text-center mt-12"
//         >
//           <Link href="/portfolio" onClick={handleViewAllProjects}>
//             <AnimatedButton size="lg" showArrow>
//               View All Projects
//             </AnimatedButton>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { AnimatedButton } from "@/components/animated-button"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/modern-ecommerce-dashboard.png",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    description: "Modern online shopping experience with advanced features",
  },
  {
    title: "Healthcare App",
    category: "Mobile Development",
    image: "/healthcare-mobile-app.png",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    description: "Comprehensive healthcare management solution",
  },
  {
    title: "Analytics Dashboard",
    category: "Data Visualization",
    image: "/analytics-dashboard-charts.png",
    gradient: "from-violet-500 via-purple-500 to-pink-500",
    description: "Real-time business intelligence platform",
  },
]

declare global {
  interface Window {
    gsap: any;
  }
}

export function PortfolioPreview() {
  const router = useRouter()
  const [gsapLoaded, setGsapLoaded] = useState(false)
  const cardsRef = useRef<HTMLDivElement>(null)

  const handleViewAllProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push("/portfolio")
  }

  // Initialize 3D effects immediately when cards are rendered
  useEffect(() => {
    const initializeCardEffects = () => {
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".featured-3d-card")
        
        // Apply 3D tilt effects immediately
        cards.forEach((card) => {
          const tiltStrength = 15
          const scaleFactor = 1.07

          const handleMouseMove = (e: Event) => {
            const mouseEvent = e as MouseEvent
            const rect = (card as HTMLElement).getBoundingClientRect()
            const x = mouseEvent.clientX - rect.left
            const y = mouseEvent.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2

            const rotateX = ((y - centerY) / centerY) * -tiltStrength
            const rotateY = ((x - centerX) / centerX) * tiltStrength

            if (window.gsap) {
              window.gsap.to(card, {
                rotationX: rotateX,
                rotationY: rotateY,
                scale: scaleFactor,
                transformPerspective: 1000,
                transformOrigin: "center",
                ease: "power2.out",
                duration: 0.3
              })
            } else {
              // Fallback CSS transform if GSAP not loaded
              ;(card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleFactor})`
            }
          }

          const handleMouseLeave = () => {
            if (window.gsap) {
              window.gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                transformPerspective: 1000,
                ease: "elastic.out(1, 0.3)",
                duration: 0.8
              })
            } else {
              // Fallback CSS transform
              ;(card as HTMLElement).style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`
            }
          }

          card.addEventListener("mousemove", handleMouseMove)
          card.addEventListener("mouseleave", handleMouseLeave)
        })

        // Entry animation with GSAP if available
        if (window.gsap && gsapLoaded) {
          window.gsap.from(cards, {
            opacity: 0,
            y: 80,
            rotationX: -15,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out"
          })
        }
      }
    }

    // Initialize effects immediately
    const timer = setTimeout(initializeCardEffects, 100)
    
    return () => clearTimeout(timer)
  }, [gsapLoaded])

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        onLoad={() => setGsapLoaded(true)}
      />
      <section id="portfolio" className="relative py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20" style={{ perspective: '1500px' }}>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore our portfolio of successful software solutions across various industries"
          />

          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="featured-3d-card relative cursor-pointer will-change-transform group"
              >
                <style jsx>{`
                  .featured-3d-card {
                    transform-style: preserve-3d;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
                    transition: box-shadow 0.4s ease;
                  }
                  .featured-3d-card::before {
                    content: "";
                    position: absolute;
                    inset: -2px;
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b);
                    background-size: 200% 200%;
                    border-radius: 24px;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    animation: gradientShift 3s ease infinite;
                    z-index: -1;
                  }
                  .featured-3d-card:hover::before {
                    opacity: 0.8;
                  }
                  .featured-3d-card:hover {
                    box-shadow: 0 30px 70px rgba(59, 130, 246, 0.4);
                  }
                  .featured-3d-card::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    pointer-events: none;
                    border-radius: 24px;
                  }
                  .featured-3d-card:hover::after {
                    opacity: 1;
                  }
                  @keyframes gradientShift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                  }
                  .featured-card-image {
                    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
                    will-change: transform;
                  }
                  .featured-3d-card:hover .featured-card-image {
                    transform: scale(1.15);
                  }
                `}</style>
                <div className="glass rounded-2xl overflow-hidden group hover-lift">
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={project.image || "/placeholder.svg"} 
                      alt={project.title} 
                      fill 
                      className="featured-card-image object-cover" 
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white mb-3`}
                    >
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white text-sm font-medium">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/portfolio" onClick={handleViewAllProjects}>
              <AnimatedButton size="lg" showArrow>
                View All Projects
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}