// "use client"

// import { motion } from "framer-motion"
// import { SectionHeading } from "@/components/section-heading"
// import { AnimatedButton } from "@/components/animated-button"
// import { Target, Users, Lightbulb, Award } from "lucide-react"
// import Link from "next/link"

// const values = [
//   {
//     icon: Target,
//     title: "Mission Driven",
//     description: "Delivering excellence through innovative solutions",
//     color: "from-cyan-500 to-blue-500",
//   },
//   {
//     icon: Users,
//     title: "Client Focused",
//     description: "Your success is our priority",
//     color: "from-blue-500 to-purple-500",
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation First",
//     description: "Cutting-edge technology and creative thinking",
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     icon: Award,
//     title: "Quality Assured",
//     description: "Excellence in every line of code",
//     color: "from-pink-500 to-cyan-500",
//   },
// ]

// export function AboutPreview() {
//   return (
//     <section id="about" className="relative py-20 md:py-32">
//       <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//         <SectionHeading
//           title="Why Choose Aryan Soft"
//           subtitle="We combine technical expertise with creative innovation to deliver exceptional software solutions"
//         />

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
//           {values.map((value, index) => (
//             <motion.div
//               key={value.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="glass rounded-2xl p-6 text-center group hover-lift"
//             >
//               <motion.div
//                 whileHover={{ rotate: 360, scale: 1.1 }}
//                 transition={{ duration: 0.6 }}
//                 className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
//               >
//                 <value.icon className="w-8 h-8 text-white" />
//               </motion.div>
//               <h3 className="text-xl font-bold mb-2">{value.title}</h3>
//               <p className="text-white text-sm font-medium">{value.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="text-center mt-12"
//         >
//           <Link href="/about">
//             <AnimatedButton size="lg" showArrow>
//               Learn More About Us
//             </AnimatedButton>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { AnimatedButton } from "@/components/animated-button"
import { Target, Users, Lightbulb, Award } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "Delivering excellence through innovative solutions",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Your success is our priority",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Cutting-edge technology and creative thinking",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Excellence in every line of code",
    color: "from-pink-500 to-cyan-500",
  },
]

export function AboutPreview() {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <SectionHeading
          title="Why Choose Aryan Soft"
          subtitle="We combine technical expertise with creative innovation to deliver exceptional software solutions"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {values.map((value, index) => (
            <TiltCard key={value.title} index={index}>
              <div className="glass rounded-2xl p-6 text-center group hover-lift border-2 border-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg h-full flex flex-col relative overflow-hidden">
                {/* Inner Border Effect */}
                <div className="absolute inset-2 rounded-xl border-6 border-cyan-400/30 pointer-events-none"></div>
                
                <div className="flex-1 relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-white/80 text-sm font-medium leading-relaxed">{value.description}</p>
                </div>
                
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            </TiltCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/about">
            <AnimatedButton size="lg" showArrow>
              Learn More About Us
            </AnimatedButton>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// 3D Tilt Card Component
function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover="hover"
      className="cursor-pointer transform-gpu"
      onMouseMove={(e) => {
        if (!ref.current) return;
        const card = ref.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = (x - centerX) / 20;
        const rotateX = (centerY - y) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      }}
      onMouseLeave={() => {
        if (!ref.current) return;
        const card = ref.current;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      }}
    >
      {children}
    </motion.div>
  );
}