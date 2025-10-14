"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="relative bg-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-4 py-16 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Brand Section */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center justify-center gap-3 mb-6">
              <motion.div
                // whileHover={{ rotate: 360, scale: 1.1 }}
                // transition={{ duration: 0.6 }}
                className="relative w-32 h-32 md:w-40 md:h-40"
              >
                <Image
                  src="/images/logo.png"
                  alt="Aryan Soft"
                  fill
                  className="object-contain drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                />
              </motion.div>
            </Link>
            <p className="text-lg text-white font-medium mb-8 text-pretty max-w-2xl mx-auto">
              Transforming businesses through innovative software solutions and cutting-edge technology.
            </p>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a
                href="mailto:info@aryansoft.com"
                className="flex flex-col items-center gap-2 text-white hover:text-cyan-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">info@aryansoft.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex flex-col items-center gap-2 text-white hover:text-cyan-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">+1 (555) 123-4567</span>
              </a>
              <div className="flex flex-col items-center gap-2 text-white">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-center">House:470, Road:8, Baridhara DOHS, Dhaka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-6">
          <p className="text-sm text-white font-medium">
            © {new Date().getFullYear()} Aryan Soft Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 flex items-center justify-center transition-colors border border-cyan-500/30 hover:border-cyan-500/50"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-cyan-400" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
