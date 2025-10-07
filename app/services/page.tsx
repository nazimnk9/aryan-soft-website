import type { Metadata } from "next"
import { ServicesPageClient } from "./services-page-client"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}
export const metadata: Metadata = {
  title: "Our Services - Aryan Soft | Custom Software Development",
  description:
    "Explore our comprehensive software development services including custom applications, mobile apps, cloud solutions, UI/UX design, and cybersecurity. Expert solutions for your business.",
  keywords:
    "software development services, custom software, mobile app development, cloud solutions, UI/UX design, cybersecurity, web development",
  openGraph: {
    title: "Our Services - Aryan Soft",
    description: "Comprehensive software development services to transform your business.",
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
