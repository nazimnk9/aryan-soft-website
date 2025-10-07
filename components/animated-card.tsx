"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Card
        className={cn(
          "relative overflow-hidden group hover-lift",
          "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/10 before:to-transparent",
          "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
          "border-border/50 hover:border-primary/50 transition-colors duration-300",
          className,
        )}
      >
        {children}
      </Card>
    </motion.div>
  )
}
