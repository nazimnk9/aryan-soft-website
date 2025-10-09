"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { SectionHeading } from "@/components/section-heading"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content:
      "Aryan Soft transformed our vision into reality. Their expertise in custom software development exceeded our expectations.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "CTO, DataFlow Systems",
    content:
      "Outstanding team with exceptional technical skills. They delivered our cloud migration project on time and within budget.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, InnovateCo",
    content:
      "The mobile app they built for us has received incredible user feedback. Highly professional and responsive team.",
    rating: 5,
    initials: "ER",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from businesses we've helped transform"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard key={testimonial.name} delay={index * 0.1}>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-white mb-6 text-pretty font-medium">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-white/80">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
