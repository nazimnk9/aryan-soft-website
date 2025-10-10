"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface DNAVortexProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  particleCount?: number
  backgroundColor?: string
}

export function DNAVortex({
  children,
  className,
  containerClassName,
  particleCount = 800,
  backgroundColor = "#000000",
}: DNAVortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)

    class DNAParticle {
      angle: number
      radius: number
      x: number
      speed: number
      size: number
      hue: number
      strand: number
      opacity: number

      constructor(strand: number) {
        this.strand = strand
        this.angle = Math.random() * Math.PI * 2
        this.radius = 100 + Math.random() * 60
        this.x = Math.random() * w
        this.speed = 0.5 + Math.random() * 1
        this.size = 1.5 + Math.random() * 2.5
        this.hue = strand === 0 ? 280 : 220
        this.opacity = 0.6 + Math.random() * 0.4
      }

      update() {
        this.angle += 0.02
        this.x += this.speed

        // Reset particle when it goes off screen (moving right)
        if (this.x > w + 50) {
          this.x = -50
          this.angle = Math.random() * Math.PI * 2
        }

        const wave = Math.sin(this.x * 0.01) * 15
        this.radius = 100 + Math.random() * 60 + wave
      }

      draw() {
        if (!ctx) return

        const centerY = h / 2
        const y = centerY + Math.cos(this.angle + this.strand * Math.PI) * this.radius

        // Draw particle with glow
        ctx.shadowBlur = 15
        ctx.shadowColor = `hsla(${this.hue}, 100%, 60%, ${this.opacity})`

        ctx.beginPath()
        ctx.arc(this.x, y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, ${this.opacity})`
        ctx.fill()

        // Draw connecting lines between strands
        if (this.strand === 0) {
          const oppositeY = centerY + Math.cos(this.angle + Math.PI) * this.radius
          ctx.beginPath()
          ctx.moveTo(this.x, y)
          ctx.lineTo(this.x, oppositeY)
          ctx.strokeStyle = `hsla(${this.hue}, 100%, 60%, ${this.opacity * 0.2})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }

        ctx.shadowBlur = 0
      }
    }

    const particles: DNAParticle[] = []

    // Create particles for both DNA strands
    for (let i = 0; i < particleCount / 2; i++) {
      particles.push(new DNAParticle(0)) // First strand
      particles.push(new DNAParticle(1)) // Second strand
    }

    function animate() {
      if (!ctx) return

      // Create trailing effect
      ctx.fillStyle = backgroundColor + "20"
      ctx.fillRect(0, 0, w, h)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    // Initial clear
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, w, h)

    animate()

    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [particleCount, backgroundColor])

  return (
    <div className={cn("relative w-full h-full overflow-hidden", containerClassName)}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {children && <div className={cn("relative z-10", className)}>{children}</div>}
    </div>
  )
}
