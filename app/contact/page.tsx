import { SectionHeading } from "@/components/section-heading"
import { ParticleBackground } from "@/components/particle-background"
import type { Metadata } from "next"
import { ContactPageClient } from "./contact-page-client"

export const metadata: Metadata = {
  title: "Contact Us - Aryan Soft | Get in Touch for Software Solutions",
  description:
    "Contact Aryan Soft for custom software development, mobile apps, cloud solutions, and digital transformation services. Get a free consultation and project quote today.",
  keywords:
    "contact Aryan Soft, software development inquiry, get quote, free consultation, contact software company, project inquiry",
  openGraph: {
    title: "Contact Us - Aryan Soft",
    description: "Get in touch for custom software solutions and digital transformation services.",
  },
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a project in mind? Let's discuss how we can help transform your business with innovative software solutions"
          />
        </div>
      </section>

      <ContactPageClient />
    </main>
  )
}
