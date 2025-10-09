"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { SectionHeading } from "@/components/section-heading"
import { AnimatedButton } from "@/components/animated-button"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/modern-ecommerce-dashboard.png",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Healthcare App",
    category: "Mobile Development",
    image: "/healthcare-mobile-app.png",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Analytics Dashboard",
    category: "Data Visualization",
    image: "/analytics-dashboard-charts.png",
    gradient: "from-purple-500 to-pink-500",
  },
]

export function PortfolioPreview() {
  const router = useRouter()

  const handleViewAllProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push("/portfolio")
  }

  return (
    <section id="portfolio" className="relative py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore our portfolio of successful software solutions across various industries"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden group hover-lift"
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
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
                <p className="text-white text-sm font-medium">Innovative solution delivering exceptional results</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a href="/portfolio" onClick={handleViewAllProjects}>
            <AnimatedButton size="lg" showArrow>
              View All Projects
            </AnimatedButton>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
