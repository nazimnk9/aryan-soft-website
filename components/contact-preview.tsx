"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { AnimatedButton } from "@/components/animated-button"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "info@aryansoft.com",
    link: "mailto:info@aryansoft.com",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Silicon Valley, CA",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    value: "Available 24/7",
    color: "from-pink-500 to-cyan-500",
  },
]

export function ContactPreview() {
  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Let's Start Your Project"
          subtitle="Get in touch with us to discuss how we can help transform your business with innovative software solutions"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center group hover-lift"
            >
              {method.link ? (
                <a href={method.link} className="block">
                  <ContactMethodContent method={method} />
                </a>
              ) : (
                <ContactMethodContent method={method} />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/contact">
            <AnimatedButton size="lg" showArrow>
              Contact Us Now
            </AnimatedButton>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ContactMethodContent({ method }: { method: (typeof contactMethods)[0] }) {
  return (
    <>
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
      >
        <method.icon className="w-7 h-7 text-white" />
      </motion.div>
      <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
      <p className="text-muted-foreground text-sm">{method.value}</p>
    </>
  )
}
