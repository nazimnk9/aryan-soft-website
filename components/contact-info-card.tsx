"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ContactInfoCardProps {
  icon: LucideIcon
  title: string
  content: string
  link?: string
  delay?: number
}

export function ContactInfoCard({ icon: Icon, title, content, link, delay = 0 }: ContactInfoCardProps) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl p-6 hover-lift text-center"
    >
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4"
      >
        <Icon className="w-7 h-7 text-primary-foreground" />
      </motion.div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-white">{content}</p>
    </motion.div>
  )

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </a>
    )
  }

  return CardContent
}
