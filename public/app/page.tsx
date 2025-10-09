import { HeroSection } from "@/components/hero-section"
import { ParticleBackground } from "@/components/particle-background"
import { ServicesPreview } from "@/components/services-preview"
import { AboutPreview } from "@/components/about-preview"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactPreview } from "@/components/contact-preview"
import { CTASection } from "@/components/cta-section"
import LogoCarousel from "@/components/logo-carousel"
import { TechStack } from "@/components/tech-stack"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aryan Soft - Innovative Software Solutions | Home",
  description:
    "Leading software development company delivering custom applications, web solutions, and digital transformation services. Transform your business with cutting-edge technology.",
  openGraph: {
    title: "Aryan Soft - Innovative Software Solutions",
    description: "Transform your business with cutting-edge software development and digital solutions.",
  },
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />

      <HeroSection />

      <LogoCarousel />

      {/* Services Preview */}
      <div id="services">
        <ServicesPreview />
      </div>

      <TechStack />

      {/* About Preview */}
      <AboutPreview />

      {/* Portfolio Preview */}
      <PortfolioPreview />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact Preview */}
      <ContactPreview />

      {/* CTA Section */}
      <CTASection />
    </main>
  )
}
