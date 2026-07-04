"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      type="button"
      aria-label={t("backToTop")}
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-brand hover:text-brand ${
        visible ? "opacity-70 hover:opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  )
}
