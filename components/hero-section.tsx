// "use client"

// import { motion } from "framer-motion"
// import { AnimatedButton } from "@/components/animated-button"
// import { Canvas } from "@react-three/fiber"
// import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei"
// import { useRef } from "react"
// import type { Mesh } from "three"
// import { Zap, Code2, Brain } from "lucide-react"
// import Link from "next/link"

// function AnimatedSphere() {
//   const meshRef = useRef<Mesh>(null)

//   return (
//     <Float speed={2} rotationIntensity={1} floatIntensity={2}>
//       <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.8}>
//         <MeshDistortMaterial
//           color="#00e5ff"
//           attach="material"
//           distort={0.5}
//           speed={2.5}
//           roughness={0.1}
//           metalness={0.9}
//           emissive="#00d4ff"
//           emissiveIntensity={0.3}
//         />
//       </Sphere>
//     </Float>
//   )
// }

// function Background3D() {
//   return (
//     <div className="absolute inset-0 z-0 opacity-30">
//       <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
//         <ambientLight intensity={0.6} />
//         <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00d4ff" />
//         <pointLight position={[-10, -10, -5]} intensity={0.8} color="#0a2463" />
//         <pointLight position={[5, 5, 5]} intensity={0.5} color="#00e5ff" />
//         <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
//         <AnimatedSphere />
//         <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
//       </Canvas>
//     </div>
//   )
// }

// const features = [
//   {
//     icon: Zap,
//     title: "FastAPI",
//     subtitle: "Ultra-fast APIs",
//     description: "Async I/O, rate limits, JWT, and OpenAPI docs built-in",
//   },
//   {
//     icon: Code2,
//     title: "Next.js",
//     subtitle: "SEO + Speed",
//     description: "App Router, edge rendering, and image optimizations",
//   },
//   {
//     icon: Brain,
//     title: "AI Copilots",
//     subtitle: "Automate the tedious",
//     description: "Context-aware assistants, document AI, and voice bots",
//   },
// ]

// export function HeroSection() {
//   return (
//     // <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1b2a] to-[#1b263b]">
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* 3D Background Animation */}
//       {/* <Background3D /> */}

//       <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
//           {/* Left Column - Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
//             >
//               <Zap className="w-4 h-4 text-cyan-400" />
//               <span className="text-sm text-gray-300">Build faster with AI + modern web</span>
//             </motion.div>

//             {/* Main Heading */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
//                 <span className="text-white">Software that</span>
//                 <br />
//                 <span className="text-white">scales your</span>
//                 <br />
//                 <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                   business
//                 </span>
//               </h1>
//             </motion.div>

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-lg md:text-xl text-gray-400 max-w-2xl text-pretty leading-relaxed"
//             >
//               Aryan Soft crafts world-class ERP, CRM websites, and AI-powered apps using React, Next.js, JavaScript,
//               Python, Django, and FastAPI. We ship secure, blazing-fast software—designed to grow with you.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="flex flex-col sm:flex-row gap-4"
//             >
//               <Link href="#contact">
//                 <AnimatedButton size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
//                   Get a Quote
//                 </AnimatedButton>
//               </Link>
//               <Link href="#portfolio">
//                 <AnimatedButton size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/5">
//                   See our work
//                 </AnimatedButton>
//               </Link>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="grid grid-cols-3 gap-8 pt-8"
//             >
//               <div>
//                 <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                   120+
//                 </div>
//                 <div className="text-sm text-gray-500 mt-1">Projects shipped</div>
//               </div>
//               <div>
//                 <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                   &lt;30d
//                 </div>
//                 <div className="text-sm text-gray-500 mt-1">Avg. go-live</div>
//               </div>
//               <div>
//                 <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                   99.98%
//                 </div>
//                 <div className="text-sm text-gray-500 mt-1">Uptime across clients</div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Column - Feature Cards with Video Background */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="relative"
//           >
//             {/* Video Background */}
//             <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-20">
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-full object-cover"
//                 poster="https://www.youtube.com/watch?v=FAprM96GiRg"
//               >
//                 <source src="https://www.youtube.com/watch?v=FAprM96GiRg" type="video/mp4" />
//               </video>
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
//             </div>

//             {/* Feature Cards */}
//             <div className="relative z-10 space-y-4">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={feature.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
//                   whileHover={{ scale: 1.02, x: 10 }}
//                   className="glass-dark rounded-2xl p-6 backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
//                       <feature.icon className="w-6 h-6 text-cyan-400" />
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center gap-2 mb-1">
//                         <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
//                           {feature.title}
//                         </span>
//                       </div>
//                       <h3 className="text-xl font-bold text-white mb-2">{feature.subtitle}</h3>
//                       <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
//       >
//         <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
//           <div className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
//         </div>
//       </motion.div>
//     </section>
//   )
// }


"use client"

import { motion, useMotionValue } from "framer-motion"
import { AnimatedButton } from "@/components/animated-button"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import { useRef, useEffect, useState } from "react"
import type { Mesh } from "three"
import { Zap, Code2, Brain, Sparkles, Rocket, Cpu } from "lucide-react"
import Link from "next/link"

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

const features = [
  {
    icon: Zap,
    title: "FastAPI",
    subtitle: "Ultra-fast APIs",
    description: "Async I/O, rate limits, JWT, and OpenAPI docs built-in",
    gradient: "from-yellow-400 to-orange-500",
    bgGradient: "from-yellow-500/10 to-orange-500/10",
  },
  {
    icon: Code2,
    title: "Next.js",
    subtitle: "SEO + Speed",
    description: "App Router, edge rendering, and image optimizations",
    gradient: "from-cyan-400 to-blue-500",
    bgGradient: "from-cyan-500/10 to-blue-500/10",
  },
  {
    icon: Brain,
    title: "AI Copilots",
    subtitle: "Automate the tedious",
    description: "Context-aware assistants, document AI, and voice bots",
    gradient: "from-purple-400 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Background3D mouseX={mousePos.x} mouseY={mousePos.y} />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 backdrop-blur-sm border border-primary/20 dark:border-primary/40 hover:border-primary/40 dark:hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <Rocket className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">Build faster with AI + modern web</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                <span className="text-foreground">Software that</span>
                <br />
                <span className="text-foreground">scales your</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-blue-500 to-cyan-500 dark:from-primary dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  business
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed"
            >
              Aryan Soft crafts world-class ERP, CRM websites, and AI-powered apps using React, Next.js, JavaScript,
              Python, Django, and FastAPI. We ship secure, blazing-fast software—designed to grow with you.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#contact">
                <AnimatedButton
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all duration-300"
                >
                  Get a Quote
                </AnimatedButton>
              </Link>
              <Link href="#portfolio">
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="border-2 hover:bg-primary/10 transition-all duration-300"
                >
                  See our work
                </AnimatedButton>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 dark:from-primary dark:to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  120+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Projects shipped</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 dark:from-primary dark:to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  &lt;30d
                </div>
                <div className="text-sm text-muted-foreground mt-1">Avg. go-live</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 dark:from-primary dark:to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  99.98%
                </div>
                <div className="text-sm text-muted-foreground mt-1">Uptime across clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards with YouTube Video Background */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[600px] lg:h-[700px]"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 z-0">
                <iframe
                  src="https://www.youtube.com/embed/FAprM96GiRg?autoplay=1&mute=1&loop=1&playlist=FAprM96GiRg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&vq=hd1080"
                  className="w-full h-full object-cover scale-110"
                  allow="autoplay; encrypted-media"
                  style={{ pointerEvents: "none" }}
                  title="Background video"
                />
              </div>
              {/* Enhanced overlay for better card visibility */}
              <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/70 to-background/80 dark:from-background/70 dark:via-background/80 dark:to-background/90 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-blue-500/5 dark:from-primary/10 dark:via-transparent dark:to-blue-500/10" />
            </div>

            <div className="relative z-10 h-full grid grid-rows-3 gap-4 p-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                  whileHover={{ scale: 1.03, x: 8 }}
                  className="group relative"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                    style={{
                      background: `linear-gradient(135deg, ${
                        feature.gradient.includes("yellow")
                          ? "#fbbf24"
                          : feature.gradient.includes("cyan")
                            ? "#06b6d4"
                            : "#a855f7"
                      }40, ${
                        feature.gradient.includes("orange")
                          ? "#f97316"
                          : feature.gradient.includes("blue")
                            ? "#3b82f6"
                            : "#ec4899"
                      }40)`,
                    }}
                  />

                  <div className="h-full backdrop-blur-xl bg-card/80 dark:bg-card/60 border-2 border-border/50 dark:border-border/30 rounded-2xl p-6 hover:bg-card/90 dark:hover:bg-card/80 hover:border-primary/50 dark:hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/30 overflow-hidden">
                    {/* Animated background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative flex items-start gap-4 h-full">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                          >
                            {feature.title}
                          </span>
                          <Sparkles className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {feature.subtitle}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>

                    {/* Decorative corner accent */}
                    <div
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating tech icons */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center shadow-xl shadow-primary/50 dark:shadow-primary/30 z-20"
            >
              <Cpu className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
