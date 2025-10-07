"use client"

import type React from "react"

import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function CTASection() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Transform Your Business?</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Let's discuss how our innovative solutions can help you achieve your goals and stay ahead of the
            competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" onClick={(e) => handleClick(e, "#contact")}>
              <AnimatedButton size="lg" showArrow>
                Get Started
              </AnimatedButton>
            </a>
            <a href="#portfolio" onClick={(e) => handleClick(e, "#portfolio")}>
              <AnimatedButton size="lg" variant="outline">
                View Our Work
              </AnimatedButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
