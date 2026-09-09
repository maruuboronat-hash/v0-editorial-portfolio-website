"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { categoryCovers } from "@/lib/category-covers"
import { MarborLogo } from "@/components/marbor-logo"

export function IntroAnimation() {
  const { lang } = useLanguage()
  const coverImages = Object.values(categoryCovers).map(cover => cover[lang])
  const [show, setShow] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Solo se muestra una vez por sesión para no molestar al navegar
    const seen = sessionStorage.getItem("intro-seen")
    if (seen) return

    setShow(true)
    document.body.style.overflow = "hidden"

    const exitTimer = setTimeout(() => setExiting(true), 2400)
    const doneTimer = setTimeout(() => {
      setShow(false)
      document.body.style.overflow = ""
      sessionStorage.setItem("intro-seen", "1")
    }, 3300)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
      document.body.style.overflow = ""
    }
  }, [])

  if (!show) return null

  return (
    <div className={`intro-overlay ${exiting ? "intro-exiting" : ""}`} aria-hidden="true">
      {/* Tira de portadas que aparecen y se desvanecen */}
      <div className="intro-covers">
        {coverImages.map((src, i) => (
          <span
            key={src}
            className="intro-cover"
            style={{ animationDelay: `${0.15 + i * 0.1}s` }}
          >
            <img src={src || "/placeholder.svg"} alt="" />
          </span>
        ))}
      </div>

      <div className="intro-content">
        <span className="intro-logo-mask">
          <MarborLogo animated />
        </span>
        <span className="intro-bar" />
        <span className="intro-sub">Diseño Gráfico y Comunicación</span>
      </div>
    </div>
  )
}
