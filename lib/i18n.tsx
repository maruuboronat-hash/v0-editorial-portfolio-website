"use client"

import React, { createContext, useContext, useEffect, useState, useCallback } from "react"
import { ui, type Lang, type UIKey } from "@/lib/translations"

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: (key: UIKey) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "mb-lang"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es")

  // Cargar preferencia guardada al montar
  useEffect(() => {
    const stored = (typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY)) as Lang | null
    if (stored === "es" || stored === "en") {
      setLangState(stored)
    }
  }, [])

  // Sincronizar el atributo lang del <html> y persistir
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang)
    }
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggle = useCallback(() => setLangState((prev) => (prev === "es" ? "en" : "es")), [])

  const t = useCallback(
    (key: UIKey) => {
      return ui[lang][key] ?? ui.es[key] ?? key
    },
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}
