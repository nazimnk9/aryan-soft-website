"use client"

import { ServiceCardDetailed } from "@/components/service-card-detailed"
import { SectionHeading } from "@/components/section-heading"
import { ParticleBackground } from "@/components/particle-background"
import { CTASection } from "@/components/cta-section"
import {
  Code,
  Smartphone,
  Cloud,
  Database,
  Palette,
  Shield,
  Cpu,
  Globe,
  Zap,
  BarChart,
  Lock,
  Layers,
} from "lucide-react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed specifically for your business needs, built with modern technologies and best practices.",
    features: [
      "Enterprise application development",
      "Legacy system modernization",
      "API development and integration",
      "Microservices architecture",
      "Scalable and maintainable code",
    ],
    technologies: ["React", "Node.js", "Python", "Java", ".NET", "Go"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    features: [
      "iOS and Android native apps",
      "Cross-platform development",
      "Progressive Web Apps (PWA)",
      "App Store optimization",
      "Ongoing maintenance and updates",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Comprehensive cloud services including migration, infrastructure setup, and optimization for maximum performance.",
    features: [
      "Cloud migration strategy",
      "Infrastructure as Code (IaC)",
      "Serverless architecture",
      "Container orchestration",
      "Cost optimization",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    icon: Database,
    title: "Data Analytics & AI",
    description:
      "Transform your data into actionable insights with advanced analytics, machine learning, and artificial intelligence.",
    features: [
      "Business intelligence dashboards",
      "Predictive analytics",
      "Machine learning models",
      "Data pipeline automation",
      "Real-time data processing",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Apache Spark", "Power BI"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that users love, combining aesthetic appeal with functional excellence.",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing",
      "Design system creation",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets, data, and infrastructure from threats.",
    features: [
      "Security audits and assessments",
      "Penetration testing",
      "Compliance management",
      "Incident response planning",
      "Security training",
    ],
    technologies: ["OWASP", "Burp Suite", "Metasploit", "Wireshark", "Nessus"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with the latest frameworks and technologies.",
    features: [
      "Responsive web design",
      "E-commerce solutions",
      "Content management systems",
      "SEO optimization",
      "Performance optimization",
    ],
    technologies: ["Next.js", "React", "Vue.js", "WordPress", "Shopify"],
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description:
      "Connect and manage your devices with intelligent IoT solutions for smart homes, cities, and industries.",
    features: [
      "Device connectivity",
      "Real-time monitoring",
      "Data collection and analysis",
      "Remote device management",
      "Edge computing",
    ],
    technologies: ["MQTT", "Arduino", "Raspberry Pi", "Azure IoT", "AWS IoT"],
  },
  {
    icon: Zap,
    title: "DevOps & Automation",
    description: "Streamline your development and deployment processes with modern DevOps practices and automation.",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure automation",
      "Monitoring and logging",
      "Automated testing",
      "Release management",
    ],
    technologies: ["Jenkins", "GitLab CI", "Terraform", "Ansible", "Prometheus"],
  },
  {
    icon: BarChart,
    title: "Digital Transformation",
    description: "Guide your organization through digital transformation with strategic planning and implementation.",
    features: [
      "Digital strategy consulting",
      "Process automation",
      "Change management",
      "Technology roadmap",
      "ROI optimization",
    ],
    technologies: ["Agile", "Scrum", "Lean", "Six Sigma", "ITIL"],
  },
  {
    icon: Lock,
    title: "Blockchain Development",
    description: "Build secure, decentralized applications and smart contracts on various blockchain platforms.",
    features: [
      "Smart contract development",
      "DApp creation",
      "Token development",
      "Blockchain integration",
      "Security audits",
    ],
    technologies: ["Ethereum", "Solidity", "Web3.js", "Hyperledger", "Polygon"],
  },
  {
    icon: Layers,
    title: "Enterprise Solutions",
    description: "Comprehensive enterprise software solutions including ERP, CRM, and custom business applications.",
    features: [
      "ERP implementation",
      "CRM customization",
      "Business process automation",
      "System integration",
      "Training and support",
    ],
    technologies: ["SAP", "Salesforce", "Microsoft Dynamics", "Oracle", "Odoo"],
  },
]

export function ServicesPageClient() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive software solutions designed to transform your business and drive innovation through cutting-edge technology"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCardDetailed key={service.title} {...service} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Process" subtitle="How we deliver exceptional results for every project" />

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your needs and define project requirements",
              },
              {
                step: "02",
                title: "Design",
                description: "Create wireframes, prototypes, and technical architecture",
              },
              {
                step: "03",
                title: "Development",
                description: "Build your solution using agile methodologies",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Deploy, test, and provide ongoing support",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold gradient-text mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-pretty">{process.description}</p>
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
