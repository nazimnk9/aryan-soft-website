"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface ServiceCardDetailedProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  technologies: string[]
  delay?: number
}

export function ServiceCardDetailed({
  icon: Icon,
  title,
  description,
  features,
  technologies,
  delay = 0,
}: ServiceCardDetailedProps) {
  return (
    <AnimatedCard delay={delay}>
      <CardHeader>
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4"
        >
          <Icon className="w-8 h-8 text-primary-foreground" />
        </motion.div>
        <CardTitle className="text-2xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <span className="text-primary mt-1">▸</span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge variant="secondary" className="hover:bg-primary/20 transition-colors">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>

        <Link href="/contact" className="block">
          <AnimatedButton className="w-full" showArrow>
            Get Started
          </AnimatedButton>
        </Link>
      </CardContent>
    </AnimatedCard>
  )
}
