"use client"

import type React from "react"

import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function CTASection() {
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const id = href.substring(1)
      const element = document.getElementById(id)
      if (element) {
        const offset = 100
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty font-medium">
            Let's discuss how our innovative solutions can help you achieve your goals and stay ahead of the
            competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* {pathname === "/" ? (
              <Link href="#contact" onClick={(e) => handleClick(e, "#contact")}>
                <AnimatedButton size="lg" showArrow className="px-10 py-10 text-xl sm:text-2xl font-semibold">
                  Get Started
                </AnimatedButton>
              </Link>
            ) : (
              <Link href="/contact">
                <AnimatedButton size="lg" showArrow className="px-10 py-10 text-xl sm:text-2xl font-semibold">
                  Get Started
                </AnimatedButton>
              </Link>
            )} */}
            <Link href="/contact">
              <AnimatedButton size="lg" showArrow className="px-10 py-10 text-xl sm:text-2xl font-semibold cursor-pointer">
                Get Started
              </AnimatedButton>
            </Link>
            {/* {pathname === "/" ? (
              <Link href="#portfolio" onClick={(e) => handleClick(e, "#portfolio")}>
                <AnimatedButton size="lg" variant="outline">
                  View Our Work
                </AnimatedButton>
              </Link>
            ) : (
              <Link href="/#portfolio">
                <AnimatedButton size="lg" variant="outline">
                  View Our Work
                </AnimatedButton>
              </Link>
            )} */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
