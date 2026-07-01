"use client"

import React from "react"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"
import { ProjectsGrid } from "@/components/projects-grid"
import { BioImage } from "@/components/bio-image";
import { IntroAnimation } from "@/components/intro-animation";

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
      className="relative min-h-[88vh] flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Spotlight sutil que sigue el cursor */}
      <div
        className="hero-spotlight"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(247,237,57,0.10), transparent 70%)`,
        }}
      />

      <div className="relative z-10 text-center px-6">
        <span className="hero-reveal block text-xs uppercase tracking-[0.35em] text-muted-foreground mb-6">
          Portfolio
        </span>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
          <span className="hero-reveal block">MARÍA BORONAT</span>
          <span className="hero-reveal-delay block mt-4 text-xl md:text-2xl lg:text-3xl font-light opacity-70">
            Diseño Gráfico y Comunicación
          </span>
        </h1>
      </div>

      {/* Indicador de scroll */}
      <div className="hero-reveal-delay absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
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
    description: "Proyectos de diseño editorial, diseño 3D, comunicación visual e investigación tipográfica.",
    href: "/proyectos/diseno-grafico",
    image: "/images/generales/home-cover-grafico.jpg",
    imageStyle: "square",
  },
  {
    id: "corporativo",
    description: "Trabajos desde Marketing y Comunicación. Diseño, estrategia y automatización.",
    href: "/proyectos/corporativo",
    image: "/images/generales/home-cover-corporativo.jpg",
    imageStyle: "square",
  },
  {
    id: "indumentaria",
    description: "Diseño de indumentaria y experimentación visual desde el cuerpo.",
    href: "/proyectos/indumentaria-ilustracion",
    image: "/images/generales/home-cover-indumentaria.jpg",
    imageStyle: "square",
  },
  {
    id: "personales",
    description: "Exploraciones creativas y proyectos experimentales.",
    href: "/proyectos/personales",
    image: "/images/generales/home-cover-proyectos-personales.jpg",
    imageStyle: "square",
  },
  {
  id: "edicion-video",
  description: "Edición, post-producción y animación de piezas audiovisuales para redes, eventos y proyectos personales.",
  href: "/proyectos/edicion-video",
  image: "/images/generales/home-cover-ediciondevideo.jpg",
  colSpan: 2,
  imageStyle: "natural",
  isWide: true,  // ← AGREGAR ESTA LÍNEA
  },
];

// ==================== NUEVA SECCIÓN DE VIDEO ====================
function VideoPortfolioSection() {
  return (
    <ScrollReveal className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl tracking-tight mb-10 text-center">
          Mini presentación
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
          Video portfolio - Diseño IV
        </p>
      </div>
    </ScrollReveal>
  )
}

/* =========================
   ABOUT (BIO CON RETRATO CIRCULAR GRANDE SIN BORDE)
========================= */

function AboutSection() {
  return (
    <ScrollReveal className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
        
        {/* COMPONENTE BIOIMAGE REUTILIZABLE */}
        <div className="md:col-span-4">
          <BioImage size="medium" />
        </div>

        {/* TEXTO BIO */}
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-lg md:text-xl leading-relaxed mb-2">
            Estudiante de Diseño Gráfico y Comunicación en UCES.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Algunos sienten pasión por un artista, un famoso o un deporte. Hace poco me preguntaron cuál era la mía, y no supe qué responder. Me quedé pensando, hasta que entendí que mi pasión es lo que hago.
          </p>
          <Link
            href="/bio"
            className="link-underline text-xs uppercase tracking-widest transition-colors hover:text-brand mt-6 inline-block"
          >
            Leer más →
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
  return (
    <div className="pt-16">
      <IntroAnimation />
      <InteractiveHero />
      <ProjectsGrid projects={services} />
      <AboutSection />
      <VideoPortfolioSection /> {/* ← NUEVA SECCIÓN DE VIDEO */}
      <ContactSection />
    </div>
  );
}
