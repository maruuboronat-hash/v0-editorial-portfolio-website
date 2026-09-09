"use client"

import React from "react"
import { useState, useRef } from "react"
import Link from "next/link"
import { ContactSection } from "@/components/contact-section"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"
import { ProjectsGrid } from "@/components/projects-grid"
import { BioImage } from "@/components/bio-image";
import { IntroAnimation } from "@/components/intro-animation";
import { useLanguage } from "@/components/language-provider"
import { categoryCovers } from "@/lib/category-covers"
import { MarborLogo } from "@/components/marbor-logo"

/* =========================
   HERO
========================= */

const projects = [
  { id: 1, title: "Proyecto Alpha", category: "Identidad Visual" },
  { id: 2, title: "Proyecto Beta", category: "Editorial" },
  { id: 3, title: "Proyecto Gamma", category: "Packaging" },
  { id: 4, title: "Proyecto Delta", category: "Digital" },
]

function InteractiveHero() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Spotlight sutil que sigue el cursor */}
      <div
        className="hero-spotlight"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(253,3,1,0.18), transparent 65%)`,
        }}
      />

      <div className="relative z-10 text-center px-6">
        <h1 className="flex flex-col items-center">
          <span className="hero-reveal block w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px] text-foreground">
            <MarborLogo className="h-auto w-full" />
          </span>
          <span className="hero-reveal-delay block mt-4 text-2xl md:text-2xl lg:text-3xl font-light opacity-70">
            {t.home.subtitulo}
          </span>
        </h1>
        <span className="hero-reveal-delay-2 block text-xs uppercase tracking-[0.35em] text-muted-foreground mt-6">
          {t.home.portfolio}
        </span>
      </div>

      {/* Indicador de scroll */}
      <div className="hero-reveal-delay absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{t.home.scroll}</span>
        <span className="h-8 w-px bg-gradient-to-b from-brand to-transparent" />
      </div>
    </section>
  )
}

/* =========================
   LISTA DE SERVICIOS/PROYECTOS (LOS DATOS)
========================= */

const services = [
  {
    id: "diseno-grafico",
    href: "/proyectos/diseno-grafico",
    imageStyle: "square",
  },
  {
    id: "corporativo",
    href: "/proyectos/corporativo",
    imageStyle: "square",
  },
  {
    id: "indumentaria",
    href: "/proyectos/indumentaria-ilustracion",
    imageStyle: "square",
  },
  {
    id: "personales",
    href: "/proyectos/personales",
    imageStyle: "square",
  },
  {
    id: "edicion-video",
    href: "/proyectos/edicion-video",
    colSpan: 2,
    imageStyle: "natural",
    isWide: true,
  },
];

// ==================== NUEVA SECCIÓN DE VIDEO ====================
function VideoPortfolioSection() {
  const { t } = useLanguage()
  
  return (
    <ScrollReveal className="py-10 md:py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl tracking-tight mb-8 md:mb-10 text-center">
          {t.video.titulo}
        </h2>
        <div className="aspect-video relative bg-black rounded-lg overflow-hidden shadow-2xl">
          <video 
            src="/images/edicion-video/video-portfolio.mp4"
            controls
            className="w-full h-full object-contain"
            poster="/images/edicion-video/portada05.png"
          >
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
        <p className="mt-4 text-sm text-muted-foreground text-center">
          {t.video.descripcion}
        </p>
      </div>
    </ScrollReveal>
  )
}

/* =========================
   ABOUT (BIO CON RETRATO CIRCULAR GRANDE SIN BORDE)
========================= */

function AboutSection() {
  const { t } = useLanguage()
  
  return (
    <ScrollReveal className="py-10 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
        
        {/* COMPONENTE BIOIMAGE REUTILIZABLE */}
        <div className="md:col-span-4">
          <BioImage size="medium" />
        </div>

        {/* TEXTO BIO */}
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-xl md:text-xl leading-relaxed mb-3">
            {t.bio.texto1}
          </p>
          <p className="text-lg md:text-lg leading-relaxed text-muted-foreground">
            {t.bio.texto2}
          </p>
          <Link
            href="/bio"
            className="link-underline text-xs uppercase tracking-widest transition-colors hover:text-brand mt-6 inline-block"
          >
            {t.bio.leer_mas}
          </Link>
        </div>

      </div>
    </ScrollReveal>
  )
}

/* =========================
   PÁGINA PRINCIPAL (HOME)
========================= */

export default function HomePage() {
  const { t, lang } = useLanguage()

  // 🔥 AGREGAR DESCRIPCIONES Y PORTADA TRADUCIDAS A CADA SERVICIO
  const servicesWithTranslations = services.map(service => ({
    ...service,
    description: t.home.descripciones[service.id as keyof typeof t.home.descripciones],
    image: categoryCovers[service.id][lang],
  }))

  return (
    <div className="pt-16">
      <IntroAnimation />
      <InteractiveHero />
      <ProjectsGrid projects={servicesWithTranslations} />
      <AboutSection />
      <VideoPortfolioSection />
      <ContactSection />
    </div>
  )
}
