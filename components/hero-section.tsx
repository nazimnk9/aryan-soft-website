"use client"

import { motion, useMotionValue } from "framer-motion"
import { AnimatedButton } from "@/components/animated-button"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import { useRef, useEffect, useState } from "react"
import type { Mesh } from "three"
import { Zap, Code2, Brain, Rocket } from "lucide-react"
import Link from "next/link"
import LogoCarousel from "@/components/logo-carousel"
import { DNAVortex } from "@/components/dna-vortex"

function NetworkNode({ position, color }: any) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

function FloatingShape({ position, shape, color, speed }: any) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.4
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.6
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {shape === "sphere" && <sphereGeometry args={[0.5, 32, 32]} />}
        {shape === "box" && <boxGeometry args={[0.8, 0.8, 0.8]} />}
        {shape === "torus" && <torusGeometry args={[0.4, 0.15, 16, 32]} />}
        {shape === "cone" && <coneGeometry args={[0.4, 0.8, 32]} />}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  )
}

function Scene3D({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const groupRef = useRef<any>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = mouseY * 0.0003
      groupRef.current.rotation.y = mouseX * 0.0003
    }
  })

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00d4ff" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#4a9eff" />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#00e5ff" />
      <spotLight position={[0, 10, 0]} intensity={1.2} color="#00ccff" angle={0.3} penumbra={1} />

      <group ref={groupRef}>
        {Array.from({ length: 30 }).map((_, i) => (
          <NetworkNode
            key={i}
            position={[(Math.random() - 0.5) * 12, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8]}
            color={i % 3 === 0 ? "#00d4ff" : i % 3 === 1 ? "#00e5ff" : "#4a9eff"}
          />
        ))}

        <FloatingShape position={[-3, 1, 0]} shape="sphere" color="#00d4ff" speed={1} />
        <FloatingShape position={[3, -1, -2]} shape="box" color="#00e5ff" speed={1.3} />
        <FloatingShape position={[0, 2, 1]} shape="torus" color="#4a9eff" speed={0.9} />
        <FloatingShape position={[-2, -2, -1]} shape="cone" color="#00ccff" speed={1.1} />
        <FloatingShape position={[2, 0, -3]} shape="sphere" color="#0099cc" speed={0.8} />
      </group>
    </>
  )
}

function Background3D({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  return (
    <div className="absolute inset-0 z-0 opacity-30 dark:opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Scene3D mouseX={mouseX} mouseY={mouseY} />
      </Canvas>
    </div>
  )
}

function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Generate multiple particles with different positions and animations */}
      {Array.from({ length: 50 }).map((_, i) => {
        const isPink = i % 2 === 0
        const size = Math.random() * 4 + 2
        const left = Math.random() * 100
        const top = Math.random() * 100
        const duration = Math.random() * 3 + 2
        const delay = Math.random() * 2

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: isPink
                ? "radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, rgba(219, 39, 119, 0.4) 50%, transparent 100%)"
                : "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0.4) 50%, transparent 100%)",
              boxShadow: isPink
                ? "0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(236, 72, 153, 0.3)"
                : "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3)",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        )
      })}
    </div>
  )
}

const features = [
  {
    icon: Zap,
    label: "FastAPI",
    title: "Ultra-fast APIs",
    description: "Async I/O, rate limits, JWT, and OpenAPI docs built-in",
  },
  {
    icon: Code2,
    label: "Next.js",
    title: "SEO + Speed",
    description: "App Router, edge rendering, and image optimizations",
  },
  {
    icon: Brain,
    label: "AI Copilots",
    title: "Automate the tedious",
    description: "Context-aware assistants, document AI, and voice bots",
  },
]

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2
      const y = e.clientY - window.innerHeight / 2
      mouseX.set(x)
      mouseY.set(y)
      setMousePos({ x, y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <>
      <section className="relative flex items-center overflow-hidden">
        {/* <Background3D mouseX={mousePos.x} mouseY={mousePos.y} /> */}

        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10 mt-20 sm:mt-20 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              {/* <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/40 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 mt-24 sm:mt-28 md:mt-32 lg:mt-0"
              >
                <Rocket className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-sm font-medium text-white">Build faster with AI + modern web</span>
              </motion.div> */}

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance sm: pl-4 md:pl-4 lg:pl-4 xl:pl-4 2xl:pl-4">
                  <span className="text-white">Software that</span>
                  <br />
                  <span className="text-white">scales your</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    business
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/90 max-w-2xl text-pretty leading-relaxed"
              >
                Aryan Soft crafts world-class ERP, CRM websites, and AI-powered apps using React, Next.js, JavaScript,
                Python, Django, and FastAPI. We ship secure, blazing-fast software—designed to grow with you.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 sm: pl-4 md:pl-4 lg:pl-4 xl:pl-4 2xl:pl-4"
              >
                <Link href="#contact">
                  <AnimatedButton size="lg">Get a Quote</AnimatedButton>
                </Link>
                <Link href="#portfolio">
                  <AnimatedButton size="lg" variant="outline">
                    See our work
                  </AnimatedButton>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Feature Cards with YouTube Video Background */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full h-[500px] sm:h-[400px] md:h-[410px] lg:h-[420px] xl:h-[420px] 2xl:h-[420px]"
            >
              {/* Video Background Container */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                {/* <div className="absolute inset-0 z-0">
                  <iframe
                    src="https://www.pexels.com/download/video/33844964/?autoplay=1&mute=1&loop=1&playlist=FAprM96GiRg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&vq=hd1080"
                    className="w-full h-full object-cover scale-225"
                    allow="autoplay; encrypted-media"
                    style={{ pointerEvents: "none" }}
                    title="Background video"
                  />
                </div> */}
                <DNAVortex backgroundColor="#000000" particleCount={400} containerClassName="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d1b2a]/50 to-[#1b263b]/60 backdrop-blur-[1px]" />
              </div>

              {/* Feature Cards - Matching hero.jpg design */}
              <div className="relative z-10 h-full flex flex-col justify-center gap-5 p-6">
                {/* First Row - Two cards side by side */}
                <div className="grid grid-cols-2 gap-5">
                  {/* First Card - Pulse and Glow Animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="group relative"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(6, 182, 212, 0.2)",
                          "0 0 40px rgba(6, 182, 212, 0.4)",
                          "0 0 20px rgba(6, 182, 212, 0.2)",
                        ],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="backdrop-blur-xl bg-[#0a1628]/70 border border-white/10 rounded-2xl p-5 hover:bg-[#0d1b2a]/75 hover:border-cyan-500/50 transition-all duration-300 h-full"
                    >
                      {/* Icon and Label Row */}
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                          className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-cyan-500/25 flex items-center justify-center flex-shrink-0"
                        >
                          <Zap className="w-4 h-4 text-cyan-400" />
                        </motion.div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400/60">
                          {features[0].label}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {features[0].title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-white leading-relaxed">{features[0].description}</p>
                    </motion.div>
                  </motion.div>

                  {/* Second Card - Wave and Shimmer Animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.75 }}
                    whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                    className="group relative"
                  >
                    <motion.div
                      animate={{
                        background: [
                          "linear-gradient(135deg, rgba(10, 22, 40, 0.7) 0%, rgba(13, 27, 42, 0.7) 100%)",
                          "linear-gradient(135deg, rgba(13, 27, 42, 0.7) 0%, rgba(27, 38, 59, 0.7) 100%)",
                          "linear-gradient(135deg, rgba(10, 22, 40, 0.7) 0%, rgba(13, 27, 42, 0.7) 100%)",
                        ],
                        borderColor: ["rgba(255, 255, 255, 0.1)", "rgba(6, 182, 212, 0.3)", "rgba(255, 255, 255, 0.1)"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      className="backdrop-blur-xl border rounded-2xl p-5 hover:border-cyan-500/50 transition-all duration-300 h-full relative overflow-hidden"
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                          repeatDelay: 1,
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
                      />

                      {/* Icon and Label Row */}
                      <div className="flex items-center gap-3 mb-3 relative z-10">
                        <motion.div
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                          className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-cyan-500/25 flex items-center justify-center flex-shrink-0"
                        >
                          <Code2 className="w-4 h-4 text-cyan-400" />
                        </motion.div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400/60">
                          {features[1].label}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300 relative z-10">
                        {features[1].title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-white leading-relaxed relative z-10">{features[1].description}</p>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Second Row - One card spanning full width with Floating Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="group relative"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      boxShadow: [
                        "0 10px 30px rgba(6, 182, 212, 0.15)",
                        "0 20px 50px rgba(6, 182, 212, 0.25)",
                        "0 10px 30px rgba(6, 182, 212, 0.15)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="backdrop-blur-xl bg-[#0a1628]/70 border border-white/10 rounded-2xl p-5 hover:bg-[#0d1b2a]/75 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Animated gradient border */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "conic-gradient(from 0deg, transparent, rgba(6, 182, 212, 0.3), transparent)",
                      }}
                    />

                    {/* Icon and Label Row */}
                    <div className="flex items-center gap-3 mb-3 relative z-10">
                      <motion.div
                        animate={{
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-cyan-500/25 flex items-center justify-center flex-shrink-0"
                      >
                        <Brain className="w-4 h-4 text-cyan-400" />
                      </motion.div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400/60">
                        {features[2].label}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300 relative z-10">
                      {features[2].title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white leading-relaxed relative z-10">{features[2].description}</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div> */}
      </section>

      {/* <div className="relative z-10 -mt-10">
        <LogoCarousel />
      </div> */}
    </>
  )
}
