"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { AnimatedButton } from "@/components/animated-button"
import { Target, Users, Lightbulb, Award } from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "Delivering excellence through innovative solutions",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Your success is our priority",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Cutting-edge technology and creative thinking",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Excellence in every line of code",
    color: "from-pink-500 to-cyan-500",
  },
]

export function AboutPreview() {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Why Choose Aryan Soft"
          subtitle="We combine technical expertise with creative innovation to deliver exceptional software solutions"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center group hover-lift"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/about">
            <AnimatedButton size="lg" showArrow>
              Learn More About Us
            </AnimatedButton>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
