"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  showArrow?: boolean
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, variant = "default", size = "default", showArrow = false, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button
          ref={ref}
          variant={variant}
          size={size}
          className={cn(
            "relative overflow-hidden group",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/0 before:via-primary/30 before:to-primary/0",
            "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
            className,
          )}
          {...props}
        >
          <span className="relative z-10 flex items-center gap-2">
            {children}
            {showArrow && (
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            )}
          </span>
        </Button>
      </motion.div>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"
