"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Cloud, Database, Palette, Shield } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { AnimatedButton } from "@/components/animated-button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ServiceCard3D } from "@/components/service-card-3d"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  technologies?: string[]
  accentColor: string
}

const services: Service[] = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to meet your unique business needs.",
    features: ["Enterprise application development", "Legacy system modernization", "API development and integration"],
    technologies: ["React", "Node.js", "Python"],
    accentColor: "#3b82f6", // Blue
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS and Android native apps", "Cross-platform development", "Progressive Web Apps (PWA)"],
    technologies: ["React Native", "Flutter", "Swift"],
    accentColor: "#8b5cf6", // Purple
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    features: ["Cloud migration strategy", "Infrastructure as Code (IaC)", "Serverless architecture"],
    technologies: ["AWS", "Azure", "Google Cloud"],
    accentColor: "#06b6d4", // Cyan
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics and AI.",
    features: ["Business intelligence dashboards", "Predictive analytics", "Machine learning models"],
    technologies: ["Python", "TensorFlow", "Power BI"],
    accentColor: "#10b981", // Green
  },
  // {
  //   icon: Palette,
  //   title: "UI/UX Design",
  //   description: "Beautiful, intuitive interfaces that users love and that drive engagement.",
  //   features: ["User research and personas", "Wireframing and prototyping", "Visual design and branding"],
  //   technologies: ["Figma", "Adobe XD", "Sketch"],
  //   accentColor: "#f59e0b", // Amber
  // },
  {
  icon: Code,
  title: "CRM Software from Scratch",
  description: "Custom-built CRM systems designed to streamline customer management, boost productivity, and enhance business insights.",
  features: [
    "Customer data management",
    "Lead tracking and sales pipeline",
    "Automation and reporting dashboards"
  ],
  technologies: ["Next.js", "Node.js", "MongoDB", "Express.js"],
  accentColor: "#3b82f6", // Blue
},
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    features: ["Security audits and assessments", "Penetration testing", "Compliance management"],
    technologies: ["OWASP", "Burp Suite", "Metasploit"],
    accentColor: "#ef4444", // Red
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 relative">
      {/* Animated Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" /> */}

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-white text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Our Services
          </motion.h2>
          <p className="text-white text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive software solutions designed to transform your business and drive innovation
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard3D key={service.title} {...service} delay={index * 0.1} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/services">
            <AnimatedButton size="lg" showArrow>
              View All Services
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  )
}

