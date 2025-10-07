import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LoadingScreen } from "@/components/loading-screen"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Aryan Soft Ltd - Innovative Software Solutions | Custom Development",
  description:
    "Aryan Soft Ltd delivers cutting-edge software development services, custom applications, web solutions, and digital transformation. Transform your business with our expert team.",
  keywords:
    "software development, custom software, web development, mobile apps, digital transformation, IT solutions, Aryan Soft Ltd",
  authors: [{ name: "Aryan Soft Ltd" }],
  openGraph: {
    title: "Aryan Soft Ltd - Innovative Software Solutions",
    description: "Transform your business with cutting-edge software development and digital solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Aryan Soft Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Soft Ltd - Innovative Software Solutions",
    description: "Transform your business with cutting-edge software development and digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'Aryan Soft Ltd'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LoadingScreen />
          <Navigation />
          <div className="pt-20">{children}</div>
          <Footer />
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
