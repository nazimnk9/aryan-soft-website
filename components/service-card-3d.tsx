// "use client"

// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
// import type { LucideIcon } from "lucide-react"
// import { useState } from "react"
// import type React from "react"
// import { Button } from "@/components/ui/button"
// import { useRouter } from "next/navigation"
// interface ServiceCard3DProps {
//   icon: LucideIcon
//   title: string
//   description: string
//   features?: string[]
//   technologies?: string[]
//   delay?: number
//   accentColor: string
// }

// export function ServiceCard3D({
//   icon: Icon,
//   title,
//   description,
//   features,
//   technologies,
//   delay = 0,
//   accentColor,
// }: ServiceCard3DProps) {
//   const router = useRouter()
//   const [isHovered, setIsHovered] = useState(false)
//   const [isFocused, setIsFocused] = useState(false)
//   const [isExpanded, setIsExpanded] = useState(false)

//   const x = useMotionValue(0)
//   const y = useMotionValue(0)

//   const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
//   const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect()
//     const width = rect.width
//     const height = rect.height
//     const mouseX = e.clientX - rect.left
//     const mouseY = e.clientY - rect.top
//     const xPct = mouseX / width - 0.5
//     const yPct = mouseY / height - 0.5
//     x.set(xPct)
//     y.set(yPct)
//   }

//   const handleMouseLeave = () => {
//     x.set(0)
//     y.set(0)
//     setIsHovered(false)
//   }

//   const handleCardClick = () => {
//     setIsExpanded(!isExpanded)
//   }

//   const handleGetStartedClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.stopPropagation()
//     router.push("/contact")
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50, scale: 0.9 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
//       className="perspective-1000 text-white"
//     >
//       <motion.div
//         onMouseMove={handleMouseMove}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={handleMouseLeave}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         onClick={handleCardClick}
//         tabIndex={0}
//         // style={{
//         //   rotateX: isHovered || isFocused ? rotateX : "0deg",
//         //   rotateY: isHovered || isFocused ? rotateY : "0deg",
//         //   transformStyle: "preserve-3d",
//         // }}
//         className="relative h-full group cursor-pointer outline-none"
//         whileHover={{ scale: 1.02 }}
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       >
//         {/* Main Card - Front Face */}
//         <motion.div
//           className="relative h-full rounded-2xl overflow-hidden text-white"
//           style={{
//             transformStyle: "preserve-3d",
//             backfaceVisibility: "hidden",
//           }}
//           animate={{
//             backgroundColor: isExpanded ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)",
//           }}
//         >
//           {/* Gradient Background */}
//           <div
//             className="absolute inset-0 opacity-10"
//             style={{
//               background: `linear-gradient(135deg, ${accentColor} 0%, transparent 100%)`,
//             }}
//           />

//           <motion.div
//             className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent"
//             animate={{
//               borderWidth: isExpanded ? "3px" : "2px",
//               borderColor: isExpanded ? `${accentColor}80` : "rgba(255, 255, 255, 0.1)",
//             }}
//             style={{ borderStyle: "solid" }}
//           />

//           {/* Content Container */}
//           <div className="text-white relative h-full p-8 flex flex-col" style={{ transform: "translateZ(20px)" }}>
//             {/* Icon with Glow Effect */}
//             <motion.div
//               className="relative w-16 h-16 rounded-xl flex items-center justify-center mb-6"
//               style={{
//                 background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}40)`,
//                 boxShadow: `0 0 30px ${accentColor}40`,
//               }}
//             >
//               <Icon className="w-8 h-8" style={{ color: accentColor }} />

//               {/* Animated Ring */}
//               <motion.div
//                 className="absolute inset-0 rounded-xl border-2"
//                 style={{ borderColor: accentColor }}
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   opacity: [0.5, 0, 0.5],
//                 }}
//                 transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//               />
//             </motion.div>

//             {/* Title */}
//             <motion.h3
//               className="font-bold mb-4 text-foreground text-white transition-all duration-300"
//               animate={{
//                 fontSize: isExpanded ? "2rem" : "1.5rem",
//                 color: isExpanded ? accentColor : "inherit",
//               }}
//             >
//               {title}
//             </motion.h3>

//             {/* Description */}
//             <motion.p
//               className="text-muted-foreground text-white leading-relaxed mb-6 flex-grow"
//               animate={{
//                 fontSize: isExpanded ? "1.125rem" : "1rem",
//               }}
//             >
//               {description}
//             </motion.p>

//             {/* Features List - Revealed on Hover/Focus or Expanded */}
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{
//                 opacity: isHovered || isFocused || isExpanded ? 1 : 1,
//                 height: isHovered || isFocused || isExpanded ? "auto" : 0,
//               }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden"
//             >
//               {features && features.length > 0 && (
//                 <div className="mb-6">
//                   <motion.h4
//                     className="font-semibold text-white mb-3 flex items-center gap-2"
//                     animate={{
//                       fontSize: isExpanded ? "1.125rem" : "0.875rem",
//                     }}
//                   >
//                     <span className="w-1 h-4 rounded-full" style={{ backgroundColor: accentColor }} />
//                     Key Features
//                   </motion.h4>
//                   <ul className="space-y-2">
//                     {features.map((feature, idx) => (
//                       <motion.li
//                         key={idx}
//                         className="text-muted-foreground text-white flex items-start gap-2"
//                         animate={{
//                           fontSize: isExpanded ? "1rem" : "0.875rem",
//                         }}
//                       >
//                         <span
//                           className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
//                           style={{ backgroundColor: accentColor }}
//                         />
//                         {feature}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {/* Technologies */}
//               {technologies && technologies.length > 0 && (
//                 <div>
//                   <motion.h4
//                     className="font-semibold text-white mb-3 flex items-center gap-2"
//                     animate={{
//                       fontSize: isExpanded ? "1.125rem" : "0.875rem",
//                     }}
//                   >
//                     <span className="w-1 h-4 rounded-full" style={{ backgroundColor: accentColor }} />
//                     Technologies
//                   </motion.h4>
//                   <div className="flex flex-wrap gap-2">
//                     {technologies.map((tech, idx) => (
//                       <motion.span
//                         key={idx}
//                         className="px-3 py-1 rounded-full font-medium border"
//                         style={{
//                           backgroundColor: `${accentColor}30`,
//                           borderColor: `${accentColor}30`,
//                           color: accentColor,
//                         }}
//                         animate={{
//                           fontSize: isExpanded ? "0.875rem" : "0.75rem",
//                         }}
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{
//                 opacity: isExpanded ? 1 : 0,
//                 height: isExpanded ? "auto" : 0,
//               }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden mt-6"
//             >
//               <Button
//                 className="w-full font-semibold cursor-pointer"
//                 style={{
//                   backgroundColor: accentColor,
//                   color: "white",
//                 }}
//                 onClick={handleGetStartedClick}
//                 onMouseEnter={(e) => e.stopPropagation()}
//               >
//                 Get Started
//               </Button>
//             </motion.div>

//             {/* Hover Indicator */}
//             {!isHovered && !isFocused && !isExpanded && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="mt-4 text-xs text-muted-foreground/60 flex items-center gap-2"
//               >
//                 <motion.span
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
//                 >
//                   ✨
//                 </motion.span>
//                 Click to explore
//               </motion.div>
//             )}
//           </div>

//           {/* Shine Effect on Hover */}
//           <motion.div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               background: `linear-gradient(135deg, transparent 0%, ${accentColor}20 50%, transparent)`,
//               transform: "translateX(-100%)",
//             }}
//             animate={{
//               transform: isHovered || isFocused ? "translateX(100%)" : "translateX(-100%)",
//             }}
//             transition={{ duration: 0.6 }}
//           />
//         </motion.div>

//         {/* 3D Shadow Effect */}
//         <motion.div
//           className="absolute inset-0 rounded-2xl -z-10"
//           style={{
//             background: `radial-gradient(circle at center, ${accentColor}30, transparent)`,
//             filter: "blur(0px)",
//             transform: "translateZ(-20px)",
//           }}
//           animate={{
//             opacity: isHovered || isFocused ? 0.6 : 0.3,
//             scale: isHovered || isFocused ? 1.05 : 1,
//           }}
//         />
//       </motion.div>
//     </motion.div>
//   )
// }

// "use client"

// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
// import type { LucideIcon } from "lucide-react"
// import { useState } from "react"
// import type React from "react"

// interface ServiceCard3DProps {
//   icon: LucideIcon
//   title: string
//   description: string
//   features?: string[]
//   technologies?: string[]
//   delay?: number
//   accentColor: string
// }

// export function ServiceCard3D({
//   icon: Icon,
//   title,
//   description,
//   features,
//   technologies,
//   delay = 0,
//   accentColor,
// }: ServiceCard3DProps) {
//   const [isHovered, setIsHovered] = useState(false)
//   const [isFocused, setIsFocused] = useState(false)

//   const x = useMotionValue(0)
//   const y = useMotionValue(0)

//   const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
//   const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect()
//     const width = rect.width
//     const height = rect.height
//     const mouseX = e.clientX - rect.left
//     const mouseY = e.clientY - rect.top
//     const xPct = mouseX / width - 0.5
//     const yPct = mouseY / height - 0.5
//     x.set(xPct)
//     y.set(yPct)
//   }

//   const handleMouseLeave = () => {
//     x.set(0)
//     y.set(0)
//     setIsHovered(false)
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50, scale: 0.9 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
//       className="perspective-1000 text-white"
//     >
//       <motion.div
//         onMouseMove={handleMouseMove}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={handleMouseLeave}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         tabIndex={0}
//         // style={{
//         //   rotateX: isHovered || isFocused ? rotateX : "0deg",
//         //   rotateY: isHovered || isFocused ? rotateY : "0deg",
//         //   transformStyle: "preserve-3d",
//         // }}
//         className="relative h-full group outline-none"
//         whileHover={{ scale: 1.02 }}
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       >
//         {/* Main Card - Front Face */}
//         <motion.div
//           className="relative h-full rounded-2xl overflow-hidden text-white"
//           style={{
//             transformStyle: "preserve-3d",
//             backfaceVisibility: "hidden",
//           }}
//         >
//           {/* Gradient Background */}
//           <div
//             className="absolute inset-0 opacity-10"
//             style={{
//               background: `linear-gradient(135deg, ${accentColor} 0%, transparent 100%)`,
//             }}
//           />

//           <motion.div
//             className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent"
//             animate={{
//               borderWidth: "2px",
//               borderColor: "rgba(255, 255, 255, 0.1)",
//             }}
//             style={{ borderStyle: "solid" }}
//           />

//           {/* Content Container */}
//           <div className="text-white relative h-full p-8 flex flex-col" style={{ transform: "translateZ(20px)" }}>
//             {/* Icon with Glow Effect */}
//             <motion.div
//               className="relative w-16 h-16 rounded-xl flex items-center justify-center mb-6"
//               style={{
//                 background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}40)`,
//                 boxShadow: `0 0 30px ${accentColor}40`,
//               }}
//             >
//               <Icon className="w-8 h-8" style={{ color: accentColor }} />

//               {/* Animated Ring */}
//               <motion.div
//                 className="absolute inset-0 rounded-xl border-2"
//                 style={{ borderColor: accentColor }}
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   opacity: [0.5, 0, 0.5],
//                 }}
//                 transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//               />
//             </motion.div>

//             {/* Title */}
//             <motion.h3
//               className="font-bold mb-4 text-foreground text-white transition-all duration-300 text-2xl"
//             >
//               {title}
//             </motion.h3>

//             {/* Description */}
//             <motion.p
//               className="text-muted-foreground text-white leading-relaxed mb-6 flex-grow text-base"
//             >
//               {description}
//             </motion.p>

//             {/* Features List - Revealed on Hover/Focus */}
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{
//                 opacity: isHovered || isFocused ? 1 : 0,
//                 height: isHovered || isFocused ? "auto" : 0,
//               }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden"
//             >
//               {features && features.length > 0 && (
//                 <div className="mb-6">
//                   <motion.h4
//                     className="font-semibold text-white mb-3 flex items-center gap-2 text-sm"
//                   >
//                     <span className="w-1 h-4 rounded-full" style={{ backgroundColor: accentColor }} />
//                     Key Features
//                   </motion.h4>
//                   <ul className="space-y-2">
//                     {features.map((feature, idx) => (
//                       <motion.li
//                         key={idx}
//                         className="text-muted-foreground text-white flex items-start gap-2 text-sm"
//                       >
//                         <span
//                           className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
//                           style={{ backgroundColor: accentColor }}
//                         />
//                         {feature}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {/* Technologies */}
//               {technologies && technologies.length > 0 && (
//                 <div>
//                   <motion.h4
//                     className="font-semibold text-white mb-3 flex items-center gap-2 text-sm"
//                   >
//                     <span className="w-1 h-4 rounded-full" style={{ backgroundColor: accentColor }} />
//                     Technologies
//                   </motion.h4>
//                   <div className="flex flex-wrap gap-2">
//                     {technologies.map((tech, idx) => (
//                       <motion.span
//                         key={idx}
//                         className="px-3 py-1 rounded-full font-medium border text-xs"
//                         style={{
//                           backgroundColor: `${accentColor}30`,
//                           borderColor: `${accentColor}30`,
//                           color: accentColor,
//                         }}
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           </div>

//           {/* Shine Effect on Hover */}
//           <motion.div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               background: `linear-gradient(135deg, transparent 0%, ${accentColor}20 50%, transparent)`,
//               transform: "translateX(-100%)",
//             }}
//             animate={{
//               transform: isHovered || isFocused ? "translateX(100%)" : "translateX(-100%)",
//             }}
//             transition={{ duration: 0.6 }}
//           />
//         </motion.div>

//         {/* 3D Shadow Effect */}
//         <motion.div
//           className="absolute inset-0 rounded-2xl -z-10"
//           style={{
//             background: `radial-gradient(circle at center, ${accentColor}30, transparent)`,
//             filter: "blur(0px)",
//             transform: "translateZ(-20px)",
//           }}
//           animate={{
//             opacity: isHovered || isFocused ? 0.6 : 0.3,
//             scale: isHovered || isFocused ? 1.05 : 1,
//           }}
//         />
//       </motion.div>
//     </motion.div>
//   )
// }

// "use client"

// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
// import type { LucideIcon } from "lucide-react"
// import { useState } from "react"
// import type React from "react"

// interface ServiceCard3DProps {
//   icon: LucideIcon
//   title: string
//   description: string
//   features?: string[]
//   technologies?: string[]
//   delay?: number
//   accentColor: string
// }

// export function ServiceCard3D({
//   icon: Icon,
//   title,
//   description,
//   features,
//   technologies,
//   delay = 0,
//   accentColor,
// }: ServiceCard3DProps) {
//   const [isHovered, setIsHovered] = useState(false)
//   const [isFocused, setIsFocused] = useState(false)

//   const x = useMotionValue(0)
//   const y = useMotionValue(0)

//   const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
//   const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect()
//     const width = rect.width
//     const height = rect.height
//     const mouseX = e.clientX - rect.left
//     const mouseY = e.clientY - rect.top
//     const xPct = mouseX / width - 0.5
//     const yPct = mouseY / height - 0.5
//     x.set(xPct)
//     y.set(yPct)
//   }

//   const handleMouseLeave = () => {
//     x.set(0)
//     y.set(0)
//     setIsHovered(false)
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50, scale: 0.9 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
//       className="perspective-1000 text-white"
//     >
//       <motion.div
//         onMouseMove={handleMouseMove}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={handleMouseLeave}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         tabIndex={0}
//         // style={{
//         //   rotateX: isHovered || isFocused ? rotateX : "0deg",
//         //   rotateY: isHovered || isFocused ? rotateY : "0deg",
//         //   transformStyle: "preserve-3d",
//         // }}
//         className="relative group outline-none"
//         whileHover={{ scale: 1.02 }}
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       >
//         {/* Main Card - Front Face */}
//         <motion.div
//           className="relative rounded-2xl overflow-hidden text-white"
//           style={{
//             transformStyle: "preserve-3d",
//             backfaceVisibility: "hidden",
//           }}
//           animate={{
//             height: isHovered || isFocused ? "auto" : "auto",
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           {/* Gradient Background */}
//           <div
//             className="absolute inset-0 opacity-10"
//             style={{
//               background: `linear-gradient(135deg, ${accentColor} 0%, transparent 100%)`,
//             }}
//           />

//           <motion.div
//             className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent"
//             animate={{
//               borderWidth: "2px",
//               borderColor: "rgba(255, 255, 255, 0.1)",
//             }}
//             style={{ borderStyle: "solid" }}
//           />

//           {/* Content Container */}
//           <div className="text-white relative p-8 flex flex-col" style={{ transform: "translateZ(20px)" }}>
//             {/* Icon with Glow Effect */}
//             <motion.div
//               className="relative w-16 h-16 rounded-xl flex items-center justify-center mb-6"
//               style={{
//                 background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}40)`,
//                 boxShadow: `0 0 30px ${accentColor}40`,
//               }}
//             >
//               <Icon className="w-8 h-8" style={{ color: accentColor }} />

//               {/* Animated Ring */}
//               <motion.div
//                 className="absolute inset-0 rounded-xl border-2"
//                 style={{ borderColor: accentColor }}
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   opacity: [0.5, 0, 0.5],
//                 }}
//                 transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//               />
//             </motion.div>

//             {/* Title */}
//             <motion.h3
//               className="font-bold mb-4 text-foreground text-white transition-all duration-300 text-2xl"
//             >
//               {title}
//             </motion.h3>

//             {/* Description */}
//             <motion.p
//               className="text-muted-foreground text-white leading-relaxed mb-6 flex-grow text-base"
//             >
//               {description}
//             </motion.p>

//             {/* Features List - Revealed on Hover/Focus */}
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{
//                 opacity: isHovered || isFocused ? 1 : 0,
//                 height: isHovered || isFocused ? "auto" : 0,
//               }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden"
//             >
//               {features && features.length > 0 && (
//                 <div className="mb-6">
//                   <motion.h4
//                     className="font-semibold text-white mb-3 flex items-center gap-2 text-sm"
//                   >
//                     <span className="w-1 h-4 rounded-full" style={{ backgroundColor: accentColor }} />
//                     Key Features
//                   </motion.h4>
//                   <ul className="space-y-2">
//                     {features.map((feature, idx) => (
//                       <motion.li
//                         key={idx}
//                         className="text-muted-foreground text-white flex items-start gap-2 text-sm"
//                       >
//                         <span
//                           className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
//                           style={{ backgroundColor: accentColor }}
//                         />
//                         {feature}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {/* Technologies */}
//               {technologies && technologies.length > 0 && (
//                 <div>
//                   <motion.h4
//                     className="font-semibold text-white mb-3 flex items-center gap-2 text-sm"
//                   >
//                     <span className="w-1 h-4 rounded-full" style={{ backgroundColor: accentColor }} />
//                     Technologies
//                   </motion.h4>
//                   <div className="flex flex-wrap gap-2">
//                     {technologies.map((tech, idx) => (
//                       <motion.span
//                         key={idx}
//                         className="px-3 py-1 rounded-full font-medium border text-xs"
//                         style={{
//                           backgroundColor: `${accentColor}30`,
//                           borderColor: `${accentColor}30`,
//                           color: accentColor,
//                         }}
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           </div>

//           {/* Shine Effect on Hover */}
//           <motion.div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               background: `linear-gradient(135deg, transparent 0%, ${accentColor}20 50%, transparent)`,
//               transform: "translateX(-100%)",
//             }}
//             animate={{
//               transform: isHovered || isFocused ? "translateX(100%)" : "translateX(-100%)",
//             }}
//             transition={{ duration: 0.6 }}
//           />
//         </motion.div>

//         {/* 3D Shadow Effect */}
//         <motion.div
//           className="absolute inset-0 rounded-2xl -z-10"
//           style={{
//             background: `radial-gradient(circle at center, ${accentColor}30, transparent)`,
//             filter: "blur(0px)",
//             transform: "translateZ(-20px)",
//           }}
//           animate={{
//             opacity: isHovered || isFocused ? 0.6 : 0.3,
//             scale: isHovered || isFocused ? 1.05 : 1,
//           }}
//         />
//       </motion.div>
//     </motion.div>
//   )
// }

"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { useState } from "react"
import type React from "react"

interface ServiceCard3DProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  technologies?: string[]
  delay?: number
  accentColor: string
}

export function ServiceCard3D({
  icon: Icon,
  title,
  description,
  features,
  technologies,
  delay = 0,
  accentColor,
}: ServiceCard3DProps) {
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      className="perspective-1000 text-white cursor-pointer"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        // style={{
        //   rotateX: isHovered ? rotateX : "0deg",
        //   rotateY: isHovered ? rotateY : "0deg",
        //   transformStyle: "preserve-3d",
        // }}
        className="relative group"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Main Card - Front Face */}
        <motion.div
          className="relative rounded-2xl overflow-hidden text-white"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
          animate={{
            height: isHovered ? "auto" : "auto",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient Background */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: `linear-gradient(135deg, ${accentColor} 0%, transparent 100%)`,
            }}
          />

          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent"
            animate={{
              borderWidth: "2px",
              borderColor: "rgba(255, 255, 255, 0.1)",
            }}
            style={{ borderStyle: "solid" }}
          />

          {/* Content Container */}
          <div className="text-white relative p-8 flex flex-col" style={{ transform: "translateZ(20px)" }}>
            {/* Icon with Glow Effect */}
            <motion.div
              className="relative w-16 h-16 rounded-xl flex items-center justify-center mb-6"
              style={{
                background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}40)`,
                boxShadow: `0 0 30px ${accentColor}40`,
              }}
            >
              <Icon className="w-8 h-8" style={{ color: accentColor }} />

              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2"
                style={{ borderColor: accentColor }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>

            {/* Title */}
            <motion.h3
              className="font-bold mb-4 text-foreground text-white transition-all duration-300 text-2xl"
            >
              {title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-muted-foreground text-white leading-relaxed mb-6 flex-grow text-base"
            >
              {description}
            </motion.p>

            {/* Features List - Revealed on Hover */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {features && features.length > 0 && (
                <div className="mb-6">
                  <motion.h4
                    className="font-semibold text-white mb-3 flex items-center gap-2 text-sm"
                  >
                    <span className="w-1 h-4 rounded-full" style={{ backgroundColor: accentColor }} />
                    Key Features
                  </motion.h4>
                  <ul className="space-y-2">
                    {features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="text-muted-foreground text-white flex items-start gap-2 text-sm"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: accentColor }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {technologies && technologies.length > 0 && (
                <div>
                  <motion.h4
                    className="font-semibold text-white mb-3 flex items-center gap-2 text-sm"
                  >
                    <span className="w-1 h-4 rounded-full" style={{ backgroundColor: accentColor }} />
                    Technologies
                  </motion.h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 rounded-full font-medium border text-xs"
                        style={{
                          backgroundColor: `${accentColor}30`,
                          borderColor: `${accentColor}30`,
                          color: accentColor,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Shine Effect on Hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, transparent 0%, ${accentColor}20 50%, transparent)`,
              transform: "translateX(-100%)",
            }}
            animate={{
              transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
            }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* 3D Shadow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl -z-10"
          style={{
            background: `radial-gradient(circle at center, ${accentColor}30, transparent)`,
            filter: "blur(0px)",
            transform: "translateZ(-20px)",
          }}
          animate={{
            opacity: isHovered ? 0.6 : 0.3,
            scale: isHovered ? 1.05 : 1,
          }}
        />
      </motion.div>
    </motion.div>
  )
}