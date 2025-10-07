import { Hero3D } from "@/components/hero-3d"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedButton } from "@/components/animated-button"
import { StatsSection } from "@/components/stats-section"
import { ServicesPreview } from "@/components/services-preview"
import { AboutPreview } from "@/components/about-preview"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactPreview } from "@/components/contact-preview"
import { CTASection } from "@/components/cta-section"
import Image from "next/image"
import Link from "next/link"
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Hero3D />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40 animate-float-slow">
                <Image
                  src="/images/logo.png"
                  alt="Aryan Soft Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance animate-slide-up">
              <span className="gradient-text">Innovative Software</span>
              <br />
              <span className="text-foreground">Solutions</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-slide-up">
              Transform your business with cutting-edge technology and expert software development services
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link href="#contact">
                <AnimatedButton size="lg" showArrow>
                  Start Your Project
                </AnimatedButton>
              </Link>
              <Link href="#services">
                <AnimatedButton size="lg" variant="outline">
                  Explore Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Services Preview */}
      <div id="services">
        <ServicesPreview />
      </div>

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
