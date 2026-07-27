"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"
import {
  dictionaries,
  DEFAULT_LANGUAGE,
  type Language,
  type Dictionary,
} from "@/lib/dictionaries"

type LanguageContextValue = {
  /** Idioma actual: "es" | "en" */
  lang: Language
  /** Cambiar el idioma manualmente */
  setLang: (lang: Language) => void
  /** Alternar entre "es" y "en" */
  toggleLang: () => void
  /** Diccionario de textos del idioma actual */
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "portfolio-lang"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(DEFAULT_LANGUAGE)

  // Al montar, recuperamos el idioma guardado (si existe).
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === "es" || saved === "en") {
      setLangState(saved)
    }
  }, [])

  const setLang = useCallback((next: Language) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next
  }, [])

  const toggleLang = useCallback(() => {
    setLang(lang === "es" ? "en" : "es")
  }, [lang, setLang])

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggleLang,
    t: dictionaries[lang],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>")
  }
  return ctx
}
