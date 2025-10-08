"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import { useRef, useState } from "react"
import type * as THREE from "three"

const techStack = {
  languages: [
    { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
    { name: "TypeScript", icon: "TS", color: "#3178C6" },
    { name: "Python", icon: "PY", color: "#3776AB" },
    { name: "Java", icon: "JV", color: "#007396" },
    { name: "Go", icon: "GO", color: "#00ADD8" },
    { name: "Rust", icon: "RS", color: "#CE422B" },
  ],
  frameworks: [
    { name: "React", icon: "RC", color: "#61DAFB" },
    { name: "Next.js", icon: "NX", color: "#000000" },
    { name: "Vue.js", icon: "VU", color: "#4FC08D" },
    { name: "Django", icon: "DJ", color: "#092E20" },
    { name: "FastAPI", icon: "FA", color: "#009688" },
    { name: "Express", icon: "EX", color: "#000000" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "PG", color: "#4169E1" },
    { name: "MongoDB", icon: "MG", color: "#47A248" },
    { name: "Redis", icon: "RD", color: "#DC382D" },
    { name: "MySQL", icon: "MY", color: "#4479A1" },
    { name: "Supabase", icon: "SB", color: "#3ECF8E" },
    { name: "Firebase", icon: "FB", color: "#FFCA28" },
  ],
  cloud: [
    { name: "AWS", icon: "AW", color: "#FF9900" },
    { name: "Azure", icon: "AZ", color: "#0078D4" },
    { name: "GCP", icon: "GC", color: "#4285F4" },
    { name: "Vercel", icon: "VC", color: "#000000" },
    { name: "Docker", icon: "DK", color: "#2496ED" },
    { name: "Kubernetes", icon: "K8", color: "#326CE5" },
  ],
}

function FloatingTechCard({
  tech,
  position,
  index,
}: { tech: { name: string; icon: string; color: string }; position: [number, number, number]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + index
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <boxGeometry args={[1.5, 1.5, 0.3]} />
        <meshStandardMaterial
          color={hovered ? tech.color : "#1a1a2e"}
          emissive={tech.color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

function TechScene() {
  const allTech = [
    ...techStack.languages.map((t, i) => ({
      ...t,
      position: [-6 + i * 2.5, 3, 0] as [number, number, number],
      index: i,
    })),
    ...techStack.frameworks.map((t, i) => ({
      ...t,
      position: [-6 + i * 2.5, 0, 0] as [number, number, number],
      index: i + 6,
    })),
    ...techStack.databases.map((t, i) => ({
      ...t,
      position: [-6 + i * 2.5, -3, 0] as [number, number, number],
      index: i + 12,
    })),
    ...techStack.cloud.map((t, i) => ({
      ...t,
      position: [-6 + i * 2.5, -6, 0] as [number, number, number],
      index: i + 18,
    })),
  ]

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} color="#ffffff" />

      {allTech.map((tech, index) => (
        <FloatingTechCard key={tech.name} tech={tech} position={tech.position} index={tech.index} />
      ))}

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "languages", label: "Languages" },
    { id: "frameworks", label: "Frameworks" },
    { id: "databases", label: "Databases" },
    { id: "cloud", label: "Cloud & DevOps" },
  ]

  const getFilteredTech = () => {
    if (activeCategory === "all") {
      return Object.values(techStack).flat()
    }
    return techStack[activeCategory as keyof typeof techStack] || []
  }

  return (
    <section id="stack" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
            Our Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies powering innovative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                  : "bg-secondary/50 text-secondary-foreground hover:bg-secondary hover:scale-105"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* 3D Canvas */}
        {/* <div className="h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 border border-primary/20 mb-12 relative">
          <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
            <TechScene />
          </Canvas>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
            Drag to rotate • Scroll to zoom
          </div>
        </div> */}

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {getFilteredTech().map((tech, index) => (
            <div
              key={tech.name}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex flex-col items-center gap-3">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: tech.color,
                    boxShadow: `0 10px 30px ${tech.color}40`,
                  }}
                >
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </div>

              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 animate-shimmer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
