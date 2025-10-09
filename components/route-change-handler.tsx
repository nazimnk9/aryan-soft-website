"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function RouteChangeHandler() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }, [pathname])

  return null
}
