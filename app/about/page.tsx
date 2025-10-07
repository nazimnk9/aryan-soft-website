import type { Metadata } from "next"
import { AboutPageClient } from "./about-page-client"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}
export const metadata: Metadata = {
  title: "About Us - Aryan Soft | Our Story, Mission & Team",
  description:
    "Learn about Aryan Soft's journey, mission, values, and the expert team behind our innovative software solutions. Discover why businesses trust us for digital transformation.",
  keywords:
    "about Aryan Soft, software company, our team, company mission, company values, software development team, tech experts",
  openGraph: {
    title: "About Us - Aryan Soft",
    description: "Learn about our journey, mission, and the expert team behind innovative software solutions.",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
