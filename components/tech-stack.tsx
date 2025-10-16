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

import type React from "react"

import { useState } from "react"

const techStack = {
  languages: [
    {
      name: "JavaScript",
      icon: "JS",
      color: "#F7DF1E",
      description: "Dynamic programming language for web development",
      features: ["Versatile", "Event-driven", "Cross-platform", "Large ecosystem"],
    },
    {
      name: "TypeScript",
      icon: "TS",
      color: "#0e61b9",
      description: "Strongly typed programming language built on JavaScript",
      features: ["Type safety", "Better tooling", "Scalable", "Modern syntax"],
    },
    {
      name: "Python",
      icon: "PY",
      color: "#1b9274",
      description: "High-level programming language with clean syntax",
      features: ["Readable code", "Rich libraries", "AI/ML ready", "Rapid development"],
    },
    {
      name: "Java",
      icon: "JV",
      color: "#007396",
      description: "Object-oriented programming language for enterprise applications",
      features: ["Platform independent", "Robust", "Secure", "Multithreaded"],
    },
    {
      name: "Go",
      icon: "GO",
      color: "#00ADD8",
      description: "Fast, statically typed language designed for modern computing",
      features: ["Concurrent", "Simple syntax", "Fast compilation", "Cloud native"],
    },
    {
      name: "Rust",
      icon: "RS",
      color: "#CE422B",
      description: "Systems programming language focused on safety and performance",
      features: ["Memory safe", "Zero-cost abstractions", "Concurrent", "Fast"],
    },
  ],
  frameworks: [
    {
      name: "React",
      icon: "RC",
      color: "#61DAFB",
      description: "JavaScript library for building user interfaces",
      features: ["Component-based", "Virtual DOM", "Flexible", "Large community"],
    },
    {
      name: "Next.js",
      icon: "NX",
      color: "#0e5eb3",
      description: "React framework with hybrid static & server rendering",
      features: ["SSR/SSG", "File-based routing", "API routes", "Performance optimized"],
    },
    {
      name: "Vue.js",
      icon: "VU",
      color: "#1472a8",
      description: "Progressive framework for building user interfaces",
      features: ["Approachable", "Versatile", "Performant", "Template syntax"],
    },
    {
      name: "Django",
      icon: "DJ",
      color: "#1e6175",
      description: "High-level Python web framework for rapid development",
      features: ["Batteries included", "Secure", "Scalable", "Admin interface"],
    },
    {
      name: "FastAPI",
      icon: "FA",
      color: "#103985",
      description: "Modern, fast web framework for building APIs with Python",
      features: ["High performance", "Easy to use", "Automatic docs", "Type hints"],
    },
    {
      name: "Express",
      icon: "EX",
      color: "#2e6991",
      description: "Fast, unopinionated web framework for Node.js",
      features: ["Minimalist", "Flexible", "Middleware support", "Large ecosystem"],
    },
  ],
  databases: [
    {
      name: "PostgreSQL",
      icon: "PG",
      color: "#4169E1",
      description: "Advanced open source relational database",
      features: ["ACID compliant", "Extensible", "Standards compliant", "Reliable"],
    },
    {
      name: "MongoDB",
      icon: "MG",
      color: "#47A248",
      description: "Document-based NoSQL database",
      features: ["Flexible schema", "Scalable", "Rich queries", "Cloud ready"],
    },
    {
      name: "Redis",
      icon: "RD",
      color: "#e7e2e1",
      description: "In-memory data structure store",
      features: ["High performance", "Versatile", "Pub/Sub", "Clustering"],
    },
    {
      name: "MySQL",
      icon: "MY",
      color: "#4479A1",
      description: "Popular open source relational database",
      features: ["Reliable", "Easy to use", "Secure", "High performance"],
    },
    {
      name: "Supabase",
      icon: "SB",
      color: "#067230",
      description: "Open source Firebase alternative",
      features: ["Real-time", "Auth built-in", "API auto-generation", "PostgreSQL"],
    },
    {
      name: "Firebase",
      icon: "FB",
      color: "#646e0b",
      description: "Google's mobile and web application platform",
      features: ["Real-time database", "Authentication", "Hosting", "Analytics"],
    },
  ],
  cloud: [
    {
      name: "AWS",
      icon: "AW",
      color: "#47706e",
      description: "Comprehensive cloud computing platform",
      features: ["Scalable", "Secure", "Global", "Comprehensive services"],
    },
    {
      name: "Azure",
      icon: "AZ",
      color: "#FEFEFE",
      description: "Microsoft's cloud computing platform",
      features: ["Hybrid cloud", "AI integration", "Enterprise ready", "Developer tools"],
    },
    {
      name: "GCP",
      icon: "GC",
      color: "#4285F4",
      description: "Google's cloud computing platform",
      features: ["Machine learning", "Big data", "Serverless", "Global network"],
    },
    {
      name: "Vercel",
      icon: "VC",
      color: "#1c5f86",
      description: "Platform for frontend frameworks and static sites",
      features: ["Edge network", "Serverless functions", "Git integration", "Preview deployments"],
    },
    {
      name: "Docker",
      icon: "DK",
      color: "#fff",
      description: "Platform for developing, shipping, and running applications",
      features: ["Containerization", "Portable", "Scalable", "DevOps ready"],
    },
    {
      name: "Kubernetes",
      icon: "K8",
      color: "#326CE5",
      description: "Container orchestration platform",
      features: ["Auto-scaling", "Self-healing", "Service discovery", "Rolling updates"],
    },
  ],
}

const TechIcons: Record<string, React.FC<{ className?: string }>> = {
  JavaScript: ({ className }) => (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" fill="#F7DF1E" />
      <path
        d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"
        fill="#000"
      />
    </svg>
  ),
  TypeScript: ({ className }) => (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" fill="#3178C6" />
      <path d="M20 20h216v216H20V20z" fill="#3178C6" />
      <path
        d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 00-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 017.558 2.719 41.7 41.7 0 016.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0110.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 01-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451zM128.433 88.834v27.62h-49.39v120.421H50.979V116.454H1.59V88.834h126.843z"
        fill="#FFF"
      />
    </svg>
  ),
  Python: ({ className }) => (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pythonBlue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#387EB8" />
          <stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="pythonYellow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE873" />
          <stop offset="100%" stopColor="#FFD43B" />
        </linearGradient>
      </defs>
      <path
        d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0111.13 11.13 11.12 11.12 0 01-11.13 11.13 11.12 11.12 0 01-11.13-11.13 11.12 11.12 0 0111.13-11.13z"
        fill="url(#pythonBlue)"
      />
      <path
        d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127h-61.868v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 01-11.13-11.13 11.12 11.12 0 0111.13-11.131 11.12 11.12 0 0111.13 11.13 11.12 11.12 0 01-11.13 11.13z"
        fill="url(#pythonYellow)"
      />
    </svg>
  ),
  Java: ({ className }) => (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M82.554 171.175s-8.837 5.141 6.286 6.857c18.286 2.286 27.429 1.714 47.429-2 0 0 5.143 3.429 12.571 6.286-44.571 19.143-101.143-.571-66.286-11.143M77.125 147.746s-9.714 7.429 5.143 9.143c19.429 2 34.857 2.286 61.429-3.143 0 0 3.714 3.429 9.143 5.714-52 15.429-110.286 1.143-75.715-11.714"
        fill="#5382A1"
      />
      <path
        d="M143.411 108.746c10.857 12.571-2.857 23.714-2.857 23.714s27.429-14.286 14.857-32c-12-16.571-21.143-24.857 28.571-53.143 0 0-78.286 19.714-40.571 61.429"
        fill="#E76F00"
      />
      <path
        d="M201.125 185.746s6.571 5.143-7.143 9.143c-26.286 7.429-109.143 9.714-132.571.286-8.286-3.429 7.429-8 12.286-9.143 5.143-1.143 8-1.143 8-1.143-9.143-6.286-59.429 12.571-25.714 18.286 92.571 15.429 169.143-7.143 145.142-17.429M87.125 124.746s-42.286 10.286-14.857 13.714c11.429 1.429 34.286 1.143 55.429-.571 17.143-1.429 34.286-4.286 34.286-4.286s-6 2.571-10.286 5.714c-42.857 11.429-126.286 6.286-102.286-5.714 20.286-10.286 37.714-9.143 37.714-8.857M171.125 158.746c43.429-22.571 23.429-44.286 9.143-41.429-3.429.857-5.143 1.714-5.143 1.714s1.429-2.286 4-3.143c30.286-10.857 53.714 28.857-8.857 44 0 0 .571-.571.857-1.142"
        fill="#5382A1"
      />
      <path
        d="M128.554 0s24.286 24.286-23.143 61.429c-38.286 30.286-8.571 47.429 0 67.143-22.286-20.286-38.857-38.286-27.714-55.143C90.268 54.286 132.554 41.143 128.554 0"
        fill="#E76F00"
      />
      <path
        d="M92.554 256c41.714 2.857 105.714-1.714 107.429-23.429 0 0-2.857 7.429-34.571 13.143-36 6.286-80.571 5.714-107.143 1.714 0 0 5.429 4.571 34.285 8.572"
        fill="#5382A1"
      />
    </svg>
  ),
  Go: ({ className }) => (
     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="300.000000pt" height="265.000000pt" viewBox="0 0 300.000000 265.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,265.000000) scale(0.100000,-0.100000)" fill="#1c67caff" stroke="none"> <path d="M1336 1715 c-179 -46 -337 -200 -382 -376 -61 -238 82 -459 324 -501 86 -14 196 4 288 48 67 33 182 141 203 192 7 17 17 32 21 32 4 0 12 -18 19 -40 7 -23 35 -64 67 -100 136 -147 344 -177 551 -81 73 35 181 132 220 199 75 128 83 306 19 431 -29 55 -107 125 -178 160 -121 60 -299 51 -443 -22 -83 -41 -174 -136 -216 -225 l-34 -71 -197 0 -198 -1 -35 -70 c-56 -111 -58 -109 92 -112 l126 -3 -47 -47 c-105 -105 -261 -94 -326 22 -68 123 7 293 153 347 66 24 138 9 193 -39 l36 -32 114 29 c63 16 114 33 114 38 0 5 -12 28 -26 53 -36 62 -115 129 -182 155 -73 28 -195 34 -276 14z m246 -34 c53 -17 125 -69 161 -119 36 -50 32 -57 -44 -79 -69 -19 -105 -19 -127 0 -28 26 -104 57 -139 57 -18 0 -62 -12 -98 -26 -112 -45 -176 -140 -178 -264 -1 -87 39 -157 114 -200 53 -29 147 -32 202 -5 76 36 138 118 110 146 -5 5 -52 12 -104 15 -51 3 -98 9 -102 14 -11 10 25 79 52 103 19 15 44 17 201 17 l180 0 46 80 c99 171 223 250 413 266 134 11 236 -29 329 -130 23 -25 44 -56 48 -70 3 -14 10 -26 16 -26 5 0 7 -4 4 -9 -3 -4 0 -31 8 -60 48 -185 -96 -415 -312 -496 -66 -25 -91 -29 -177 -29 -96 1 -103 2 -170 37 -63 34 -165 126 -165 149 0 18 -45 68 -60 68 -10 0 -41 -28 -71 -62 -79 -92 -96 -105 -186 -150 -77 -38 -88 -40 -175 -41 -150 -2 -254 50 -330 164 -80 119 -72 325 15 436 46 58 117 127 160 157 97 67 263 92 379 57z"/> <path d="M2195 1521 c-28 -10 -60 -23 -72 -29 -36 -20 -92 -93 -113 -149 -20 -53 -27 -133 -13 -147 4 -3 8 -16 10 -27 5 -35 51 -85 105 -114 65 -36 153 -40 208 -10 19 10 38 18 42 17 10 -2 98 90 114 119 30 60 35 161 10 220 -31 73 -127 138 -206 138 -19 0 -58 -8 -85 -18z m171 -36 c91 -45 129 -137 99 -242 -33 -113 -167 -206 -272 -187 -94 16 -162 86 -171 173 -9 95 48 200 131 243 89 45 142 48 213 13z"/> <path d="M482 1480 c-12 -20 -10 -20 206 -20 212 0 242 4 242 32 0 4 -98 8 -218 8 -206 0 -218 -1 -230 -20z"/> <path d="M574 1393 c-236 -3 -252 -5 -269 -23 -18 -20 -18 -20 271 -18 l289 3 3 23 c3 18 -1 22 -20 20 -13 -2 -136 -4 -274 -5z"/> <path d="M590 1271 c-5 -11 -10 -21 -10 -23 0 -2 60 -2 132 -1 126 1 133 2 136 22 3 20 -1 21 -122 21 -114 0 -126 -2 -136 -19z"/> </g> </svg> 
  ),
  Rust: ({ className }) => (
     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M1100 2230 c-10 -10 -26 -32 -34 -49 -30 -57 -46 -56 -98 2 -56 62 -72 59 -101 -19 -28 -76 -40 -80 -102 -33 -32 24 -58 37 -68 33 -15 -5 -19 -16 -33 -97 -4 -21 -13 -41 -21 -44 -7 -3 -39 6 -71 20 -73 33 -82 26 -82 -63 0 -81 -5 -85 -85 -64 -50 13 -60 13 -72 1 -12 -12 -12 -22 1 -72 21 -80 17 -85 -64 -85 -89 0 -96 -9 -63 -82 14 -32 23 -64 20 -71 -3 -8 -23 -17 -44 -21 -81 -14 -92 -18 -97 -33 -4 -10 9 -36 33 -68 47 -62 43 -74 -33 -102 -77 -29 -81 -45 -19 -101 28 -26 49 -53 46 -60 -3 -7 -29 -28 -59 -47 -30 -19 -54 -42 -54 -50 0 -8 24 -31 54 -50 30 -19 56 -40 59 -47 3 -7 -18 -34 -47 -60 -43 -39 -49 -49 -40 -65 6 -10 33 -26 60 -36 76 -28 80 -40 33 -102 -24 -32 -37 -58 -33 -68 5 -15 16 -19 97 -33 21 -4 41 -13 44 -21 3 -7 -6 -39 -20 -70 -14 -31 -23 -62 -20 -69 4 -10 26 -14 78 -14 86 0 90 -4 69 -85 -13 -50 -13 -60 -1 -72 12 -12 22 -12 72 1 81 21 85 17 85 -69 0 -52 4 -74 14 -78 7 -3 38 6 69 20 31 14 63 23 71 20 9 -4 17 -26 21 -54 14 -102 27 -109 100 -54 62 47 74 43 102 -33 10 -27 26 -54 36 -60 16 -9 26 -3 65 40 26 29 53 50 60 47 7 -3 28 -29 47 -59 19 -30 42 -54 50 -54 8 0 31 24 50 54 19 30 40 56 47 59 7 3 34 -18 60 -47 39 -43 49 -49 65 -40 10 6 26 33 36 60 28 76 40 80 102 33 32 -24 58 -37 68 -33 15 5 19 16 33 97 4 21 13 41 21 44 7 3 39 -6 71 -20 73 -33 82 -26 82 63 0 81 5 85 85 64 50 -13 60 -13 72 -1 12 12 12 22 -1 72 -21 81 -17 85 69 85 52 0 74 4 78 14 3 7 -6 38 -20 69 -14 31 -23 63 -20 70 3 8 23 17 44 21 80 14 91 18 97 32 3 9 -11 38 -33 68 -47 63 -42 77 28 101 85 28 88 48 16 109 -53 44 -50 59 19 100 24 14 46 32 50 41 6 18 -20 47 -63 69 -57 30 -56 46 2 98 63 57 59 73 -26 103 -31 11 -58 26 -60 35 -1 8 14 38 35 66 23 31 36 58 32 67 -5 15 -16 19 -97 33 -21 4 -41 13 -44 21 -3 7 6 39 20 71 33 73 26 82 -63 82 -81 0 -85 5 -64 85 13 50 13 60 1 72 -12 12 -22 12 -72 -1 -80 -21 -85 -17 -85 64 0 89 -9 96 -82 63 -32 -14 -64 -23 -71 -20 -8 3 -17 23 -21 44 -14 81 -18 92 -33 97 -9 4 -36 -9 -67 -32 -28 -21 -58 -36 -66 -35 -9 2 -24 29 -35 60 -30 85 -46 89 -103 26 -54 -61 -65 -60 -106 11 -31 53 -50 62 -76 36z m81 -97 c27 -33 64 -29 112 12 l41 36 22 -43 c12 -24 32 -52 44 -63 21 -19 22 -19 77 9 59 31 73 27 73 -20 0 -27 33 -70 59 -77 10 -2 38 4 62 14 50 23 59 16 59 -47 0 -30 6 -46 24 -63 20 -19 30 -21 76 -15 l53 7 -7 -54 c-6 -49 -4 -57 16 -76 15 -14 39 -23 68 -25 50 -3 48 1 34 -94 -5 -36 -3 -44 21 -63 15 -11 37 -21 49 -21 48 -1 53 -16 22 -71 l-28 -51 19 -27 c11 -14 36 -34 56 -44 21 -9 37 -21 37 -27 0 -5 -13 -25 -30 -43 -43 -49 -39 -78 14 -123 l45 -37 -50 -47 c-55 -52 -56 -59 -7 -121 15 -20 28 -40 28 -43 0 -3 -18 -15 -40 -26 -22 -11 -47 -31 -56 -45 -15 -23 -14 -27 12 -75 30 -55 25 -70 -22 -70 -12 0 -34 -10 -49 -21 -28 -23 -29 -32 -9 -127 l6 -32 -49 0 c-39 0 -54 -5 -72 -24 -19 -20 -21 -30 -15 -76 l7 -53 -54 7 c-49 6 -57 4 -76 -16 -14 -15 -23 -39 -25 -68 -3 -50 -4 -50 -94 -35 -37 7 -43 4 -62 -20 -12 -15 -22 -37 -22 -49 -1 -48 -16 -53 -70 -23 -48 27 -52 28 -75 13 -14 -9 -34 -34 -45 -56 -11 -22 -26 -40 -33 -40 -7 0 -26 13 -42 30 -43 45 -74 40 -125 -18 -28 -31 -44 -43 -47 -34 -3 8 -19 29 -35 48 -39 44 -74 45 -113 4 -16 -17 -35 -30 -42 -30 -7 0 -22 18 -33 40 -11 22 -31 47 -45 56 -23 15 -27 15 -71 -11 -25 -15 -51 -24 -58 -22 -7 3 -16 23 -19 44 -9 55 -36 77 -84 69 -89 -15 -88 -16 -91 34 -2 29 -11 53 -25 68 -19 20 -27 22 -76 16 l-54 -7 7 53 c6 46 4 56 -15 76 -16 17 -33 24 -60 24 -64 0 -71 6 -54 47 23 54 19 88 -11 112 -15 12 -36 21 -48 21 -11 0 -28 5 -36 10 -13 8 -11 16 12 58 23 41 25 51 15 72 -7 14 -32 35 -55 48 -23 13 -42 29 -42 36 0 7 14 25 30 41 48 46 40 86 -29 134 l-33 24 46 39 c57 49 59 75 11 131 l-36 41 46 23 c24 13 52 34 61 48 15 23 15 27 -10 71 -14 26 -26 50 -26 55 0 4 16 11 35 15 46 8 85 40 85 68 0 13 -7 42 -15 65 -8 22 -13 41 -12 42 1 0 25 3 52 6 31 3 59 13 72 26 20 18 22 27 16 75 l-6 55 54 -7 c50 -6 57 -5 77 17 15 16 23 37 24 58 0 66 4 70 50 53 22 -8 51 -14 64 -14 26 0 64 43 64 74 1 48 16 53 70 23 48 -27 52 -28 75 -13 14 9 34 34 45 56 11 22 24 40 29 40 4 0 24 -13 42 -30 50 -43 80 -40 126 15 l38 46 18 -23 c10 -13 27 -33 38 -45z"/> <path d="M1067 2069 c-23 -13 -47 -62 -47 -94 0 -23 -2 -25 -21 -14 -84 44 -413 -119 -494 -244 -18 -27 -18 -29 1 -48 19 -18 40 -19 469 -22 511 -4 505 -3 595 -84 57 -51 80 -96 80 -155 0 -53 -28 -103 -94 -168 -31 -30 -56 -60 -56 -68 0 -7 20 -38 45 -68 27 -34 51 -77 61 -112 24 -80 68 -122 129 -122 79 0 127 37 144 109 10 45 23 61 52 61 33 0 49 34 49 105 0 61 -3 72 -26 96 l-26 27 31 16 c32 17 61 61 61 93 0 30 -38 83 -68 94 -19 7 -37 7 -61 0 -19 -6 -36 -9 -37 -8 -1 1 2 21 9 44 10 39 9 45 -24 98 -43 72 -148 180 -224 232 -153 103 -303 150 -377 118 -15 -6 -18 -2 -18 30 0 52 -44 95 -97 95 -21 0 -46 -5 -56 -11z m103 -39 c41 -41 13 -110 -43 -110 -38 0 -50 7 -66 37 -15 30 -14 36 10 67 25 32 70 35 99 6z m-137 -150 c76 -80 92 -80 181 1 l67 62 67 -18 c147 -40 318 -151 410 -268 93 -117 89 -102 43 -208 -41 -91 -48 -123 -33 -146 4 -6 47 -30 95 -52 l87 -40 0 -71 0 -70 -50 0 -50 0 0 -45 c0 -87 -50 -134 -126 -122 -49 8 -70 30 -78 79 -9 57 -52 133 -93 164 l-34 26 39 27 c57 42 111 110 123 155 33 124 -48 248 -197 303 -65 23 -68 23 -521 23 -519 0 -482 -10 -354 92 40 33 101 73 135 90 62 32 188 77 217 78 9 0 41 -27 72 -60z m948 -482 c10 -25 9 -33 -8 -56 -55 -74 -161 0 -108 75 30 42 95 32 116 -19z m-146 -86 c-1 -1 -10 0 -19 4 -16 6 -22 35 -9 48 6 6 34 -45 28 -52z"/> <path d="M272 1464 c-33 -23 -54 -70 -47 -104 6 -27 48 -73 76 -82 9 -3 5 -14 -11 -35 -22 -30 -23 -38 -18 -155 6 -123 16 -168 45 -200 14 -15 34 -18 133 -18 101 0 119 3 133 18 15 16 17 51 17 280 0 249 -1 263 -20 282 -28 28 -106 28 -136 -1 l-23 -22 -31 27 c-36 30 -84 34 -118 10z m92 -35 c33 -26 35 -70 4 -99 -43 -40 -108 -11 -108 50 0 34 30 70 59 70 10 0 30 -9 45 -21z m206 -261 l0 -268 -119 0 -120 0 -12 58 c-7 31 -13 103 -13 160 l-1 103 84 37 c100 45 111 62 81 129 -11 25 -20 46 -20 47 0 0 27 1 60 1 l60 0 0 -267z m-140 157 c-22 -26 -29 -16 -12 18 13 25 17 28 20 14 2 -10 -2 -24 -8 -32z"/> <path d="M921 1434 c-31 -40 -30 -142 2 -172 22 -21 33 -22 174 -22 84 0 163 4 178 10 69 26 95 101 54 154 -39 50 -65 56 -233 56 l-155 0 -20 -26z m344 -19 c35 -17 59 -52 53 -80 -1 -10 -16 -27 -31 -39 -26 -19 -44 -21 -188 -24 l-159 -3 0 80 0 81 146 0 c111 0 154 -4 179 -15z"/> <path d="M922 1058 c-18 -20 -22 -36 -22 -87 0 -54 3 -65 26 -86 22 -20 38 -25 103 -27 l76 -3 3 -79 c2 -57 -1 -82 -10 -87 -7 -5 -151 -9 -319 -9 -296 0 -307 -1 -324 -21 -19 -19 -19 -21 0 -55 21 -38 64 -74 89 -74 20 0 20 -11 1 -36 -25 -34 -19 -92 14 -125 41 -40 88 -40 136 2 l35 31 20 -24 c55 -70 295 -121 470 -99 156 20 249 56 279 108 9 16 13 15 43 -14 43 -41 78 -50 116 -28 32 19 62 63 62 90 0 10 -9 32 -20 49 l-19 32 35 13 c34 12 94 80 94 107 0 7 -10 20 -22 28 -18 13 -54 16 -183 16 -109 0 -168 4 -185 13 -37 18 -66 80 -89 186 -22 98 -44 141 -90 176 -22 17 -45 20 -161 23 -132 3 -136 3 -158 -20z m295 -28 c43 -26 58 -59 84 -177 21 -99 41 -144 80 -179 19 -17 41 -20 216 -24 l195 -5 -41 -46 -40 -46 -82 19 c-111 26 -120 20 -144 -101 l-17 -90 -53 -20 c-180 -67 -411 -67 -585 2 l-54 22 -17 80 c-20 99 -26 113 -51 120 -10 4 -53 -1 -94 -10 -84 -19 -90 -16 -136 48 l-20 27 344 0 343 -1 3 125 3 126 -106 0 -105 0 0 75 0 75 123 0 c103 0 127 -3 154 -20z m344 -511 c-26 -22 -35 -20 -25 5 3 9 16 16 28 16 21 -1 21 -1 -3 -21z m-897 -30 c34 -27 36 -81 4 -103 -73 -51 -151 48 -82 103 15 12 32 21 39 21 7 0 24 -9 39 -21z m998 -6 c22 -20 23 -70 1 -95 -36 -40 -113 -12 -113 41 0 62 67 95 112 54z"/> </g> </svg> 
  ),
  React: ({ className }) => (
     <svg  version="1.0" xmlns="http://www.w3.org/2000/svg"  width="235.000000pt" height="214.000000pt" viewBox="0 0 235.000000 214.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,214.000000) scale(0.100000,-0.100000)" fill="#211eadff" stroke="none"> <path d="M703 2060 c-114 -24 -191 -107 -228 -247 -16 -59 -22 -255 -10 -304 6 -24 1 -28 -69 -62 -210 -100 -326 -233 -326 -376 0 -141 107 -269 308 -368 77 -38 92 -48 87 -64 -13 -39 -6 -254 9 -312 69 -256 282 -321 556 -170 36 19 81 48 101 64 20 16 40 29 43 29 4 0 30 -18 59 -39 113 -84 239 -132 348 -132 91 -1 131 14 194 72 84 77 117 179 117 356 0 62 -3 121 -6 131 -6 17 8 27 86 65 419 206 411 541 -18 744 -70 34 -75 38 -69 62 12 49 6 245 -10 304 -44 166 -142 251 -290 250 -127 0 -234 -45 -399 -167 -8 -6 -28 4 -58 27 -141 107 -309 161 -425 137z m256 -76 c40 -18 94 -49 120 -68 82 -58 85 -59 133 -35 24 12 57 31 73 44 114 85 287 127 386 94 55 -19 115 -75 142 -132 37 -77 48 -147 46 -285 -1 -146 -1 -146 109 -200 137 -68 245 -175 270 -267 17 -62 15 -86 -9 -150 -36 -97 -152 -201 -293 -264 -80 -35 -83 -42 -78 -177 5 -137 -8 -215 -51 -297 -66 -126 -191 -167 -348 -116 -78 26 -102 38 -200 101 -86 54 -85 54 -169 -2 -129 -87 -242 -126 -343 -118 -70 6 -109 22 -151 65 -81 80 -109 176 -105 360 4 139 -1 151 -78 184 -112 48 -238 152 -278 228 -38 75 -39 165 -2 237 36 71 142 164 243 215 119 59 118 56 115 202 -3 181 22 279 92 351 90 92 219 102 376 30z"/> <path d="M1545 1992 c-51 -5 -128 -33 -190 -68 -70 -39 -98 -62 -113 -91 -13 -24 -4 -40 87 -139 31 -33 73 -79 93 -102 21 -23 48 -43 60 -46 13 -2 79 -16 148 -30 154 -32 156 -32 176 -1 14 21 16 46 12 153 -4 111 -8 134 -31 182 -14 30 -34 65 -45 77 -40 46 -125 74 -197 65z m125 -50 c45 -22 87 -83 105 -152 14 -52 21 -260 10 -272 -3 -2 -44 5 -93 18 -48 12 -118 28 -157 34 -66 11 -72 14 -106 58 -20 26 -67 80 -105 120 -37 41 -63 77 -58 80 164 119 312 161 404 114z"/> <path d="M694 1983 c-39 -7 -106 -75 -132 -133 -22 -47 -26 -74 -30 -182 -4 -109 -2 -132 13 -154 14 -22 22 -25 53 -21 56 7 254 49 283 59 23 8 111 102 207 220 30 37 31 43 19 62 -26 39 -111 96 -189 126 -75 29 -153 37 -224 23z m257 -76 c52 -26 105 -56 118 -67 l23 -20 -67 -72 c-37 -40 -84 -94 -104 -120 -36 -46 -37 -46 -131 -63 -52 -10 -123 -25 -157 -35 -34 -9 -65 -15 -68 -12 -11 11 -4 219 9 267 35 132 91 178 212 173 62 -3 84 -10 165 -51z"/> <path d="M1084 1705 c-76 -79 -85 -102 -54 -127 19 -15 41 -18 145 -18 104 0 126 3 145 18 32 26 20 54 -56 130 -83 82 -97 82 -180 -3z m169 -32 l77 -78 -155 0 -155 0 77 78 c43 42 78 77 78 77 0 0 35 -35 78 -77z"/> <path d="M1050 1520 c-58 -3 -115 -11 -127 -18 -50 -28 -247 -375 -245 -432 1 -54 146 -319 218 -399 l42 -46 198 -3 c229 -4 276 1 305 31 73 76 229 363 229 420 0 75 -194 402 -255 431 -36 16 -213 24 -365 16z m331 -36 c31 -5 42 -16 89 -88 30 -44 83 -136 118 -204 l63 -122 -60 -117 c-34 -64 -87 -156 -118 -204 -68 -103 -56 -99 -307 -99 -234 0 -221 -4 -289 99 -31 48 -84 140 -118 204 l-60 117 63 122 c83 160 167 286 193 291 33 7 387 7 426 1z"/> <path d="M1105 1268 c-51 -18 -92 -55 -115 -103 -31 -64 -25 -156 12 -213 33 -49 114 -92 173 -92 60 0 140 43 173 93 23 35 27 51 27 118 0 70 -3 81 -30 120 -16 23 -48 51 -69 62 -46 24 -128 31 -171 15z m156 -43 c78 -41 112 -152 70 -232 -68 -135 -263 -127 -316 12 -59 153 100 295 246 220z"/> <path d="M755 1485 c-5 -2 -37 -9 -70 -16 -121 -25 -138 -48 -110 -146 47 -163 82 -171 156 -36 23 43 51 90 61 105 32 47 9 104 -37 93z m1 -92 c-24 -38 -58 -97 -76 -133 l-33 -65 -29 98 c-17 53 -28 104 -25 111 3 8 43 23 89 34 126 31 124 32 74 -45z"/> <path d="M1563 1479 c-14 -5 -23 -17 -23 -29 0 -29 117 -238 140 -250 39 -21 67 16 96 128 18 69 18 71 -1 92 -22 25 -64 44 -115 53 -19 4 -44 9 -55 11 -11 2 -30 0 -42 -5z m99 -40 c49 -12 92 -27 94 -34 3 -7 -8 -57 -24 -111 l-29 -99 -33 65 c-18 36 -52 95 -76 133 -24 37 -39 67 -33 67 7 0 52 -9 101 -21z"/> <path d="M379 1358 c-140 -72 -238 -187 -239 -279 0 -117 108 -241 277 -315 50 -23 57 -23 78 -10 15 10 31 40 45 83 12 37 35 105 52 151 l29 82 -30 83 c-16 45 -37 109 -47 142 -18 61 -47 105 -70 105 -7 0 -50 -19 -95 -42z m170 -181 l39 -109 -24 -59 c-13 -32 -35 -98 -49 -146 -14 -48 -28 -89 -31 -92 -11 -11 -158 75 -210 122 -135 123 -137 228 -5 350 32 29 93 72 137 94 l79 42 13 -47 c7 -26 30 -96 51 -155z"/> <path d="M1842 1377 c-12 -13 -22 -28 -22 -34 0 -7 -18 -66 -40 -132 -22 -66 -40 -130 -40 -141 0 -33 89 -292 107 -312 22 -25 31 -23 123 24 92 47 186 131 215 193 65 139 -8 270 -213 382 -42 24 -84 43 -93 43 -8 0 -25 -10 -37 -23z m239 -134 c122 -114 130 -207 25 -320 -49 -54 -174 -137 -225 -150 -16 -4 -21 2 -31 39 -5 23 -28 92 -49 151 l-38 108 33 89 c18 49 41 118 50 154 l16 66 81 -42 c44 -23 106 -66 138 -95z"/> <path d="M1682 945 c-18 -13 -78 -109 -131 -209 -39 -74 3 -93 134 -60 38 10 72 25 86 40 l22 23 -18 73 c-16 67 -34 106 -61 135 -9 9 -16 8 -32 -2z m76 -204 c-3 -13 -154 -60 -195 -61 -7 0 7 30 31 68 24 37 58 96 76 132 l33 65 29 -95 c16 -52 27 -101 26 -109z"/> <path d="M621 936 c-15 -18 -51 -122 -57 -166 -7 -50 22 -74 120 -99 89 -22 126 -16 126 21 0 21 -98 206 -128 241 -18 20 -45 22 -61 3z m60 -58 c17 -35 51 -93 75 -130 24 -38 40 -68 36 -68 -28 -1 -195 47 -199 57 -4 10 48 203 54 203 2 0 17 -28 34 -62z"/> <path d="M546 628 c-12 -17 -16 -48 -16 -128 0 -159 27 -240 101 -303 51 -44 95 -55 182 -45 117 14 297 119 297 173 0 14 -31 58 -82 116 -118 134 -133 147 -159 153 -13 2 -79 16 -146 30 -148 32 -158 32 -177 4z m229 -48 c98 -17 111 -22 129 -47 12 -15 58 -70 104 -121 46 -51 83 -94 81 -96 -85 -66 -212 -126 -282 -133 -83 -8 -123 3 -167 47 -56 56 -80 140 -80 279 0 59 2 110 6 113 3 3 26 -1 52 -9 26 -7 96 -22 157 -33z"/> <path d="M1604 620 c-134 -28 -171 -44 -199 -86 -8 -13 -44 -54 -78 -90 -92 -98 -100 -112 -80 -145 28 -48 193 -134 283 -148 96 -15 178 16 228 86 45 63 55 104 60 239 4 124 3 133 -17 153 -26 26 -32 25 -197 -9z m186 -110 c0 -232 -73 -337 -229 -328 -74 4 -147 34 -248 100 l-63 40 24 19 c18 14 176 193 192 217 1 2 51 12 111 23 59 10 128 25 153 33 25 7 48 12 53 9 4 -2 7 -53 7 -113z"/> <path d="M1042 570 c-12 -5 -25 -16 -28 -25 -14 -35 117 -175 164 -175 15 0 45 23 87 65 115 117 103 139 -78 142 -67 2 -132 -2 -145 -7z m288 -24 c0 -1 -35 -36 -78 -79 l-77 -77 -78 78 -77 78 155 0 c85 1 155 1 155 0z"/> </g> </svg> 
  ),
  "Next.js": ({ className }) => (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="128" cy="128" r="128" fill="#000" />
      <path
        d="M212.634 224.028L98.335 76.8H76.8v102.357h17.067V98.869l109.866 141.257c3.018-2.663 5.926-5.437 8.901-8.098z"
        fill="url(#nextGradient)"
      />
      <path d="M163.556 76.8h17.067v102.4h-17.067V76.8z" fill="url(#nextGradient2)" />
      <defs>
        <linearGradient
          id="nextGradient"
          x1="109.456"
          y1="116.8"
          x2="144.456"
          y2="207.467"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF" />
          <stop offset="1" stopColor="#FFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="nextGradient2"
          x1="172.089"
          y1="76.8"
          x2="172.089"
          y2="179.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF" />
          <stop offset="1" stopColor="#FFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  "Vue.js": ({ className }) => (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z" fill="#41B883" />
      <path d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" fill="#41B883" />
      <path d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z" fill="#35495E" />
    </svg>
  ),
  Django: ({ className }) => (
     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none"> <path d="M1060 1825 l0 -235 -27 7 c-16 5 -73 8 -128 7 -80 -1 -116 -6 -178 -28 -140 -47 -211 -105 -268 -217 -61 -121 -75 -273 -39 -414 35 -139 101 -225 214 -280 139 -68 313 -79 606 -40 l125 17 0 709 0 709 -152 0 -153 0 0 -235z m258 -477 c2 -629 1 -667 -15 -672 -109 -32 -451 -40 -550 -13 -167 45 -260 139 -298 299 -53 227 29 454 195 538 98 50 163 63 293 63 163 -1 157 -11 157 247 0 108 3 200 7 204 4 4 52 5 107 4 l101 -3 3 -667z"/> <path d="M862 1391 c-70 -24 -118 -65 -156 -131 -29 -52 -31 -61 -31 -160 0 -124 15 -162 91 -229 61 -53 133 -75 223 -68 55 4 69 9 88 32 23 26 23 31 23 265 0 233 -1 239 -22 265 -40 45 -129 56 -216 26z m182 -37 c14 -5 16 -37 16 -254 l0 -247 -31 -7 c-82 -16 -175 3 -236 50 -73 56 -105 188 -74 304 17 62 102 144 162 159 43 10 131 7 163 -5z"/> <path d="M1550 1905 l0 -155 150 0 150 0 0 155 0 155 -150 0 -150 0 0 -155z m255 0 l0 -110 -102 -3 -103 -3 0 109 c0 60 3 112 7 116 4 4 50 5 103 4 l95 -3 0 -110z"/> <path d="M1547 1123 c-3 -391 -6 -477 -19 -521 -34 -110 -90 -175 -218 -253 -36 -21 -59 -39 -53 -39 7 0 68 -27 135 -60 68 -33 132 -60 144 -60 45 0 189 116 229 184 65 111 85 314 85 857 l0 359 -149 0 -150 0 -4 -467z m261 107 c4 -465 -16 -717 -65 -813 -37 -73 -165 -181 -213 -179 -38 1 -170 69 -170 87 0 8 4 15 9 15 21 0 140 124 161 167 49 104 51 125 61 583 5 239 11 441 14 448 3 9 30 12 102 10 l98 -3 3 -315z"/> </g> </svg> 
  ),
  FastAPI: ({ className }) => (
     <svg fill="none" height="2500" width="2500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154 154"><circle cx="77" cy="77" fill="#05998b" r="77"/><path d="M81.375 18.667l-38.75 70H77.5l-3.875 46.666 38.75-70H77.5z" fill="#fff"/></svg>
  ),
  Express: ({ className }) => (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="295.000000pt" height="171.000000pt" viewBox="0 0 295.000000 171.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,171.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M665 1698 c-146 -13 -279 -75 -397 -186 -130 -123 -184 -224 -229 -427 -48 -218 -38 -425 30 -623 38 -110 82 -182 162 -262 107 -108 294 -190 433 -190 45 0 48 1 31 13 -11 8 -60 24 -110 35 -277 66 -447 241 -506 518 -12 54 -28 119 -37 144 -23 66 -18 160 13 280 73 284 105 350 225 470 89 89 195 147 336 184 50 13 101 29 113 35 16 9 27 8 48 -2 16 -8 64 -24 108 -35 320 -80 510 -331 518 -682 l2 -95 -638 -5 c-741 -6 -667 8 -667 -124 0 -261 143 -506 355 -612 234 -116 553 -67 728 111 54 55 102 137 155 268 6 15 19 27 28 27 43 0 -48 -207 -133 -301 -78 -87 -190 -146 -345 -184 -139 -34 -155 -47 -48 -41 156 9 306 78 417 193 61 64 130 193 158 296 20 76 16 87 -35 87 -43 0 -67 -27 -100 -112 -40 -105 -78 -165 -144 -225 -159 -145 -445 -183 -654 -88 -204 93 -323 296 -347 588 l-7 77 661 0 661 0 0 68 c0 162 -31 307 -91 432 -34 70 -58 101 -133 175 -161 160 -319 214 -561 193z"/> <path d="M1579 1663 c-13 -3 50 -91 250 -351 146 -191 279 -363 294 -384 l28 -36 -316 -422 c-173 -233 -313 -425 -311 -428 12 -12 111 -1 140 16 19 11 129 150 293 372 145 194 264 358 267 364 5 14 -7 30 276 -361 132 -182 254 -343 271 -357 37 -32 61 -38 126 -34 l50 3 -308 410 c-223 296 -309 417 -309 437 0 17 24 58 73 121 39 52 166 218 280 367 114 150 205 275 202 279 -4 3 -31 6 -60 5 -41 0 -60 -6 -87 -26 -19 -14 -139 -166 -267 -337 -128 -171 -236 -311 -240 -310 -3 0 -100 129 -216 286 -115 158 -223 302 -240 321 -48 57 -129 83 -196 65z m145 -74 c20 -17 127 -155 240 -307 112 -153 216 -288 230 -301 47 -44 58 -33 287 272 199 266 284 367 308 367 6 0 11 -5 11 -10 0 -12 -100 -146 -331 -445 -149 -194 -179 -240 -179 -272 0 -35 44 -100 284 -418 287 -380 290 -384 282 -393 -4 -3 -22 2 -41 12 -34 19 -64 57 -364 471 -87 121 -171 231 -185 245 -25 23 -29 23 -53 10 -15 -8 -140 -168 -278 -355 -231 -313 -313 -407 -323 -376 -2 6 101 152 229 324 312 418 339 456 339 479 0 25 -24 59 -259 363 -254 330 -250 325 -262 346 -16 31 25 24 65 -12z"/> <path d="M595 1614 c-263 -64 -459 -303 -490 -598 -7 -61 -6 -66 18 -90 l26 -26 584 0 584 0 23 25 c21 23 23 30 17 102 -14 168 -84 320 -203 440 -78 78 -175 132 -272 152 -72 15 -214 12 -287 -5z m299 -40 c237 -61 393 -270 430 -581 l7 -53 -597 0 -597 0 7 69 c21 227 152 428 344 525 101 52 289 70 406 40z"/> </g> </svg>   
  ),
  PostgreSQL: ({ className }) => (
     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="300.000000pt" height="309.000000pt" viewBox="0 0 300.000000 309.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,309.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none"> <path d="M1910 3063 c-69 -17 -90 -17 -320 -12 -162 3 -232 -9 -344 -60 l-65 -29 -61 19 c-146 45 -260 62 -415 62 -120 0 -165 -4 -227 -21 -227 -62 -378 -214 -443 -447 -22 -80 -31 -346 -16 -457 31 -218 134 -612 214 -819 131 -339 263 -495 428 -507 64 -5 111 8 163 43 l36 24 25 -24 c95 -88 341 -114 486 -51 14 6 17 -12 22 -161 13 -335 88 -518 241 -589 43 -20 67 -24 151 -24 282 0 460 131 535 395 24 82 50 270 50 358 0 106 1 107 84 107 249 1 512 141 540 288 8 44 -7 33 -36 -25 -27 -55 -105 -120 -195 -164 -50 -24 -131 -47 -238 -68 -3 -1 -39 -1 -81 -1 l-75 0 -13 -33 c-8 -17 -16 -84 -19 -147 -11 -203 -36 -321 -96 -435 -69 -133 -155 -193 -351 -241 -92 -23 -108 -24 -154 -13 -110 26 -185 78 -226 159 -30 60 -24 59 19 -1 68 -95 154 -139 269 -139 78 0 178 23 247 57 176 88 220 195 275 663 6 52 13 110 16 128 l5 32 97 0 c53 1 117 5 142 11 25 5 56 12 70 14 44 9 163 74 211 115 81 69 99 137 50 189 -33 35 -73 40 -172 21 -58 -11 -207 -15 -216 -6 -3 3 12 36 35 73 110 187 230 459 290 664 54 182 72 293 72 443 0 171 -14 215 -102 310 -225 247 -585 334 -964 235 -62 -16 -81 -17 -121 -8 -27 6 -102 12 -168 12 -135 1 -210 -15 -308 -64 l-59 -31 -92 26 c-177 50 -244 60 -396 61 -163 0 -231 -13 -340 -68 -92 -45 -188 -144 -233 -238 -60 -126 -71 -183 -72 -374 0 -148 4 -188 28 -305 131 -636 322 -1070 503 -1146 45 -19 128 -18 166 2 16 9 50 34 74 56 30 28 44 35 44 25 0 -9 14 -32 30 -51 85 -96 311 -122 453 -50 27 13 51 24 53 24 2 0 3 -30 3 -67 -1 -38 -4 -56 -6 -41 -7 47 -25 53 -102 35 -38 -10 -100 -17 -137 -17 -122 1 -202 26 -296 92 -13 10 -27 7 -73 -17 -73 -36 -137 -43 -206 -20 -42 14 -69 33 -124 89 -60 61 -80 91 -137 206 -82 167 -141 336 -206 595 -81 321 -105 476 -99 620 7 139 11 164 43 266 62 197 217 335 431 383 73 16 271 23 353 11 70 -10 178 -34 254 -56 l69 -21 57 26 c113 51 201 67 355 65 77 -1 152 -5 166 -9 17 -5 57 -1 105 11 44 10 108 22 144 25 35 4 82 12 105 19 39 13 38 13 -50 13 -49 0 -119 -7 -155 -15z m487 -83 c159 -38 288 -113 400 -233 71 -76 91 -126 100 -242 19 -272 -152 -803 -375 -1162 -46 -75 -49 -84 -33 -92 33 -18 116 -23 196 -11 154 23 173 24 200 6 19 -12 25 -25 25 -52 0 -29 -9 -44 -48 -82 -58 -56 -144 -104 -227 -126 -78 -21 -240 -31 -286 -19 l-36 10 -12 -116 c-21 -207 -60 -452 -81 -515 -43 -130 -135 -205 -301 -247 -194 -49 -327 8 -405 175 -42 90 -54 189 -57 463 -1 112 -3 203 -5 203 -2 0 -20 -14 -41 -31 -142 -114 -488 -78 -499 52 -5 53 28 76 155 110 102 28 110 32 150 76 l43 47 -59 12 c-33 7 -69 18 -81 24 -12 6 -28 9 -35 6 -7 -2 -74 -74 -149 -159 -143 -164 -187 -197 -259 -197 -182 0 -357 316 -502 903 -72 293 -88 407 -82 572 3 84 12 164 22 200 63 226 212 360 446 401 150 26 363 4 559 -58 l75 -24 65 33 c36 18 92 40 125 48 72 19 261 21 340 5 47 -10 66 -9 137 9 46 12 115 25 153 30 100 14 285 5 382 -19z m-1243 -1796 c47 -16 48 -17 29 -36 -19 -18 -164 -63 -184 -56 -12 4 79 108 95 108 7 0 34 -7 60 -16z"/> <path d="M2030 2914 c-14 -2 -40 -7 -59 -10 l-35 -6 61 -32 c196 -105 377 -314 458 -530 30 -79 31 -120 8 -287 -15 -112 -15 -141 -3 -256 18 -179 10 -292 -25 -371 -15 -33 -25 -67 -23 -74 6 -17 47 48 129 207 170 329 277 702 267 935 -4 116 -26 160 -120 244 -134 120 -287 176 -498 181 -74 2 -146 2 -160 -1z m259 -24 c41 -6 77 -13 80 -17 3 -5 18 -9 32 -10 24 -1 106 -33 139 -54 8 -5 23 -12 33 -15 9 -4 17 -10 17 -14 0 -5 9 -11 20 -15 22 -7 150 -132 150 -146 0 -5 0 -12 -1 -15 0 -4 5 -10 13 -15 10 -6 13 -39 12 -136 -2 -234 -81 -514 -236 -830 -42 -87 -63 -106 -53 -50 4 19 1 87 -5 153 -18 185 -19 198 -7 206 8 5 8 8 1 8 -7 0 -6 31 3 103 8 56 12 140 10 187 -3 73 -9 97 -41 165 -88 190 -244 370 -401 466 l-40 24 35 6 c55 10 158 9 239 -1z"/> <path d="M1429 2876 c-196 -41 -346 -196 -417 -428 -18 -58 -27 -98 -48 -225 l-5 -33 33 19 c59 34 166 61 242 61 86 0 140 -22 183 -75 56 -67 89 -245 81 -434 -5 -123 -17 -165 -101 -371 -46 -112 -52 -134 -37 -125 21 13 80 -6 117 -38 60 -53 63 -69 63 -334 0 -271 13 -463 35 -539 33 -112 120 -184 223 -184 62 0 159 23 211 50 79 40 130 121 150 235 17 95 69 513 77 613 8 106 30 155 84 184 40 21 40 27 0 77 -29 36 -60 93 -176 319 -170 330 -168 537 6 614 33 15 69 21 137 22 106 1 103 -5 50 101 -95 189 -261 355 -434 431 -138 62 -343 87 -474 60z m294 -27 c31 -7 57 -15 57 -18 0 -3 13 -7 30 -8 26 -2 81 -26 170 -74 65 -35 180 -140 235 -214 16 -22 33 -42 36 -45 10 -8 89 -156 89 -166 0 -5 -27 -10 -60 -11 -85 -3 -138 -20 -192 -61 -103 -80 -121 -211 -56 -402 20 -58 51 -136 70 -175 60 -120 140 -267 179 -330 l38 -60 -43 -40 c-46 -43 -66 -99 -66 -187 0 -40 -47 -439 -55 -468 -2 -8 -7 -40 -10 -70 -3 -30 -11 -73 -17 -95 -7 -22 -12 -42 -12 -45 -1 -3 -9 -22 -19 -42 -39 -82 -162 -142 -294 -143 -63 0 -76 3 -115 30 -55 39 -92 113 -108 220 -7 45 -13 217 -15 391 -3 340 -3 340 -65 403 -17 17 -49 36 -71 42 -21 7 -39 18 -39 26 0 7 22 66 49 131 67 159 82 222 83 355 1 153 -18 281 -55 368 -36 87 -134 141 -246 135 -77 -5 -94 -8 -167 -35 l-54 -21 0 39 c0 51 32 174 67 255 62 146 184 263 317 305 71 23 248 28 339 10z"/> <path d="M541 2865 c-175 -40 -284 -142 -335 -315 -26 -88 -37 -229 -26 -333 29 -263 141 -688 246 -933 92 -216 171 -314 254 -314 43 0 71 23 166 135 37 44 89 103 116 131 l49 51 -49 66 c-71 93 -95 161 -94 267 3 464 10 638 31 738 36 172 97 309 180 404 l41 46 -53 16 c-175 51 -405 69 -526 41z m324 -20 c117 -22 205 -44 205 -53 0 -4 -10 -18 -23 -32 -117 -128 -201 -417 -196 -680 3 -193 3 -234 -6 -371 -7 -126 -6 -143 15 -210 20 -67 75 -169 100 -184 12 -7 13 -42 3 -47 -10 -4 -107 -110 -158 -172 -22 -27 -42 -52 -45 -55 -70 -85 -148 -51 -238 102 -109 185 -236 580 -297 922 -45 254 -28 456 51 591 31 54 117 132 173 157 89 39 293 55 416 32z"/> <path d="M2183 2181 c-50 -23 -71 -53 -79 -112 -11 -82 25 -194 138 -421 57 -114 106 -207 109 -207 5 -1 24 68 35 131 3 20 -1 106 -11 190 -13 125 -14 170 -5 239 6 46 14 110 17 142 l6 57 -84 0 c-61 0 -96 -6 -126 -19z m181 -9 c3 -5 -2 -53 -10 -108 -11 -67 -14 -129 -9 -194 14 -228 17 -310 11 -336 l-7 -27 -17 24 c-36 51 -159 308 -181 377 -20 65 -30 176 -17 189 3 3 19 -6 36 -21 42 -35 88 -35 130 1 28 23 32 31 27 65 -4 32 -2 38 13 38 11 0 21 -4 24 -8z m-56 -38 c4 -26 -40 -64 -73 -64 -29 0 -76 37 -69 54 8 22 46 35 94 33 38 -2 46 -6 48 -23z"/> <path d="M1140 2172 c-36 -10 -90 -31 -120 -47 l-55 -30 -4 -190 c-8 -375 -8 -364 22 -426 31 -63 109 -142 163 -165 19 -8 55 -18 78 -23 l43 -8 18 56 c9 31 35 98 56 148 57 135 72 202 72 323 -1 112 -25 265 -49 312 -32 62 -114 80 -224 50z m34 -37 c-14 -21 -14 -30 -4 -54 20 -48 45 -65 101 -65 40 0 52 4 65 22 17 24 33 21 32 -6 0 -9 4 -44 10 -77 13 -69 14 -255 2 -255 -4 0 -6 -8 -3 -18 5 -20 -19 -93 -87 -263 l-42 -107 -31 5 c-80 13 -160 75 -206 163 -36 68 -37 83 -26 406 l7 191 52 30 c47 29 102 50 134 52 9 1 8 -6 -4 -24z m136 -10 c46 -24 34 -68 -23 -88 -27 -10 -80 16 -97 47 -13 26 -13 29 5 42 25 18 79 18 115 -1z"/> <path d="M2355 1167 c-18 -15 -28 -36 -32 -64 -5 -42 -5 -42 32 -49 60 -11 224 3 285 24 55 19 165 81 157 88 -2 2 -30 -1 -62 -7 -85 -16 -242 -8 -284 14 -45 23 -65 22 -96 -6z m96 -21 c40 -16 94 -25 164 -26 48 -1 49 -1 25 -15 -37 -20 -114 -31 -205 -31 l-80 1 -3 33 c-3 26 1 34 20 41 32 13 41 13 79 -3z"/> <path d="M1299 1109 c-70 -80 -103 -98 -223 -124 -76 -17 -78 -18 -54 -31 74 -39 225 -36 307 5 46 24 109 83 120 115 9 23 -2 62 -26 88 -30 33 -57 22 -124 -53z m117 24 c19 -26 17 -46 -8 -78 -27 -35 -98 -86 -109 -79 -5 3 -9 1 -9 -4 0 -12 -11 -13 -102 -17 -83 -4 -114 9 -51 21 73 13 134 55 192 132 35 45 65 54 87 25z"/> <path d="M2190 3071 c8 -6 37 -12 65 -16 269 -33 465 -130 611 -302 72 -84 85 -132 84 -298 -1 -283 -82 -570 -265 -942 -53 -106 -92 -198 -89 -206 10 -26 31 -27 144 -10 125 19 177 11 207 -33 10 -14 26 -35 36 -47 l17 -22 -6 30 c-20 96 -104 131 -255 106 -30 -5 -71 -12 -91 -14 l-37 -6 40 72 c225 403 366 902 330 1168 -14 108 -45 171 -122 253 -157 168 -394 276 -604 276 -53 0 -75 -3 -65 -9z"/> </g> </svg> 
  ),
  MongoDB: ({ className }) => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#0c5734ff" stroke="none">
<path d="M2472 4954 c-42 -59 -123 -166 -180 -238 -287 -366 -384 -505 -510
-726 -335 -589 -451 -1192 -341 -1768 82 -432 286 -840 607 -1217 92 -107 249
-264 320 -320 36 -28 53 -49 56 -70 3 -16 15 -138 26 -270 11 -132 23 -250 25
-262 5 -22 11 -23 84 -23 78 0 79 0 84 28 3 15 16 146 28 290 l24 264 60 48
c105 84 327 321 437 468 271 359 424 707 500 1132 19 107 22 160 22 365 0 252
-13 362 -65 570 -117 464 -354 909 -735 1380 -79 99 -176 226 -287 378 -32 42
-62 77 -67 77 -6 0 -45 -48 -88 -106z m149 -2963 l51 -1184 -56 -56 -56 -56
-57 57 -57 57 55 1223 c30 696 57 1206 61 1183 4 -22 30 -573 59 -1224z"/>
</g>
</svg>
  ),
  Redis: ({ className }) => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="256.000000pt" height="256.000000pt" viewBox="0 0 256.000000 256.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
fill="#8f0909ff" stroke="none">
<path d="M1170 2348 c-52 -17 -90 -33 -83 -35 7 -2 22 1 35 8 13 6 19 7 13 1
-5 -6 -41 -22 -79 -37 -74 -27 -81 -24 -18 7 57 28 13 13 -175 -59 -95 -37
-168 -70 -162 -74 7 -4 5 -8 -5 -12 -8 -3 -16 -1 -18 5 -3 8 -10 8 -24 -1 -19
-12 -19 -12 1 -6 13 4 17 3 10 -4 -12 -12 -115 -53 -115 -46 0 3 18 12 40 21
23 9 39 18 37 20 -4 4 -159 -55 -167 -63 -3 -4 3 -3 12 0 33 12 18 -4 -17 -19
-87 -36 -139 -55 -130 -46 6 5 36 19 68 32 32 12 56 24 54 26 -2 2 -40 -11
-86 -28 -45 -17 -77 -34 -71 -38 8 -5 7 -9 -4 -13 -8 -3 -16 -1 -18 5 -3 8
-10 8 -24 -1 -15 -10 -15 -11 -1 -7 9 3 17 3 17 0 0 -6 -74 -38 -110 -48 l-25
-7 25 15 c38 23 18 19 -48 -10 -37 -16 -62 -33 -65 -45 -3 -11 -10 -18 -17
-17 -17 4 -15 -311 2 -326 6 -6 6 -2 -2 8 -10 13 -1 10 26 -10 23 -16 40 -31
38 -33 -3 -3 -10 1 -16 7 -7 7 -17 12 -23 12 -14 0 43 -36 89 -55 21 -9 35
-11 31 -6 -9 15 5 13 35 -5 l25 -15 -25 6 -25 6 25 -15 c29 -18 44 -20 35 -6
-9 14 6 12 35 -6 l25 -15 -25 5 c-14 3 -2 -5 25 -18 59 -29 85 -33 35 -6 -49
27 -33 25 31 -4 30 -14 47 -25 39 -26 -11 0 -10 -4 4 -12 14 -8 21 -8 24 0 2
7 21 3 53 -10 30 -13 45 -24 39 -28 -11 -7 1 -13 65 -35 11 -3 8 1 -7 10 -58
33 -28 25 72 -19 8 -3 2 -4 -15 -1 -22 3 -15 -2 24 -20 60 -28 65 -29 56 -15
-9 14 6 12 35 -6 14 -8 17 -13 8 -10 -34 10 -18 -3 28 -24 53 -23 58 -24 49
-10 -9 14 6 12 35 -6 14 -8 17 -13 8 -10 -34 10 -18 -3 28 -24 53 -23 58 -24
49 -10 -9 14 6 12 35 -6 l25 -15 -25 6 -25 6 25 -15 c29 -18 44 -20 35 -6 -9
14 6 12 35 -6 14 -8 17 -13 7 -10 -30 10 -9 -11 23 -23 23 -7 29 -7 24 1 -5 8
-1 9 12 3 10 -4 45 -15 76 -24 56 -15 119 -10 182 15 14 5 17 4 12 -4 -4 -7
-4 -12 1 -12 17 2 157 79 143 80 -13 0 -13 1 0 10 20 13 33 13 25 0 -9 -15 -4
-13 76 25 41 19 63 33 49 30 l-25 -6 25 15 c30 18 44 20 34 4 -5 -7 -2 -9 7
-5 217 91 415 181 417 188 2 5 18 16 35 25 29 14 30 13 13 -1 -11 -8 -24 -15
-30 -15 -5 0 -7 -2 -4 -5 9 -10 58 17 58 32 0 7 5 13 11 13 5 0 7 -4 4 -10 -9
-14 6 -12 35 6 l25 15 -25 -6 -25 -6 25 15 c29 18 44 20 35 6 -4 -6 2 -7 17
-1 45 18 79 39 68 43 -6 2 10 14 36 26 39 19 45 20 33 6 -13 -16 -12 -16 11
-4 30 15 90 70 90 83 0 4 -10 -2 -22 -15 -13 -13 -17 -17 -10 -8 8 12 12 61
12 160 0 99 -4 148 -12 160 -7 9 -3 5 10 -8 12 -13 22 -19 22 -14 0 28 -71 69
-235 132 -182 71 -209 80 -165 55 33 -19 19 -19 -25 -1 -36 15 -49 30 -17 20
13 -4 13 -3 -2 7 -14 9 -21 9 -24 1 -2 -6 -10 -8 -18 -5 -11 4 -12 8 -4 13 6
4 -26 21 -71 38 -83 32 -125 39 -49 8 22 -9 40 -18 40 -21 0 -4 -50 14 -135
49 -36 15 -49 30 -17 20 13 -4 13 -3 -2 7 -14 9 -21 9 -24 1 -2 -6 -10 -8 -18
-5 -10 4 -12 8 -5 12 6 4 -38 26 -97 49 -59 23 -108 37 -110 32 -2 -5 -10 -6
-18 -3 -11 4 -12 8 -4 13 6 4 -21 19 -62 33 -79 29 -111 35 -63 11 17 -8 21
-11 10 -8 -46 15 -171 15 -217 1 -52 -16 -65 -13 -20 4 15 7 65 15 112 19 l85
7 -70 1 c-53 1 -93 -6 -165 -30z m12 -154 c2 -9 27 -24 58 -34 64 -22 88 -25
45 -5 -36 16 -30 19 11 5 23 -8 42 -6 88 10 33 11 60 20 62 20 2 0 -3 -19 -12
-42 -8 -22 -12 -43 -10 -45 2 -2 12 19 22 47 10 27 21 50 25 50 5 0 -1 -20
-12 -45 -23 -51 -19 -77 14 -93 19 -9 17 -11 -21 -11 -34 -1 -50 -7 -73 -30
-16 -16 -29 -38 -29 -48 1 -11 6 -6 15 14 17 39 42 53 95 53 23 0 50 5 61 10
11 6 25 7 32 3 15 -9 -30 -20 -91 -22 -58 -1 -78 -14 -92 -57 -8 -24 -15 -32
-20 -24 -4 7 -13 10 -18 6 -6 -4 -16 4 -22 16 -11 22 -10 22 4 4 23 -28 20
-12 -5 26 -12 18 -18 24 -14 13 4 -13 3 -16 -3 -10 -6 6 -12 19 -14 30 -3 17
-12 21 -58 23 -30 2 -60 8 -67 13 -7 6 -18 7 -24 3 -7 -4 -9 -3 -6 3 4 6 21
16 37 22 18 6 28 6 25 1 -4 -6 -13 -10 -22 -10 -9 0 -14 -3 -10 -6 9 -10 45 6
51 23 4 8 -5 35 -19 59 -14 24 -21 44 -16 44 5 0 11 -7 13 -16z m811 -243 c46
-20 65 -36 30 -25 -15 5 -15 4 1 -6 11 -8 21 -9 25 -3 4 6 22 3 46 -8 22 -10
33 -18 25 -18 -13 -1 -13 -2 0 -11 13 -9 13 -11 0 -20 -13 -9 -13 -10 0 -11 8
0 -3 -8 -25 -18 -24 -11 -42 -14 -46 -8 -4 6 -14 5 -25 -3 -16 -10 -16 -11 -1
-6 9 3 17 3 17 0 0 -6 -74 -38 -110 -48 l-25 -7 25 16 c14 9 18 14 10 11 -87
-28 -120 -41 -120 -48 0 -4 -7 -5 -16 -1 -10 4 -12 8 -4 13 8 5 -156 75 -230
97 -13 4 -13 4 0 -6 19 -14 11 -14 -29 0 -24 9 -29 14 -19 20 7 5 18 9 23 9 6
0 3 -5 -5 -10 -29 -19 3 -10 96 27 52 20 90 40 84 43 -6 4 12 16 41 27 67 25
166 23 232 -6z m-1133 -12 c47 -5 105 -19 129 -30 51 -22 54 -23 45 -6 -4 6 3
3 15 -7 25 -23 26 -71 1 -71 -8 0 -15 -7 -15 -15 -1 -8 -7 -14 -13 -12 -7 1
-39 -4 -70 -13 -137 -35 -326 -27 -414 19 -57 29 -68 49 -43 76 11 12 19 25
19 29 -1 3 3 5 8 3 6 -1 40 4 77 13 116 26 151 28 261 14z m615 -240 c4 -6 -1
-13 -11 -15 -11 -3 -34 -29 -52 -57 -32 -50 -24 -44 26 19 12 16 6 3 -14 -28
-20 -32 -40 -55 -45 -53 -4 3 -11 0 -15 -6 -4 -8 -3 -9 4 -5 21 13 13 -9 -16
-43 -28 -34 -28 -34 -57 -17 -17 10 -21 14 -10 11 12 -4 16 -3 10 3 -16 14
-137 63 -143 57 -3 -3 -1 -5 4 -5 6 0 19 -7 30 -15 12 -10 1 -8 -31 6 -56 23
-72 35 -35 25 14 -3 1 5 -29 19 -60 28 -65 29 -56 15 8 -12 -5 -13 -24 -1 -11
7 -6 11 20 16 19 3 54 10 79 15 39 8 37 8 -20 3 -36 -3 -75 -9 -87 -14 -13 -5
-25 -4 -28 1 -4 6 2 10 12 11 10 0 110 15 223 34 230 37 256 40 265 24z"/>
<path d="M2530 1448 c0 -8 -10 -23 -22 -34 l-23 -19 20 24 20 25 -35 -23 c-19
-12 -68 -38 -107 -57 -40 -19 -73 -37 -73 -40 0 -2 9 0 19 6 11 5 23 10 28 10
11 -1 -59 -39 -72 -39 -5 -1 -3 4 5 10 11 8 9 9 -10 3 -14 -3 -32 -10 -40 -15
-13 -7 -13 -8 0 -9 9 0 5 -6 -10 -15 -33 -19 -49 -19 -24 0 17 13 16 14 -14 4
-33 -11 -57 -33 -25 -23 10 3 7 -2 -7 -10 -29 -18 -44 -20 -35 -6 7 12 0 9
-160 -60 -66 -28 -122 -54 -125 -57 -3 -3 3 -3 13 0 44 17 49 17 17 -2 -39
-22 -54 -26 -45 -11 8 13 -5 13 -25 0 -13 -9 -13 -10 0 -10 9 -1 5 -6 -10 -15
-33 -19 -49 -19 -24 0 17 13 16 14 -14 4 -33 -11 -57 -33 -25 -23 10 3 7 -2
-7 -10 -28 -17 -53 -22 -30 -5 28 20 -32 -2 -115 -42 -44 -21 -73 -38 -65 -39
16 -1 -68 -49 -85 -49 -5 0 7 9 28 20 20 11 37 22 37 24 0 3 -14 -2 -32 -11
-18 -9 -55 -25 -82 -35 -29 -10 -42 -18 -31 -19 l20 -1 -20 -9 c-25 -11 -123
-11 -150 -1 -12 5 11 7 55 5 l75 -3 -65 9 c-36 4 -90 18 -120 29 -37 14 -49
16 -36 6 27 -21 8 -18 -34 5 -19 11 -28 19 -20 20 13 0 13 1 0 10 -20 13 -33
13 -25 0 9 -14 -6 -12 -35 6 l-25 15 25 -5 c14 -3 3 5 -25 18 -61 30 -83 33
-35 5 38 -22 28 -20 -38 6 -25 10 -39 21 -33 25 6 3 -32 24 -86 46 -54 21
-102 41 -107 43 -5 2 -6 -1 -2 -8 10 -16 -3 -13 -59 15 -27 13 -39 22 -25 19
14 -3 1 6 -29 20 -60 28 -65 29 -56 15 9 -14 -6 -12 -35 6 l-25 15 25 -6 c14
-3 1 6 -29 20 -60 28 -65 29 -56 15 9 -14 -6 -12 -35 6 -14 8 -17 13 -7 10 33
-10 17 3 -29 24 -53 23 -58 24 -49 10 3 -5 1 -10 -4 -10 -6 0 -11 6 -11 13 0
15 -139 80 -161 75 -8 -2 -13 2 -12 8 3 17 -36 49 -47 38 -15 -15 -15 -281 0
-299 25 -30 160 -100 145 -75 -9 14 6 12 35 -6 l25 -15 -25 6 -25 6 25 -15
c29 -18 44 -20 35 -6 -9 14 6 12 35 -6 14 -8 17 -13 8 -10 -35 11 -17 -5 28
-24 58 -25 70 -25 24 0 -49 27 -33 25 31 -4 30 -14 47 -25 39 -26 -11 0 -10
-4 4 -12 14 -8 21 -8 24 0 2 7 21 3 53 -10 30 -13 45 -24 39 -28 -11 -7 1 -13
65 -35 11 -3 8 1 -7 10 -58 33 -28 25 72 -19 8 -3 2 -4 -15 -1 -22 3 -15 -2
24 -20 60 -28 65 -29 56 -15 -9 14 6 12 35 -6 14 -8 17 -13 8 -10 -34 10 -18
-3 28 -24 53 -23 58 -24 49 -10 -9 14 6 12 35 -6 14 -8 17 -13 8 -10 -34 10
-18 -3 28 -24 53 -23 58 -24 49 -10 -9 14 6 12 35 -6 l25 -15 -25 6 -25 6 25
-15 c29 -18 44 -20 35 -6 -3 6 -2 10 2 10 5 0 13 -8 20 -19 6 -10 26 -23 43
-29 23 -8 29 -8 24 0 -5 8 -1 9 12 3 10 -4 45 -15 76 -24 56 -15 119 -10 182
15 14 5 17 4 12 -4 -4 -7 -4 -12 1 -12 17 2 157 79 143 80 -13 0 -13 1 0 10
20 13 33 13 25 0 -9 -14 -1 -13 40 7 19 9 35 23 35 30 0 7 5 13 11 13 5 0 7
-4 4 -10 -9 -14 6 -12 35 6 l25 15 -25 -6 -25 -6 25 15 c30 18 44 20 34 5 -4
-7 -3 -10 3 -8 192 78 493 216 493 226 0 7 5 13 11 13 5 0 7 -4 4 -10 -9 -14
6 -12 35 6 l25 15 -25 -6 -25 -6 25 15 c29 18 44 20 35 6 -4 -6 2 -7 17 -1 45
18 79 39 68 43 -6 2 10 14 36 26 39 19 45 20 33 6 -13 -16 -12 -16 11 -4 30
15 90 70 90 83 0 4 -10 -2 -22 -15 -13 -13 -18 -17 -11 -8 13 17 22 284 10
296 -4 4 -7 1 -7 -8z"/>
<path d="M2509 1024 c-13 -14 -22 -28 -21 -31 2 -2 0 -8 -4 -11 -4 -4 -4 -1 0
6 10 17 -6 15 -30 -3 -19 -15 -19 -15 1 -9 l20 7 -20 -16 c-22 -18 -39 -22
-30 -7 3 6 -1 7 -9 4 -9 -3 -13 -10 -10 -15 3 -5 -2 -6 -10 -3 -8 3 -27 -1
-43 -10 -15 -8 -21 -16 -13 -16 9 0 5 -6 -10 -15 -30 -17 -44 -19 -35 -5 9 14
1 13 -40 -7 -19 -9 -35 -23 -35 -30 0 -7 -5 -13 -11 -13 -5 0 -7 5 -4 10 8 13
-5 13 -25 0 -13 -9 -13 -10 0 -10 9 -1 5 -6 -10 -15 -30 -17 -44 -19 -35 -5 9
15 -9 12 -31 -5 -19 -15 -19 -15 1 -9 15 4 13 1 -5 -10 -29 -18 -44 -20 -35
-6 9 15 -9 12 -31 -5 -19 -15 -19 -15 1 -9 15 4 13 1 -5 -9 -14 -9 -27 -11
-30 -6 -7 11 -209 -77 -228 -99 -7 -10 -11 -11 -7 -4 7 14 -4 16 -25 2 -13 -9
-13 -10 0 -10 9 -1 5 -6 -10 -15 -33 -19 -49 -19 -24 0 17 13 16 14 -14 4 -17
-6 -35 -15 -38 -20 -3 -5 3 -6 13 -2 32 11 8 -6 -31 -22 -21 -9 -35 -11 -31
-6 9 16 -6 13 -45 -10 -19 -11 -26 -17 -15 -14 48 16 50 16 32 5 -31 -20 -89
-41 -82 -31 10 16 -1 13 -58 -16 -29 -15 -77 -32 -107 -39 -38 -9 -46 -12 -25
-13 17 0 48 6 70 14 45 16 59 13 18 -4 -48 -19 -120 -28 -160 -21 l-38 8 35 2
c32 2 30 3 -20 14 -30 7 -86 27 -123 44 -75 35 -81 37 -72 22 9 -14 -6 -12
-35 6 l-25 15 25 -6 25 -6 -25 15 c-29 18 -44 20 -35 6 9 -14 -6 -12 -35 6
-18 11 -19 14 -5 9 12 -4 16 -3 10 3 -16 14 -137 63 -143 57 -3 -3 -1 -5 4 -5
6 0 19 -7 30 -15 14 -11 7 -10 -26 3 -73 31 -76 32 -45 27 22 -3 15 2 -24 20
-60 28 -65 29 -56 15 9 -14 4 -13 -56 15 -30 14 -43 23 -29 20 14 -3 3 6 -25
19 -55 27 -69 31 -60 16 8 -13 3 -13 -36 5 l-34 16 30 -5 c21 -4 14 2 -24 19
-60 28 -65 29 -56 15 8 -13 3 -13 -36 5 -34 16 -34 16 -4 10 42 -9 31 -2 -45
30 -36 15 -80 34 -98 42 -19 8 -31 9 -27 4 3 -6 12 -11 19 -11 7 0 21 -7 32
-15 12 -9 -1 -7 -34 7 -37 14 -49 24 -40 29 10 7 10 9 -2 10 -8 1 -25 3 -38 4
-27 3 -62 33 -62 54 0 11 -3 12 -11 4 -7 -7 -9 -58 -7 -146 2 -88 0 -133 -7
-129 -31 17 37 -46 74 -70 46 -29 67 -36 56 -18 -9 15 6 11 45 -11 19 -11 27
-18 18 -15 -10 3 -26 9 -35 12 -16 5 -16 4 -2 -5 29 -19 302 -131 307 -126 3
3 1 5 -4 5 -6 0 -19 7 -30 15 -12 10 -1 8 31 -6 55 -22 74 -36 35 -24 -50 15
-11 -6 86 -46 54 -22 105 -43 113 -47 10 -4 12 -1 6 8 -6 9 -4 12 6 8 85 -34
99 -42 89 -48 -11 -7 1 -13 65 -35 11 -3 4 3 -15 14 -48 27 -26 25 35 -4 28
-13 43 -24 35 -24 -13 -1 -13 -2 0 -11 20 -13 33 -13 25 0 -10 16 5 11 70 -21
62 -30 58 -33 -8 -5 -59 26 -43 10 19 -18 64 -30 68 -30 58 -14 -5 8 -2 9 12
3 106 -44 120 -47 192 -43 96 6 83 -4 -16 -13 l-77 -6 61 -1 c65 -2 130 16
227 64 32 16 57 35 57 44 0 13 1 13 10 0 8 -13 10 -13 10 1 0 9 7 20 16 23 26
10 29 7 8 -9 -17 -13 -16 -14 14 -4 20 7 29 15 23 19 -7 4 -2 11 14 18 32 15
38 15 29 1 -4 -7 -3 -10 3 -8 88 36 143 65 143 76 0 7 5 13 11 13 5 0 7 -4 4
-10 -8 -13 -2 -13 30 2 14 6 25 17 25 25 0 7 5 13 11 13 5 0 7 -4 4 -10 -8
-13 -2 -13 30 2 14 6 25 17 25 25 0 7 5 13 11 13 5 0 7 -4 4 -10 -8 -13 -2
-13 30 2 14 6 25 16 25 22 0 6 30 23 68 38 37 15 58 21 48 13 -11 -8 -24 -15
-30 -15 -5 0 -7 -2 -4 -5 9 -10 58 17 58 32 0 7 5 13 11 13 5 0 7 -4 4 -10 -8
-13 5 -13 25 0 13 9 13 10 0 10 -9 1 -5 6 10 15 33 19 49 19 24 0 -17 -14 -15
-14 18 -1 43 17 87 42 56 32 -10 -3 -26 -9 -35 -13 -33 -12 -7 6 31 22 21 9
35 11 31 6 -3 -6 -3 -11 0 -11 10 0 65 30 65 36 0 2 -9 0 -21 -6 -11 -7 -23
-9 -26 -7 -6 6 35 20 62 21 11 1 19 7 17 14 -1 8 2 11 8 7 14 -9 50 4 50 18 0
6 11 22 24 36 24 25 25 33 27 164 1 75 0 140 -3 142 -2 3 -15 -7 -29 -21z"/>
</g>
</svg>

  ),
  MySQL: ({ className }) => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
fill="#e2e0e7" stroke="none">
<path d="M1020 2240 c-324 -35 -602 -191 -791 -443 -214 -287 -275 -638 -174
-1007 23 -85 107 -246 173 -336 284 -379 750 -531 1232 -399 150 41 363 175
482 304 276 298 366 688 253 1101 -23 85 -107 247 -174 337 -231 308 -625 483
-1001 443z m333 -465 c20 -8 38 -19 41 -23 3 -5 27 -12 52 -16 93 -12 195
-113 262 -258 32 -69 47 -90 73 -104 53 -27 129 -84 129 -98 0 -7 -21 -17 -47
-22 l-48 -9 46 -32 c25 -17 53 -43 63 -57 17 -27 7 -36 -14 -12 -6 8 -31 25
-56 36 -49 24 -90 68 -75 83 4 4 28 11 51 14 l43 6 -24 19 c-13 11 -47 30 -76
43 -44 21 -56 32 -74 72 -58 129 -74 157 -118 202 -52 53 -116 91 -155 91 -13
0 -44 11 -67 25 -24 14 -47 25 -51 25 -15 0 -8 -27 12 -53 11 -14 30 -51 42
-84 12 -32 28 -66 36 -75 11 -14 12 -24 3 -49 -14 -42 -13 -97 3 -134 l13 -30
7 35 c3 19 13 43 20 53 13 17 16 15 35 -29 12 -26 37 -67 57 -91 19 -24 31
-43 26 -43 -13 0 -92 87 -92 102 -1 7 -7 -2 -15 -19 -17 -40 -37 -42 -64 -7
-28 36 -36 89 -22 144 11 43 10 50 -13 91 -14 24 -26 51 -26 60 0 8 -13 33
-30 55 -31 42 -38 72 -18 92 16 16 28 15 71 -3z m-884 -754 l45 -134 44 136
44 137 39 0 c21 0 39 -3 39 -7 0 -5 7 -71 15 -148 8 -77 15 -159 15 -182 0
-42 0 -43 -35 -43 l-35 0 -1 73 c-1 39 -4 104 -8 142 l-6 70 -32 -100 c-18
-55 -38 -119 -45 -142 -11 -36 -17 -43 -39 -43 -31 0 -32 2 -81 163 -39 127
-45 120 -47 -50 l-1 -113 -35 0 -34 0 5 68 c3 37 9 114 15 171 5 58 9 113 9
123 0 16 6 19 42 16 l43 -3 44 -134z m731 124 c42 -22 30 -44 -20 -38 -72 10
-109 -13 -95 -57 3 -10 37 -37 75 -59 76 -46 90 -63 90 -113 0 -36 -22 -69
-58 -88 -49 -25 -172 -6 -172 26 0 21 12 23 62 12 39 -9 51 -8 72 6 26 16 34
49 18 72 -4 7 -34 28 -68 47 -80 47 -102 98 -70 156 27 49 107 66 166 36z
m311 -8 c70 -47 89 -196 36 -291 l-25 -45 29 -11 c31 -13 37 -31 16 -48 -10
-8 -22 -6 -48 10 -23 15 -53 22 -93 24 -39 2 -68 9 -85 21 -91 67 -84 285 11
343 46 28 115 27 159 -3z m179 -142 l0 -165 60 0 c57 0 60 -1 60 -25 0 -25 -1
-25 -90 -25 l-90 0 0 190 0 190 30 0 30 0 0 -165z m-861 -29 c17 -52 31 -103
32 -113 1 -29 38 97 45 155 7 51 7 52 40 52 19 0 34 -4 34 -8 0 -19 -39 -160
-59 -213 -40 -107 -102 -166 -163 -157 -15 2 -24 11 -26 26 -3 18 1 22 26 22
16 0 37 9 47 20 20 22 19 30 -38 203 l-35 107 33 0 c34 0 34 0 64 -94z"/>
<path d="M1377 1092 c-25 -28 -37 -69 -37 -130 0 -101 49 -157 114 -132 36 13
56 64 56 139 0 65 -9 99 -35 124 -22 22 -78 22 -98 -1z"/>
</g>
</svg>
  ),
  Supabase: ({ className }) => (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="100%" viewBox="0 0 375 375" enable-background="new 0 0 375 375">
<path fill="#067230" opacity="1.000000" stroke="none" 
	d="
M242.000000,376.000000 
	C161.360046,376.000000 81.220108,376.000000 1.040080,376.000000 
	C1.040080,251.068390 1.040080,126.136772 1.040080,1.102576 
	C125.889877,1.102576 250.779877,1.102576 375.834930,1.102576 
	C375.834930,125.999825 375.834930,250.999893 375.834930,376.000000 
	C331.470184,376.000000 286.985107,376.000000 242.000000,376.000000 
M188.598145,345.615570 
	C192.769211,339.755859 196.940292,333.896149 201.676682,327.682373 
	C205.170898,322.811768 208.665100,317.941162 212.717957,312.709259 
	C216.225143,307.822845 219.732315,302.936432 223.781143,297.679993 
	C227.270950,293.126160 230.760757,288.572327 234.682083,283.541992 
	C237.425339,279.662109 240.168610,275.782227 243.328262,271.387848 
	C245.315720,268.592804 247.303177,265.797729 249.786621,262.622284 
	C251.556625,260.102661 253.326630,257.583069 255.628937,254.662811 
	C262.085083,245.871475 268.541229,237.080124 275.283112,228.106491 
	C275.470245,227.994507 275.634827,227.855774 276.252533,227.103409 
	C281.652069,219.752365 287.110016,212.443329 292.435394,205.038971 
	C298.238403,196.970520 304.976379,189.343842 309.379089,180.558502 
	C314.648895,170.042816 309.626801,156.568085 296.912140,153.240402 
	C293.431061,152.329315 289.697235,152.065475 286.077515,152.053070 
	C258.250671,151.957672 230.423141,151.942413 202.596405,152.052994 
	C198.276123,152.070160 196.792435,151.248749 197.794098,146.357971 
	C203.313324,119.409607 208.493805,92.391266 213.690536,65.377708 
	C215.912476,53.827744 218.294662,42.284328 219.832016,30.636044 
	C220.757004,23.627502 217.430923,19.292419 211.706940,17.432310 
	C205.990753,15.574738 199.946594,17.556627 196.242508,22.572323 
	C189.445908,31.775536 182.704025,41.019211 175.896469,50.214275 
	C152.607452,81.671051 129.280609,113.099823 106.007240,144.568161 
	C93.976601,160.835022 81.877579,177.054947 70.104774,193.507385 
	C63.992088,202.049820 64.161484,210.802017 70.032455,218.937973 
	C74.523369,225.161438 81.238853,226.943237 88.456116,226.963013 
	C117.282860,227.042023 146.110107,226.960388 174.936554,227.081482 
	C177.009323,227.090195 179.077271,228.249146 180.955353,229.644577 
	C180.604645,231.732330 180.253922,233.820084 179.507141,236.559769 
	C178.993378,239.651215 178.479614,242.742676 177.456543,246.437286 
	C175.922989,254.931595 174.389435,263.425903 172.392380,272.538544 
	C171.578491,277.297516 170.764618,282.056519 169.453690,287.449677 
	C168.020508,295.302887 166.587326,303.156097 164.963470,311.783539 
	C163.697784,318.524139 162.432098,325.264709 160.972748,332.779907 
	C160.219849,336.323883 159.464676,339.867401 158.714508,343.411957 
	C157.283310,350.174500 159.819275,356.270477 165.203506,359.018250 
	C170.040253,361.486664 176.557983,360.204803 180.898422,355.483826 
	C183.563034,352.585541 185.715057,349.216034 188.598145,345.615570 
z"/>
<path fill="#3ECF8E" opacity="1.000000" stroke="none" 
	d="
M181.147446,228.873291 
	C179.077271,228.249146 177.009323,227.090195 174.936554,227.081482 
	C146.110107,226.960388 117.282860,227.042023 88.456116,226.963013 
	C81.238853,226.943237 74.523369,225.161438 70.032455,218.937973 
	C64.161484,210.802017 63.992088,202.049820 70.104774,193.507385 
	C81.877579,177.054947 93.976601,160.835022 106.007240,144.568161 
	C129.280609,113.099823 152.607452,81.671051 175.896469,50.214275 
	C182.704025,41.019211 189.445908,31.775536 196.242508,22.572323 
	C199.946594,17.556627 205.990753,15.574738 211.706940,17.432310 
	C217.430923,19.292419 220.757004,23.627502 219.832016,30.636044 
	C218.294662,42.284328 215.912476,53.827744 213.690536,65.377708 
	C208.493805,92.391266 203.313324,119.409607 197.794098,146.357971 
	C196.792435,151.248749 198.276123,152.070160 202.596405,152.052994 
	C230.423141,151.942413 258.250671,151.957672 286.077515,152.053070 
	C289.697235,152.065475 293.431061,152.329315 296.912140,153.240402 
	C309.626801,156.568085 314.648895,170.042816 309.379089,180.558502 
	C304.976379,189.343842 298.238403,196.970520 292.435394,205.038971 
	C287.110016,212.443329 281.652069,219.752365 275.905457,227.132294 
	C275.332184,226.871948 275.105988,226.582703 274.419250,226.271332 
	C252.017517,226.294220 230.076370,226.339233 207.659302,226.322937 
	C202.138092,226.253372 197.092804,226.245117 191.604797,226.193054 
	C187.614532,226.287628 183.621826,224.789536 181.147446,228.873291 
z"/>
<path fill="#32B67A" opacity="1.000000" stroke="none" 
	d="
M172.855865,271.920197 
	C174.389435,263.425903 175.922989,254.931595 177.732483,246.521149 
	C178.670959,248.418228 178.816238,250.861588 180.101288,251.916412 
	C182.972702,254.273331 186.356415,256.038239 189.631226,257.865479 
	C198.760605,262.959503 208.024170,267.818390 217.071152,273.052856 
	C222.945847,276.451874 228.534027,280.346130 234.250565,284.018494 
	C230.760757,288.572327 227.270950,293.126160 223.177063,297.751221 
	C212.362488,291.889557 202.292114,285.695038 191.888077,280.123627 
	C185.819839,276.874084 179.217758,274.621399 172.855865,271.920197 
z"/>
<path fill="#2EAB72" opacity="1.000000" stroke="none" 
	d="
M234.466324,283.780243 
	C228.534027,280.346130 222.945847,276.451874 217.071152,273.052856 
	C208.024170,267.818390 198.760605,262.959503 189.631226,257.865479 
	C186.356415,256.038239 182.972702,254.273331 180.101288,251.916412 
	C178.816238,250.861588 178.670959,248.418228 177.987152,246.219559 
	C178.479614,242.742676 178.993378,239.651215 180.032745,236.396469 
	C187.886307,240.167511 195.320480,243.917938 202.519348,248.075775 
	C216.055283,255.893738 229.455322,263.946960 242.911865,271.902344 
	C240.168610,275.782227 237.425339,279.662109 234.466324,283.780243 
z"/>
<path fill="#23925F" opacity="1.000000" stroke="none" 
	d="
M208.135208,226.384232 
	C230.076370,226.339233 252.017517,226.294220 274.431519,226.602539 
	C274.935364,227.400177 274.966370,227.844482 274.997375,228.288773 
	C268.541229,237.080124 262.085083,245.871475 255.101807,254.635437 
	C253.926529,254.093964 253.332108,253.486038 252.622284,253.079727 
	C239.418335,245.521652 226.179245,238.024551 213.010864,230.405167 
	C211.212280,229.364487 209.752090,227.738968 208.135208,226.384232 
z"/>
<path fill="#36BF82" opacity="1.000000" stroke="none" 
	d="
M172.624115,272.229370 
	C179.217758,274.621399 185.819839,276.874084 191.888077,280.123627 
	C202.292114,285.695038 212.362488,291.889557 222.906235,297.936218 
	C219.732315,302.936432 216.225143,307.822845 212.127930,312.706726 
	C201.970673,307.482178 192.250717,302.515839 182.900726,296.930176 
	C178.235001,294.142914 174.245895,290.223053 169.950729,286.815491 
	C170.764618,282.056519 171.578491,277.297516 172.624115,272.229370 
z"/>
<path fill="#3AC687" opacity="1.000000" stroke="none" 
	d="
M169.702209,287.132568 
	C174.245895,290.223053 178.235001,294.142914 182.900726,296.930176 
	C192.250717,302.515839 201.970673,307.482178 211.848602,312.887390 
	C208.665100,317.941162 205.170898,322.811768 200.995026,327.833557 
	C198.040680,327.100433 195.685074,326.383179 193.509613,325.303040 
	C184.029190,320.596069 174.601181,315.783508 165.154144,311.009308 
	C166.587326,303.156097 168.020508,295.302887 169.702209,287.132568 
z"/>
<path fill="#2AA36C" opacity="1.000000" stroke="none" 
	d="
M243.120056,271.645081 
	C229.455322,263.946960 216.055283,255.893738 202.519348,248.075775 
	C195.320480,243.917938 187.886307,240.167511 180.230774,236.070496 
	C180.253922,233.820084 180.604645,231.732330 181.051392,229.258942 
	C183.621826,224.789536 187.614532,226.287628 191.651840,226.536224 
	C194.128403,228.947510 195.798141,231.501282 198.152802,232.911240 
	C215.120895,243.071716 232.227753,253.000473 249.290619,263.002686 
	C247.303177,265.797729 245.315720,268.592804 243.120056,271.645081 
z"/>
<path fill="#3CCC8B" opacity="1.000000" stroke="none" 
	d="
M165.058807,311.396423 
	C174.601181,315.783508 184.029190,320.596069 193.509613,325.303040 
	C195.685074,326.383179 198.040680,327.100433 200.712372,328.010559 
	C196.940292,333.896149 192.769211,339.755859 188.069748,345.636047 
	C179.262131,340.116119 171.411179,333.748230 161.166412,332.005310 
	C162.432098,325.264709 163.697784,318.524139 165.058807,311.396423 
z"/>
<path fill="#279A66" opacity="1.000000" stroke="none" 
	d="
M249.538620,262.812500 
	C232.227753,253.000473 215.120895,243.071716 198.152802,232.911240 
	C195.798141,231.501282 194.128403,228.947510 192.094543,226.580063 
	C197.092804,226.245117 202.138092,226.253372 207.659302,226.322937 
	C209.752090,227.738968 211.212280,229.364487 213.010864,230.405167 
	C226.179245,238.024551 239.418335,245.521652 252.622284,253.079727 
	C253.332108,253.486038 253.926529,254.093964 254.835648,254.835754 
	C253.326630,257.583069 251.556625,260.102661 249.538620,262.812500 
z"/>
<path fill="#3ECF8E" opacity="1.000000" stroke="none" 
	d="
M161.069580,332.392609 
	C171.411179,333.748230 179.262131,340.116119 187.819305,345.857361 
	C185.715057,349.216034 183.563034,352.585541 180.898422,355.483826 
	C176.557983,360.204803 170.040253,361.486664 165.203506,359.018250 
	C159.819275,356.270477 157.283310,350.174500 158.714508,343.411957 
	C159.464676,339.867401 160.219849,336.323883 161.069580,332.392609 
z"/>
<path fill="#2AA36C" opacity="1.000000" stroke="none" 
	d="
M275.140259,228.197632 
	C274.966370,227.844482 274.935364,227.400177 274.892090,226.624664 
	C275.105988,226.582703 275.332184,226.871948 275.667603,227.425751 
	C275.634827,227.855774 275.470245,227.994507 275.140259,228.197632 
z"/>
</svg>
  ),
  Firebase: ({ className }) => (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="100%" viewBox="0 0 192 263" enable-background="new 0 0 192 263">
<path fill="#646e0b" opacity="1.000000" stroke="none" 
	d="
M98.000000,264.000000 
	C65.333336,264.000000 33.166672,264.000000 1.000004,264.000000 
	C1.000003,176.333344 1.000003,88.666679 1.000001,1.000016 
	C64.999992,1.000011 128.999985,1.000011 192.999969,1.000005 
	C192.999985,88.666649 192.999985,176.333298 193.000000,263.999969 
	C161.500000,264.000000 130.000000,264.000000 98.000000,264.000000 
M74.905487,70.343178 
	C64.577583,49.502159 54.308178,28.631613 43.827568,7.867671 
	C42.824837,5.881084 40.505043,4.559289 38.796673,2.928875 
	C37.563484,4.884758 35.568459,6.712293 35.214005,8.816218 
	C31.324100,31.905510 27.687599,55.037514 23.986900,78.158661 
	C18.788517,110.637016 13.576464,143.113205 8.407319,175.596222 
	C6.584822,187.048828 4.871357,198.518784 3.114758,210.679749 
	C4.731456,211.813080 6.279060,213.063782 7.975224,214.062103 
	C33.062050,228.827698 58.193558,243.517517 83.256828,258.322906 
	C91.961967,263.465179 100.592178,263.532990 109.192619,258.403778 
	C134.766693,243.151581 160.243393,227.735260 185.890381,212.607254 
	C189.560394,210.442474 190.345078,208.315308 189.612473,204.220154 
	C184.258484,174.292358 179.197083,144.312317 174.019104,114.352936 
	C171.077759,97.334503 168.185089,80.306297 165.007202,63.331799 
	C164.600769,61.160774 162.875031,57.932301 161.272934,57.608910 
	C159.110718,57.172451 155.876923,58.443527 154.144135,60.082603 
	C144.951431,68.778084 136.097885,77.831528 127.090157,86.723785 
	C125.810608,87.986931 124.330589,89.046997 122.547333,89.618462 
	C115.122040,74.799576 107.827568,59.912125 100.133652,45.234047 
	C98.948318,42.972733 95.989891,40.429760 93.735085,40.315578 
	C91.863281,40.220795 89.110245,43.148170 87.983406,45.364941 
	C84.309006,52.593330 81.253555,60.134094 77.825752,67.492142 
	C77.202782,68.829399 75.947365,69.872017 74.905487,70.343178 
z"/>
<path fill="#FFCA28" opacity="1.000000" stroke="none" 
	d="
M122.943359,90.201065 
	C124.330589,89.046997 125.810608,87.986931 127.090157,86.723785 
	C136.097885,77.831528 144.951431,68.778084 154.144135,60.082603 
	C155.876923,58.443527 159.110718,57.172451 161.272934,57.608910 
	C162.875031,57.932301 164.600769,61.160774 165.007202,63.331799 
	C168.185089,80.306297 171.077759,97.334503 174.019104,114.352936 
	C179.197083,144.312317 184.258484,174.292358 189.612473,204.220154 
	C190.345078,208.315308 189.560394,210.442474 185.890381,212.607254 
	C160.243393,227.735260 134.766693,243.151581 109.192619,258.403778 
	C100.592178,263.532990 91.961967,263.465179 83.256828,258.322906 
	C58.193558,243.517517 33.062050,228.827698 7.975224,214.062103 
	C6.279060,213.063782 4.731456,211.813080 3.317149,210.236206 
	C3.774463,209.607056 3.940540,209.361389 4.316756,208.905060 
	C34.786137,178.644974 64.962128,148.541092 95.099419,118.398506 
	C95.990059,117.507713 96.473495,116.209778 97.483383,115.046356 
	C106.194435,106.727715 114.568901,98.464394 122.943359,90.201065 
z"/>
<path fill="#FFA001" opacity="1.000000" stroke="none" 
	d="
M4.017770,209.055664 
	C3.940540,209.361389 3.774463,209.607056 3.313826,209.886734 
	C4.871357,198.518784 6.584822,187.048828 8.407319,175.596222 
	C13.576464,143.113205 18.788517,110.637016 23.986900,78.158661 
	C27.687599,55.037514 31.324100,31.905510 35.214005,8.816218 
	C35.568459,6.712293 37.563484,4.884758 38.796673,2.928875 
	C40.505043,4.559289 42.824837,5.881084 43.827568,7.867671 
	C54.308178,28.631613 64.577583,49.502159 74.949432,71.016159 
	C74.995712,72.114899 74.998039,72.540649 74.959213,73.322464 
	C72.347801,78.314194 69.680458,82.899055 67.223663,87.594086 
	C54.979591,110.993019 42.820816,134.436600 30.566038,157.829895 
	C26.407963,165.767303 21.942366,173.544342 17.823805,181.501541 
	C13.102008,190.624252 8.609747,199.865768 4.017770,209.055664 
z"/>
<path fill="#FFA001" opacity="1.000000" stroke="none" 
	d="
M75.000374,72.966400 
	C74.998039,72.540649 74.995712,72.114899 74.988647,71.369904 
	C75.947365,69.872017 77.202782,68.829399 77.825752,67.492142 
	C81.253555,60.134094 84.309006,52.593330 87.983406,45.364941 
	C89.110245,43.148170 91.863281,40.220795 93.735085,40.315578 
	C95.989891,40.429760 98.948318,42.972733 100.133652,45.234047 
	C107.827568,59.912125 115.122040,74.799576 122.745346,89.909760 
	C114.568901,98.464394 106.194435,106.727715 97.399048,114.679520 
	C90.569794,101.410652 84.189056,88.439461 77.701065,75.522133 
	C77.178017,74.480774 75.917953,73.809601 75.000374,72.966400 
z"/>
<path fill="#F58017" opacity="1.000000" stroke="none" 
	d="
M74.959213,73.322464 
	C75.917953,73.809601 77.178017,74.480774 77.701065,75.522133 
	C84.189056,88.439461 90.569794,101.410652 97.062462,114.734833 
	C96.473495,116.209778 95.990059,117.507713 95.099419,118.398506 
	C64.962128,148.541092 34.786137,178.644974 4.316757,208.905060 
	C8.609747,199.865768 13.102008,190.624252 17.823805,181.501541 
	C21.942366,173.544342 26.407963,165.767303 30.566038,157.829895 
	C42.820816,134.436600 54.979591,110.993019 67.223663,87.594086 
	C69.680458,82.899055 72.347801,78.314194 74.959213,73.322464 
z"/>
</svg>
  ),
  AWS: ({ className }) => (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="100%" viewBox="0 0 1280 800" enable-background="new 0 0 1280 800">
<path fill="#47706e" opacity="1.000000" stroke="none" 
	d="
M845.000000,801.000000 
	C563.367065,801.000000 282.234131,801.000000 1.050603,801.000000 
	C1.050603,534.399048 1.050603,267.798126 1.050603,1.098597 
	C427.549713,1.098597 854.099426,1.098597 1280.824585,1.098597 
	C1280.824585,267.666565 1280.824585,534.333252 1280.824585,801.000000 
	C1135.797852,801.000000 990.648926,801.000000 845.000000,801.000000 
M816.949524,343.455780 
	C823.269897,323.129822 829.601379,302.807281 835.908142,282.477081 
	C845.665955,251.021912 855.381897,219.553665 865.163086,188.105759 
	C873.065918,162.697235 881.063354,137.318176 888.971680,111.911377 
	C893.766418,96.507568 899.216553,81.255882 902.997864,65.603828 
	C906.477295,51.201283 903.815918,45.768559 888.618042,45.974083 
	C878.620422,46.109276 868.612061,45.751568 858.621582,46.050705 
	C837.197754,46.692188 837.169189,50.408077 831.565186,65.085411 
	C831.270264,65.857750 831.122620,66.686752 830.912842,67.491058 
	C825.334106,88.886185 819.697754,110.266479 814.191589,131.680267 
	C805.576782,165.183670 797.054932,198.710999 788.484558,232.225876 
	C780.285522,264.288666 772.082825,296.350555 763.836670,328.401245 
	C763.546326,329.529633 762.773071,330.533752 761.535095,332.932251 
	C759.326233,323.226410 757.513611,314.990997 755.573914,306.785583 
	C747.502686,272.642120 739.383911,238.509903 731.300598,204.369308 
	C723.981995,173.458496 716.712219,142.536102 709.371277,111.630608 
	C705.296753,94.476952 701.366943,77.282631 696.881104,60.235794 
	C694.818298,52.396755 689.673889,47.093807 680.867249,46.891586 
	C667.064758,46.574646 653.249207,45.947247 639.459595,46.285473 
	C631.430115,46.482418 623.245239,47.998745 619.995605,57.317383 
	C618.904053,60.447186 617.760864,63.582325 616.998413,66.799667 
	C612.359375,86.373962 607.883789,105.987000 603.235596,125.559067 
	C598.932312,143.679077 594.401428,161.745102 590.115601,179.869141 
	C584.759583,202.519119 579.539062,225.201202 574.283447,247.874832 
	C569.442322,268.760254 564.674622,289.662750 559.781189,310.535828 
	C558.394775,316.449677 556.681030,322.286804 555.117310,328.159088 
	C553.388062,325.817505 552.633484,323.495514 552.035461,321.133850 
	C545.542786,295.492615 539.091614,269.840820 532.595093,244.200546 
	C525.857544,217.608871 519.073425,191.029022 512.326477,164.439728 
	C505.617706,138.000687 499.014069,111.534546 492.186676,85.126228 
	C489.816254,75.957474 487.125061,66.857300 484.184875,57.854973 
	C482.034210,51.269878 477.314789,47.172859 470.152832,46.977837 
	C454.352051,46.547588 438.544281,46.144085 422.740173,46.172470 
	C415.915344,46.184734 412.945282,49.810596 413.063721,56.772453 
	C413.117035,59.904789 413.377991,63.150448 414.260559,66.132866 
	C420.017853,85.588379 425.989105,104.980476 431.857147,124.403358 
	C442.437042,159.422134 452.966003,194.456314 463.567139,229.468674 
	C475.617676,269.267975 487.687500,309.061523 499.824951,348.834381 
	C504.337158,363.620392 508.837952,378.417084 513.774536,393.063812 
	C516.987183,402.595795 523.561035,406.929718 533.442322,406.977539 
	C546.941223,407.042908 560.455017,407.377869 573.935791,406.878723 
	C586.534241,406.412231 590.304443,402.706177 593.330383,393.115601 
	C595.827332,385.201447 597.566223,377.044250 599.544128,368.970978 
	C605.000732,346.697815 610.476501,324.428925 615.815063,302.127319 
	C622.974670,272.218109 629.999390,242.276672 637.107239,212.355057 
	C642.485657,189.713425 647.893311,167.078674 653.313904,144.447083 
	C654.290466,140.369797 655.392761,136.322617 656.798096,130.857117 
	C657.846924,133.381760 658.421509,134.375610 658.680420,135.445831 
	C663.640991,155.948029 668.535645,176.466187 673.501831,196.967026 
	C682.231445,233.003403 691.058411,269.016296 699.733765,305.065674 
	C706.579041,333.510406 713.263306,361.993835 720.007812,390.462769 
	C722.741638,402.002289 728.768860,406.947540 740.395203,406.987488 
	C753.894226,407.033875 767.393738,407.030426 780.892761,406.987701 
	C791.708313,406.953491 797.422852,403.383453 800.932556,393.140808 
	C806.485596,376.934662 811.464233,360.531708 816.949524,343.455780 
M1093.719604,590.109314 
	C1076.734253,596.442810 1059.839844,603.035217 1042.738281,609.037903 
	C1025.198364,615.194519 1007.581299,621.195923 989.767944,626.491516 
	C970.832642,632.120605 951.660156,636.968079 932.528381,641.913635 
	C920.053528,645.138367 907.559998,648.424683 894.909851,650.808167 
	C871.409180,655.236023 847.807007,659.139587 824.209412,663.033508 
	C810.779907,665.249512 797.315002,667.355957 783.795959,668.897217 
	C766.135315,670.910767 748.426697,672.614685 730.698486,673.893127 
	C715.346436,675.000122 699.943176,675.708008 684.553528,675.912903 
	C660.061951,676.238953 635.562561,676.067139 611.067200,675.952759 
	C604.957092,675.924194 598.842163,675.410706 592.742737,674.945923 
	C576.137634,673.680786 559.539368,672.325989 542.938965,670.999451 
	C534.391541,670.316467 525.808472,669.915283 517.307007,668.858887 
	C503.471619,667.139709 489.678345,665.065125 475.888733,662.997559 
	C460.483643,660.687744 445.059204,658.461548 429.726166,655.732849 
	C419.595306,653.929932 409.599304,651.354736 399.562927,649.038757 
	C379.961212,644.515503 360.236877,640.441040 340.817474,635.233093 
	C320.464661,629.774841 300.232147,623.731812 280.268341,616.992493 
	C252.855728,607.738647 225.561981,598.065369 198.566650,587.665039 
	C178.756287,580.032776 159.349701,571.285583 140.056839,562.397766 
	C124.249817,555.115723 108.773926,547.088928 93.339394,539.031860 
	C78.533096,531.302673 64.153099,522.733276 49.162079,515.399109 
	C45.638538,513.675293 40.044659,514.422363 36.066132,515.863220 
	C31.710699,517.440552 31.185286,522.521118 32.172974,526.656616 
	C32.895473,529.681702 34.497593,533.054199 36.775482,535.057983 
	C49.597019,546.336670 62.351742,557.754150 75.866165,568.168030 
	C97.281143,584.669922 119.006790,600.802856 141.129486,616.339417 
	C154.664490,625.844910 168.856461,634.543152 183.340759,642.539978 
	C207.451523,655.851624 231.966675,668.439636 256.454346,681.055115 
	C265.028290,685.472168 273.907837,689.356750 282.850983,692.983521 
	C300.120667,699.987061 317.426483,706.930359 334.923828,713.334412 
	C348.596649,718.338501 362.451782,722.949158 376.459045,726.910034 
	C396.135620,732.473938 415.960266,737.558289 435.849548,742.312378 
	C452.396576,746.267639 469.035187,750.004639 485.804352,752.818481 
	C502.146881,755.560852 518.693970,757.119873 535.174438,758.993896 
	C551.030945,760.796875 566.884583,762.866028 582.799377,763.846802 
	C599.032288,764.847168 615.336792,764.768433 631.612427,764.966797 
	C644.441528,765.123169 657.297852,765.473022 670.099609,764.855713 
	C687.721497,764.005981 705.309082,762.396545 722.900269,760.975098 
	C733.894958,760.086792 744.924988,759.343811 755.838379,757.815369 
	C769.130920,755.953796 782.357422,753.542480 795.540771,750.997253 
	C815.933411,747.060242 836.379272,743.292053 856.586670,738.535095 
	C872.463501,734.797607 887.999390,729.622009 903.712952,725.178101 
	C928.588074,718.143372 953.076599,709.972778 976.890076,699.902710 
	C993.489624,692.883362 1010.116211,685.875122 1026.372192,678.111145 
	C1041.901367,670.694275 1057.060425,662.479248 1072.201660,654.281860 
	C1081.693604,649.142944 1090.953003,643.551025 1100.126831,637.856689 
	C1106.908691,633.647095 1113.451416,629.039429 1119.975586,624.431763 
	C1125.399536,620.601196 1130.889404,616.800293 1135.906860,612.472412 
	C1143.970947,605.516357 1145.438965,596.073120 1139.808105,587.700317 
	C1135.919800,581.918640 1126.417480,577.335693 1116.324585,581.306335 
	C1109.036743,584.173340 1101.771851,587.098999 1093.719604,590.109314 
M375.000458,263.500000 
	C375.000458,231.333740 374.887970,199.166946 375.040283,167.001404 
	C375.140472,145.848770 372.404236,125.196365 364.826477,105.381165 
	C356.521088,83.663322 342.662750,66.452927 322.215179,54.996895 
	C305.576172,45.674644 287.576172,40.910950 268.646393,38.729103 
	C241.509415,35.601292 214.398468,35.653797 187.615952,40.465538 
	C163.033661,44.881981 138.968750,51.751152 116.963425,64.216934 
	C111.810799,67.135849 107.076836,70.665848 106.681908,77.362862 
	C106.360008,82.821503 106.012886,88.292412 106.053909,93.755043 
	C106.099991,99.891586 106.147209,106.083244 106.983749,112.141876 
	C107.694740,117.291267 111.708733,119.727661 116.869125,118.696327 
	C121.254700,117.819847 125.600891,116.584984 129.829834,115.119926 
	C138.470627,112.126457 146.979065,108.751358 155.616531,105.747749 
	C178.070480,97.939560 201.188385,93.260033 224.968201,93.186333 
	C235.207672,93.154602 245.618973,94.336288 255.653610,96.410950 
	C267.712311,98.904083 279.614868,102.716660 288.529846,112.080956 
	C301.850372,126.072762 305.410095,143.891953 306.819092,162.136810 
	C307.727570,173.900040 307.025604,185.790237 306.982666,197.623306 
	C306.959320,204.061249 305.935577,204.469940 299.422485,203.054794 
	C288.878143,200.763763 278.284363,198.573364 267.611115,197.038284 
	C257.104828,195.527237 246.461472,194.995575 235.900101,193.835266 
	C218.409302,191.913620 200.915329,192.408035 183.694809,195.487198 
	C158.961975,199.909637 136.262268,208.944931 117.029305,226.084000 
	C98.130348,242.925461 87.044044,263.746643 83.286903,288.326782 
	C80.796158,304.621918 81.168861,321.108521 84.896690,337.394409 
	C91.326172,365.483063 106.451363,387.246979 131.565781,401.586365 
	C145.597977,409.598236 160.775833,414.033264 177.041367,415.221741 
	C194.882935,416.525391 212.474716,416.178223 230.038162,412.321808 
	C255.936035,406.635406 278.165741,394.248383 297.621246,376.558685 
	C302.608551,372.024048 307.283020,367.145325 312.612488,361.923798 
	C314.230988,364.939758 315.596710,367.188049 316.685394,369.563354 
	C322.136871,381.457733 329.133240,392.315735 337.932068,402.025452 
	C344.497833,409.270966 353.614655,411.204315 361.839874,406.083282 
	C371.292206,400.198212 380.524811,393.916992 389.512421,387.342438 
	C396.803284,382.009094 398.117279,374.521515 394.022797,366.454865 
	C392.892853,364.228699 391.596741,362.084534 390.517639,359.835236 
	C384.460785,347.209808 378.194397,334.493164 377.221802,320.330994 
	C375.946228,301.757416 375.693237,283.113617 375.000458,263.500000 
M1197.055176,279.423157 
	C1196.168945,276.220673 1195.528809,272.925079 1194.357544,269.830505 
	C1185.355835,246.048981 1168.710205,229.334625 1146.140137,218.232819 
	C1120.146240,205.446899 1091.709595,199.647873 1064.692993,189.809967 
	C1050.995239,184.822037 1037.051880,179.743469 1024.540039,172.443039 
	C1005.832397,161.527496 1002.228027,146.647018 1005.430908,128.176529 
	C1008.212402,112.136169 1019.617188,103.117569 1034.319458,97.980598 
	C1056.912964,90.086426 1080.218018,91.016647 1103.434082,93.498466 
	C1122.405151,95.526512 1140.436279,101.428947 1157.860474,109.250076 
	C1161.402100,110.839851 1165.501831,111.614075 1169.403687,111.875168 
	C1175.416138,112.277496 1178.431641,110.225479 1178.939209,104.140869 
	C1179.723022,94.745003 1179.630981,85.241470 1179.339600,75.801231 
	C1179.098633,68.002716 1174.395874,62.359150 1168.126831,58.427319 
	C1162.809937,55.092533 1157.127441,52.078495 1151.231689,49.972130 
	C1118.185303,38.165798 1084.180298,33.889252 1049.126099,36.816940 
	C1025.929810,38.754276 1004.211609,44.971043 984.685303,57.496769 
	C950.451660,79.457001 932.344666,110.198303 936.079651,151.803711 
	C938.084534,174.136810 947.628235,193.330276 962.583435,209.770233 
	C973.401978,221.662750 986.759766,230.390610 1001.719543,235.871597 
	C1022.635498,243.534744 1043.938232,250.161591 1065.167236,256.944366 
	C1080.388672,261.807709 1095.714233,266.305115 1109.709595,274.296539 
	C1127.608887,284.517151 1134.904907,302.340454 1129.171143,322.841278 
	C1124.358276,340.050018 1111.467163,349.414032 1095.516968,354.879120 
	C1073.490479,362.426147 1050.683228,362.116913 1027.870117,360.039734 
	C1006.883728,358.128876 986.604187,353.057556 966.997437,345.330048 
	C960.650574,342.828552 954.465576,339.816559 947.964355,337.830902 
	C939.054016,335.109375 931.234680,337.807587 931.908386,349.250031 
	C932.387512,357.387970 931.954224,365.577026 932.027832,373.742340 
	C932.079712,379.497772 934.144165,384.283966 938.531494,388.274963 
	C947.304443,396.255249 958.126709,399.905884 969.014404,403.632568 
	C994.684143,412.418854 1021.133850,417.007172 1048.165161,417.893402 
	C1069.499146,418.592834 1090.532227,416.343597 1111.200317,410.330597 
	C1136.030640,403.106689 1158.119019,391.849976 1175.124634,371.741302 
	C1197.837891,344.883484 1204.271484,314.225403 1197.055176,279.423157 
M1190.132446,584.733948 
	C1190.036865,586.560303 1190.242432,588.464478 1189.794312,590.199829 
	C1187.671875,598.419434 1185.557251,606.649475 1183.093262,614.770569 
	C1178.729980,629.152344 1174.528198,643.604492 1169.495972,657.755859 
	C1163.964722,673.310364 1157.539307,688.545837 1151.571289,703.946533 
	C1149.057739,710.432678 1152.907837,716.702209 1159.066284,715.865173 
	C1162.039062,715.461121 1165.190918,714.363586 1167.673950,712.701843 
	C1181.022095,703.768311 1190.594971,691.077515 1200.021729,678.471619 
	C1211.664307,662.902649 1221.414185,646.043335 1227.940552,627.691589 
	C1234.506226,609.229187 1241.074097,590.640381 1245.622070,571.624207 
	C1249.985962,553.377930 1251.665039,534.508606 1248.998169,515.608643 
	C1248.076416,509.076813 1244.610962,504.712402 1238.628784,501.750549 
	C1229.672607,497.316254 1220.237061,494.930878 1210.421143,493.695007 
	C1200.653076,492.465118 1190.888550,490.247070 1181.116821,490.215576 
	C1163.576416,490.158997 1145.948853,488.429993 1128.472046,491.931152 
	C1114.835083,494.663116 1100.693237,495.571381 1087.499390,499.637939 
	C1071.916016,504.440979 1056.891235,511.297760 1042.062988,518.205933 
	C1034.816650,521.581848 1026.943848,525.244751 1022.874329,532.818970 
	C1021.363525,535.630737 1020.625366,540.250427 1021.930786,542.836121 
	C1023.628601,546.198975 1027.874878,547.539124 1032.260498,546.426880 
	C1035.269409,545.663757 1038.406250,545.315063 1041.508789,545.027283 
	C1053.157837,543.946411 1064.813477,542.933289 1076.471924,541.956848 
	C1092.571045,540.608521 1108.673218,538.317078 1124.777100,538.292480 
	C1139.696533,538.269653 1154.709839,540.085266 1169.508423,542.268005 
	C1178.748901,543.630920 1188.515137,546.972656 1190.219727,558.004822 
	C1191.526611,566.462280 1190.527588,575.276001 1190.132446,584.733948 
z"/>
<path fill="#252F3E" opacity="1.000000" stroke="none" 
	d="
M816.817749,343.833893 
	C811.464233,360.531708 806.485596,376.934662 800.932556,393.140808 
	C797.422852,403.383453 791.708313,406.953491 780.892761,406.987701 
	C767.393738,407.030426 753.894226,407.033875 740.395203,406.987488 
	C728.768860,406.947540 722.741638,402.002289 720.007812,390.462769 
	C713.263306,361.993835 706.579041,333.510406 699.733765,305.065674 
	C691.058411,269.016296 682.231445,233.003403 673.501831,196.967026 
	C668.535645,176.466187 663.640991,155.948029 658.680420,135.445831 
	C658.421509,134.375610 657.846924,133.381760 656.798096,130.857117 
	C655.392761,136.322617 654.290466,140.369797 653.313904,144.447083 
	C647.893311,167.078674 642.485657,189.713425 637.107239,212.355057 
	C629.999390,242.276672 622.974670,272.218109 615.815063,302.127319 
	C610.476501,324.428925 605.000732,346.697815 599.544128,368.970978 
	C597.566223,377.044250 595.827332,385.201447 593.330383,393.115601 
	C590.304443,402.706177 586.534241,406.412231 573.935791,406.878723 
	C560.455017,407.377869 546.941223,407.042908 533.442322,406.977539 
	C523.561035,406.929718 516.987183,402.595795 513.774536,393.063812 
	C508.837952,378.417084 504.337158,363.620392 499.824951,348.834381 
	C487.687500,309.061523 475.617676,269.267975 463.567139,229.468674 
	C452.966003,194.456314 442.437042,159.422134 431.857147,124.403358 
	C425.989105,104.980476 420.017853,85.588379 414.260559,66.132866 
	C413.377991,63.150448 413.117035,59.904789 413.063721,56.772453 
	C412.945282,49.810596 415.915344,46.184734 422.740173,46.172470 
	C438.544281,46.144085 454.352051,46.547588 470.152832,46.977837 
	C477.314789,47.172859 482.034210,51.269878 484.184875,57.854973 
	C487.125061,66.857300 489.816254,75.957474 492.186676,85.126228 
	C499.014069,111.534546 505.617706,138.000687 512.326477,164.439728 
	C519.073425,191.029022 525.857544,217.608871 532.595093,244.200546 
	C539.091614,269.840820 545.542786,295.492615 552.035461,321.133850 
	C552.633484,323.495514 553.388062,325.817505 555.117310,328.159088 
	C556.681030,322.286804 558.394775,316.449677 559.781189,310.535828 
	C564.674622,289.662750 569.442322,268.760254 574.283447,247.874832 
	C579.539062,225.201202 584.759583,202.519119 590.115601,179.869141 
	C594.401428,161.745102 598.932312,143.679077 603.235596,125.559067 
	C607.883789,105.987000 612.359375,86.373962 616.998413,66.799667 
	C617.760864,63.582325 618.904053,60.447186 619.995605,57.317383 
	C623.245239,47.998745 631.430115,46.482418 639.459595,46.285473 
	C653.249207,45.947247 667.064758,46.574646 680.867249,46.891586 
	C689.673889,47.093807 694.818298,52.396755 696.881104,60.235794 
	C701.366943,77.282631 705.296753,94.476952 709.371277,111.630608 
	C716.712219,142.536102 723.981995,173.458496 731.300598,204.369308 
	C739.383911,238.509903 747.502686,272.642120 755.573914,306.785583 
	C757.513611,314.990997 759.326233,323.226410 761.535095,332.932251 
	C762.773071,330.533752 763.546326,329.529633 763.836670,328.401245 
	C772.082825,296.350555 780.285522,264.288666 788.484558,232.225876 
	C797.054932,198.710999 805.576782,165.183670 814.191589,131.680267 
	C819.697754,110.266479 825.334106,88.886185 830.912842,67.491058 
	C831.122620,66.686752 831.270264,65.857750 831.565186,65.085411 
	C837.169189,50.408077 837.197754,46.692188 858.621582,46.050705 
	C868.612061,45.751568 878.620422,46.109276 888.618042,45.974083 
	C903.815918,45.768559 906.477295,51.201283 902.997864,65.603828 
	C899.216553,81.255882 893.766418,96.507568 888.971680,111.911377 
	C881.063354,137.318176 873.065918,162.697235 865.163086,188.105759 
	C855.381897,219.553665 845.665955,251.021912 835.908142,282.477081 
	C829.601379,302.807281 823.269897,323.129822 816.817749,343.833893 
z"/>
<path fill="#FF9900" opacity="1.000000" stroke="none" 
	d="
M1094.108154,590.053894 
	C1101.771851,587.098999 1109.036743,584.173340 1116.324585,581.306335 
	C1126.417480,577.335693 1135.919800,581.918640 1139.808105,587.700317 
	C1145.438965,596.073120 1143.970947,605.516357 1135.906860,612.472412 
	C1130.889404,616.800293 1125.399536,620.601196 1119.975586,624.431763 
	C1113.451416,629.039429 1106.908691,633.647095 1100.126831,637.856689 
	C1090.953003,643.551025 1081.693604,649.142944 1072.201660,654.281860 
	C1057.060425,662.479248 1041.901367,670.694275 1026.372192,678.111145 
	C1010.116211,685.875122 993.489624,692.883362 976.890076,699.902710 
	C953.076599,709.972778 928.588074,718.143372 903.712952,725.178101 
	C887.999390,729.622009 872.463501,734.797607 856.586670,738.535095 
	C836.379272,743.292053 815.933411,747.060242 795.540771,750.997253 
	C782.357422,753.542480 769.130920,755.953796 755.838379,757.815369 
	C744.924988,759.343811 733.894958,760.086792 722.900269,760.975098 
	C705.309082,762.396545 687.721497,764.005981 670.099609,764.855713 
	C657.297852,765.473022 644.441528,765.123169 631.612427,764.966797 
	C615.336792,764.768433 599.032288,764.847168 582.799377,763.846802 
	C566.884583,762.866028 551.030945,760.796875 535.174438,758.993896 
	C518.693970,757.119873 502.146881,755.560852 485.804352,752.818481 
	C469.035187,750.004639 452.396576,746.267639 435.849548,742.312378 
	C415.960266,737.558289 396.135620,732.473938 376.459045,726.910034 
	C362.451782,722.949158 348.596649,718.338501 334.923828,713.334412 
	C317.426483,706.930359 300.120667,699.987061 282.850983,692.983521 
	C273.907837,689.356750 265.028290,685.472168 256.454346,681.055115 
	C231.966675,668.439636 207.451523,655.851624 183.340759,642.539978 
	C168.856461,634.543152 154.664490,625.844910 141.129486,616.339417 
	C119.006790,600.802856 97.281143,584.669922 75.866165,568.168030 
	C62.351742,557.754150 49.597019,546.336670 36.775482,535.057983 
	C34.497593,533.054199 32.895473,529.681702 32.172974,526.656616 
	C31.185286,522.521118 31.710699,517.440552 36.066132,515.863220 
	C40.044659,514.422363 45.638538,513.675293 49.162079,515.399109 
	C64.153099,522.733276 78.533096,531.302673 93.339394,539.031860 
	C108.773926,547.088928 124.249817,555.115723 140.056839,562.397766 
	C159.349701,571.285583 178.756287,580.032776 198.566650,587.665039 
	C225.561981,598.065369 252.855728,607.738647 280.268341,616.992493 
	C300.232147,623.731812 320.464661,629.774841 340.817474,635.233093 
	C360.236877,640.441040 379.961212,644.515503 399.562927,649.038757 
	C409.599304,651.354736 419.595306,653.929932 429.726166,655.732849 
	C445.059204,658.461548 460.483643,660.687744 475.888733,662.997559 
	C489.678345,665.065125 503.471619,667.139709 517.307007,668.858887 
	C525.808472,669.915283 534.391541,670.316467 542.938965,670.999451 
	C559.539368,672.325989 576.137634,673.680786 592.742737,674.945923 
	C598.842163,675.410706 604.957092,675.924194 611.067200,675.952759 
	C635.562561,676.067139 660.061951,676.238953 684.553528,675.912903 
	C699.943176,675.708008 715.346436,675.000122 730.698486,673.893127 
	C748.426697,672.614685 766.135315,670.910767 783.795959,668.897217 
	C797.315002,667.355957 810.779907,665.249512 824.209412,663.033508 
	C847.807007,659.139587 871.409180,655.236023 894.909851,650.808167 
	C907.559998,648.424683 920.053528,645.138367 932.528381,641.913635 
	C951.660156,636.968079 970.832642,632.120605 989.767944,626.491516 
	C1007.581299,621.195923 1025.198364,615.194519 1042.738281,609.037903 
	C1059.839844,603.035217 1076.734253,596.442810 1094.108154,590.053894 
z"/>
<path fill="#252F3E" opacity="1.000000" stroke="none" 
	d="
M375.000458,264.000000 
	C375.693237,283.113617 375.946228,301.757416 377.221802,320.330994 
	C378.194397,334.493164 384.460785,347.209808 390.517639,359.835236 
	C391.596741,362.084534 392.892853,364.228699 394.022797,366.454865 
	C398.117279,374.521515 396.803284,382.009094 389.512421,387.342438 
	C380.524811,393.916992 371.292206,400.198212 361.839874,406.083282 
	C353.614655,411.204315 344.497833,409.270966 337.932068,402.025452 
	C329.133240,392.315735 322.136871,381.457733 316.685394,369.563354 
	C315.596710,367.188049 314.230988,364.939758 312.612488,361.923798 
	C307.283020,367.145325 302.608551,372.024048 297.621246,376.558685 
	C278.165741,394.248383 255.936035,406.635406 230.038162,412.321808 
	C212.474716,416.178223 194.882935,416.525391 177.041367,415.221741 
	C160.775833,414.033264 145.597977,409.598236 131.565781,401.586365 
	C106.451363,387.246979 91.326172,365.483063 84.896690,337.394409 
	C81.168861,321.108521 80.796158,304.621918 83.286903,288.326782 
	C87.044044,263.746643 98.130348,242.925461 117.029305,226.084000 
	C136.262268,208.944931 158.961975,199.909637 183.694809,195.487198 
	C200.915329,192.408035 218.409302,191.913620 235.900101,193.835266 
	C246.461472,194.995575 257.104828,195.527237 267.611115,197.038284 
	C278.284363,198.573364 288.878143,200.763763 299.422485,203.054794 
	C305.935577,204.469940 306.959320,204.061249 306.982666,197.623306 
	C307.025604,185.790237 307.727570,173.900040 306.819092,162.136810 
	C305.410095,143.891953 301.850372,126.072762 288.529846,112.080956 
	C279.614868,102.716660 267.712311,98.904083 255.653610,96.410950 
	C245.618973,94.336288 235.207672,93.154602 224.968201,93.186333 
	C201.188385,93.260033 178.070480,97.939560 155.616531,105.747749 
	C146.979065,108.751358 138.470627,112.126457 129.829834,115.119926 
	C125.600891,116.584984 121.254700,117.819847 116.869125,118.696327 
	C111.708733,119.727661 107.694740,117.291267 106.983749,112.141876 
	C106.147209,106.083244 106.099991,99.891586 106.053909,93.755043 
	C106.012886,88.292412 106.360008,82.821503 106.681908,77.362862 
	C107.076836,70.665848 111.810799,67.135849 116.963425,64.216934 
	C138.968750,51.751152 163.033661,44.881981 187.615952,40.465538 
	C214.398468,35.653797 241.509415,35.601292 268.646393,38.729103 
	C287.576172,40.910950 305.576172,45.674644 322.215179,54.996895 
	C342.662750,66.452927 356.521088,83.663322 364.826477,105.381165 
	C372.404236,125.196365 375.140472,145.848770 375.040283,167.001404 
	C374.887970,199.166946 375.000458,231.333740 375.000458,264.000000 
M217.261932,243.041077 
	C209.306808,244.733505 201.123413,245.732346 193.443176,248.260010 
	C176.462570,253.848511 164.076904,264.617981 157.881699,281.968689 
	C152.892044,295.942993 152.649597,310.046082 156.421280,324.113525 
	C160.724457,340.163300 170.468796,352.028107 186.440491,357.628540 
	C197.168137,361.390167 208.252548,362.451324 219.806885,361.227234 
	C244.791458,358.580170 267.581421,351.414886 285.940552,333.306641 
	C294.402802,324.960022 300.786774,315.335175 303.885834,303.842682 
	C308.040314,288.436401 308.257111,272.627441 308.043549,256.789917 
	C307.994080,253.119919 306.515167,251.211990 303.053314,250.557953 
	C297.839600,249.572922 292.661682,248.339325 287.413269,247.608536 
	C275.593079,245.962631 263.775574,244.009521 251.888000,243.218445 
	C240.636215,242.469681 229.296341,243.044449 217.261932,243.041077 
z"/>
<path fill="#252F3E" opacity="1.000000" stroke="none" 
	d="
M1197.130493,279.834412 
	C1204.271484,314.225403 1197.837891,344.883484 1175.124634,371.741302 
	C1158.119019,391.849976 1136.030640,403.106689 1111.200317,410.330597 
	C1090.532227,416.343597 1069.499146,418.592834 1048.165161,417.893402 
	C1021.133850,417.007172 994.684143,412.418854 969.014404,403.632568 
	C958.126709,399.905884 947.304443,396.255249 938.531494,388.274963 
	C934.144165,384.283966 932.079712,379.497772 932.027832,373.742340 
	C931.954224,365.577026 932.387512,357.387970 931.908386,349.250031 
	C931.234680,337.807587 939.054016,335.109375 947.964355,337.830902 
	C954.465576,339.816559 960.650574,342.828552 966.997437,345.330048 
	C986.604187,353.057556 1006.883728,358.128876 1027.870117,360.039734 
	C1050.683228,362.116913 1073.490479,362.426147 1095.516968,354.879120 
	C1111.467163,349.414032 1124.358276,340.050018 1129.171143,322.841278 
	C1134.904907,302.340454 1127.608887,284.517151 1109.709595,274.296539 
	C1095.714233,266.305115 1080.388672,261.807709 1065.167236,256.944366 
	C1043.938232,250.161591 1022.635498,243.534744 1001.719543,235.871597 
	C986.759766,230.390610 973.401978,221.662750 962.583435,209.770233 
	C947.628235,193.330276 938.084534,174.136810 936.079651,151.803711 
	C932.344666,110.198303 950.451660,79.457001 984.685303,57.496769 
	C1004.211609,44.971043 1025.929810,38.754276 1049.126099,36.816940 
	C1084.180298,33.889252 1118.185303,38.165798 1151.231689,49.972130 
	C1157.127441,52.078495 1162.809937,55.092533 1168.126831,58.427319 
	C1174.395874,62.359150 1179.098633,68.002716 1179.339600,75.801231 
	C1179.630981,85.241470 1179.723022,94.745003 1178.939209,104.140869 
	C1178.431641,110.225479 1175.416138,112.277496 1169.403687,111.875168 
	C1165.501831,111.614075 1161.402100,110.839851 1157.860474,109.250076 
	C1140.436279,101.428947 1122.405151,95.526512 1103.434082,93.498466 
	C1080.218018,91.016647 1056.912964,90.086426 1034.319458,97.980598 
	C1019.617188,103.117569 1008.212402,112.136169 1005.430908,128.176529 
	C1002.228027,146.647018 1005.832397,161.527496 1024.540039,172.443039 
	C1037.051880,179.743469 1050.995239,184.822037 1064.692993,189.809967 
	C1091.709595,199.647873 1120.146240,205.446899 1146.140137,218.232819 
	C1168.710205,229.334625 1185.355835,246.048981 1194.357544,269.830505 
	C1195.528809,272.925079 1196.168945,276.220673 1197.130493,279.834412 
z"/>
<path fill="#FF9900" opacity="1.000000" stroke="none" 
	d="
M1190.343262,584.332642 
	C1190.527588,575.276001 1191.526611,566.462280 1190.219727,558.004822 
	C1188.515137,546.972656 1178.748901,543.630920 1169.508423,542.268005 
	C1154.709839,540.085266 1139.696533,538.269653 1124.777100,538.292480 
	C1108.673218,538.317078 1092.571045,540.608521 1076.471924,541.956848 
	C1064.813477,542.933289 1053.157837,543.946411 1041.508789,545.027283 
	C1038.406250,545.315063 1035.269409,545.663757 1032.260498,546.426880 
	C1027.874878,547.539124 1023.628601,546.198975 1021.930786,542.836121 
	C1020.625366,540.250427 1021.363525,535.630737 1022.874329,532.818970 
	C1026.943848,525.244751 1034.816650,521.581848 1042.062988,518.205933 
	C1056.891235,511.297760 1071.916016,504.440979 1087.499390,499.637939 
	C1100.693237,495.571381 1114.835083,494.663116 1128.472046,491.931152 
	C1145.948853,488.429993 1163.576416,490.158997 1181.116821,490.215576 
	C1190.888550,490.247070 1200.653076,492.465118 1210.421143,493.695007 
	C1220.237061,494.930878 1229.672607,497.316254 1238.628784,501.750549 
	C1244.610962,504.712402 1248.076416,509.076813 1248.998169,515.608643 
	C1251.665039,534.508606 1249.985962,553.377930 1245.622070,571.624207 
	C1241.074097,590.640381 1234.506226,609.229187 1227.940552,627.691589 
	C1221.414185,646.043335 1211.664307,662.902649 1200.021729,678.471619 
	C1190.594971,691.077515 1181.022095,703.768311 1167.673950,712.701843 
	C1165.190918,714.363586 1162.039062,715.461121 1159.066284,715.865173 
	C1152.907837,716.702209 1149.057739,710.432678 1151.571289,703.946533 
	C1157.539307,688.545837 1163.964722,673.310364 1169.495972,657.755859 
	C1174.528198,643.604492 1178.729980,629.152344 1183.093262,614.770569 
	C1185.557251,606.649475 1187.671875,598.419434 1189.794312,590.199829 
	C1190.242432,588.464478 1190.036865,586.560303 1190.343262,584.332642 
z"/>
<path fill="#47704C" opacity="1.000000" stroke="none" 
	d="
M217.628571,243.039093 
	C229.296341,243.044449 240.636215,242.469681 251.888000,243.218445 
	C263.775574,244.009521 275.593079,245.962631 287.413269,247.608536 
	C292.661682,248.339325 297.839600,249.572922 303.053314,250.557953 
	C306.515167,251.211990 307.994080,253.119919 308.043549,256.789917 
	C308.257111,272.627441 308.040314,288.436401 303.885834,303.842682 
	C300.786774,315.335175 294.402802,324.960022 285.940552,333.306641 
	C267.581421,351.414886 244.791458,358.580170 219.806885,361.227234 
	C208.252548,362.451324 197.168137,361.390167 186.440491,357.628540 
	C170.468796,352.028107 160.724457,340.163300 156.421280,324.113525 
	C152.649597,310.046082 152.892044,295.942993 157.881699,281.968689 
	C164.076904,264.617981 176.462570,253.848511 193.443176,248.260010 
	C201.123413,245.732346 209.306808,244.733505 217.628571,243.039093 
z"/>
</svg>
  ),
  Azure: ({ className }) => (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="100%" viewBox="0 0 225 225" enable-background="new 0 0 225 225">
<path fill="#FEFEFE" opacity="1.000000" stroke="none" 
	d="
M226.000000,109.000000 
	C226.000000,148.333328 226.000000,187.166672 226.000000,226.000000 
	C151.000000,226.000000 76.000000,226.000000 1.000000,226.000000 
	C1.000000,151.000000 1.000000,76.000000 1.000000,1.000000 
	C76.000000,1.000000 151.000000,1.000000 226.000000,1.000000 
	C226.000000,36.833332 226.000000,72.666664 226.000000,109.000000 
M29.338432,144.192352 
	C29.240725,144.794113 29.143017,145.395859 28.815296,146.247437 
	C28.815296,146.247437 28.876608,146.581436 28.326172,147.071808 
	C28.114700,148.022141 27.903231,148.972488 27.197397,150.434052 
	C24.765898,157.962677 22.334400,165.491318 19.418430,173.550034 
	C17.014906,180.604080 14.530741,187.631943 12.228504,194.718903 
	C9.422929,203.355270 13.633631,208.966370 22.847229,208.988403 
	C34.975174,209.017426 47.103226,209.000534 59.231232,209.004059 
	C74.800491,209.008591 75.415764,208.545731 79.787796,193.510254 
	C79.832344,193.357025 79.793579,193.179581 80.076401,192.368835 
	C80.018219,191.909729 79.960030,191.450623 80.021889,190.584229 
	C80.021889,190.584229 80.057564,190.161133 80.850929,190.014862 
	C83.228111,182.953888 85.605286,175.892899 88.704575,168.783768 
	C90.128868,169.888840 91.647141,170.892746 92.962769,172.114792 
	C104.749664,183.063324 116.539543,194.009293 128.236679,205.053314 
	C131.337021,207.980545 134.703430,209.596008 139.786072,208.969177 
	C140.841293,208.923386 141.896500,208.877594 143.835358,209.005798 
	C146.233536,208.963074 148.631714,208.920349 151.498749,208.980438 
	C151.498749,208.980438 151.967651,208.877869 152.898743,209.026703 
	C163.277542,208.980927 173.656326,208.935150 184.814255,208.999878 
	C185.860168,208.957367 186.906097,208.914856 188.884308,209.010239 
	C194.252655,208.960083 199.621017,208.909927 205.773941,208.985535 
	C213.193359,207.651596 216.403061,202.770599 214.307785,195.727219 
	C213.418137,192.736603 212.156784,189.856567 211.009033,186.997742 
	C211.009033,186.997742 211.086746,186.951553 211.101227,186.465103 
	C211.101227,186.465103 210.910995,186.017166 210.879196,185.266556 
	C209.250732,180.845627 207.622253,176.424698 205.997482,171.237610 
	C203.922363,165.159973 201.847244,159.082352 199.797867,152.306198 
	C198.512344,148.237686 197.226822,144.169159 196.240601,139.446259 
	C196.589111,137.628326 196.937637,135.810394 197.286133,133.992462 
	C196.091446,134.046204 194.896759,134.099945 193.193954,133.594925 
	C191.765106,130.407593 190.336258,127.220253 188.871353,123.381927 
	C188.873062,122.281883 189.161957,121.085693 188.830933,120.097046 
	C186.249954,112.388451 183.549744,104.719765 180.863159,96.301331 
	C179.522827,92.549049 178.182480,88.796776 176.830902,84.305054 
	C174.619766,77.884224 173.033279,71.139046 169.937714,65.177452 
	C168.356232,62.131748 170.153976,57.111416 165.088974,55.224293 
	C164.698853,54.149490 164.308746,53.074688 164.093140,51.176300 
	C162.612350,46.531635 163.880661,40.646294 158.062866,37.533134 
	C158.062866,37.533134 158.054291,37.128242 158.526657,37.019268 
	C158.526657,37.019268 158.986694,36.866409 159.713150,36.665596 
	C158.377533,32.412102 156.826096,28.211493 155.767365,23.890160 
	C154.720947,19.619070 152.292816,17.383232 147.222427,17.021152 
	C146.486359,17.058105 145.750290,17.095058 144.119675,16.986841 
	C141.402908,17.019764 138.686127,17.052687 135.054962,16.961683 
	C131.048264,17.003490 127.041565,17.045300 122.103798,16.934275 
	C114.394928,16.984249 106.686066,17.034224 98.330498,16.967253 
	C97.896034,17.007269 97.461563,17.047287 96.348885,16.945518 
	C95.891548,16.990780 95.434204,17.036041 94.329117,16.960602 
	C93.893143,16.997829 93.457161,17.035057 92.217758,16.925262 
	C91.134056,16.979004 90.050354,17.032745 88.139824,16.950703 
	C86.488632,16.998280 84.837440,17.045856 82.314964,16.961174 
	C74.401955,16.976505 71.716156,18.606230 70.289589,24.172924 
	C68.483093,29.430969 66.676590,34.689014 64.360275,40.458382 
	C62.816792,45.265102 61.273304,50.071819 59.215759,55.420170 
	C56.694023,63.225681 54.172283,71.031189 51.178276,79.366127 
	C48.674366,87.105713 46.170456,94.845306 43.666313,102.658234 
	C43.666313,102.658234 43.692776,102.726639 43.170189,103.217979 
	C42.622234,105.058235 42.074284,106.898491 41.630630,108.823990 
	C41.630630,108.823990 41.617886,108.689888 41.163025,109.111290 
	C41.007130,109.711632 40.851234,110.311966 40.116508,111.356415 
	C38.843693,115.571342 37.570877,119.786270 36.045975,124.478630 
	C36.057365,124.658287 36.068756,124.837952 35.699089,125.600281 
	C35.401718,126.706413 35.104343,127.812538 34.261173,129.398621 
	C32.998253,133.381760 31.735332,137.364914 30.390114,141.542694 
	C30.390114,141.542694 30.422419,141.751526 30.027426,142.179230 
	C29.936693,142.756775 29.845961,143.334305 29.869467,143.916931 
	C29.869467,143.916931 29.827154,143.810699 29.338432,144.192352 
z"/>
<path fill="#0A61B0" opacity="1.000000" stroke="none" 
	d="
M87.982468,168.831924 
	C85.605286,175.892899 83.228111,182.953888 80.437408,189.712280 
	C80.023880,188.264191 80.023880,187.118698 80.023880,185.572021 
	C78.146477,187.012787 76.250740,187.900925 75.269707,189.391205 
	C74.410637,190.696213 74.579147,192.677673 74.445602,193.464935 
	C71.514343,192.833405 69.539963,192.541962 67.650452,191.970078 
	C64.697983,191.076462 61.120842,190.721130 59.065411,188.795761 
	C56.767799,186.643555 54.900887,185.308411 51.648060,184.808685 
	C47.506115,184.172394 41.453072,186.264343 40.333805,179.141403 
	C40.260242,178.673248 39.378029,178.280838 38.815430,177.949051 
	C34.913834,175.648148 25.444799,177.015366 21.686127,181.286896 
	C22.786524,175.979858 23.656134,171.785889 24.804502,166.247498 
	C22.619474,169.266510 21.261185,171.143219 19.902899,173.019943 
	C22.334400,165.491318 24.765898,157.962677 27.786570,149.999084 
	C28.542698,148.569901 28.709652,147.575668 28.876608,146.581436 
	C28.876608,146.581436 28.815296,146.247437 29.176407,145.929642 
	C29.634064,145.011459 29.730610,144.411087 29.827156,143.810699 
	C29.827154,143.810699 29.869467,143.916931 30.123215,143.768219 
	C30.392115,142.996841 30.407267,142.374176 30.422419,141.751526 
	C30.422419,141.751526 30.390114,141.542694 30.788391,141.654221 
	C32.009560,143.136536 32.832455,144.507324 33.678497,145.916687 
	C39.488930,146.276108 45.417850,146.568436 51.328751,147.072235 
	C52.489895,147.171219 53.985725,147.789154 54.639206,148.675186 
	C58.792744,154.306808 63.121166,155.594498 70.402031,152.968842 
	C76.493790,157.933167 82.225891,162.882309 87.929626,167.863922 
	C88.099487,168.012268 87.971550,168.501587 87.982468,168.831924 
M75.516983,185.412399 
	C75.516983,185.412399 75.583069,185.523346 75.516983,185.412399 
z"/>
<path fill="#0378D3" opacity="1.000000" stroke="none" 
	d="
M88.343521,168.807846 
	C87.971550,168.501587 88.099487,168.012268 87.929626,167.863922 
	C82.225891,162.882309 76.493790,157.933167 70.387802,152.592621 
	C69.034523,148.820374 68.059273,145.434814 67.313583,142.042404 
	C67.543137,142.035568 68.000626,141.994797 68.387024,141.993286 
	C70.183128,141.663147 71.592842,141.334518 73.471008,141.011871 
	C81.675560,141.015274 89.411659,141.012680 97.314041,141.012970 
	C97.480324,141.015839 97.804398,140.931549 97.899200,141.015167 
	C97.993996,141.098801 98.056519,141.343765 98.205315,141.556549 
	C99.176353,141.721176 99.998604,141.673019 101.213257,141.551514 
	C102.401527,141.487885 103.197372,141.497620 104.347092,141.697876 
	C107.509964,141.997971 110.318962,142.107544 113.423668,142.461609 
	C116.785652,142.898117 119.851936,143.090134 122.918213,143.282150 
	C122.773796,143.492462 122.656998,143.732727 122.474129,143.901321 
	C122.372177,143.995316 122.160309,143.970093 121.583527,144.001465 
	C116.458313,143.904724 117.627586,147.709625 118.176498,149.693283 
	C119.851982,155.748138 122.155136,161.635132 124.337692,167.541763 
	C125.766365,171.408157 128.051117,175.069199 128.831970,179.042435 
	C130.881241,189.469757 134.536972,199.269424 139.004379,208.829865 
	C134.703430,209.596008 131.337021,207.980545 128.236679,205.053314 
	C116.539543,194.009293 104.749664,183.063324 92.962769,172.114792 
	C91.647141,170.892746 90.128868,169.888840 88.343521,168.807846 
z"/>
<path fill="#0C5AA4" opacity="1.000000" stroke="none" 
	d="
M97.147758,141.010101 
	C89.411659,141.012680 81.675560,141.015274 73.255554,140.746780 
	C71.047966,140.982071 69.524292,141.488434 68.000626,141.994797 
	C68.000626,141.994797 67.543137,142.035568 66.966393,141.975586 
	C66.033905,140.494095 65.678169,139.072601 65.201241,137.166840 
	C59.078556,136.788620 52.652191,136.571686 46.276695,135.883469 
	C44.464706,135.687881 41.721539,134.475189 41.274197,133.114548 
	C40.003288,129.248886 39.697353,125.065964 39.215431,120.883163 
	C39.403904,120.406296 39.388477,120.054199 39.373047,119.702103 
	C39.244667,120.130638 39.116283,120.559174 38.740597,121.177185 
	C37.761551,122.244843 37.029808,123.123024 36.298061,124.001198 
	C37.570877,119.786270 38.843693,115.571342 40.722557,110.991776 
	C41.425034,109.981392 41.521461,109.335640 41.617889,108.689888 
	C41.617886,108.689888 41.630630,108.823990 41.960098,108.705307 
	C42.757301,106.633293 43.225037,104.679970 43.692772,102.726639 
	C43.692776,102.726639 43.666313,102.658234 43.985538,102.893776 
	C45.174145,105.919777 46.043522,108.710228 46.912899,111.500687 
	C47.136333,111.467880 47.359772,111.435066 47.583210,111.402260 
	C47.847595,109.526138 48.111980,107.650017 48.344326,106.001266 
	C52.607307,106.001266 56.590519,105.816658 60.543568,106.081787 
	C62.424713,106.207947 64.882317,106.631668 65.986206,107.883820 
	C70.304642,112.782295 75.560150,114.510208 81.862625,114.022247 
	C85.770775,113.719658 89.469360,113.912491 91.871178,117.960373 
	C92.306091,118.693352 94.518150,118.469246 95.914413,118.504913 
	C97.124977,118.535843 98.342125,118.308731 99.183891,118.230347 
	C99.905647,122.323677 100.520287,125.809540 101.135468,129.670074 
	C100.017349,133.466660 98.898697,136.888535 97.615952,140.357544 
	C97.271080,140.566452 97.169708,140.768265 97.147758,141.010101 
z"/>
<path fill="#0866B7" opacity="1.000000" stroke="none" 
	d="
M19.660664,173.284988 
	C21.261185,171.143219 22.619474,169.266510 24.804502,166.247498 
	C23.656134,171.785889 22.786524,175.979858 21.686127,181.286896 
	C25.444799,177.015366 34.913834,175.648148 38.815430,177.949051 
	C39.378029,178.280838 40.260242,178.673248 40.333805,179.141403 
	C41.453072,186.264343 47.506115,184.172394 51.648060,184.808685 
	C54.900887,185.308411 56.767799,186.643555 59.065411,188.795761 
	C61.120842,190.721130 64.697983,191.076462 67.650452,191.970078 
	C69.539963,192.541962 71.514343,192.833405 74.445602,193.464935 
	C74.579147,192.677673 74.410637,190.696213 75.269707,189.391205 
	C76.250740,187.900925 78.146477,187.012787 80.023880,185.572021 
	C80.023880,187.118698 80.023880,188.264191 80.040726,189.785416 
	C80.057564,190.161133 80.021889,190.584229 79.677147,190.827881 
	C79.018402,191.379929 78.704399,191.688354 78.390381,191.996765 
	C78.858154,192.335663 79.325928,192.674545 79.793701,193.013443 
	C79.793579,193.179581 79.832344,193.357025 79.787796,193.510254 
	C75.415764,208.545731 74.800491,209.008591 59.231232,209.004059 
	C47.103226,209.000534 34.975174,209.017426 22.847229,208.988403 
	C13.633631,208.966370 9.422929,203.355270 12.228504,194.718903 
	C14.530741,187.631943 17.014906,180.604080 19.660664,173.284988 
M21.845228,183.606644 
	C21.202568,183.347275 20.559910,183.087906 19.917246,182.828552 
	C19.823584,183.375504 19.729921,183.922455 19.636261,184.469406 
	C20.316847,184.387573 20.997431,184.305756 21.845228,183.606644 
z"/>
<path fill="#2996E0" opacity="1.000000" stroke="none" 
	d="
M151.029892,208.877640 
	C148.631714,208.920349 146.233536,208.963074 143.412537,208.582504 
	C143.011536,207.486053 143.033340,206.812912 143.405792,206.070862 
	C144.529877,204.691086 145.303314,203.380203 146.325287,201.950897 
	C147.047287,201.554626 147.520752,201.276764 148.362289,200.924927 
	C149.841797,197.502197 150.953217,194.153442 152.062103,190.812332 
	C158.926712,190.588181 165.995087,189.865219 171.568771,184.160187 
	C172.431595,183.277023 174.283646,183.063553 175.682800,183.051056 
	C182.767410,182.987747 189.316772,181.677826 194.426422,176.197281 
	C195.029205,175.550735 196.148514,175.350220 197.059830,175.033432 
	C200.029984,174.000977 203.014679,173.010437 205.993790,172.003769 
	C207.622253,176.424698 209.250732,180.845627 210.743530,185.745850 
	C210.767502,186.467270 210.927124,186.709412 211.086746,186.951553 
	C211.086746,186.951553 211.009033,186.997742 211.008759,187.344421 
	C210.301086,193.594788 209.593704,199.498459 208.958054,204.803436 
	C207.468704,206.325684 206.229050,207.592728 204.989380,208.859772 
	C199.621017,208.909927 194.252655,208.960083 188.206604,208.698273 
	C186.364304,208.554001 185.199707,208.721680 184.035126,208.889374 
	C173.656326,208.935150 163.277542,208.980927 152.349869,208.798401 
	C151.543961,208.672607 151.286926,208.775116 151.029892,208.877640 
z"/>
<path fill="#0E569E" opacity="1.000000" stroke="none" 
	d="
M101.134933,129.295395 
	C100.520287,125.809540 99.905647,122.323677 99.183891,118.230347 
	C98.342125,118.308731 97.124977,118.535843 95.914413,118.504913 
	C94.518150,118.469246 92.306091,118.693352 91.871178,117.960373 
	C89.469360,113.912491 85.770775,113.719658 81.862625,114.022247 
	C75.560150,114.510208 70.304642,112.782295 65.986206,107.883820 
	C64.882317,106.631668 62.424713,106.207947 60.543568,106.081787 
	C56.590519,105.816658 52.607307,106.001266 48.344326,106.001266 
	C48.111980,107.650017 47.847595,109.526138 47.583210,111.402260 
	C47.359772,111.435066 47.136333,111.467880 46.912899,111.500687 
	C46.043522,108.710228 45.174145,105.919777 43.985657,102.857101 
	C46.170456,94.845306 48.674366,87.105713 51.732079,79.309113 
	C53.043785,81.060837 53.801689,82.869568 54.726940,85.077667 
	C55.910889,83.272408 56.731110,81.252785 57.263885,81.325958 
	C64.084267,82.262741 72.441246,81.496536 77.194336,85.241562 
	C81.643906,88.747437 85.264114,89.840370 90.226357,90.123497 
	C92.094444,90.230080 94.583328,91.254837 95.561508,92.694923 
	C97.575439,95.659882 98.505798,99.344666 100.397896,102.415375 
	C101.353775,103.966690 103.434631,104.824821 105.250793,106.164871 
	C105.664474,106.888382 105.834190,107.443405 105.760429,108.183876 
	C105.738579,110.424156 105.960213,112.478989 106.165771,114.895042 
	C104.478119,119.935974 102.806534,124.615685 101.134933,129.295395 
z"/>
<path fill="#36B8ED" opacity="1.000000" stroke="none" 
	d="
M165.132355,55.922783 
	C170.153976,57.111416 168.356232,62.131748 169.937714,65.177452 
	C173.033279,71.139046 174.619766,77.884224 176.579681,84.899712 
	C174.767776,87.917900 173.459030,89.333855 170.708084,86.286224 
	C168.851227,84.229118 160.727341,86.474060 158.877579,88.873077 
	C158.220474,89.725311 157.337250,90.621552 156.367020,90.973938 
	C153.181763,92.130775 149.847763,92.886208 146.684616,94.093765 
	C141.946289,95.902634 137.321472,98.006454 132.616867,99.906776 
	C127.575081,101.943298 120.790459,100.887497 118.569473,107.895439 
	C118.545105,107.972321 118.261009,107.966896 118.015167,107.641350 
	C116.005646,103.490631 114.079109,99.698456 112.169350,95.582893 
	C111.391174,91.525703 110.596214,87.791901 110.090591,83.870171 
	C111.556892,83.110680 112.698608,82.182556 113.920128,82.061821 
	C115.308586,81.924576 117.059334,83.154518 118.145432,82.664963 
	C122.260452,80.810158 125.971870,77.893135 130.205536,76.509453 
	C135.829010,74.671532 140.489380,70.798271 147.083252,70.608284 
	C151.705734,70.475105 156.628647,67.232117 160.630630,64.302994 
	C162.939102,62.613400 163.683807,58.787270 165.132355,55.922783 
M171.790131,80.159706 
	C171.748886,79.738197 171.707642,79.316681 171.666412,78.895180 
	C171.373367,79.128471 170.843246,79.363182 170.844635,79.594704 
	C170.846558,79.915993 171.247513,80.234894 171.790131,80.159706 
M170.736618,75.184761 
	C170.622833,75.027817 170.509033,74.870872 170.395218,74.713936 
	C170.418167,74.932243 170.441101,75.150551 170.736618,75.184761 
z"/>
<path fill="#2EA2E6" opacity="1.000000" stroke="none" 
	d="
M195.941315,140.100647 
	C197.226822,144.169159 198.512344,148.237686 199.463898,152.698151 
	C196.621643,154.910065 194.113358,156.730026 192.074692,158.209244 
	C188.394989,160.645157 185.514053,163.425507 182.077972,164.657364 
	C173.069870,167.886780 163.817245,170.432999 154.667404,173.268768 
	C152.064423,174.075516 149.138474,176.059418 147.000778,175.406754 
	C145.446167,174.932129 144.944305,171.009415 143.953812,168.576721 
	C142.922852,171.084518 141.905365,173.559570 140.644501,175.779816 
	C138.380219,169.674088 136.359314,163.823166 134.690308,157.917755 
	C140.742065,155.336716 146.412277,152.740341 152.149567,150.301849 
	C158.816360,147.468307 165.371338,143.157547 172.285309,142.427246 
	C180.915024,141.515717 185.566956,136.335709 190.735580,131.205719 
	C189.145187,130.464294 187.572098,129.730942 186.130035,128.697601 
	C187.143173,126.942719 188.025284,125.487808 188.907410,124.032913 
	C190.336258,127.220253 191.765106,130.407593 193.533142,134.226349 
	C194.561996,136.605392 195.251663,138.353012 195.941315,140.100647 
M194.411057,152.482880 
	C194.411057,152.482880 194.522781,152.415878 194.411057,152.482880 
M191.588120,135.516968 
	C191.588120,135.516968 191.477402,135.583237 191.588120,135.516968 
z"/>
<path fill="#33B2EB" opacity="1.000000" stroke="none" 
	d="
M118.098160,107.999886 
	C118.261009,107.966896 118.545105,107.972321 118.569473,107.895439 
	C120.790459,100.887497 127.575081,101.943298 132.616867,99.906776 
	C137.321472,98.006454 141.946289,95.902634 146.684616,94.093765 
	C149.847763,92.886208 153.181763,92.130775 156.367020,90.973938 
	C157.337250,90.621552 158.220474,89.725311 158.877579,88.873077 
	C160.727341,86.474060 168.851227,84.229118 170.708084,86.286224 
	C173.459030,89.333855 174.767776,87.917900 176.585312,85.269432 
	C178.182480,88.796776 179.522827,92.549049 180.620026,96.924667 
	C179.553421,101.381477 178.869293,105.254349 177.804398,109.019531 
	C177.551575,109.913391 176.114075,110.836090 175.066147,111.081146 
	C169.005524,112.498360 162.870636,113.602684 156.824478,115.074226 
	C155.099106,115.494164 153.539154,116.711143 151.987289,117.695023 
	C150.297333,118.766426 148.861130,120.506981 147.042282,121.058136 
	C140.265518,123.111603 133.745010,121.714409 127.164818,118.663780 
	C127.467842,120.550667 127.743141,122.264877 128.169678,124.920883 
	C126.878090,123.414658 126.205032,122.629753 125.545372,121.860481 
	C124.760735,122.858856 124.083397,123.720695 123.436081,124.463837 
	C123.466087,124.345123 123.653168,124.187119 123.767380,123.781387 
	C122.904228,121.260689 121.926849,119.145706 120.975273,117.016586 
	C121.001068,117.002449 120.964241,117.048492 120.975494,116.652824 
	C120.482712,115.200256 119.978683,114.143349 119.270859,112.820801 
	C118.744102,111.036736 118.421135,109.518311 118.098160,107.999886 
z"/>
<path fill="#3BC7F3" opacity="1.000000" stroke="none" 
	d="
M147.950287,17.147480 
	C152.292816,17.383232 154.720947,19.619070 155.767365,23.890160 
	C156.826096,28.211493 158.377533,32.412102 159.344833,36.404751 
	C157.985443,35.431580 156.994385,34.719250 156.001404,33.617241 
	C155.613449,31.456448 155.227371,29.685335 154.608780,26.847486 
	C153.952499,29.618607 153.105698,31.268742 153.357651,32.729351 
	C153.565567,33.934689 155.073593,34.915764 156.317566,36.024864 
	C157.104523,36.411755 157.579407,36.769997 158.054291,37.128242 
	C158.054291,37.128242 158.062866,37.533134 157.798370,37.928577 
	C156.586945,38.764454 155.644775,39.558258 154.692032,39.571186 
	C152.755371,39.597466 150.715088,38.723846 148.896667,39.096146 
	C146.386063,39.610161 144.088379,41.078545 141.616196,41.881802 
	C133.842941,44.407478 125.121231,44.590446 119.024727,51.231987 
	C118.549789,51.749386 117.516052,51.919258 116.727875,51.957317 
	C110.877190,52.239841 104.360588,50.370647 100.400139,56.848709 
	C99.144821,54.043457 98.078217,51.520267 97.055527,48.606781 
	C96.301788,45.507862 95.504135,42.799244 95.018211,39.911888 
	C95.923447,37.711552 96.516945,35.689957 96.779678,34.795021 
	C102.906967,33.260811 108.489120,31.713287 114.143562,30.503689 
	C117.515739,29.782310 121.123169,29.949574 122.841164,25.979376 
	C123.098610,25.384439 124.565712,25.118246 125.500671,25.043596 
	C130.600998,24.636360 135.708084,24.304499 140.816803,24.016819 
	C142.680664,23.911861 144.555405,23.999916 146.217758,23.999916 
	C145.692734,21.418480 145.345764,19.712460 145.324402,18.003433 
	C146.416794,17.716112 147.183533,17.431795 147.950287,17.147480 
z"/>
<path fill="#2C9CE2" opacity="1.000000" stroke="none" 
	d="
M140.887878,176.034607 
	C141.905365,173.559570 142.922852,171.084518 143.953812,168.576721 
	C144.944305,171.009415 145.446167,174.932129 147.000778,175.406754 
	C149.138474,176.059418 152.064423,174.075516 154.667404,173.268768 
	C163.817245,170.432999 173.069870,167.886780 182.077972,164.657364 
	C185.514053,163.425507 188.394989,160.645157 192.074692,158.209244 
	C194.113358,156.730026 196.621643,154.910065 199.451035,153.047424 
	C201.847244,159.082352 203.922363,165.159973 205.995636,171.620697 
	C203.014679,173.010437 200.029984,174.000977 197.059830,175.033432 
	C196.148514,175.350220 195.029205,175.550735 194.426422,176.197281 
	C189.316772,181.677826 182.767410,182.987747 175.682800,183.051056 
	C174.283646,183.063553 172.431595,183.277023 171.568771,184.160187 
	C165.995087,189.865219 158.926712,190.588181 152.062103,190.812332 
	C150.953217,194.153442 149.841797,197.502197 148.355042,200.522110 
	C145.615753,192.140396 143.251816,184.087494 140.887878,176.034607 
z"/>
<path fill="#35ACE7" opacity="1.000000" stroke="none" 
	d="
M123.406067,124.582535 
	C124.083397,123.720695 124.760735,122.858856 125.545372,121.860481 
	C126.205032,122.629753 126.878090,123.414658 128.169678,124.920883 
	C127.743141,122.264877 127.467842,120.550667 127.164818,118.663780 
	C133.745010,121.714409 140.265518,123.111603 147.042282,121.058136 
	C148.861130,120.506981 150.297333,118.766426 151.987289,117.695023 
	C153.539154,116.711143 155.099106,115.494164 156.824478,115.074226 
	C162.870636,113.602684 169.005524,112.498360 175.066147,111.081146 
	C176.114075,110.836090 177.551575,109.913391 177.804398,109.019531 
	C178.869293,105.254349 179.553421,101.381477 180.631622,97.293381 
	C183.549744,104.719765 186.249954,112.388451 188.830933,120.097046 
	C189.161957,121.085693 188.873062,122.281883 188.889374,123.707413 
	C188.025284,125.487808 187.143173,126.942719 185.850525,128.445831 
	C185.048508,126.105118 184.035202,124.880608 181.225494,124.832275 
	C179.659576,124.805328 178.114883,123.106537 176.574860,122.138512 
	C175.154175,121.245476 173.752502,120.322166 172.342453,119.412201 
	C171.561417,121.028168 170.200272,122.615433 170.118607,124.266006 
	C169.941833,127.838173 168.809647,129.866394 164.937622,130.111359 
	C163.374329,130.210251 161.892822,131.663544 160.333405,131.747833 
	C157.790237,131.885254 155.217239,131.314804 152.650131,131.214615 
	C150.595901,131.134445 146.743713,131.199417 146.732208,131.386917 
	C146.403564,136.735397 143.219147,138.357269 138.479446,138.472504 
	C137.932220,138.485825 137.491211,139.725830 136.863937,140.224869 
	C135.442780,141.355438 133.936066,142.378510 132.712296,143.265457 
	C132.448029,145.485931 132.175659,147.774399 131.634705,149.842560 
	C130.609528,147.726608 129.852966,145.830963 128.830383,143.646225 
	C123.418907,142.977127 118.273430,142.597137 113.127960,142.217133 
	C110.318962,142.107544 107.509964,141.997971 104.799484,141.573822 
	C112.520134,141.259247 120.142265,141.259247 128.484848,141.259247 
	C126.651711,135.239944 125.028893,129.911240 123.406067,124.582535 
z"/>
<path fill="#37BDF0" opacity="1.000000" stroke="none" 
	d="
M165.110657,55.573540 
	C163.683807,58.787270 162.939102,62.613400 160.630630,64.302994 
	C156.628647,67.232117 151.705734,70.475105 147.083252,70.608284 
	C140.489380,70.798271 135.829010,74.671532 130.205536,76.509453 
	C125.971870,77.893135 122.260452,80.810158 118.145432,82.664963 
	C117.059334,83.154518 115.308586,81.924576 113.920128,82.061821 
	C112.698608,82.182556 111.556892,83.110680 109.857147,83.606552 
	C108.493614,80.705231 107.652878,77.879601 107.120644,74.860641 
	C108.598373,72.002594 109.767593,69.337875 110.491959,67.687035 
	C114.263145,66.394234 119.250427,66.215385 120.482597,63.973068 
	C124.076965,57.431995 129.984451,57.688187 135.617447,57.108597 
	C140.147659,56.642479 145.121246,57.964596 147.157303,52.037670 
	C147.287521,51.658604 147.879211,51.211765 148.280777,51.186485 
	C153.521194,50.856598 158.899979,48.127934 163.918625,51.999886 
	C164.308746,53.074688 164.698853,54.149490 165.110657,55.573540 
z"/>
<path fill="#39C2F0" opacity="1.000000" stroke="none" 
	d="
M164.005890,51.588093 
	C158.899979,48.127934 153.521194,50.856598 148.280777,51.186485 
	C147.879211,51.211765 147.287521,51.658604 147.157303,52.037670 
	C145.121246,57.964596 140.147659,56.642479 135.617447,57.108597 
	C129.984451,57.688187 124.076965,57.431995 120.482597,63.973068 
	C119.250427,66.215385 114.263145,66.394234 110.491959,67.687035 
	C109.767593,69.337875 108.598373,72.002594 106.903923,74.628387 
	C105.742447,73.000656 105.106194,71.411842 104.339737,69.449554 
	C103.002640,65.094315 101.795746,61.112541 100.588852,57.130772 
	C104.360588,50.370647 110.877190,52.239841 116.727875,51.957317 
	C117.516052,51.919258 118.549789,51.749386 119.024727,51.231987 
	C125.121231,44.590446 133.842941,44.407478 141.616196,41.881802 
	C144.088379,41.078545 146.386063,39.610161 148.896667,39.096146 
	C150.715088,38.723846 152.755371,39.597466 154.692032,39.571186 
	C155.644775,39.558258 156.586945,38.764454 157.825470,38.129242 
	C163.880661,40.646294 162.612350,46.531635 164.005890,51.588093 
z"/>
<path fill="#0E5398" opacity="1.000000" stroke="none" 
	d="
M105.006836,105.996376 
	C103.434631,104.824821 101.353775,103.966690 100.397896,102.415375 
	C98.505798,99.344666 97.575439,95.659882 95.561508,92.694923 
	C94.583328,91.254837 92.094444,90.230080 90.226357,90.123497 
	C85.264114,89.840370 81.643906,88.747437 77.194336,85.241562 
	C72.441246,81.496536 64.084267,82.262741 57.263885,81.325958 
	C56.731110,81.252785 55.910889,83.272408 54.726940,85.077667 
	C53.801689,82.869568 53.043785,81.060837 51.968216,79.044403 
	C54.172283,71.031189 56.694023,63.225681 59.792397,55.350170 
	C60.794819,55.989471 61.494865,56.659718 61.602333,57.414352 
	C62.357132,62.714512 64.442307,65.718269 70.695084,65.258675 
	C73.594070,65.045586 77.914452,66.600380 79.378166,68.815536 
	C81.267677,71.675072 83.166405,71.673988 85.794357,72.136673 
	C87.938057,72.514091 90.837387,73.578293 91.725967,75.236137 
	C95.395584,82.082565 98.302094,89.333710 101.790070,96.285080 
	C102.568878,97.837212 104.566399,98.777832 106.001831,100.391327 
	C105.669495,102.520569 105.338165,104.258476 105.006836,105.996376 
z"/>
<path fill="#104F93" opacity="1.000000" stroke="none" 
	d="
M106.002823,99.999985 
	C104.566399,98.777832 102.568878,97.837212 101.790070,96.285080 
	C98.302094,89.333710 95.395584,82.082565 91.725967,75.236137 
	C90.837387,73.578293 87.938057,72.514091 85.794357,72.136673 
	C83.166405,71.673988 81.267677,71.675072 79.378166,68.815536 
	C77.914452,66.600380 73.594070,65.045586 70.695084,65.258675 
	C64.442307,65.718269 62.357132,62.714512 61.602333,57.414352 
	C61.494865,56.659718 60.794819,55.989471 60.049423,55.079353 
	C61.273304,50.071819 62.816792,45.265102 64.971642,40.245560 
	C66.663139,40.086407 67.853600,40.463402 68.804695,40.138882 
	C73.411263,38.567074 78.034554,41.091404 79.835129,43.644920 
	C84.958694,50.910995 88.751228,59.140236 92.828445,67.112709 
	C97.032654,75.333496 100.955353,83.698242 105.000961,92.384705 
	C105.334740,95.179596 105.668785,97.589798 106.002823,99.999985 
z"/>
<path fill="#3CCAF4" opacity="1.000000" stroke="none" 
	d="
M144.998779,18.006437 
	C145.345764,19.712460 145.692734,21.418480 146.217758,23.999916 
	C144.555405,23.999916 142.680664,23.911861 140.816803,24.016819 
	C135.708084,24.304499 130.600998,24.636360 125.500671,25.043596 
	C124.565712,25.118246 123.098610,25.384439 122.841164,25.979376 
	C121.123169,29.949574 117.515739,29.782310 114.143562,30.503689 
	C108.489120,31.713287 102.906967,33.260811 96.779678,34.795021 
	C96.516945,35.689957 95.923447,37.711552 94.766525,39.656891 
	C91.847946,33.627728 89.492790,27.674820 87.003098,21.434919 
	C86.216545,20.108381 85.564529,19.068834 85.280136,18.021267 
	C86.754051,17.704325 87.860352,17.395405 88.966652,17.086487 
	C90.050354,17.032745 91.134056,16.979004 92.762741,17.213154 
	C93.864113,17.361132 94.420486,17.221216 94.976868,17.081301 
	C95.434204,17.036041 95.891548,16.990780 96.832695,17.227896 
	C97.870071,17.368246 98.423630,17.226221 98.977196,17.084198 
	C106.686066,17.034224 114.394928,16.984249 122.866982,17.288370 
	C127.743233,17.456846 131.856293,17.271229 135.969360,17.085609 
	C138.686127,17.052687 141.402908,17.019764 144.560608,17.277973 
	C145.001526,17.569107 144.998779,18.006437 144.998779,18.006437 
z"/>
<path fill="#104B8B" opacity="1.000000" stroke="none" 
	d="
M105.001221,92.000000 
	C100.955353,83.698242 97.032654,75.333496 92.828445,67.112709 
	C88.751228,59.140236 84.958694,50.910995 79.835129,43.644920 
	C78.034554,41.091404 73.411263,38.567074 68.804695,40.138882 
	C67.853600,40.463402 66.663139,40.086407 65.226547,39.989899 
	C66.676590,34.689014 68.483093,29.430969 70.633972,24.329193 
	C71.078636,25.083605 71.178925,25.681749 71.279205,26.279892 
	C71.511360,26.288380 71.743507,26.296869 71.975662,26.305357 
	C72.121216,25.143198 72.266777,23.981037 72.415047,22.797195 
	C78.594025,24.058731 78.552063,24.075035 80.962753,30.279388 
	C82.272255,33.649620 83.127693,37.446041 85.285950,40.185020 
	C89.856674,45.985607 91.716545,52.843769 94.385170,59.432873 
	C94.969170,60.874802 96.752823,61.830868 98.033928,63.396210 
	C98.722427,66.187317 99.360992,68.592903 99.999466,71.402321 
	C100.736244,74.098289 101.421906,76.408463 102.221901,78.678337 
	C103.440094,82.134766 104.737473,85.563286 106.000900,89.252594 
	C106.000580,89.501526 106.000000,89.999390 106.001366,90.330109 
	C106.007576,91.101524 106.012421,91.542236 105.763268,91.987915 
	C105.339928,91.995262 105.170578,91.997627 105.001221,92.000000 
z"/>
<path fill="#0B5DAB" opacity="1.000000" stroke="none" 
	d="
M39.011532,121.007942 
	C39.697353,125.065964 40.003288,129.248886 41.274197,133.114548 
	C41.721539,134.475189 44.464706,135.687881 46.276695,135.883469 
	C52.652191,136.571686 59.078556,136.788620 65.201241,137.166840 
	C65.678169,139.072601 66.033905,140.494095 66.736832,141.982422 
	C68.059273,145.434814 69.034523,148.820374 70.024002,152.582169 
	C63.121166,155.594498 58.792744,154.306808 54.639206,148.675186 
	C53.985725,147.789154 52.489895,147.171219 51.328751,147.072235 
	C45.417850,146.568436 39.488930,146.276108 33.678497,145.916687 
	C32.832455,144.507324 32.009560,143.136536 30.829540,141.556900 
	C31.735332,137.364914 32.998253,133.381760 34.848274,129.288956 
	C36.720478,129.975037 38.005581,130.770782 39.290688,131.566544 
	C39.560158,131.312027 39.829628,131.057510 40.099098,130.802994 
	C38.759449,128.874542 37.419800,126.946083 36.080151,125.017624 
	C36.068756,124.837952 36.057365,124.658287 36.172020,124.239914 
	C37.029808,123.123024 37.761551,122.244843 38.746300,121.182999 
	C38.999306,120.999321 39.011532,121.007942 39.011532,121.007942 
z"/>
<path fill="#0072CA" opacity="1.000000" stroke="none" 
	d="
M143.055145,206.139755 
	C143.033340,206.812912 143.011536,207.486053 142.970718,208.495499 
	C141.896500,208.877594 140.841293,208.923386 139.395233,208.899521 
	C134.536972,199.269424 130.881241,189.469757 128.831970,179.042435 
	C128.051117,175.069199 125.766365,171.408157 124.337692,167.541763 
	C122.155136,161.635132 119.851982,155.748138 118.176498,149.693283 
	C117.627586,147.709625 116.458313,143.904724 121.728088,144.334808 
	C129.209793,165.156799 136.132477,185.648270 143.055145,206.139755 
z"/>
<path fill="#104581" opacity="1.000000" stroke="none" 
	d="
M97.983994,63.010689 
	C96.752823,61.830868 94.969170,60.874802 94.385170,59.432873 
	C91.716545,52.843769 89.856674,45.985607 85.285950,40.185020 
	C83.127693,37.446041 82.272255,33.649620 80.962753,30.279388 
	C78.552063,24.075035 78.594025,24.058731 72.415047,22.797195 
	C72.266777,23.981037 72.121216,25.143198 71.975662,26.305357 
	C71.743507,26.296869 71.511360,26.288380 71.279205,26.279892 
	C71.178925,25.681749 71.078636,25.083605 70.961990,24.172733 
	C71.716156,18.606230 74.401955,16.976505 82.885124,17.246332 
	C83.941032,17.697422 84.426773,17.863356 84.912521,18.029289 
	C85.564529,19.068834 86.216545,20.108381 86.796051,21.766588 
	C84.148727,24.720640 84.520325,27.151808 86.287064,29.812349 
	C87.424385,31.525038 88.445648,33.370930 89.173309,35.288288 
	C90.892044,39.817120 92.404266,44.424332 94.045273,49.368534 
	C97.933273,53.415226 97.102631,58.464043 97.983994,63.010689 
z"/>
<path fill="#3596DB" opacity="1.000000" stroke="none" 
	d="
M205.381653,208.922668 
	C206.229050,207.592728 207.468704,206.325684 208.958054,204.803436 
	C209.593704,199.498459 210.301086,193.594788 211.036407,187.308685 
	C212.156784,189.856567 213.418137,192.736603 214.307785,195.727219 
	C216.403061,202.770599 213.193359,207.651596 205.381653,208.922668 
z"/>
<path fill="#F1FBF9" opacity="1.000000" stroke="none" 
	d="
M196.090958,139.773453 
	C195.251663,138.353012 194.561996,136.605392 193.787201,134.505722 
	C194.896759,134.099945 196.091446,134.046204 197.286133,133.992462 
	C196.937637,135.810394 196.589111,137.628326 196.090958,139.773453 
z"/>
<path fill="#0C5AA4" opacity="1.000000" stroke="none" 
	d="
M35.889618,125.308952 
	C37.419800,126.946083 38.759449,128.874542 40.099098,130.802994 
	C39.829628,131.057510 39.560158,131.312027 39.290688,131.566544 
	C38.005581,130.770782 36.720478,129.975037 35.121170,129.048981 
	C35.104343,127.812538 35.401718,126.706413 35.889618,125.308952 
z"/>
<path fill="#2CC5EF" opacity="1.000000" stroke="none" 
	d="
M135.512161,17.023647 
	C131.856293,17.271229 127.743233,17.456846 123.332520,17.364788 
	C127.041565,17.045300 131.048264,17.003490 135.512161,17.023647 
z"/>
<path fill="#0E569E" opacity="1.000000" stroke="none" 
	d="
M43.431480,102.972305 
	C43.225037,104.679970 42.757301,106.633293 41.907948,108.662689 
	C42.074284,106.898491 42.622234,105.058235 43.431480,102.972305 
z"/>
<path fill="#2AC2F3" opacity="1.000000" stroke="none" 
	d="
M158.290466,37.073753 
	C157.579407,36.769997 157.104523,36.411755 156.316376,35.693321 
	C156.003174,34.891064 156.003235,34.448994 156.003311,34.006927 
	C156.994385,34.719250 157.985443,35.431580 158.981598,36.505157 
	C158.986694,36.866409 158.526657,37.019268 158.290466,37.073753 
z"/>
<path fill="#2CC5EF" opacity="1.000000" stroke="none" 
	d="
M85.280136,18.021265 
	C84.426773,17.863356 83.941032,17.697422 83.320770,17.312462 
	C84.837440,17.045856 86.488632,16.998280 88.553238,17.018593 
	C87.860352,17.395405 86.754051,17.704325 85.280136,18.021265 
z"/>
<path fill="#0A61B0" opacity="1.000000" stroke="none" 
	d="
M79.935051,192.691132 
	C79.325928,192.674545 78.858154,192.335663 78.390381,191.996765 
	C78.704399,191.688354 79.018402,191.379929 79.617126,191.031525 
	C79.960030,191.450623 80.018219,191.909729 79.935051,192.691132 
z"/>
<path fill="#108ED9" opacity="1.000000" stroke="none" 
	d="
M184.424683,208.944626 
	C185.199707,208.721680 186.364304,208.554001 187.740448,208.629333 
	C186.906097,208.914856 185.860168,208.957367 184.424683,208.944626 
z"/>
<path fill="#0B5DAB" opacity="1.000000" stroke="none" 
	d="
M28.601391,146.826630 
	C28.709652,147.575668 28.542698,148.569901 28.033751,149.743469 
	C27.903231,148.972488 28.114700,148.022141 28.601391,146.826630 
z"/>
<path fill="#2CC5EF" opacity="1.000000" stroke="none" 
	d="
M145.324402,18.003433 
	C144.998779,18.006437 145.001526,17.569107 145.007874,17.350559 
	C145.750290,17.095058 146.486359,17.058105 147.586365,17.084316 
	C147.183533,17.431795 146.416794,17.716112 145.324402,18.003433 
z"/>
<path fill="#2CC5EF" opacity="1.000000" stroke="none" 
	d="
M94.652992,17.020950 
	C94.420486,17.221216 93.864113,17.361132 93.164459,17.286665 
	C93.457161,17.035057 93.893143,16.997829 94.652992,17.020950 
z"/>
<path fill="#0B5DAB" opacity="1.000000" stroke="none" 
	d="
M30.224922,141.965378 
	C30.407267,142.374176 30.392115,142.996841 30.066095,143.765671 
	C29.845961,143.334305 29.936693,142.756775 30.224922,141.965378 
z"/>
<path fill="#0B5DAB" opacity="1.000000" stroke="none" 
	d="
M29.582794,144.001526 
	C29.730610,144.411087 29.634064,145.011459 29.291412,145.804733 
	C29.143017,145.395859 29.240725,144.794113 29.582794,144.001526 
z"/>
<path fill="#2CC5EF" opacity="1.000000" stroke="none" 
	d="
M98.653847,17.025724 
	C98.423630,17.226221 97.870071,17.368246 97.171799,17.298790 
	C97.461563,17.047287 97.896034,17.007269 98.653847,17.025724 
z"/>
<path fill="#0E569E" opacity="1.000000" stroke="none" 
	d="
M41.390457,108.900589 
	C41.521461,109.335640 41.425034,109.981392 41.011971,110.769730 
	C40.851234,110.311966 41.007130,109.711632 41.390457,108.900589 
z"/>
<path fill="#108ED9" opacity="1.000000" stroke="none" 
	d="
M151.264313,208.929047 
	C151.286926,208.775116 151.543961,208.672607 151.884323,208.723969 
	C151.967651,208.877869 151.498749,208.980438 151.264313,208.929047 
z"/>
<path fill="#3596DB" opacity="1.000000" stroke="none" 
	d="
M211.093994,186.708328 
	C210.927124,186.709412 210.767502,186.467270 210.759430,186.121155 
	C210.910995,186.017166 211.101227,186.465103 211.093994,186.708328 
z"/>
<path fill="#0866B7" opacity="1.000000" stroke="none" 
	d="
M75.550026,185.467865 
	C75.583069,185.523346 75.516983,185.412399 75.550026,185.467865 
z"/>
<path fill="#F9FCFC" opacity="1.000000" stroke="none" 
	d="
M123.436081,124.463829 
	C125.028893,129.911240 126.651711,135.239944 128.484848,141.259247 
	C120.142265,141.259247 112.520134,141.259247 104.445618,141.383301 
	C103.197372,141.497620 102.401527,141.487885 100.899094,141.386597 
	C99.480522,141.311295 98.768517,141.327530 98.056519,141.343781 
	C98.056519,141.343765 97.993996,141.098801 97.957825,140.858047 
	C97.921661,140.617294 97.780052,140.310425 97.780045,140.310425 
	C98.898697,136.888535 100.017349,133.466660 101.135468,129.670074 
	C102.806534,124.615685 104.478119,119.935974 106.435089,114.619209 
	C107.185196,112.021835 107.649910,110.061523 108.430496,107.921333 
	C109.784805,104.164474 110.823235,100.587486 111.960258,96.741257 
	C112.090096,96.283440 112.121330,96.094856 112.152565,95.906273 
	C114.079109,99.698456 116.005646,103.490631 118.015167,107.641350 
	C118.421135,109.518311 118.744102,111.036736 119.360657,113.173172 
	C120.090897,114.876953 120.527573,115.962723 120.964241,117.048492 
	C120.964241,117.048492 121.001068,117.002449 120.980118,117.386734 
	C121.857170,119.909729 122.755165,122.048424 123.653168,124.187119 
	C123.653168,124.187119 123.466087,124.345123 123.436081,124.463829 
z"/>
<path fill="#016CBF" opacity="1.000000" stroke="none" 
	d="
M143.405807,206.070862 
	C136.132477,185.648270 129.209793,165.156799 122.142532,144.331955 
	C122.160309,143.970093 122.372177,143.995316 122.474129,143.901321 
	C122.656998,143.732727 122.773796,143.492462 122.918213,143.282150 
	C119.851936,143.090134 116.785652,142.898117 113.423668,142.461609 
	C118.273430,142.597137 123.418907,142.977127 128.509750,143.814087 
	C128.012405,145.101639 127.030045,146.082764 127.213074,146.738724 
	C128.571289,151.606430 130.055267,156.446030 131.703522,161.224152 
	C134.038010,167.991501 136.514648,174.710617 138.999191,181.424942 
	C139.895737,183.847855 141.147659,186.145157 141.960754,188.591736 
	C143.441788,193.048035 144.716156,197.572998 146.076752,202.069321 
	C145.303314,203.380203 144.529877,204.691086 143.405807,206.070862 
z"/>
<path fill="#0B5DAB" opacity="1.000000" stroke="none" 
	d="
M68.387024,141.993286 
	C69.524292,141.488434 71.047966,140.982071 72.787094,140.740799 
	C71.592842,141.334518 70.183128,141.663147 68.387024,141.993286 
z"/>
<path fill="#35ACE7" opacity="1.000000" stroke="none" 
	d="
M98.205315,141.556549 
	C98.768517,141.327530 99.480522,141.311295 100.506683,141.459961 
	C99.998604,141.673019 99.176353,141.721176 98.205315,141.556549 
z"/>
<path fill="#35ACE7" opacity="1.000000" stroke="none" 
	d="
M97.615959,140.357544 
	C97.780052,140.310425 97.921661,140.617294 97.863029,140.774414 
	C97.804398,140.931549 97.480324,141.015839 97.314041,141.012970 
	C97.169708,140.768265 97.271080,140.566452 97.615959,140.357544 
z"/>
<path fill="#0B5DAB" opacity="1.000000" stroke="none" 
	d="
M38.993603,120.993515 
	C39.116283,120.559174 39.244667,120.130638 39.373047,119.702103 
	C39.388477,120.054199 39.403904,120.406296 39.215431,120.883163 
	C39.011532,121.007942 38.999306,120.999321 38.993603,120.993515 
z"/>
<path fill="#0A61B0" opacity="1.000000" stroke="none" 
	d="
M21.761623,183.915283 
	C20.997431,184.305756 20.316847,184.387573 19.636261,184.469406 
	C19.729921,183.922455 19.823584,183.375504 19.917248,182.828552 
	C20.559910,183.087906 21.202568,183.347275 21.761623,183.915283 
z"/>
<path fill="#0263AC" opacity="1.000000" stroke="none" 
	d="
M146.325287,201.950897 
	C144.716156,197.572998 143.441788,193.048035 141.960754,188.591736 
	C141.147659,186.145157 139.895737,183.847855 138.999191,181.424942 
	C136.514648,174.710617 134.038010,167.991501 131.703522,161.224152 
	C130.055267,156.446030 128.571289,151.606430 127.213074,146.738724 
	C127.030045,146.082764 128.012405,145.101639 128.775757,144.103210 
	C129.852966,145.830963 130.609528,147.726608 131.689301,150.215820 
	C132.787796,153.197006 133.563095,155.584610 134.338409,157.972229 
	C136.359314,163.823166 138.380219,169.674088 140.644501,175.779816 
	C143.251816,184.087494 145.615753,192.140396 147.986954,200.596100 
	C147.520752,201.276764 147.047287,201.554626 146.325287,201.950897 
z"/>
<path fill="#104E8B" opacity="1.000000" stroke="none" 
	d="
M111.861656,97.010498 
	C110.823235,100.587486 109.784805,104.164474 108.397720,107.882599 
	C108.049065,108.023727 107.969048,107.961266 107.983383,107.722397 
	C107.997726,107.483528 107.997612,107.000954 107.982437,106.747627 
	C107.809593,106.225700 107.651932,105.957108 107.494263,105.688507 
	C107.329567,106.125549 107.164871,106.562592 106.999985,107.249611 
	C106.999802,107.499588 106.998077,107.999542 106.749535,107.998276 
	C106.500992,107.997002 106.003906,107.998428 106.003906,107.998428 
	C105.834190,107.443405 105.664474,106.888382 105.250793,106.164871 
	C105.338165,104.258476 105.669495,102.520569 106.001831,100.391327 
	C105.668785,97.589798 105.334740,95.179596 105.000961,92.384705 
	C105.170578,91.997627 105.339928,91.995262 106.112289,92.030045 
	C108.430756,93.714966 110.146202,95.362732 111.861656,97.010498 
z"/>
<path fill="#0E5398" opacity="1.000000" stroke="none" 
	d="
M105.760429,108.183876 
	C106.003906,107.998428 106.500992,107.997002 106.992691,107.997147 
	C107.484383,107.997292 107.969048,107.961266 107.969048,107.961266 
	C107.969048,107.961266 108.049065,108.023727 108.081848,108.062469 
	C107.649910,110.061523 107.185196,112.021835 106.451157,114.257988 
	C105.960213,112.478989 105.738579,110.424156 105.760429,108.183876 
z"/>
<path fill="#0D4781" opacity="1.000000" stroke="none" 
	d="
M111.960258,96.741257 
	C110.146202,95.362732 108.430756,93.714966 106.366287,92.025070 
	C106.012421,91.542236 106.007576,91.101524 106.251907,90.313354 
	C106.766525,89.809471 107.031960,89.653053 107.297394,89.496628 
	C106.865334,89.332314 106.433281,89.167984 106.001221,89.003662 
	C104.737473,85.563286 103.440094,82.134766 102.221901,78.678337 
	C101.421906,76.408463 100.736244,74.098289 100.023178,71.133972 
	C101.521294,70.248856 102.995621,70.035942 104.469948,69.823029 
	C105.106194,71.411842 105.742447,73.000656 106.595421,74.821724 
	C107.652878,77.879601 108.493614,80.705231 109.567802,83.794472 
	C110.596214,87.791901 111.391174,91.525703 112.169350,95.582893 
	C112.121330,96.094856 112.090096,96.283440 111.960258,96.741257 
z"/>
<path fill="#33B2EB" opacity="1.000000" stroke="none" 
	d="
M171.633881,80.357254 
	C171.247513,80.234894 170.846558,79.915993 170.844635,79.594704 
	C170.843246,79.363182 171.373367,79.128471 171.666412,78.895172 
	C171.707642,79.316681 171.748886,79.738197 171.633881,80.357254 
z"/>
<path fill="#33B2EB" opacity="1.000000" stroke="none" 
	d="
M170.600327,75.276810 
	C170.441101,75.150551 170.418167,74.932243 170.395233,74.713928 
	C170.509033,74.870872 170.622833,75.027817 170.600327,75.276810 
z"/>
<path fill="#2FA7E7" opacity="1.000000" stroke="none" 
	d="
M134.690308,157.917755 
	C133.563095,155.584610 132.787796,153.197006 131.957886,150.436127 
	C132.175659,147.774399 132.448029,145.485931 132.712296,143.265457 
	C133.936066,142.378510 135.442780,141.355438 136.863937,140.224869 
	C137.491211,139.725830 137.932220,138.485825 138.479446,138.472504 
	C143.219147,138.357269 146.403564,136.735397 146.732208,131.386917 
	C146.743713,131.199417 150.595901,131.134445 152.650131,131.214615 
	C155.217239,131.314804 157.790237,131.885254 160.333405,131.747833 
	C161.892822,131.663544 163.374329,130.210251 164.937622,130.111359 
	C168.809647,129.866394 169.941833,127.838173 170.118607,124.266006 
	C170.200272,122.615433 171.561417,121.028168 172.342453,119.412201 
	C173.752502,120.322166 175.154175,121.245476 176.574860,122.138512 
	C178.114883,123.106537 179.659576,124.805328 181.225494,124.832275 
	C184.035202,124.880608 185.048508,126.105118 185.719513,128.745819 
	C187.572098,129.730942 189.145187,130.464294 190.735580,131.205719 
	C185.566956,136.335709 180.915024,141.515717 172.285309,142.427246 
	C165.371338,143.157547 158.816360,147.468307 152.149567,150.301849 
	C146.412277,152.740341 140.742065,155.336716 134.690308,157.917755 
z"/>
<path fill="#2C9CE2" opacity="1.000000" stroke="none" 
	d="
M194.466919,152.449371 
	C194.522781,152.415878 194.411057,152.482880 194.466919,152.449371 
z"/>
<path fill="#2FA7E7" opacity="1.000000" stroke="none" 
	d="
M191.532761,135.550110 
	C191.477402,135.583237 191.588120,135.516968 191.532761,135.550110 
z"/>
<path fill="#35ACE7" opacity="1.000000" stroke="none" 
	d="
M123.767380,123.781387 
	C122.755165,122.048424 121.857170,119.909729 120.954330,117.400879 
	C121.926849,119.145706 122.904228,121.260689 123.767380,123.781387 
z"/>
<path fill="#35ACE7" opacity="1.000000" stroke="none" 
	d="
M120.975494,116.652824 
	C120.527573,115.962723 120.090897,114.876953 119.564438,113.438812 
	C119.978683,114.143349 120.482712,115.200256 120.975494,116.652824 
z"/>
<path fill="#0C3F74" opacity="1.000000" stroke="none" 
	d="
M94.000000,48.999847 
	C92.404266,44.424332 90.892044,39.817120 89.173309,35.288288 
	C88.445648,33.370930 87.424385,31.525038 86.287064,29.812349 
	C84.520325,27.151808 84.148727,24.720640 86.930588,22.053581 
	C89.492790,27.674820 91.847946,33.627728 94.454788,39.835629 
	C95.504135,42.799244 96.301788,45.507862 96.679024,48.608295 
	C95.505737,49.000019 94.752869,48.999935 94.000000,48.999847 
z"/>
<path fill="#0B4179" opacity="1.000000" stroke="none" 
	d="
M94.045273,49.368534 
	C94.752869,48.999935 95.505737,49.000019 96.635117,48.998592 
	C98.078217,51.520267 99.144821,54.043457 100.400139,56.848709 
	C101.795746,61.112541 103.002640,65.094315 104.339737,69.449554 
	C102.995621,70.035942 101.521294,70.248856 100.023254,70.730133 
	C99.360992,68.592903 98.722427,66.187317 98.033928,63.396210 
	C97.102631,58.464043 97.933273,53.415226 94.045273,49.368534 
z"/>
<path fill="#39C2F0" opacity="1.000000" stroke="none" 
	d="
M156.001404,33.617245 
	C156.003235,34.448994 156.003174,34.891064 156.004303,35.664673 
	C155.073593,34.915764 153.565567,33.934689 153.357651,32.729351 
	C153.105698,31.268742 153.952499,29.618607 154.608780,26.847486 
	C155.227371,29.685335 155.613449,31.456448 156.001404,33.617245 
z"/>
<path fill="#104E8B" opacity="1.000000" stroke="none" 
	d="
M106.000900,89.252594 
	C106.433281,89.167984 106.865334,89.332314 107.297394,89.496628 
	C107.031960,89.653053 106.766525,89.809471 106.250549,89.982635 
	C106.000000,89.999390 106.000580,89.501526 106.000900,89.252594 
z"/>
<path fill="#0E5398" opacity="1.000000" stroke="none" 
	d="
M107.000183,106.999634 
	C107.164871,106.562592 107.329567,106.125549 107.494263,105.688507 
	C107.651932,105.957108 107.809593,106.225700 107.733185,106.747040 
	C107.499100,106.999771 107.000183,106.999634 107.000183,106.999634 
z"/>
<path fill="#0E569E" opacity="1.000000" stroke="none" 
	d="
M106.999992,107.249611 
	C107.000183,106.999634 107.499100,106.999771 107.748352,107.000366 
	C107.997612,107.000954 107.997726,107.483528 107.983383,107.722397 
	C107.969048,107.961266 107.484383,107.997292 107.241226,107.998413 
	C106.998077,107.999542 106.999802,107.499588 106.999992,107.249611 
z"/>
</svg>
  ),
  GCP: ({ className }) => (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="100%" viewBox="0 0 512 512" enable-background="new 0 0 512 512">
<path fill="#4285F4" opacity="1.000000" stroke="none" 
	d="
M326.000000,513.000000 
	C217.359726,513.000000 109.219444,513.000000 1.039583,513.000000 
	C1.039583,342.401367 1.039583,171.802719 1.039583,1.102037 
	C171.556946,1.102037 342.113983,1.102037 512.835510,1.102037 
	C512.835510,171.666534 512.835510,342.333252 512.835510,513.000000 
	C450.802704,513.000000 388.651337,513.000000 326.000000,513.000000 
M160.376419,406.738129 
	C192.584381,406.769562 224.792343,406.800995 257.928772,406.969086 
	C283.736359,406.979309 309.545746,407.169647 335.350586,406.908264 
	C345.221008,406.808289 355.153534,406.214966 364.930817,404.901672 
	C385.899628,402.085114 404.255463,392.949921 420.106171,379.219543 
	C433.632111,367.502991 444.223297,353.497040 451.188995,336.688965 
	C460.627106,313.915039 462.294067,290.674316 457.395477,266.761414 
	C454.978455,254.962494 450.207123,244.021027 444.206146,233.677170 
	C437.485199,222.092270 428.911560,212.013885 418.338593,203.647064 
	C413.210693,199.589172 408.083435,195.931290 405.963165,188.660522 
	C403.307190,179.552841 399.037689,170.802002 394.597107,162.353088 
	C386.405334,146.766968 375.246613,133.400192 361.677368,121.226883 
	C348.762604,109.775230 334.454803,100.520844 318.500977,93.865791 
	C302.129486,87.036499 285.238464,82.391083 267.383026,82.024818 
	C259.863403,81.870575 252.322403,81.700691 244.819824,82.090385 
	C238.298080,82.429123 231.686813,82.978119 225.342819,84.429466 
	C208.645035,88.249519 192.599030,93.803787 177.682373,102.593880 
	C161.216980,112.296631 146.667206,124.230209 134.734055,139.007828 
	C120.917908,156.117279 110.409714,175.163055 104.355682,196.963501 
	C38.695961,241.352066 36.790611,336.950439 100.619484,384.199524 
	C118.141769,397.535034 137.748520,405.206268 160.376419,406.738129 
z"/>
<path fill="#1976D2" opacity="1.000000" stroke="none" 
	d="
M361.979767,121.811752 
	C375.246613,133.400192 386.405334,146.766968 394.597107,162.353088 
	C399.037689,170.802002 403.307190,179.552841 405.963165,188.660522 
	C408.083435,195.931290 413.210693,199.589172 418.338593,203.647064 
	C428.911560,212.013885 437.485199,222.092270 444.206146,233.677170 
	C450.207123,244.021027 454.978455,254.962494 457.395477,266.761414 
	C462.294067,290.674316 460.627106,313.915039 451.188995,336.688965 
	C444.223297,353.497040 433.632111,367.502991 420.106171,379.219543 
	C404.255463,392.949921 385.899628,402.085114 364.930817,404.901672 
	C355.153534,406.214966 345.221008,406.808289 335.350586,406.908264 
	C309.545746,407.169647 283.736359,406.979309 257.439423,406.683594 
	C256.950073,406.398071 256.838318,405.975311 256.893921,405.511169 
	C256.966705,382.420288 256.983887,359.793518 257.465759,337.098602 
	C287.850861,336.686768 317.771027,336.315399 347.691833,336.012482 
	C360.341919,335.884430 370.151550,330.084564 378.475189,321.070129 
	C396.837738,301.183563 392.192841,270.802155 370.104980,255.511261 
	C362.368073,250.155182 353.841522,247.298813 344.000214,247.953033 
	C344.000214,243.927231 343.965729,240.458832 344.006104,236.991287 
	C344.201202,220.230408 339.427216,204.888290 329.689301,191.398315 
	C324.465118,184.161255 317.931458,177.869476 312.294067,170.999405 
	C329.059540,154.502350 345.519653,138.157043 361.979767,121.811752 
z"/>
<path fill="#FFC107" opacity="1.000000" stroke="none" 
	d="
M100.029518,383.847290 
	C36.790611,336.950439 38.695961,241.352066 105.023941,196.774292 
	C126.782333,183.238327 149.725021,176.707184 174.735062,178.052460 
	C180.842514,178.380981 186.921799,179.233521 193.415054,179.912903 
	C206.861938,182.960388 219.431183,187.605331 230.246597,195.315109 
	C239.965256,202.243057 248.521622,210.836060 257.357300,218.948761 
	C260.327820,221.676239 260.347870,224.468750 256.873871,227.827896 
	C242.268066,241.950836 228.039322,256.463623 213.661652,270.822784 
	C212.447693,272.035187 211.153259,273.166992 210.681931,273.605408 
	C204.835602,267.395050 200.152527,260.814911 194.000061,256.189087 
	C176.304443,242.884384 151.582916,245.678406 136.731430,261.634552 
	C123.985481,275.328583 120.419067,294.006989 128.603333,311.110504 
	C133.376389,321.085175 141.486801,327.718048 150.709320,333.004883 
	C133.615265,350.058380 116.822395,366.952850 100.029518,383.847290 
z"/>
<path fill="#FF3D00" opacity="1.000000" stroke="none" 
	d="
M193.014023,179.845154 
	C186.921799,179.233521 180.842514,178.380981 174.735062,178.052460 
	C149.725021,176.707184 126.782333,183.238327 105.374115,196.661896 
	C110.409714,175.163055 120.917908,156.117279 134.734055,139.007828 
	C146.667206,124.230209 161.216980,112.296631 177.682373,102.593880 
	C192.599030,93.803787 208.645035,88.249519 225.342819,84.429466 
	C231.686813,82.978119 238.298080,82.429123 244.819824,82.090385 
	C252.322403,81.700691 259.863403,81.870575 267.383026,82.024818 
	C285.238464,82.391083 302.129486,87.036499 318.500977,93.865791 
	C334.454803,100.520844 348.762604,109.775230 361.828552,121.519318 
	C345.519653,138.157043 329.059540,154.502350 311.979095,170.847565 
	C291.217743,155.209091 268.602478,149.055405 243.307709,152.972488 
	C223.386032,156.057510 206.729630,165.181381 193.014023,179.845154 
z"/>
<path fill="#4CAF50" opacity="1.000000" stroke="none" 
	d="
M100.324501,384.023407 
	C116.822395,366.952850 133.615265,350.058380 151.090851,333.059753 
	C158.732666,337.002899 166.341827,337.095184 174.116943,337.064545 
	C201.744415,336.955536 229.372940,337.111298 257.001068,337.166809 
	C256.983887,359.793518 256.966705,382.420288 256.437195,405.517761 
	C223.910873,405.995239 191.896942,406.002014 159.883011,406.008789 
	C137.748520,405.206268 118.141769,397.535034 100.324501,384.023407 
z"/>
<path fill="#5BB57C" opacity="1.000000" stroke="none" 
	d="
M160.129715,406.373474 
	C191.896942,406.002014 223.910873,405.995239 256.381561,405.981873 
	C256.838318,405.975311 256.950073,406.398071 256.975189,406.615234 
	C224.792343,406.800995 192.584381,406.769562 160.129715,406.373474 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M257.465759,337.098633 
	C229.372940,337.111298 201.744415,336.955536 174.116943,337.064545 
	C166.341827,337.095184 158.732666,337.002899 151.392029,332.900696 
	C141.486801,327.718048 133.376389,321.085175 128.603333,311.110504 
	C120.419067,294.006989 123.985481,275.328583 136.731430,261.634552 
	C151.582916,245.678406 176.304443,242.884384 194.000061,256.189087 
	C200.152527,260.814911 204.835602,267.395050 210.681931,273.605408 
	C211.153259,273.166992 212.447693,272.035187 213.661652,270.822784 
	C228.039322,256.463623 242.268066,241.950836 256.873871,227.827896 
	C260.347870,224.468750 260.327820,221.676239 257.357300,218.948761 
	C248.521622,210.836060 239.965256,202.243057 230.246597,195.315109 
	C219.431183,187.605331 206.861938,182.960388 193.415054,179.912903 
	C206.729630,165.181381 223.386032,156.057510 243.307709,152.972488 
	C268.602478,149.055405 291.217743,155.209091 311.673706,170.999329 
	C317.931458,177.869476 324.465118,184.161255 329.689301,191.398315 
	C339.427216,204.888290 344.201202,220.230408 344.006104,236.991287 
	C343.965729,240.458832 344.000214,243.927231 344.000214,247.953033 
	C353.841522,247.298813 362.368073,250.155182 370.104980,255.511261 
	C392.192841,270.802155 396.837738,301.183563 378.475189,321.070129 
	C370.151550,330.084564 360.341919,335.884430 347.691833,336.012482 
	C317.771027,336.315399 287.850861,336.686768 257.465759,337.098633 
z"/>
</svg>
  ),
  Vercel: ({ className }) => (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" fill="#000" />
      <path d="M128 32L224 208H32L128 32z" fill="#FFF" />
    </svg>
  ),
  Docker: ({ className }) => (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="100%" viewBox="0 0 264 191" enable-background="new 0 0 264 191">
<path fill="#0291E2" opacity="1.000000" stroke="none" 
	d="
M1.000000,116.000000 
	C1.000000,109.978844 1.000000,103.957695 1.294919,97.287582 
	C3.683195,91.759155 7.876140,91.386200 12.414107,91.389168 
	C68.244781,91.425758 124.075493,91.422119 179.906189,91.402061 
	C187.580902,91.399307 195.098816,90.554970 202.040909,86.841949 
	C193.964050,69.007317 196.129044,50.288239 207.542587,38.563431 
	C219.598770,45.110092 227.031052,55.158699 229.801712,68.728630 
	C242.490372,66.922005 254.417328,67.371445 265.000000,75.000000 
	C265.000000,75.000000 265.000000,75.500000 264.716949,75.962723 
	C259.203552,90.911903 245.656555,100.682625 229.537354,100.878998 
	C225.104431,100.932999 223.376602,102.412224 221.785278,106.374779 
	C201.585876,156.673523 164.834778,185.177078 110.497658,190.314835 
	C106.316048,190.710236 102.165161,191.430649 98.000000,192.000000 
	C93.975456,192.000000 89.950912,192.000000 85.268707,191.629166 
	C78.184128,190.506866 71.706245,190.049454 65.340233,188.946411 
	C49.047474,186.123398 33.736076,181.138931 22.396812,168.029129 
	C13.497886,157.740692 8.321018,145.640091 4.991609,132.635086 
	C3.577503,127.111458 2.325612,121.546288 1.000000,116.000000 
z"/>
<path fill="#FDFEFF" opacity="1.000000" stroke="none" 
	d="
M265.000000,74.531342 
	C254.417328,67.371445 242.490372,66.922005 229.801712,68.728630 
	C227.031052,55.158699 219.598770,45.110092 207.542587,38.563431 
	C196.129044,50.288239 193.964050,69.007317 202.040909,86.841949 
	C195.098816,90.554970 187.580902,91.399307 179.906189,91.402061 
	C124.075493,91.422119 68.244781,91.425758 12.414107,91.389168 
	C7.876140,91.386200 3.683195,91.759155 1.294919,96.819313 
	C1.000000,65.064339 1.000000,33.128674 1.000000,1.000000 
	C41.354023,1.000000 81.708351,1.000000 122.358719,1.342668 
	C121.852921,2.590966 120.384789,3.476239 120.356400,4.405497 
	C120.158394,10.886720 120.091530,17.385958 120.436424,23.855232 
	C120.490547,24.870411 122.813263,26.524147 124.144447,26.582977 
	C130.619446,26.869123 137.115967,26.617556 143.600769,26.752857 
	C146.998001,26.823736 147.875122,25.161945 147.804337,22.127602 
	C147.680237,16.807322 147.996506,11.466917 147.642609,6.167377 
	C147.524185,4.394002 145.923264,2.719628 145.000000,1.000000 
	C184.909607,1.000000 224.819214,1.000000 265.000000,1.000000 
	C265.000000,25.353558 265.000000,49.708118 265.000000,74.531342 
M55.410126,41.597778 
	C55.413319,45.247715 55.519993,48.901405 55.387718,52.546429 
	C55.277306,55.589088 56.630367,56.650276 59.561699,56.597404 
	C65.864082,56.483719 72.171532,56.479530 78.473732,56.598602 
	C81.609314,56.657845 83.013939,55.548420 82.906281,52.251499 
	C82.733101,46.948158 82.712166,41.629341 82.914337,36.328026 
	C83.043770,32.933735 81.940887,31.481049 78.387291,31.651125 
	C73.752556,31.872940 69.098465,31.653177 64.453880,31.713917 
	C54.351757,31.846025 55.522015,30.166588 55.410126,41.597778 
M120.225166,50.221119 
	C120.458420,52.974342 119.083076,56.632523 124.083290,56.576336 
	C130.725204,56.501694 137.369049,56.511074 144.011124,56.577110 
	C146.805115,56.604885 147.836044,55.310135 147.795364,52.617363 
	C147.710037,46.972301 147.685638,41.323311 147.802902,35.679398 
	C147.866013,32.641094 146.575958,31.600643 143.616486,31.664520 
	C137.142792,31.804253 130.661636,31.811531 124.188324,31.663273 
	C121.083908,31.592173 120.103325,32.919151 120.191750,35.834846 
	C120.327599,40.314575 120.225983,44.801506 120.225166,50.221119 
M49.879601,85.676491 
	C50.153320,78.420410 50.564972,71.163330 50.512550,63.909607 
	C50.506523,63.076111 47.938354,61.609138 46.512142,61.550282 
	C40.193573,61.289513 33.855873,61.537582 27.529888,61.392509 
	C24.240807,61.317081 23.125704,62.673920 23.229921,65.867393 
	C23.403673,71.191635 23.387701,76.528915 23.234056,81.854424 
	C23.142519,85.027176 24.219196,86.349068 27.552725,86.243835 
	C34.706760,86.018028 41.870426,86.097382 49.879601,85.676491 
M69.497009,86.190125 
	C72.658546,86.188934 75.824043,86.089401 78.980423,86.216393 
	C81.702972,86.325935 82.945396,85.329903 82.889801,82.478073 
	C82.776314,76.656418 83.033569,70.821129 82.712151,65.015038 
	C82.643761,63.779518 80.799118,61.668995 79.701317,61.621716 
	C72.559822,61.314117 65.395203,61.359810 58.247814,61.590031 
	C57.286907,61.620979 55.603756,63.313026 55.572594,64.278412 
	C55.343117,71.387863 55.448566,78.508118 55.448566,86.190125 
	C60.264210,86.190125 64.385635,86.190125 69.497009,86.190125 
M144.172668,86.184875 
	C147.183105,86.467834 147.811981,84.691803 147.787201,82.167435 
	C147.733261,76.671234 147.692078,71.172531 147.803452,65.678047 
	C147.862259,62.776764 146.842819,61.363190 143.771576,61.410259 
	C137.276978,61.509789 130.778595,61.510651 124.284157,61.404942 
	C121.258492,61.355694 120.128525,62.647812 120.194969,65.605347 
	C120.314651,70.932816 120.370789,76.270187 120.175163,81.593193 
	C120.049812,85.004089 121.179184,86.382156 124.739525,86.251373 
	C130.894241,86.025284 137.063248,86.188744 144.172668,86.184875 
M94.620697,31.718529 
	C92.121971,32.304417 88.053581,29.947491 88.058807,35.225685 
	C88.064743,41.220249 87.920418,47.221340 88.192230,53.203648 
	C88.243790,54.338402 89.903580,56.317184 90.871696,56.348495 
	C98.813873,56.605354 106.767982,56.493401 115.296707,56.493401 
	C115.296707,48.711517 115.436493,41.579464 115.131889,34.466438 
	C115.090645,33.503105 112.860466,31.920469 111.574867,31.848005 
	C106.263138,31.548611 100.924873,31.720043 94.620697,31.718529 
M94.765152,61.449181 
	C88.058235,61.499725 88.057983,61.499725 88.058517,68.367218 
	C88.058884,73.025063 88.154190,77.685516 88.025200,82.339760 
	C87.949142,85.083733 88.939156,86.259766 91.773315,86.211334 
	C98.425453,86.097656 105.083687,86.058144 111.733574,86.224098 
	C114.710533,86.298386 115.413528,84.996544 115.355988,82.340019 
	C115.233551,76.686707 115.191719,71.025024 115.366562,65.374496 
	C115.464531,62.208370 114.038620,61.353672 111.175980,61.419617 
	C106.021843,61.538349 100.862953,61.450813 94.765152,61.449181 
M180.059402,67.711777 
	C180.059402,65.909340 180.059402,64.106911 180.059402,61.879124 
	C170.875076,61.879124 162.162933,61.879124 152.903809,61.879124 
	C152.903809,69.226654 152.783691,76.341034 153.047562,83.441147 
	C153.082687,84.386581 155.039078,86.004478 156.151138,86.044357 
	C162.960709,86.288521 169.784042,86.113495 176.601349,86.196007 
	C179.168747,86.227074 180.160782,85.202759 180.091492,82.631042 
	C179.966156,77.978035 180.058151,73.319168 180.059402,67.711777 
z"/>
<path fill="#FEFFFF" opacity="1.000000" stroke="none" 
	d="
M98.468658,192.000000 
	C102.165161,191.430649 106.316048,190.710236 110.497658,190.314835 
	C164.834778,185.177078 201.585876,156.673523 221.785278,106.374779 
	C223.376602,102.412224 225.104431,100.932999 229.537354,100.878998 
	C245.656555,100.682625 259.203552,90.911903 264.716949,76.212723 
	C265.000000,114.606819 265.000000,153.213638 265.000000,192.000000 
	C209.645905,192.000000 154.291611,192.000000 98.468658,192.000000 
z"/>
<path fill="#FDFEFF" opacity="1.000000" stroke="none" 
	d="
M1.000000,116.468658 
	C2.325612,121.546288 3.577503,127.111458 4.991609,132.635086 
	C8.321018,145.640091 13.497886,157.740692 22.396812,168.029129 
	C33.736076,181.138931 49.047474,186.123398 65.340233,188.946411 
	C71.706245,190.049454 78.184128,190.506866 84.805527,191.629166 
	C57.076767,192.000000 29.153532,192.000000 1.000000,192.000000 
	C1.000000,166.979584 1.000000,141.958450 1.000000,116.468658 
z"/>
<path fill="#0993E3" opacity="1.000000" stroke="none" 
	d="
M144.531433,1.000000 
	C145.923264,2.719628 147.524185,4.394002 147.642609,6.167377 
	C147.996506,11.466917 147.680237,16.807322 147.804337,22.127602 
	C147.875122,25.161945 146.998001,26.823736 143.600769,26.752857 
	C137.115967,26.617556 130.619446,26.869123 124.144447,26.582977 
	C122.813263,26.524147 120.490547,24.870411 120.436424,23.855232 
	C120.091530,17.385958 120.158394,10.886720 120.356400,4.405497 
	C120.384789,3.476239 121.852921,2.590966 122.827377,1.342668 
	C130.020950,1.000000 137.041901,1.000000 144.531433,1.000000 
z"/>
<path fill="#0A94E3" opacity="1.000000" stroke="none" 
	d="
M55.410152,41.122223 
	C55.522015,30.166588 54.351757,31.846025 64.453880,31.713917 
	C69.098465,31.653177 73.752556,31.872940 78.387291,31.651125 
	C81.940887,31.481049 83.043770,32.933735 82.914337,36.328026 
	C82.712166,41.629341 82.733101,46.948158 82.906281,52.251499 
	C83.013939,55.548420 81.609314,56.657845 78.473732,56.598602 
	C72.171532,56.479530 65.864082,56.483719 59.561699,56.597404 
	C56.630367,56.650276 55.277306,55.589088 55.387718,52.546429 
	C55.519993,48.901405 55.413319,45.247715 55.410152,41.122223 
z"/>
<path fill="#0A94E3" opacity="1.000000" stroke="none" 
	d="
M120.225151,49.753250 
	C120.225983,44.801506 120.327599,40.314575 120.191750,35.834846 
	C120.103325,32.919151 121.083908,31.592173 124.188324,31.663273 
	C130.661636,31.811531 137.142792,31.804253 143.616486,31.664520 
	C146.575958,31.600643 147.866013,32.641094 147.802902,35.679398 
	C147.685638,41.323311 147.710037,46.972301 147.795364,52.617363 
	C147.836044,55.310135 146.805115,56.604885 144.011124,56.577110 
	C137.369049,56.511074 130.725204,56.501694 124.083290,56.576336 
	C119.083076,56.632523 120.458420,52.974342 120.225151,49.753250 
z"/>
<path fill="#0A94E3" opacity="1.000000" stroke="none" 
	d="
M49.454876,85.864136 
	C41.870426,86.097382 34.706760,86.018028 27.552725,86.243835 
	C24.219196,86.349068 23.142519,85.027176 23.234056,81.854424 
	C23.387701,76.528915 23.403673,71.191635 23.229921,65.867393 
	C23.125704,62.673920 24.240807,61.317081 27.529888,61.392509 
	C33.855873,61.537582 40.193573,61.289513 46.512142,61.550282 
	C47.938354,61.609138 50.506523,63.076111 50.512550,63.909607 
	C50.564972,71.163330 50.153320,78.420410 49.454876,85.864136 
z"/>
<path fill="#0A94E3" opacity="1.000000" stroke="none" 
	d="
M69.002037,86.190125 
	C64.385635,86.190125 60.264210,86.190125 55.448566,86.190125 
	C55.448566,78.508118 55.343117,71.387863 55.572594,64.278412 
	C55.603756,63.313026 57.286907,61.620979 58.247814,61.590031 
	C65.395203,61.359810 72.559822,61.314117 79.701317,61.621716 
	C80.799118,61.668995 82.643761,63.779518 82.712151,65.015038 
	C83.033569,70.821129 82.776314,76.656418 82.889801,82.478073 
	C82.945396,85.329903 81.702972,86.325935 78.980423,86.216393 
	C75.824043,86.089401 72.658546,86.188934 69.002037,86.190125 
z"/>
<path fill="#0A94E3" opacity="1.000000" stroke="none" 
	d="
M143.699463,86.186829 
	C137.063248,86.188744 130.894241,86.025284 124.739525,86.251373 
	C121.179184,86.382156 120.049812,85.004089 120.175163,81.593193 
	C120.370789,76.270187 120.314651,70.932816 120.194969,65.605347 
	C120.128525,62.647812 121.258492,61.355694 124.284157,61.404942 
	C130.778595,61.510651 137.276978,61.509789 143.771576,61.410259 
	C146.842819,61.363190 147.862259,62.776764 147.803452,65.678047 
	C147.692078,71.172531 147.733261,76.671234 147.787201,82.167435 
	C147.811981,84.691803 147.183105,86.467834 143.699463,86.186829 
z"/>
<path fill="#0692E2" opacity="1.000000" stroke="none" 
	d="
M95.108528,31.718506 
	C100.924873,31.720043 106.263138,31.548611 111.574867,31.848005 
	C112.860466,31.920469 115.090645,33.503105 115.131889,34.466438 
	C115.436493,41.579464 115.296707,48.711517 115.296707,56.493401 
	C106.767982,56.493401 98.813873,56.605354 90.871696,56.348495 
	C89.903580,56.317184 88.243790,54.338402 88.192230,53.203648 
	C87.920418,47.221340 88.064743,41.220249 88.058807,35.225685 
	C88.053581,29.947491 92.121971,32.304417 95.108528,31.718506 
z"/>
<path fill="#0692E2" opacity="1.000000" stroke="none" 
	d="
M95.235603,61.449310 
	C100.862953,61.450813 106.021843,61.538349 111.175980,61.419617 
	C114.038620,61.353672 115.464531,62.208370 115.366562,65.374496 
	C115.191719,71.025024 115.233551,76.686707 115.355988,82.340019 
	C115.413528,84.996544 114.710533,86.298386 111.733574,86.224098 
	C105.083687,86.058144 98.425453,86.097656 91.773315,86.211334 
	C88.939156,86.259766 87.949142,85.083733 88.025200,82.339760 
	C88.154190,77.685516 88.058884,73.025063 88.058517,68.367218 
	C88.057983,61.499725 88.058235,61.499725 95.235603,61.449310 
z"/>
<path fill="#0592E2" opacity="1.000000" stroke="none" 
	d="
M180.059402,68.187263 
	C180.058151,73.319168 179.966156,77.978035 180.091492,82.631042 
	C180.160782,85.202759 179.168747,86.227074 176.601349,86.196007 
	C169.784042,86.113495 162.960709,86.288521 156.151138,86.044357 
	C155.039078,86.004478 153.082687,84.386581 153.047562,83.441147 
	C152.783691,76.341034 152.903809,69.226654 152.903809,61.879124 
	C162.162933,61.879124 170.875076,61.879124 180.059402,61.879124 
	C180.059402,64.106911 180.059402,65.909340 180.059402,68.187263 
z"/>
</svg>
  ),
  Kubernetes: ({ className }) => (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="100%" viewBox="0 0 228 221" enable-background="new 0 0 228 221">
<path fill="#326DE6" opacity="1.000000" stroke="none" 
	d="
M109.000000,0.999999 
	C111.700012,1.000000 114.400032,1.000000 117.749084,1.297862 
	C119.491531,1.968384 120.636002,2.234305 121.670891,2.729308 
	C147.617889,15.140094 173.536560,27.610273 199.503586,39.978943 
	C205.423889,42.798908 208.543137,47.456028 209.934464,53.697281 
	C213.262741,68.627327 216.658524,83.543488 220.185699,98.427650 
	C223.002426,110.313866 226.053131,122.144630 229.000000,134.000000 
	C229.000000,136.700012 229.000000,139.400024 228.682770,142.687988 
	C226.885757,145.660873 225.634674,148.229324 223.890778,150.402252 
	C206.961487,171.496262 190.032104,192.591705 172.876312,213.500916 
	C170.162521,216.808441 166.320435,219.190216 163.000000,222.000000 
	C161.933334,222.000000 160.866653,222.000000 159.044708,221.788788 
	C157.152557,221.391083 156.015900,221.043060 154.878830,221.041718 
	C127.674583,221.009933 100.470261,221.000427 73.266090,221.055878 
	C71.843422,221.058762 70.421997,221.671295 69.000000,222.000000 
	C69.000000,222.000000 68.500000,222.000000 68.083786,221.694489 
	C63.993069,218.676010 59.762001,216.466156 56.760006,213.145264 
	C50.525265,206.248169 44.875294,198.814774 39.105347,191.506775 
	C26.364016,175.369080 13.697209,159.172531 1.000001,143.000000 
	C1.000000,139.969406 1.000000,136.938812 1.344186,133.295776 
	C2.078190,131.413284 2.550512,130.162079 2.845534,128.870361 
	C7.805521,107.153748 12.798617,85.444466 17.671183,63.708187 
	C22.898825,40.387913 20.465864,44.132793 41.460949,33.883377 
	C63.962406,22.898569 86.486038,11.959196 109.000000,0.999999 
M163.700851,70.561134 
	C161.911270,70.274384 159.454529,70.640434 158.435867,69.599358 
	C148.823975,59.776070 136.813751,54.907127 123.693604,52.306366 
	C120.024345,51.579025 118.506447,49.464947 118.645584,46.086544 
	C118.795746,42.440399 119.752762,38.788635 119.564629,35.180679 
	C119.432907,32.654343 118.320992,29.963871 116.907196,27.838781 
	C116.425735,27.115103 112.729080,27.260067 112.170074,28.108040 
	C110.764198,30.240690 109.796967,32.959129 109.590836,35.518188 
	C109.261948,39.601227 109.789116,43.745861 109.772072,47.863701 
	C109.758438,51.157021 108.017792,52.623913 104.621437,53.028187 
	C91.998940,54.530682 81.155067,60.040848 71.693153,68.402649 
	C67.266693,72.314453 65.583527,72.402184 61.196167,68.444046 
	C58.357689,65.883263 55.850468,62.943329 52.927505,60.492035 
	C50.685024,58.611412 47.500854,57.978539 46.089283,60.976677 
	C45.202251,62.860714 45.900917,65.946098 46.840351,68.071701 
	C47.443325,69.436005 49.877411,69.904610 51.317039,71.002449 
	C55.018898,73.825409 58.624035,76.775208 62.199326,79.619820 
	C53.830761,93.393654 49.703403,106.978142 51.590286,122.047928 
	C51.710217,123.005760 50.796005,124.813721 50.011692,125.047379 
	C44.861320,126.581833 39.637703,127.895859 34.391582,129.075439 
	C30.180058,130.022385 27.683590,132.630432 28.668245,135.718643 
	C29.972822,139.810242 33.197315,139.605545 36.440746,138.725006 
	C40.124786,137.724838 43.701015,136.300400 47.410721,135.429184 
	C51.447559,134.481125 54.441010,135.380051 56.210648,139.946854 
	C60.909092,152.071823 68.979614,161.625046 79.630234,169.103622 
	C80.901672,169.996384 82.277328,172.467804 81.897583,173.666794 
	C80.673531,177.531448 79.012833,181.370270 76.857941,184.803177 
	C72.899910,191.108627 72.710938,191.264496 77.117973,196.567627 
	C82.099602,195.957626 83.981499,192.423813 85.325256,188.273987 
	C86.142059,185.751495 86.976227,183.177338 88.249748,180.873566 
	C90.123238,177.484528 92.606766,175.486084 97.102608,176.899811 
	C102.275986,178.526611 107.710983,180.356903 113.008369,180.286789 
	C119.357178,180.202744 125.721367,178.386505 132.003464,176.982834 
	C138.130859,175.613724 139.495865,176.073395 142.209106,182.049103 
	C143.096893,184.004364 143.471741,186.207321 144.460663,188.098572 
	C146.144440,191.318710 148.128647,194.381775 149.963226,197.471436 
	C157.218567,193.315887 157.643021,191.433365 153.690506,185.649551 
	C152.007645,183.186981 150.360809,180.667770 149.017975,178.012299 
	C147.013504,174.048462 147.299469,170.829056 151.543808,167.950592 
	C161.699951,161.062790 169.080673,151.731583 173.862244,140.395615 
	C176.306244,134.601501 178.393433,133.511917 184.457275,135.317184 
	C187.794083,136.310593 190.960815,138.217697 194.334656,138.620575 
	C196.478592,138.876602 198.862045,137.126892 201.138077,136.276627 
	C199.825027,134.256180 198.762833,131.985413 197.097534,130.316437 
	C196.208771,129.425720 194.291260,129.486893 192.815674,129.272034 
	C189.857391,128.841293 186.861450,128.641129 183.921844,128.116959 
	C179.829086,127.387161 177.611374,125.271629 177.956650,120.632637 
	C178.881561,108.205833 176.146362,96.510735 170.212204,85.553017 
	C167.242157,80.068710 167.747696,77.845764 173.070038,74.156364 
	C175.796951,72.266090 179.168961,71.112602 181.437866,68.822174 
	C183.006180,67.238960 183.732529,64.278061 183.723465,61.937103 
	C183.719711,60.968281 180.658936,59.051765 179.260284,59.274353 
	C177.198349,59.602505 175.249588,61.294777 173.485687,62.698856 
	C170.386688,65.165688 167.464188,67.854233 163.700851,70.561134 
z"/>
<path fill="#FEFEFF" opacity="1.000000" stroke="none" 
	d="
M229.000000,133.531342 
	C226.053131,122.144630 223.002426,110.313866 220.185699,98.427650 
	C216.658524,83.543488 213.262741,68.627327 209.934464,53.697281 
	C208.543137,47.456028 205.423889,42.798908 199.503586,39.978943 
	C173.536560,27.610273 147.617889,15.140094 121.670891,2.729308 
	C120.636002,2.234305 119.491531,1.968384 118.199059,1.297862 
	C154.933548,1.000000 191.867096,1.000000 229.000000,1.000000 
	C229.000000,45.020695 229.000000,89.041687 229.000000,133.531342 
z"/>
<path fill="#FEFEFF" opacity="1.000000" stroke="none" 
	d="
M108.531342,0.999999 
	C86.486038,11.959196 63.962406,22.898569 41.460949,33.883377 
	C20.465864,44.132793 22.898825,40.387913 17.671183,63.708187 
	C12.798617,85.444466 7.805521,107.153748 2.845534,128.870361 
	C2.550512,130.162079 2.078190,131.413284 1.344186,132.841675 
	C1.000000,89.080338 1.000000,45.160683 1.000000,1.000000 
	C36.687199,1.000000 72.374939,1.000000 108.531342,0.999999 
z"/>
<path fill="#FEFEFF" opacity="1.000000" stroke="none" 
	d="
M163.468658,222.000000 
	C166.320435,219.190216 170.162521,216.808441 172.876312,213.500916 
	C190.032104,192.591705 206.961487,171.496262 223.890778,150.402252 
	C225.634674,148.229324 226.885757,145.660873 228.682770,143.137970 
	C229.000000,169.253632 229.000000,195.507278 229.000000,222.000000 
	C207.313019,222.000000 185.625168,222.000000 163.468658,222.000000 
z"/>
<path fill="#FEFEFF" opacity="1.000000" stroke="none" 
	d="
M1.000001,143.468658 
	C13.697209,159.172531 26.364016,175.369080 39.105347,191.506775 
	C44.875294,198.814774 50.525265,206.248169 56.760006,213.145264 
	C59.762001,216.466156 63.993069,218.676010 67.833786,221.694489 
	C45.733791,222.000000 23.467579,222.000000 1.000000,222.000000 
	C1.000000,195.979446 1.000000,169.958389 1.000001,143.468658 
z"/>
<path fill="#5986EA" opacity="1.000000" stroke="none" 
	d="
M69.468658,222.000000 
	C70.421997,221.671295 71.843422,221.058762 73.266090,221.055878 
	C100.470261,221.000427 127.674583,221.009933 154.878830,221.041718 
	C156.015900,221.043060 157.152557,221.391083 158.644714,221.788788 
	C129.312439,222.000000 99.624878,222.000000 69.468658,222.000000 
z"/>
<path fill="#FCFCFF" opacity="1.000000" stroke="none" 
	d="
M164.084320,70.505531 
	C167.464188,67.854233 170.386688,65.165688 173.485687,62.698856 
	C175.249588,61.294777 177.198349,59.602505 179.260284,59.274353 
	C180.658936,59.051765 183.719711,60.968281 183.723465,61.937103 
	C183.732529,64.278061 183.006180,67.238960 181.437866,68.822174 
	C179.168961,71.112602 175.796951,72.266090 173.070038,74.156364 
	C167.747696,77.845764 167.242157,80.068710 170.212204,85.553017 
	C176.146362,96.510735 178.881561,108.205833 177.956650,120.632637 
	C177.611374,125.271629 179.829086,127.387161 183.921844,128.116959 
	C186.861450,128.641129 189.857391,128.841293 192.815674,129.272034 
	C194.291260,129.486893 196.208771,129.425720 197.097534,130.316437 
	C198.762833,131.985413 199.825027,134.256180 201.138077,136.276627 
	C198.862045,137.126892 196.478592,138.876602 194.334656,138.620575 
	C190.960815,138.217697 187.794083,136.310593 184.457275,135.317184 
	C178.393433,133.511917 176.306244,134.601501 173.862244,140.395615 
	C169.080673,151.731583 161.699951,161.062790 151.543808,167.950592 
	C147.299469,170.829056 147.013504,174.048462 149.017975,178.012299 
	C150.360809,180.667770 152.007645,183.186981 153.690506,185.649551 
	C157.643021,191.433365 157.218567,193.315887 149.963226,197.471436 
	C148.128647,194.381775 146.144440,191.318710 144.460663,188.098572 
	C143.471741,186.207321 143.096893,184.004364 142.209106,182.049103 
	C139.495865,176.073395 138.130859,175.613724 132.003464,176.982834 
	C125.721367,178.386505 119.357178,180.202744 113.008369,180.286789 
	C107.710983,180.356903 102.275986,178.526611 97.102608,176.899811 
	C92.606766,175.486084 90.123238,177.484528 88.249748,180.873566 
	C86.976227,183.177338 86.142059,185.751495 85.325256,188.273987 
	C83.981499,192.423813 82.099602,195.957626 77.117973,196.567627 
	C72.710938,191.264496 72.899910,191.108627 76.857941,184.803177 
	C79.012833,181.370270 80.673531,177.531448 81.897583,173.666794 
	C82.277328,172.467804 80.901672,169.996384 79.630234,169.103622 
	C68.979614,161.625046 60.909092,152.071823 56.210648,139.946854 
	C54.441010,135.380051 51.447559,134.481125 47.410721,135.429184 
	C43.701015,136.300400 40.124786,137.724838 36.440746,138.725006 
	C33.197315,139.605545 29.972822,139.810242 28.668245,135.718643 
	C27.683590,132.630432 30.180058,130.022385 34.391582,129.075439 
	C39.637703,127.895859 44.861320,126.581833 50.011692,125.047379 
	C50.796005,124.813721 51.710217,123.005760 51.590286,122.047928 
	C49.703403,106.978142 53.830761,93.393654 62.199326,79.619820 
	C58.624035,76.775208 55.018898,73.825409 51.317039,71.002449 
	C49.877411,69.904610 47.443325,69.436005 46.840351,68.071701 
	C45.900917,65.946098 45.202251,62.860714 46.089283,60.976677 
	C47.500854,57.978539 50.685024,58.611412 52.927505,60.492035 
	C55.850468,62.943329 58.357689,65.883263 61.196167,68.444046 
	C65.583527,72.402184 67.266693,72.314453 71.693153,68.402649 
	C81.155067,60.040848 91.998940,54.530682 104.621437,53.028187 
	C108.017792,52.623913 109.758438,51.157021 109.772072,47.863701 
	C109.789116,43.745861 109.261948,39.601227 109.590836,35.518188 
	C109.796967,32.959129 110.764198,30.240690 112.170074,28.108040 
	C112.729080,27.260067 116.425735,27.115103 116.907196,27.838781 
	C118.320992,29.963871 119.432907,32.654343 119.564629,35.180679 
	C119.752762,38.788635 118.795746,42.440399 118.645584,46.086544 
	C118.506447,49.464947 120.024345,51.579025 123.693604,52.306366 
	C136.813751,54.907127 148.823975,59.776070 158.435867,69.599358 
	C159.454529,70.640434 161.911270,70.274384 164.084320,70.505531 
M102.508308,66.874161 
	C93.545273,69.132591 85.645660,73.251930 78.729088,80.097900 
	C85.865578,85.189430 92.522980,90.109161 99.366852,94.754158 
	C103.097008,97.285843 106.359657,95.719147 106.700607,91.140862 
	C107.315201,82.888077 107.514183,74.604332 107.907822,65.866096 
	C106.131287,66.203033 104.728424,66.469109 102.508308,66.874161 
M144.872787,130.703476 
	C142.265076,130.217560 139.674103,129.487778 137.045410,129.307190 
	C133.729279,129.079376 130.870071,130.793564 132.040649,134.235092 
	C134.880005,142.582916 138.466324,150.676682 141.874161,159.178452 
	C151.637726,152.556671 158.254822,144.648804 162.372910,133.695801 
	C156.374786,132.666779 151.048904,131.753082 144.872787,130.703476 
M132.443787,68.862305 
	C128.781738,67.861542 125.119682,66.860786 120.697670,65.652344 
	C121.176216,74.904594 121.383614,83.519974 122.180420,92.080490 
	C122.504646,95.563835 125.487663,97.008080 128.474426,95.054420 
	C135.648056,90.362076 142.537842,85.235794 150.850555,79.359726 
	C144.239197,75.509483 138.716614,72.293312 132.443787,68.862305 
M76.311378,117.899696 
	C80.281349,116.714073 84.306023,115.682846 88.206322,114.300621 
	C92.339157,112.835999 93.119225,109.730721 89.933189,106.736801 
	C83.904846,101.071999 77.619354,95.680840 71.074875,89.850044 
	C65.217316,99.650887 62.923695,109.803596 63.532257,121.391930 
	C67.942902,120.167282 71.730682,119.115570 76.311378,117.899696 
M165.078934,118.866554 
	C165.674500,108.504723 163.277893,98.942848 157.710342,89.865074 
	C151.427856,95.547081 145.451797,100.838264 139.610184,106.273933 
	C135.505646,110.093246 136.283539,113.269249 141.695389,114.883759 
	C148.057098,116.781639 154.454712,118.570847 160.887085,120.209694 
	C162.091675,120.516586 163.533157,119.893684 165.078934,118.866554 
M122.781761,150.751373 
	C121.223755,148.016724 119.870117,145.136948 118.056831,142.583588 
	C115.704620,139.271347 112.717728,139.024887 110.843620,142.167938 
	C106.479172,149.487518 102.498901,157.036148 98.143753,164.887146 
	C109.279961,167.979584 119.625465,168.301056 130.449341,164.848480 
	C127.853134,160.101028 125.477264,155.756485 122.781761,150.751373 
M94.017456,141.488922 
	C94.830254,139.494034 95.682655,137.514145 96.446175,135.500565 
	C97.483498,132.764877 96.844124,130.602524 93.612938,130.828491 
	C84.716568,131.450623 75.842804,132.395874 66.323517,133.271866 
	C70.816345,144.814789 77.105873,153.043808 86.582985,159.343353 
	C89.059074,153.434616 91.409065,147.826797 94.017456,141.488922 
M122.001785,112.744270 
	C121.491173,112.088654 120.884155,111.486496 120.486038,110.768501 
	C118.360710,106.935501 114.359436,107.339897 111.719742,108.492744 
	C109.270859,109.562271 106.685692,112.798576 106.286903,115.406013 
	C105.864136,118.170235 106.561752,121.622093 110.360168,123.634964 
	C114.405457,125.778641 117.977570,124.925209 120.222443,122.353165 
	C122.022423,120.290863 121.776184,116.442627 122.001785,112.744270 
z"/>
<path fill="#346FE6" opacity="1.000000" stroke="none" 
	d="
M102.916939,66.804672 
	C104.728424,66.469109 106.131287,66.203033 107.907822,65.866096 
	C107.514183,74.604332 107.315201,82.888077 106.700607,91.140862 
	C106.359657,95.719147 103.097008,97.285843 99.366852,94.754158 
	C92.522980,90.109161 85.865578,85.189430 78.729088,80.097900 
	C85.645660,73.251930 93.545273,69.132591 102.916939,66.804672 
z"/>
<path fill="#336EE6" opacity="1.000000" stroke="none" 
	d="
M145.297897,130.771423 
	C151.048904,131.753082 156.374786,132.666779 162.372910,133.695801 
	C158.254822,144.648804 151.637726,152.556671 141.874161,159.178452 
	C138.466324,150.676682 134.880005,142.582916 132.040649,134.235092 
	C130.870071,130.793564 133.729279,129.079376 137.045410,129.307190 
	C139.674103,129.487778 142.265076,130.217560 145.297897,130.771423 
z"/>
<path fill="#336EE6" opacity="1.000000" stroke="none" 
	d="
M132.818909,68.969719 
	C138.716614,72.293312 144.239197,75.509483 150.850555,79.359726 
	C142.537842,85.235794 135.648056,90.362076 128.474426,95.054420 
	C125.487663,97.008080 122.504646,95.563835 122.180420,92.080490 
	C121.383614,83.519974 121.176216,74.904594 120.697670,65.652344 
	C125.119682,66.860786 128.781738,67.861542 132.818909,68.969719 
z"/>
<path fill="#346FE6" opacity="1.000000" stroke="none" 
	d="
M75.914925,117.981781 
	C71.730682,119.115570 67.942902,120.167282 63.532257,121.391930 
	C62.923695,109.803596 65.217316,99.650887 71.074875,89.850044 
	C77.619354,95.680840 83.904846,101.071999 89.933189,106.736801 
	C93.119225,109.730721 92.339157,112.835999 88.206322,114.300621 
	C84.306023,115.682846 80.281349,116.714073 75.914925,117.981781 
z"/>
<path fill="#336EE6" opacity="1.000000" stroke="none" 
	d="
M164.972122,119.283211 
	C163.533157,119.893684 162.091675,120.516586 160.887085,120.209694 
	C154.454712,118.570847 148.057098,116.781639 141.695389,114.883759 
	C136.283539,113.269249 135.505646,110.093246 139.610184,106.273933 
	C145.451797,100.838264 151.427856,95.547081 157.710342,89.865074 
	C163.277893,98.942848 165.674500,108.504723 164.972122,119.283211 
z"/>
<path fill="#336EE6" opacity="1.000000" stroke="none" 
	d="
M122.941574,151.081650 
	C125.477264,155.756485 127.853134,160.101028 130.449341,164.848480 
	C119.625465,168.301056 109.279961,167.979584 98.143753,164.887146 
	C102.498901,157.036148 106.479172,149.487518 110.843620,142.167938 
	C112.717728,139.024887 115.704620,139.271347 118.056831,142.583588 
	C119.870117,145.136948 121.223755,148.016724 122.941574,151.081650 
z"/>
<path fill="#336EE6" opacity="1.000000" stroke="none" 
	d="
M93.888260,141.853958 
	C91.409065,147.826797 89.059074,153.434616 86.582985,159.343353 
	C77.105873,153.043808 70.816345,144.814789 66.323517,133.271866 
	C75.842804,132.395874 84.716568,131.450623 93.612938,130.828491 
	C96.844124,130.602524 97.483498,132.764877 96.446175,135.500565 
	C95.682655,137.514145 94.830254,139.494034 93.888260,141.853958 
z"/>
<path fill="#356FE6" opacity="1.000000" stroke="none" 
	d="
M122.219894,113.065613 
	C121.776184,116.442627 122.022423,120.290863 120.222443,122.353165 
	C117.977570,124.925209 114.405457,125.778641 110.360168,123.634964 
	C106.561752,121.622093 105.864136,118.170235 106.286903,115.406013 
	C106.685692,112.798576 109.270859,109.562271 111.719742,108.492744 
	C114.359436,107.339897 118.360710,106.935501 120.486038,110.768501 
	C120.884155,111.486496 121.491173,112.088654 122.219894,113.065613 
z"/>
</svg>
  ),
}

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("languages")
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const categories = [
    { id: "languages", label: "Languages" },
    { id: "frameworks", label: "Frameworks" },
    { id: "databases", label: "Databases" },
    { id: "cloud", label: "Cloud & DevOps" },
  ]

  const getFilteredTech = () => {
    return techStack[activeCategory as keyof typeof techStack] || []
  }

  const filteredTech = getFilteredTech()

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setActiveIndex(0)
  }

  return (
    <section id="stack" className="py-20 relative overflow-hidden">
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
              className={`cursor-pointer px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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
        <div className="flex flex-row align-stretch overflow-hidden min-w-[300px] max-w-5xl w-full h-96 mx-auto rounded-3xl shadow-2xl mb-12">
          {filteredTech.map((tech, index) => {
            const IconComponent = TechIcons[tech.name]

            return (
              <div
                key={tech.name}
                className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out rounded-3xl ${
                  activeIndex === index ? "flex-[5]" : "flex-1"
                }`}
                onClick={() => setActiveIndex(index)}
                style={{
                  background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}40)`,
                }}
              >
                {/* Tech Icon Background */}
                <div className="w-full h-full relative flex items-center justify-center">
                  <div
                    className={`w-32 h-32 rounded-2xl flex items-center justify-center shadow-2xl transition-transform duration-700 p-6 ${
                      activeIndex === index ? "scale-110" : "scale-75"
                    }`}
                    style={{
                      backgroundColor: tech.color,
                      boxShadow: `0 20px 60px ${tech.color}60`,
                    }}
                  >
                    {IconComponent && <IconComponent className="w-full h-full" />}
                  </div>

                  {/* Animated background pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${tech.color}, transparent 70%)`,
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
                <div
                  className={`absolute bottom-6 left-6 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-semibold text-lg transition-opacity duration-300 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {tech.name}
                </div>

                {/* Hover shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-full transition-transform duration-1000 hover:translate-x-[-100%]" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


{/* Technology Information Cards */}
        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        //   {filteredTech.map((tech, index) => (
        //     <div
        //       key={tech.name}
        //       className={`relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border backdrop-blur-sm transition-all duration-300 cursor-pointer hover:scale-105 ${
        //         activeIndex === index
        //           ? 'border-cyan-500/40 shadow-lg shadow-cyan-500/20 bg-gradient-to-br from-cyan-900/20 to-gray-800/50'
        //           : 'border-gray-600/30 hover:border-gray-500/50'
        //       }`}
        //       onClick={() => setActiveIndex(index)}
        //     >
        //       {/* Tech Icon */}
        //       {/* <div className="flex items-center mb-4">
        //         <div 
        //           className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold text-white shadow-lg mr-4"
        //           style={{
        //             backgroundColor: tech.color,
        //             boxShadow: `0 8px 25px ${tech.color}40`,
        //           }}
        //         >
        //           {tech.icon}
        //         </div>
        //         <h3 className="text-xl font-bold text-white">{tech.name}</h3>
        //       </div> */}

        //       {/* Description */}
        //       {/* <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        //         {tech.description}
        //       </p> */}

        //       {/* Features */}
        //       {/* <div className="flex flex-wrap gap-2">
        //         {tech.features.map((feature, idx) => (
        //           <span
        //             key={idx}
        //             className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700/50 text-gray-300 border border-gray-600/30"
        //           >
        //             {feature}
        //           </span>
        //         ))}
        //       </div> */}

        //       {/* Hover effect overlay */}
        //       {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-full transition-transform duration-1000 hover:translate-x-[-100%] rounded-2xl" /> */}
        //     </div>
        //   ))}
        // </div>