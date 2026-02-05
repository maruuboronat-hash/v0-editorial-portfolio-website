"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/cv", label: "CV" },
  { href: "/bio", label: "Bio" },
  { href: "/contacto", label: "Contacto" },
]

function BuenosAiresClock() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const bsasTime = now.toLocaleTimeString("en-GB", {
        timeZone: "America/Argentina/Buenos_Aires",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      setTime(bsasTime)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
  <span className="font-heading text-xs tracking-wider text-muted-foreground">
      BSAS {time}
    </span>
  )
}

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="font-heading text-sm tracking-wider hover:opacity-70 transition-opacity">
          MAR BOR
        </Link>
        
        <nav className="flex items-center gap-6 md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs uppercase tracking-widest transition-colors hover:text-foreground ${
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <BuenosAiresClock />
        </div>
      </div>
    </header>
  )
}
