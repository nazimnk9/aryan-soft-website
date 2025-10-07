import type { Metadata } from "next"
import { PortfolioClient } from "./portfolio-client"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}
export const metadata: Metadata = {
  title: "Portfolio - Aryan Soft | Our Projects & Case Studies",
  description:
    "Explore our portfolio of successful software projects including web applications, mobile apps, cloud solutions, and enterprise systems. See how we've helped businesses transform digitally.",
  keywords:
    "software portfolio, project showcase, case studies, web applications, mobile apps, success stories, Aryan Soft projects",
  openGraph: {
    title: "Portfolio - Aryan Soft",
    description: "Explore our portfolio of successful software projects and digital transformations.",
  },
}

export default function PortfolioPage() {
  return <PortfolioClient />
}
