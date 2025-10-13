// "use client"

// import { useState } from "react"
// import { ProjectCard } from "@/components/project-card"
// import { PortfolioFilter } from "@/components/portfolio-filter"
// import { SectionHeading } from "@/components/section-heading"
// import { ParticleBackground } from "@/components/particle-background"
// import { CTASection } from "@/components/cta-section"
// import { motion, AnimatePresence } from "framer-motion"

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     description:
//       "A comprehensive e-commerce solution with real-time inventory management, payment processing, and advanced analytics.",
//     image: "/modern-ecommerce-dashboard.png",
//     category: "Web Application",
//     technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     title: "Healthcare Mobile App",
//     description:
//       "Patient management system with appointment scheduling, telemedicine features, and secure health records.",
//     image: "/healthcare-mobile-app.png",
//     category: "Mobile App",
//     technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
//     liveUrl: "#",
//   },
//   {
//     title: "Cloud Infrastructure Migration",
//     description:
//       "Successfully migrated enterprise infrastructure to AWS, reducing costs by 40% and improving performance.",
//     image: "/cloud-infrastructure-architecture.jpg",
//     category: "Cloud Solution",
//     technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
//     liveUrl: "#",
//   },
//   {
//     title: "AI-Powered Analytics Dashboard",
//     description: "Real-time business intelligence platform with predictive analytics and machine learning insights.",
//     image: "/analytics-dashboard-charts.png",
//     category: "Data Analytics",
//     technologies: ["Python", "TensorFlow", "React", "D3.js", "Apache Spark"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     title: "Banking Mobile Application",
//     description: "Secure mobile banking app with biometric authentication, instant transfers, and investment tracking.",
//     image: "/banking-mobile-app.png",
//     category: "Mobile App",
//     technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL"],
//     liveUrl: "#",
//   },
//   {
//     title: "Enterprise Resource Planning",
//     description: "Custom ERP system integrating inventory, HR, finance, and operations for manufacturing company.",
//     image: "/erp-system-dashboard.jpg",
//     category: "Enterprise Solution",
//     technologies: ["React", "Java", "Spring Boot", "Oracle", "Redis"],
//     liveUrl: "#",
//   },
//   {
//     title: "Social Media Platform",
//     description:
//       "Feature-rich social networking platform with real-time messaging, content sharing, and community features.",
//     image: "/social-media-platform.png",
//     category: "Web Application",
//     technologies: ["Next.js", "GraphQL", "PostgreSQL", "Redis", "WebSocket"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     title: "IoT Smart Home System",
//     description: "Integrated smart home solution controlling lighting, security, climate, and energy management.",
//     image: "/smart-home-iot-dashboard.png",
//     category: "IoT Solution",
//     technologies: ["React", "MQTT", "Node.js", "MongoDB", "Raspberry Pi"],
//     liveUrl: "#",
//   },
//   {
//     title: "Blockchain Supply Chain",
//     description: "Transparent supply chain tracking system using blockchain for product authenticity and traceability.",
//     image: "/blockchain-supply-chain.png",
//     category: "Blockchain",
//     technologies: ["Ethereum", "Solidity", "Web3.js", "React", "Node.js"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
// ]

// const categories = [
//   "All Projects",
//   "Web Application",
//   "Mobile App",
//   "Cloud Solution",
//   "Data Analytics",
//   "Enterprise Solution",
//   "IoT Solution",
//   "Blockchain",
// ]

// export function PortfolioClient() {
//   const [activeCategory, setActiveCategory] = useState("All Projects")

//   const filteredProjects =
//     activeCategory === "All Projects" ? projects : projects.filter((project) => project.category === activeCategory)

//   return (
//     <main className="relative min-h-screen">
//       <ParticleBackground />

//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0 }}
//         className="relative py-20 md:py-32"
//       >
//         <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//           <SectionHeading
//             title="Our Portfolio"
//             subtitle="Explore our successful projects and see how we've helped businesses transform through innovative software solutions"
//           />
//         </div>
//       </motion.section>

//       {/* Filter Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="relative py-8"
//       >
//         <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//           <PortfolioFilter
//             categories={categories}
//             activeCategory={activeCategory}
//             onCategoryChange={setActiveCategory}
//           />
//         </div>
//       </motion.section>

//       {/* Projects Grid */}
//       <section className="relative py-12">
//         <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeCategory}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//             >
//               {filteredProjects.map((project, index) => (
//                 <motion.div
//                   key={project.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
//                 >
//                   <ProjectCard {...project} delay={0} />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//           {filteredProjects.length === 0 && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-20 text-muted-foreground"
//             >
//               <p className="text-xl">No projects found in this category.</p>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 2.1 }}
//       >
//         <CTASection />
//       </motion.div>
//     </main>
//   )
// }


"use client"

import { useState, useEffect, useRef } from "react"
import Script from "next/script"
import { ProjectCard } from "@/components/project-card"
import { PortfolioFilter } from "@/components/portfolio-filter"
import { SectionHeading } from "@/components/section-heading"
import { ParticleBackground } from "@/components/particle-background"
import { CTASection } from "@/components/cta-section"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution with real-time inventory management, payment processing, and advanced analytics.",
    image: "/modern-ecommerce-dashboard.png",
    category: "Web Application",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    colorScheme: "from-blue-500 via-purple-500 to-pink-500",
  },
  {
    title: "Healthcare Mobile App",
    description:
      "Patient management system with appointment scheduling, telemedicine features, and secure health records.",
    image: "/healthcare-mobile-app.png",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
    liveUrl: "#",
    colorScheme: "from-green-400 via-blue-500 to-purple-600",
  },
  {
    title: "Cloud Infrastructure Migration",
    description:
      "Successfully migrated enterprise infrastructure to AWS, reducing costs by 40% and improving performance.",
    image: "/cloud-infrastructure-architecture.jpg",
    category: "Cloud Solution",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    liveUrl: "#",
    colorScheme: "from-orange-400 via-red-500 to-pink-500",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time business intelligence platform with predictive analytics and machine learning insights.",
    image: "/analytics-dashboard-charts.png",
    category: "Data Analytics",
    technologies: ["Python", "TensorFlow", "React", "D3.js", "Apache Spark"],
    liveUrl: "#",
    githubUrl: "#",
    colorScheme: "from-cyan-400 via-blue-500 to-indigo-600",
  },
  {
    title: "Banking Mobile Application",
    description: "Secure mobile banking app with biometric authentication, instant transfers, and investment tracking.",
    image: "/banking-mobile-app.png",
    category: "Mobile App",
    technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    colorScheme: "from-emerald-400 via-teal-500 to-blue-600",
  },
  {
    title: "Enterprise Resource Planning",
    description: "Custom ERP system integrating inventory, HR, finance, and operations for manufacturing company.",
    image: "/erp-system-dashboard.jpg",
    category: "Enterprise Solution",
    technologies: ["React", "Java", "Spring Boot", "Oracle", "Redis"],
    liveUrl: "#",
    colorScheme: "from-violet-400 via-purple-500 to-indigo-600",
  },
  {
    title: "Social Media Platform",
    description:
      "Feature-rich social networking platform with real-time messaging, content sharing, and community features.",
    image: "/social-media-platform.png",
    category: "Web Application",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Redis", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    colorScheme: "from-pink-400 via-rose-500 to-red-500",
  },
  {
    title: "IoT Smart Home System",
    description: "Integrated smart home solution controlling lighting, security, climate, and energy management.",
    image: "/smart-home-iot-dashboard.png",
    category: "IoT Solution",
    technologies: ["React", "MQTT", "Node.js", "MongoDB", "Raspberry Pi"],
    liveUrl: "#",
    colorScheme: "from-amber-400 via-orange-500 to-red-500",
  },
  {
    title: "Blockchain Supply Chain",
    description: "Transparent supply chain tracking system using blockchain for product authenticity and traceability.",
    image: "/blockchain-supply-chain.png",
    category: "Blockchain",
    technologies: ["Ethereum", "Solidity", "Web3.js", "React", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    colorScheme: "from-indigo-400 via-blue-500 to-cyan-500",
  },
]

const categories = [
  "All Projects",
  "Web Application",
  "Mobile App",
  "Cloud Solution",
  "Data Analytics",
  "Enterprise Solution",
  "IoT Solution",
  "Blockchain",
]

declare global {
  interface Window {
    gsap: any;
  }
}

export function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState("All Projects")
  const [gsapLoaded, setGsapLoaded] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const cardsRef = useRef<HTMLDivElement>(null)
  const previousCategoryRef = useRef(activeCategory)

  const filteredProjects =
    activeCategory === "All Projects" ? projects : projects.filter((project) => project.category === activeCategory)

  // Handle category change with enhanced 3D animations
  const handleCategoryChange = (newCategory: string) => {
    if (newCategory === activeCategory) return
    
    setIsTransitioning(true)
    
    // Exit animation for current cards
    if (window.gsap && cardsRef.current) {
      const currentCards = cardsRef.current.querySelectorAll(".portfolio-3d-card")
      
      window.gsap.to(currentCards, {
        rotationY: -90,
        rotationX: 15,
        scale: 0.8,
        opacity: 0,
        z: -200,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.in",
        transformOrigin: "center center",
        onComplete: () => {
          previousCategoryRef.current = activeCategory
          setActiveCategory(newCategory)
          setTimeout(() => setIsTransitioning(false), 100)
        }
      })
    } else {
      // Fallback without GSAP
      previousCategoryRef.current = activeCategory
      setActiveCategory(newCategory)
      setIsTransitioning(false)
    }
  }

  // Enhanced card entry animations
  useEffect(() => {
    const initializeCardEffects = () => {
      if (cardsRef.current && !isTransitioning) {
        const cards = cardsRef.current.querySelectorAll(".portfolio-3d-card")
        
        // Entry animation with enhanced 3D effects
        if (window.gsap && gsapLoaded) {
          // Set initial state
          window.gsap.set(cards, {
            rotationY: 90,
            rotationX: -20,
            scale: 0.7,
            opacity: 0,
            z: -300,
            transformOrigin: "center center"
          })
          
          // Animate in with 3D flip effect
          window.gsap.to(cards, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            opacity: 1,
            z: 0,
            duration: 1,
            stagger: {
              amount: 0.6,
              from: "random"
            },
            ease: "back.out(1.7)",
            delay: 0.2
          })
        }
        
        // Apply hover 3D tilt effects
        cards.forEach((card, index) => {
          const tiltStrength = 18
          const scaleFactor = 1.08
          const glowIntensity = 0.6

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
                z: 50,
                transformPerspective: 1200,
                transformOrigin: "center",
                ease: "power2.out",
                duration: 0.4
              })
              
              // Enhance glow effect
              const glowElement = card.querySelector('.card-glow')
              if (glowElement) {
                window.gsap.to(glowElement, {
                  opacity: glowIntensity,
                  duration: 0.3
                })
              }
            } else {
              // Enhanced fallback CSS transform
              ;(card as HTMLElement).style.transform = 
                `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleFactor}) translateZ(50px)`
            }
          }

          const handleMouseLeave = () => {
            if (window.gsap) {
              window.gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                z: 0,
                transformPerspective: 1200,
                ease: "elastic.out(1, 0.4)",
                duration: 1.2
              })
              
              // Reset glow
              const glowElement = card.querySelector('.card-glow')
              if (glowElement) {
                window.gsap.to(glowElement, {
                  opacity: 0,
                  duration: 0.4
                })
              }
            } else {
              ;(card as HTMLElement).style.transform = 
                `perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)`
            }
          }

          card.addEventListener("mousemove", handleMouseMove)
          card.addEventListener("mouseleave", handleMouseLeave)
          
          // Cleanup function
          const cleanup = () => {
            card.removeEventListener("mousemove", handleMouseMove)
            card.removeEventListener("mouseleave", handleMouseLeave)
          }
          
          // Store cleanup function for later use
          ;(card as any)._cleanup = cleanup
        })
      }
    }

    const timer = setTimeout(initializeCardEffects, 200)
    
    return () => {
      clearTimeout(timer)
      // Cleanup event listeners
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".portfolio-3d-card")
        cards.forEach(card => {
          if ((card as any)._cleanup) {
            ;(card as any)._cleanup()
          }
        })
      }
    }
  }, [activeCategory, filteredProjects, gsapLoaded, isTransitioning])

  const Enhanced3DProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
    <div className="portfolio-3d-card relative group cursor-pointer will-change-transform">
      <style jsx>{`
        .portfolio-3d-card {
          transform-style: preserve-3d;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
          transition: box-shadow 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .portfolio-3d-card::before {
          content: "";
          position: absolute;
          inset: -3px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981);
          background-size: 300% 300%;
          border-radius: 26px;
          opacity: 0;
          transition: opacity 0.5s ease;
          animation: gradientShift 4s ease infinite;
          z-index: -1;
        }
        .portfolio-3d-card:hover::before {
          opacity: 0.9;
        }
        .portfolio-3d-card:hover {
          box-shadow: 0 40px 90px rgba(59, 130, 246, 0.5), 0 0 50px rgba(139, 92, 246, 0.3);
        }
        .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 30%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          border-radius: 24px;
        }
        .portfolio-3d-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.1) 60%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          border-radius: 24px;
        }
        .portfolio-3d-card:hover::after {
          opacity: 1;
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        .portfolio-card-image {
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          will-change: transform;
        }
        .portfolio-3d-card:hover .portfolio-card-image {
          transform: scale(1.2) rotateZ(2deg);
        }
        .card-content {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .portfolio-3d-card:hover .card-content {
          transform: translateZ(30px);
        }
      `}</style>
      <div className="glass rounded-2xl overflow-hidden h-full bg-gray-900/50 backdrop-blur-sm">
        <div className="card-glow"></div>
        <div className="relative h-64 overflow-hidden">
          <img 
            src={project.image || "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"} 
            alt={project.title}
            className="portfolio-card-image w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.colorScheme} opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />
        </div>
        <div className="card-content p-6">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.colorScheme} text-white mb-3 shadow-lg`}>
            {project.category}
          </div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <a
              href={project.liveUrl}
              className={`flex-1 px-4 py-2 bg-gradient-to-r ${project.colorScheme} text-white text-sm font-medium rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-400 text-center transform-gpu`}
            >
              View Live
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="px-4 py-2 border border-gray-600 text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-800 hover:border-blue-500 hover:scale-105 transition-all duration-400 transform-gpu"
              >
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        onLoad={() => setGsapLoaded(true)}
      />
      <main className="relative min-h-screen" style={{ perspective: '1800px' }}>
        <ParticleBackground />

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="relative py-20 md:py-32"
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <SectionHeading
              title="Our Portfolio"
              subtitle="Explore our successful projects and see how we've helped businesses transform through innovative software solutions"
            />
          </div>
        </motion.section>

        {/* Filter Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative py-8"
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  disabled={isTransitioning}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 transform-gpu hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-blue-500/50"
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <span className="ml-2 inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Grid */}
        <section className="relative py-12">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div
              ref={cardsRef}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {!isTransitioning && filteredProjects.map((project, index) => (
                <Enhanced3DProjectCard 
                  key={`${activeCategory}-${project.title}`}
                  project={project} 
                  index={index} 
                />
              ))}
            </div>

            {!isTransitioning && filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-20 text-muted-foreground"
              >
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-4xl">🔍</span>
                  </div>
                  <p className="text-xl text-gray-400 mb-2">No projects found</p>
                  <p className="text-gray-500">Try selecting a different category to explore more projects.</p>
                </div>
              </motion.div>
            )}

            {isTransitioning && (
              <div className="flex items-center justify-center py-20">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <CTASection />
        </motion.div>
      </main>
    </>
  )
}