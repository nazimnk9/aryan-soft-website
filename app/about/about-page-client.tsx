// "use client"

// import { TeamMemberCard } from "@/components/team-member-card"
// import { ValueCard } from "@/components/value-card"
// import { SectionHeading } from "@/components/section-heading"
// import { ParticleBackground } from "@/components/particle-background"
// import { CTASection } from "@/components/cta-section"
// import { Target, Users, Lightbulb, Award, Heart, Zap, Shield, TrendingUp } from "lucide-react"
// import { motion } from "framer-motion"
// import Image from "next/image"

// const teamMembers = [
//   {
//     name: "Aryan Kumar",
//     role: "CEO & Founder",
//     bio: "Visionary leader with 15+ years of experience in software development and digital transformation.",
//     initials: "AK",
//     linkedin: "#",
//     twitter: "#",
//   },
//   {
//     name: "Priya Sharma",
//     role: "CTO",
//     bio: "Technology expert specializing in cloud architecture and scalable systems design.",
//     initials: "PS",
//     linkedin: "#",
//     github: "#",
//   },
//   {
//     name: "Rahul Verma",
//     role: "Head of Design",
//     bio: "Creative designer passionate about crafting beautiful and intuitive user experiences.",
//     initials: "RV",
//     linkedin: "#",
//     twitter: "#",
//   },
//   {
//     name: "Sneha Patel",
//     role: "Lead Developer",
//     bio: "Full-stack developer with expertise in modern web technologies and agile methodologies.",
//     initials: "SP",
//     linkedin: "#",
//     github: "#",
//   },
//   {
//     name: "Amit Singh",
//     role: "DevOps Engineer",
//     bio: "Infrastructure specialist ensuring seamless deployment and optimal system performance.",
//     initials: "AS",
//     linkedin: "#",
//     github: "#",
//   },
//   {
//     name: "Kavita Reddy",
//     role: "Project Manager",
//     bio: "Experienced PM dedicated to delivering projects on time and exceeding client expectations.",
//     initials: "KR",
//     linkedin: "#",
//     twitter: "#",
//   },
// ]

// const values = [
//   {
//     icon: Target,
//     title: "Mission-Driven",
//     description: "We're committed to transforming businesses through innovative technology solutions.",
//   },
//   {
//     icon: Users,
//     title: "Client-Focused",
//     description: "Your success is our success. We prioritize understanding and meeting your unique needs.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation First",
//     description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
//   },
//   {
//     icon: Award,
//     title: "Quality Excellence",
//     description: "We maintain the highest standards in every project we undertake.",
//   },
//   {
//     icon: Heart,
//     title: "Passionate Team",
//     description: "Our team loves what they do and it shows in the quality of our work.",
//   },
//   {
//     icon: Zap,
//     title: "Agile Approach",
//     description: "We adapt quickly to changes and deliver value through iterative development.",
//   },
//   {
//     icon: Shield,
//     title: "Security First",
//     description: "We prioritize security and data protection in every solution we build.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Continuous Growth",
//     description: "We invest in learning and development to stay at the forefront of technology.",
//   },
// ]

// export function AboutPageClient() {
//   return (
//     <main className="relative min-h-screen">
//       <ParticleBackground />

//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0 }}
//         className="relative py-20 md:py-32"
//       >
//         <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//           <div className="max-w-4xl mx-auto text-center space-y-8">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="flex justify-center mb-8"
//             >
//               <div className="relative w-32 h-32 animate-float-slow">
//                 <Image src="/images/logo.png" alt="Aryan Soft Logo" fill className="object-contain drop-shadow-2xl" />
//               </div>
//             </motion.div>

//             <SectionHeading
//               title="About Aryan Soft"
//               subtitle="We are a team of passionate technologists dedicated to transforming businesses through innovative software solutions"
//             />
//           </div>
//         </div>
//       </motion.section>

//       {/* Story Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="relative py-20"
//       >
//         <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//           <div className="max-w-4xl mx-auto">
//             <div className="glass rounded-3xl p-8 md:p-12 space-y-6">
//               <h2 className="text-3xl md:text-4xl font-bold gradient-text">Our Story</h2>
//               <p className="text-lg text-white text-muted-foreground leading-relaxed text-pretty">
//                 Founded in 2010, Aryan Soft began with a simple mission: to help businesses leverage technology to
//                 achieve their goals. What started as a small team of passionate developers has grown into a full-service
//                 software development company serving clients worldwide.
//               </p>
//               <p className="text-lg text-white text-muted-foreground leading-relaxed text-pretty">
//                 Over the years, we've completed 500+ projects across various industries, from startups to Fortune 500
//                 companies. Our commitment to excellence, innovation, and client satisfaction has made us a trusted
//                 partner for digital transformation.
//               </p>
//               <p className="text-lg text-white text-muted-foreground leading-relaxed text-pretty">
//                 Today, we continue to push the boundaries of what's possible with technology, helping our clients stay
//                 ahead in an ever-evolving digital landscape.
//               </p>
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Values Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//         className="relative py-20"
//       >
//         <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//           <SectionHeading title="Our Values" subtitle="The principles that guide everything we do" />

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
//             {values.map((value, index) => (
//               <motion.div
//                 key={value.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 1.0 + index * 0.08 }}
//               >
//                 <ValueCard {...value} delay={0} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Team Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 1.7 }}
//         className="relative py-20"
//       >
//         <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//           <SectionHeading
//             title="Meet Our Team"
//             subtitle="The talented individuals behind our success and your digital transformation"
//           />

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={member.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 1.9 + index * 0.08 }}
//               >
//                 <TeamMemberCard {...member} delay={0} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Timeline Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 2.4 }}
//         className="relative py-20"
//       >
//         <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//           <SectionHeading title="Our Journey" subtitle="Key milestones in our growth story" />

//           <div className="max-w-3xl mx-auto mt-16 space-y-8">
//             {[
//               {
//                 year: "2010",
//                 title: "Company Founded",
//                 description: "Started with a team of 5 passionate developers",
//               },
//               {
//                 year: "2013",
//                 title: "First Major Client",
//                 description: "Secured our first Fortune 500 client partnership",
//               },
//               {
//                 year: "2016",
//                 title: "International Expansion",
//                 description: "Opened offices in US and Europe",
//               },
//               {
//                 year: "2019",
//                 title: "500+ Projects",
//                 description: "Celebrated completing our 500th successful project",
//               },
//               {
//                 year: "2022",
//                 title: "AI Innovation Lab",
//                 description: "Launched dedicated AI and ML research division",
//               },
//               {
//                 year: "2025",
//                 title: "Industry Leader",
//                 description: "Recognized as a top software development company",
//               },
//             ].map((milestone, index) => (
//               <motion.div
//                 key={milestone.year}
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 2.6 + index * 0.1 }}
//                 className="flex gap-6 items-start"
//               >
//                 <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground">
//                   {milestone.year}
//                 </div>
//                 <div className="flex-1 glass rounded-2xl p-6">
//                   <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
//                   <p className="text-muted-foreground text-white">{milestone.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* CTA Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 3.2 }}
//       >
//         <CTASection />
//       </motion.div>
//     </main>
//   )
// }


"use client"

import { TeamMemberCard } from "@/components/team-member-card"
import { ValueCard } from "@/components/value-card"
import { SectionHeading } from "@/components/section-heading"
import { ParticleBackground } from "@/components/particle-background"
import { CTASection } from "@/components/cta-section"
import { Target, Users, Lightbulb, Award, Heart, Zap, Shield, TrendingUp, Linkedin, Facebook } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const teamMembers = [
  {
    name: "Noor Mohammad",
    role: "Managing Director",
    bio: "Visionary leader with extensive experience in software development and business strategy. Driving innovation and excellence across all projects.",
    initials: "NM",
    linkedin: "https://www.linkedin.com/in/noor-mohammad-093137222/",
    facebook: "https://www.facebook.com/noor.muhammad.203492/",
  },
  {
    name: "Md. Najmul Hasan",
    role: "Director",
    bio: "Technology expert specializing in project management and client relations. Ensuring seamless delivery and client satisfaction.",
    initials: "NH",
    linkedin: "https://www.linkedin.com/in/najmul1996/",
    facebook: "https://www.facebook.com/najmul.hasan.902968?mibextid=wwXIfr",
  },
]

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to transforming businesses through innovative technology solutions that drive real results.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our success. We prioritize understanding and meeting your unique needs and objectives.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions that give you competitive advantage.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in every project we undertake, ensuring reliability and performance.",
  },
]

const milestones = [
  {
    year: "2025",
    title: "Company Founded",
    description: "Started with a vision to deliver exceptional software solutions and transform businesses through technology.",
  },
  {
    year: "2025",
    title: "First Major Client",
    description: "Secured our first major client partnership and delivered outstanding results that exceeded expectations.",
  },
]

export function AboutPageClient() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="relative py-20 md:py-32"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="relative w-32 h-32 animate-float-slow p-2">
                <Image 
                  src="/images/logo.png" 
                  alt="Aryan Soft Logo" 
                  fill 
                  className="object-contain drop-shadow-2xl" 
                />
              </div>
            </motion.div>

            <SectionHeading
              title="About Aryan Soft"
              subtitle="We are a team of passionate technologists dedicated to transforming businesses through innovative software solutions"
            />
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative py-20"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl p-8 md:p-12 space-y-6 border-2 border-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg relative overflow-hidden">
              {/* Inner Border Effect */}
              <div className="absolute inset-3 rounded-2xl border-6 border-cyan-400/30 pointer-events-none"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold gradient-text relative z-10">Our Story</h2>
              <div className="space-y-4 relative z-10">
                <p className="text-lg text-white/80 leading-relaxed text-pretty">
                  Founded in 2025, Aryan Soft began with a simple mission: to help businesses leverage technology to
                  achieve their goals. What started as a small team of passionate developers has grown into a full-service
                  software development company serving clients worldwide.
                </p>
                <p className="text-lg text-white/80 leading-relaxed text-pretty">
                  Our commitment to excellence, innovation, and client satisfaction has made us a trusted
                  partner for digital transformation from the very beginning. We believe in building lasting relationships
                  and delivering solutions that make a real impact.
                </p>
                <p className="text-lg text-white/80 leading-relaxed text-pretty">
                  Today, we continue to push the boundaries of what's possible with technology, helping our clients stay
                  ahead in an ever-evolving digital landscape with cutting-edge solutions and unparalleled support.
                </p>
              </div>
              
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="relative py-20"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <SectionHeading title="Our Values" subtitle="The principles that guide everything we do" />

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
            {values.map((value, index) => (
              <TiltCard key={value.title} index={index}>
                <div className="rounded-2xl p-8 text-center hover-lift border-2 border-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg h-full flex flex-col relative overflow-hidden group">
                  {/* Inner Border Effect */}
                  <div className="absolute inset-2 rounded-xl border-6 border-cyan-400/30 pointer-events-none"></div>
                  
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">{value.title}</h3>
                    <p className="text-white/80 leading-relaxed text-pretty">{value.description}</p>
                  </div>
                  
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="relative py-20"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The talented individuals behind our success and your digital transformation"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <TiltCard key={member.name} index={index}>
                <div className="rounded-2xl p-8 text-center hover-lift border-2 border-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg h-full relative overflow-hidden group">
                  {/* Inner Border Effect */}
                  <div className="absolute inset-2 rounded-xl border-6 border-cyan-400/30 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl border-4 border-white/20">
                      {member.initials}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                    <p className="text-cyan-300 font-semibold mb-4 text-lg">{member.role}</p>
                    <p className="text-white/80 mb-6 leading-relaxed text-pretty">{member.bio}</p>
                    <div className="flex justify-center space-x-4">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 border-2 border-blue-400/30"
                      >
                        <Linkedin className="w-6 h-6 text-white" />
                      </a>
                      <a 
                        href={member.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 flex items-center justify-center transition-all duration-300 transform hover:scale-110 border-2 border-blue-600/30"
                      >
                        <Facebook className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="relative py-20"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <SectionHeading title="Our Journey" subtitle="Key milestones in our growth story" />

          <div className="max-w-3xl mx-auto mt-16 space-y-8">
            {milestones.map((milestone, index) => (
              <TiltCard key={milestone.title} index={index}>
                <div className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center font-bold text-white text-lg relative">
                    {milestone.year}
                    {/* Inner Border for Year */}
                    <div className="absolute inset-1 rounded-full border-cyan-300/40 pointer-events-none"></div>
                  </div>
                  <div className="flex-1 rounded-2xl p-8 hover-lift border-2 border-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg relative overflow-hidden min-h-[120px] flex items-center">
                    {/* Inner Border Effect */}
                    <div className="absolute inset-2 rounded-xl border-6 border-cyan-400/30 pointer-events-none"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-2 text-white">{milestone.title}</h3>
                      <p className="text-white/80 leading-relaxed">{milestone.description}</p>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.0 }}
      >
        <CTASection />
      </motion.div>
    </main>
  )
}

// 3D Tilt Card Component
function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
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