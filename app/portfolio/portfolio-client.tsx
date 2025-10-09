"use client"

import { useState } from "react"
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
  },
  {
    title: "Healthcare Mobile App",
    description:
      "Patient management system with appointment scheduling, telemedicine features, and secure health records.",
    image: "/healthcare-mobile-app.png",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
    liveUrl: "#",
  },
  {
    title: "Cloud Infrastructure Migration",
    description:
      "Successfully migrated enterprise infrastructure to AWS, reducing costs by 40% and improving performance.",
    image: "/cloud-infrastructure-architecture.jpg",
    category: "Cloud Solution",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    liveUrl: "#",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time business intelligence platform with predictive analytics and machine learning insights.",
    image: "/analytics-dashboard-charts.png",
    category: "Data Analytics",
    technologies: ["Python", "TensorFlow", "React", "D3.js", "Apache Spark"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Banking Mobile Application",
    description: "Secure mobile banking app with biometric authentication, instant transfers, and investment tracking.",
    image: "/banking-mobile-app.png",
    category: "Mobile App",
    technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL"],
    liveUrl: "#",
  },
  {
    title: "Enterprise Resource Planning",
    description: "Custom ERP system integrating inventory, HR, finance, and operations for manufacturing company.",
    image: "/erp-system-dashboard.jpg",
    category: "Enterprise Solution",
    technologies: ["React", "Java", "Spring Boot", "Oracle", "Redis"],
    liveUrl: "#",
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
  },
  {
    title: "IoT Smart Home System",
    description: "Integrated smart home solution controlling lighting, security, climate, and energy management.",
    image: "/smart-home-iot-dashboard.png",
    category: "IoT Solution",
    technologies: ["React", "MQTT", "Node.js", "MongoDB", "Raspberry Pi"],
    liveUrl: "#",
  },
  {
    title: "Blockchain Supply Chain",
    description: "Transparent supply chain tracking system using blockchain for product authenticity and traceability.",
    image: "/blockchain-supply-chain.png",
    category: "Blockchain",
    technologies: ["Ethereum", "Solidity", "Web3.js", "React", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
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

export function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState("All Projects")

  const filteredProjects =
    activeCategory === "All Projects" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="relative py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
          <PortfolioFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <ProjectCard {...project} delay={0} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-muted-foreground"
            >
              <p className="text-xl">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="relative py-20"
      >
        <div className="container mx-auto px-4">
          <div className="glass rounded-3xl p-12 md:p-16">
            <SectionHeading title="Project Success Metrics" subtitle="Numbers that speak for our excellence" />

            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                { value: "98%", label: "Client Satisfaction" },
                { value: "500+", label: "Projects Delivered" },
                { value: "15+", label: "Years Experience" },
                { value: "50+", label: "Team Members" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                  <p className="text-muted-foreground text-white">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.1 }}
      >
        <CTASection />
      </motion.div>
    </main>
  )
}
