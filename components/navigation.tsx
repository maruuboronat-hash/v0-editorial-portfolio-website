"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // El próximo idioma es el que se activará al hacer click.
  const nextLang = lang === "es" ? "en" : "es"

  return (
    <button
      type="button"
      aria-label={nextLang === "en" ? "Switch to English" : "Cambiar a español"}
      onClick={toggleLang}
      className="flex h-9 min-w-9 items-center justify-center rounded-full border border-border px-3 font-heading text-xs uppercase tracking-widest text-foreground transition-colors hover:border-brand hover:text-brand"
    >
      {mounted ? lang.toUpperCase() : <span className="h-4 w-4" />}
    </button>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-brand hover:text-brand"
    >
      {mounted ? (
        isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  )
}

// "key" apunta a la entrada correspondiente en dictionaries[lang].nav
const navItems = [
  { href: "/", key: "home" },
  { href: "/proyectos", key: "proyectos" },
  { href: "/cv", key: "cv" },
  { href: "/bio", key: "bio" },
  { href: "/contacto", key: "contacto" },
] as const

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
  const { t } = useLanguage()

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
              className={`link-underline text-xs uppercase tracking-widest transition-colors hover:text-foreground ${
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <span className="inline-flex items-center gap-1.5">
                {pathname === item.href && (
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                )}
                {t.nav[item.key]}
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop: Hora + toggle a la derecha */}
        <div className="hidden md:flex items-center gap-5">
          <BuenosAiresClock />
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Móvil: toggle + hamburguesa */}
        <div className="flex items-center gap-3 md:hidden">
        <ThemeToggle />
        <LanguageToggle />
        <button 
          className="text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        </div>

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
