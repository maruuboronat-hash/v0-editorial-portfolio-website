"use client"

import React from "react"
import { useEffect, useRef, useState, type RefObject } from "react"
import { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
): { ref: RefObject<T | null>; isVisible: boolean } {
  const { threshold = 0.1, rootMargin = "0px 0px -80px 0px", triggerOnce = true } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

// Component wrapper for scroll reveal
interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  threshold?: number
  rootMargin?: string
  /** Reveal as soon as the component mounts, without requiring scroll into view. */
  immediate?: boolean
}

export function ScrollReveal({
  children,
  className = "",
  as: Component = "div",
  threshold,
  rootMargin,
  immediate = false,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold, rootMargin })
  const [mountVisible, setMountVisible] = useState(false)

  useEffect(() => {
    if (!immediate) return
    const raf = requestAnimationFrame(() => setMountVisible(true))
    return () => cancelAnimationFrame(raf)
  }, [immediate])

  const visible = immediate ? mountVisible : isVisible

  return (
    <Component
      ref={ref as RefObject<HTMLDivElement>}
      className={`scroll-reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Component>
  )
}
