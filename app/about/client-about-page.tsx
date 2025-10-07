"use client"

import { TeamMemberCard } from "@/components/team-member-card"
import { ValueCard } from "@/components/value-card"
import { SectionHeading } from "@/components/section-heading"
import { ParticleBackground } from "@/components/particle-background"
import { CTASection } from "@/components/cta-section"
import { Target, Users, Lightbulb, Award, Heart, Zap, Shield, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    name: "Aryan Kumar",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years of experience in software development and digital transformation.",
    initials: "AK",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    bio: "Technology expert specializing in cloud architecture and scalable systems design.",
    initials: "PS",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Rahul Verma",
    role: "Head of Design",
    bio: "Creative designer passionate about crafting beautiful and intuitive user experiences.",
    initials: "RV",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sneha Patel",
    role: "Lead Developer",
    bio: "Full-stack developer with expertise in modern web technologies and agile methodologies.",
    initials: "SP",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Amit Singh",
    role: "DevOps Engineer",
    bio: "Infrastructure specialist ensuring seamless deployment and optimal system performance.",
    initials: "AS",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Kavita Reddy",
    role: "Project Manager",
    bio: "Experienced PM dedicated to delivering projects on time and exceeding client expectations.",
    initials: "KR",
    linkedin: "#",
    twitter: "#",
  },
]

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to transforming businesses through innovative technology solutions.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our success. We prioritize understanding and meeting your unique needs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in every project we undertake.",
  },
  {
    icon: Heart,
    title: "Passionate Team",
    description: "Our team loves what they do and it shows in the quality of our work.",
  },
  {
    icon: Zap,
    title: "Agile Approach",
    description: "We adapt quickly to changes and deliver value through iterative development.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize security and data protection in every solution we build.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "We invest in learning and development to stay at the forefront of technology.",
  },
]

export default function ClientAboutPage() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="relative w-32 h-32 animate-float-slow">
                <Image src="/images/logo.png" alt="Aryan Soft Logo" fill className="object-contain drop-shadow-2xl" />
              </div>
            </motion.div>

            <SectionHeading
              title="About Aryan Soft"
              subtitle="We are a team of passionate technologists dedicated to transforming businesses through innovative software solutions"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 md:p-12 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Founded in 2010, Aryan Soft began with a simple mission: to help businesses leverage technology to
                achieve their goals. What started as a small team of passionate developers has grown into a full-service
                software development company serving clients worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Over the years, we've completed 500+ projects across various industries, from startups to Fortune 500
                companies. Our commitment to excellence, innovation, and client satisfaction has made us a trusted
                partner for digital transformation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Today, we continue to push the boundaries of what's possible with technology, helping our clients stay
                ahead in an ever-evolving digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Values" subtitle="The principles that guide everything we do" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((value, index) => (
              <ValueCard key={value.title} {...value} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The talented individuals behind our success and your digital transformation"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} {...member} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Journey" subtitle="Key milestones in our growth story" />

          <div className="max-w-3xl mx-auto mt-16 space-y-8">
            {[
              { year: "2010", title: "Company Founded", description: "Started with a team of 5 passionate developers" },
              {
                year: "2013",
                title: "First Major Client",
                description: "Secured our first Fortune 500 client partnership",
              },
              {
                year: "2016",
                title: "International Expansion",
                description: "Opened offices in US and Europe",
              },
              {
                year: "2019",
                title: "500+ Projects",
                description: "Celebrated completing our 500th successful project",
              },
              {
                year: "2022",
                title: "AI Innovation Lab",
                description: "Launched dedicated AI and ML research division",
              },
              {
                year: "2025",
                title: "Industry Leader",
                description: "Recognized as a top software development company",
              },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground">
                  {milestone.year}
                </div>
                <div className="flex-1 glass rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  )
}
