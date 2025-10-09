"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  delay?: number
}

export function ProjectCard({
  title,
  description,
  image,
  category,
  technologies,
  liveUrl,
  githubUrl,
  delay = 0,
}: ProjectCardProps) {
  return (
    <AnimatedCard delay={delay} className="overflow-hidden">
      <div className="relative h-64 overflow-hidden group">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-500" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary/90 backdrop-blur-sm">{category}</Badge>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground text-pretty text-white">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Badge variant="outline">{tech}</Badge>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <AnimatedButton className="w-full" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </AnimatedButton>
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <AnimatedButton className="w-full" size="sm" variant="outline">
                <Github className="w-4 h-4 mr-2" />
                Code
              </AnimatedButton>
            </a>
          )}
        </div>
      </CardContent>
    </AnimatedCard>
  )
}
