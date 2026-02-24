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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        {/* MAR BOR (siempre visible a la izquierda) */}
        <Link href="/" className="font-heading text-sm tracking-wider hover:opacity-70 transition-opacity">
          MAR BOR
        </Link>
        
        {/* Desktop: Links centrados */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
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

        {/* Desktop: Hora a la derecha */}
        <div className="hidden md:block">
          <BuenosAiresClock />
        </div>

        {/* Botón hamburguesa para móvil (solo visible en móvil) */}
        <button 
          className="block md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menú desplegable para móvil */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border md:hidden">
            <nav className="flex flex-col items-center py-4">
              {/* Excluimos Home del menú móvil porque MAR BOR ya lleva a home */}
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 text-sm uppercase tracking-widest transition-colors hover:text-foreground ${
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2">
                <BuenosAiresClock />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
