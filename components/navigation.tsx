"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedButton } from "@/components/animated-button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("/")
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      if (pathname === "/") {
        const sections = ["services", "portfolio", "about", "contact"]
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(`/#${section}`)
              return
            }
          }
        }

        if (window.scrollY < 100) {
          setActiveSection("/")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname)
    }
  }, [pathname])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      const id = href.substring(2)

      setActiveSection(href)

      if (pathname !== "/") {
        router.push("/")
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      } else {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
      setIsMobileMenuOpen(false)
    } else if (href === "/") {
      e.preventDefault()
      setActiveSection("/")
      if (pathname !== "/") {
        router.push("/")
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass shadow-lg py-3" : "bg-transparent py-4",
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="relative w-28 h-28 md:w-36 md:h-36 flex-shrink-0"
            >
              <Image
                src="/images/logo.png"
                alt="Aryan Soft"
                fill
                className="object-contain drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-cyan-400 cursor-pointer text-white",
                  activeSection === link.href && "text-cyan-400",
                )}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
              <AnimatedButton showArrow>Get Started</AnimatedButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden mt-4"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                <div className="absolute inset-0 backdrop-blur-xl bg-background/80" />
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/30" />

                <div className="relative py-6 px-4 space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={cn(
                          "block py-3 px-4 text-lg font-medium transition-all rounded-lg cursor-pointer text-white",
                          activeSection === link.href
                            ? "text-cyan-400 bg-primary/10 border-l-4 border-primary"
                            : "hover:text-cyan-400 hover:bg-primary/5",
                        )}
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="pt-4 px-4"
                  >
                    <a href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
                      <AnimatedButton className="w-full" showArrow>
                        Get Started
                      </AnimatedButton>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
