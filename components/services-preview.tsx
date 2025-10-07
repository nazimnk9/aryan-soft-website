"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Cloud, Database, Palette, Shield } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { AnimatedButton } from "@/components/animated-button"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}
const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to meet your unique business needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics and AI.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love and that drive engagement.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive software solutions designed to transform your business and drive innovation"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <AnimatedCard key={service.title} delay={index * 0.1}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </AnimatedCard>
            )
          })}
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
