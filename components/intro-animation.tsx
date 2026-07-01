"use client"

import { useEffect, useState } from "react"

export function IntroAnimation() {
  const [show, setShow] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Solo se muestra una vez por sesión para no molestar al navegar
    const seen = sessionStorage.getItem("intro-seen")
    if (seen) return

    setShow(true)
    document.body.style.overflow = "hidden"

    const exitTimer = setTimeout(() => setExiting(true), 2000)
    const doneTimer = setTimeout(() => {
      setShow(false)
      document.body.style.overflow = ""
      sessionStorage.setItem("intro-seen", "1")
    }, 2900)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
      document.body.style.overflow = ""
    }
  }, [])

  if (!show) return null

  return (
    <div className={`intro-overlay ${exiting ? "intro-exiting" : ""}`} aria-hidden="true">
      <div className="intro-content">
        <span className="intro-line-mask">
          <span className="intro-line intro-word-1">MARÍA</span>
        </span>
        <span className="intro-line-mask">
          <span className="intro-line intro-word-2">BORONAT</span>
        </span>
        <span className="intro-bar" />
        <span className="intro-sub">Diseño Gráfico y Comunicación</span>
      </div>
    </div>
  )
}
