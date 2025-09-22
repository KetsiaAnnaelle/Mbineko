"use client"

import React from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

interface AnimatedElementProps {
  children: React.ReactNode
  animation?: "fadeUp" | "slideInLeft" | "slideInRight" | "scaleIn" | "fadeIn"
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  triggerOnce?: boolean
}

export default function AnimatedElement({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  className = "",
  threshold = 0.1,
  triggerOnce = true,
}: AnimatedElementProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold, triggerOnce })

  const animationStyles = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(animation, isVisible),
    transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
  }

  return (
    <div ref={elementRef as React.RefObject<HTMLDivElement>} style={animationStyles} className={className}>
      {children}
    </div>
  )
}

function getTransform(animation: string, isVisible: boolean): string {
  if (isVisible) return "none"

  switch (animation) {
    case "fadeUp":
      return "translateY(30px)"
    case "slideInLeft":
      return "translateX(-30px)"
    case "slideInRight":
      return "translateX(30px)"
    case "scaleIn":
      return "scale(0.9)"
    default:
      return "none"
  }
}

// Staggered animation component
interface StaggeredAnimationProps {
  children: React.ReactNode[]
  staggerDelay?: number
  animation?: "fadeUp" | "slideInLeft" | "slideInRight" | "scaleIn"
  className?: string
}

export function StaggeredAnimation({
  children,
  staggerDelay = 100,
  animation = "fadeUp",
  className = "",
}: StaggeredAnimationProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <div ref={elementRef as React.RefObject<HTMLDivElement>} className={className}>
      {children.map((child, index) => (
        <AnimatedElement
          key={index}
          animation={animation}
          delay={isVisible ? index * staggerDelay : 0}
          triggerOnce={true}
        >
          {child}
        </AnimatedElement>
      ))}
    </div>
  )
}

// Parallax component
interface ParallaxElementProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxElement({ children, speed = 0.5, className = "" }: ParallaxElementProps) {
  const [offset, setOffset] = React.useState(0)
  const elementRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setOffset(rate)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={elementRef} style={{ transform: `translateY(${offset}px)` }} className={className}>
      {children}
    </div>
  )
}
