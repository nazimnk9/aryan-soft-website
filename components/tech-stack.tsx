// "use client"

// import { Canvas, useFrame } from "@react-three/fiber"
// import { OrbitControls, Float } from "@react-three/drei"
// import { useRef, useState } from "react"
// import type * as THREE from "three"

// const techStack = {
//   languages: [
//     { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
//     { name: "TypeScript", icon: "TS", color: "#3178C6" },
//     { name: "Python", icon: "PY", color: "#3776AB" },
//     { name: "Java", icon: "JV", color: "#007396" },
//     { name: "Go", icon: "GO", color: "#00ADD8" },
//     { name: "Rust", icon: "RS", color: "#CE422B" },
//   ],
//   frameworks: [
//     { name: "React", icon: "RC", color: "#61DAFB" },
//     { name: "Next.js", icon: "NX", color: "#000000" },
//     { name: "Vue.js", icon: "VU", color: "#4FC08D" },
//     { name: "Django", icon: "DJ", color: "#092E20" },
//     { name: "FastAPI", icon: "FA", color: "#009688" },
//     { name: "Express", icon: "EX", color: "#000000" },
//   ],
//   databases: [
//     { name: "PostgreSQL", icon: "PG", color: "#4169E1" },
//     { name: "MongoDB", icon: "MG", color: "#47A248" },
//     { name: "Redis", icon: "RD", color: "#DC382D" },
//     { name: "MySQL", icon: "MY", color: "#4479A1" },
//     { name: "Supabase", icon: "SB", color: "#3ECF8E" },
//     { name: "Firebase", icon: "FB", color: "#FFCA28" },
//   ],
//   cloud: [
//     { name: "AWS", icon: "AW", color: "#FF9900" },
//     { name: "Azure", icon: "AZ", color: "#0078D4" },
//     { name: "GCP", icon: "GC", color: "#4285F4" },
//     { name: "Vercel", icon: "VC", color: "#000000" },
//     { name: "Docker", icon: "DK", color: "#2496ED" },
//     { name: "Kubernetes", icon: "K8", color: "#326CE5" },
//   ],
// }

// function FloatingTechCard({
//   tech,
//   position,
//   index,
// }: { tech: { name: string; icon: string; color: string }; position: [number, number, number]; index: number }) {
//   const meshRef = useRef<THREE.Mesh>(null)
//   const [hovered, setHovered] = useState(false)

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + index
//       meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1
//     }
//   })

//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
//       <mesh
//         ref={meshRef}
//         position={position}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//         scale={hovered ? 1.2 : 1}
//       >
//         <boxGeometry args={[1.5, 1.5, 0.3]} />
//         <meshStandardMaterial
//           color={hovered ? tech.color : "#1a1a2e"}
//           emissive={tech.color}
//           emissiveIntensity={hovered ? 0.5 : 0.2}
//           metalness={0.8}
//           roughness={0.2}
//         />
//       </mesh>
//     </Float>
//   )
// }

// function TechScene() {
//   const allTech = [
//     ...techStack.languages.map((t, i) => ({
//       ...t,
//       position: [-6 + i * 2.5, 3, 0] as [number, number, number],
//       index: i,
//     })),
//     ...techStack.frameworks.map((t, i) => ({
//       ...t,
//       position: [-6 + i * 2.5, 0, 0] as [number, number, number],
//       index: i + 6,
//     })),
//     ...techStack.databases.map((t, i) => ({
//       ...t,
//       position: [-6 + i * 2.5, -3, 0] as [number, number, number],
//       index: i + 12,
//     })),
//     ...techStack.cloud.map((t, i) => ({
//       ...t,
//       position: [-6 + i * 2.5, -6, 0] as [number, number, number],
//       index: i + 18,
//     })),
//   ]

//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
//       <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
//       <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} color="#ffffff" />

//       {allTech.map((tech, index) => (
//         <FloatingTechCard key={tech.name} tech={tech} position={tech.position} index={tech.index} />
//       ))}

//       <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
//     </>
//   )
// }

// export function TechStack() {
//   const [activeCategory, setActiveCategory] = useState<string>("all")

//   const categories = [
//     { id: "all", label: "All Technologies" },
//     { id: "languages", label: "Languages" },
//     { id: "frameworks", label: "Frameworks" },
//     { id: "databases", label: "Databases" },
//     { id: "cloud", label: "Cloud & DevOps" },
//   ]

//   const getFilteredTech = () => {
//     if (activeCategory === "all") {
//       return Object.values(techStack).flat()
//     }
//     return techStack[activeCategory as keyof typeof techStack] || []
//   }

//   return (
//     <section id="stack" className="py-20 relative overflow-hidden">
//       <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Technology Stack</h2>
//           <p className="text-lg text-white max-w-2xl mx-auto">
//             Cutting-edge technologies powering innovative solutions
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//                 activeCategory === category.id
//                   ? "bg-cyan-500/20 text-white border border-cyan-500/40 shadow-lg shadow-cyan-500/20 scale-105"
//                   : "bg-secondary/50 text-white/70 border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:scale-105"
//               }`}
//             >
//               {category.label}
//             </button>
//           ))}
//         </div>

//         {/* 3D Canvas
//         <div className="h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 border border-primary/20 mb-12 relative">
//           <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
//             <TechScene />
//           </Canvas>
//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
//             Drag to rotate • Scroll to zoom
//           </div>
//         </div> */}

//         {/* Tech Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {getFilteredTech().map((tech, index) => (
//             <div
//               key={tech.name}
//               className="group relative p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
//               style={{
//                 animationDelay: `${index * 0.1}s`,
//               }}
//             >
//               <div className="flex flex-col items-center gap-3">
//                 <div
//                   className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
//                   style={{
//                     backgroundColor: tech.color,
//                     boxShadow: `0 10px 30px ${tech.color}40`,
//                   }}
//                 >
//                   {tech.icon}
//                 </div>
//                 <span className="text-sm font-medium text-center text-white group-hover:text-cyan-400 transition-colors">
//                   {tech.name}
//                 </span>
//               </div>

//               {/* Animated border effect */}
//               <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 animate-shimmer" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState } from "react"

const techStack = {
  languages: [
    { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
    { name: "TypeScript", icon: "TS", color: "#0e61b9ff" },
    { name: "Python", icon: "PY", color: "#3776AB" },
    { name: "Java", icon: "JV", color: "#007396" },
    { name: "Go", icon: "GO", color: "#00ADD8" },
    { name: "Rust", icon: "RS", color: "#CE422B" },
  ],
  frameworks: [
    { name: "React", icon: "RC", color: "#61DAFB" },
    { name: "Next.js", icon: "NX", color: "#0e5eb3" },
    { name: "Vue.js", icon: "VU", color: "#4FC08D" },
    { name: "Django", icon: "DJ", color: "#092E20" },
    { name: "FastAPI", icon: "FA", color: "#009688" },
    { name: "Express", icon: "EX", color: "#2e6991" },
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
    { name: "Vercel", icon: "VC", color: "#1c5f86" },
    { name: "Docker", icon: "DK", color: "#2496ED" },
    { name: "Kubernetes", icon: "K8", color: "#326CE5" },
  ],
}

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [activeIndex, setActiveIndex] = useState<number>(0)

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

  const filteredTech = getFilteredTech()

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setActiveIndex(0) // Reset to first item when category changes
  }

  return (
    <section id="stack" className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Technology Stack</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Cutting-edge technologies powering innovative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-cyan-500/20 text-white border border-cyan-500/40 shadow-lg shadow-cyan-500/20 scale-105"
                  : "bg-gray-700/50 text-white/70 border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:scale-105"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Expandable Tech Gallery */}
        <div className="flex flex-row align-stretch overflow-hidden min-w-[300px] max-w-5xl w-full h-96 mx-auto rounded-3xl shadow-2xl">
          {filteredTech.map((tech, index) => (
            <div
              key={tech.name}
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out rounded-3xl ${
                activeIndex === index ? 'flex-[5]' : 'flex-1'
              }`}
              onClick={() => setActiveIndex(index)}
              style={{
                background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}40)`
              }}
            >
              {/* Tech Icon Background */}
              <div className="w-full h-full relative flex items-center justify-center">
                <div 
                  className={`w-32 h-32 rounded-2xl flex items-center justify-center text-5xl font-bold text-white shadow-2xl transition-transform duration-700 ${
                    activeIndex === index ? 'scale-110' : 'scale-75'
                  }`}
                  style={{
                    backgroundColor: tech.color,
                    boxShadow: `0 20px 60px ${tech.color}60`,
                  }}
                >
                  {tech.icon}
                </div>
                
                {/* Animated background pattern */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${tech.color}, transparent 70%)`
                  }}
                />
                
                {/* Additional background circles */}
                <div 
                  className="absolute top-10 right-10 w-20 h-20 rounded-full opacity-20 animate-pulse"
                  style={{ backgroundColor: tech.color }}
                />
                <div 
                  className="absolute bottom-10 left-10 w-16 h-16 rounded-full opacity-15 animate-pulse"
                  style={{ backgroundColor: tech.color }}
                />
              </div>

              {/* Label */}
              <div className={`absolute bottom-6 left-6 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-semibold text-lg transition-opacity duration-300 ${
                activeIndex === index ? 'opacity-100' : 'opacity-0'
              }`}>
                {tech.name}
              </div>

              {/* Hover shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-full transition-transform duration-1000 hover:translate-x-[-100%]" />
            </div>
          ))}
        </div>

        {/* Active Tech Details */}
        {/* <div className="mt-12 text-center">
          <div className="max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/30 backdrop-blur-sm">
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg"
              style={{
                backgroundColor: filteredTech[activeIndex]?.color,
                boxShadow: `0 10px 30px ${filteredTech[activeIndex]?.color}40`,
              }}
            >
              {filteredTech[activeIndex]?.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {filteredTech[activeIndex]?.name}
            </h3>
            <p className="text-gray-300">
              Click on the technologies above to explore our comprehensive stack
            </p>
          </div>
        </div> */}

        {/* Navigation hint */}
        {/* <div className="text-center mt-8">
          <p className="text-sm text-gray-400 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-600/30 inline-block">
            Click to expand • Explore our technology expertise
          </p>
        </div> */}
      </div>
    </section>
  )
}