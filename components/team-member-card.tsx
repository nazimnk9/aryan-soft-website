"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}
interface TeamMemberCardProps {
  name: string
  role: string
  bio: string
  initials: string
  linkedin?: string
  twitter?: string
  github?: string
  delay?: number
}

export function TeamMemberCard({
  name,
  role,
  bio,
  initials,
  linkedin,
  twitter,
  github,
  delay = 0,
}: TeamMemberCardProps) {
  return (
    <AnimatedCard delay={delay}>
      <CardContent className="pt-6 text-center">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex justify-center mb-4"
        >
          <Avatar className="w-24 h-24 border-4 border-primary/20">
            <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>
        </motion.div>

        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{role}</p>
        <p className="text-muted-foreground text-sm mb-4 text-pretty">{bio}</p>

        <div className="flex justify-center gap-2">
          {linkedin && (
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Button size="icon" variant="ghost" asChild>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          )}
          {twitter && (
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Button size="icon" variant="ghost" asChild>
                <a href={twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          )}
          {github && (
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Button size="icon" variant="ghost" asChild>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </CardContent>
    </AnimatedCard>
  )
}
