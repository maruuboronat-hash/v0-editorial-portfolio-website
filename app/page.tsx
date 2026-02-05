"use client"

import React from "react"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"
import { ProjectsGrid } from "@/components/projects-grid" // <-- NUEVA IMPORTACIÓN

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
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative z-10 text-center px-6">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-8xl tracking-tight leading-none">
          <span className="block">MARÍA BORONAT</span>
          <span className="block mt-2 text-2xl md:text-3xl font-light opacity-70">
            Diseño Gráfico y Comunicación
          </span>
        </h1>
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
    description:
      "Proyectos de diseño editorial, diseño 3D, comunicación visual e investigación tipográfica.",
    href: "/proyectos/diseno-grafico",
    image: "/images/generales/home-cover-grafico.jpg",
  },
  {
    id: "corporativo",
    description:
      "Trabajos desde Marketing y Comunicación. Diseño, estrategia y automatización.",
    href: "/proyectos/corporativo",
    image: "/images/generales/home-cover-corporativo.jpg",
  },
  {
    id: "indumentaria",
    description:
      "Diseño de indumentaria y experimentación visual desde el cuerpo.",
    href: "/proyectos/indumentaria-ilustracion",
    image: "/images/generales/home-cover-indumentaria.jpg",
  },
  {
    id: "personales",
    description:
      "Exploraciones creativas y proyectos experimentales.",
    href: "/proyectos/personales",
    image: "/images/generales/home-cover-proyectos-personales.jpg",
  },
]

/* =========================
   ABOUT (BIO CON RETRATO)
========================= */

function AboutSection() {
  return (
    <ScrollReveal className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        
        {/* RETRATO */}
        <div className="md:col-span-4">
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            <Image
  src="/images/generales/BIO/Bio.png"  // <--- NUEVA RUTA
  alt="Bio María Boronat"
  fill
  className="object-cover"
  priority
/>
          </div>
        </div>

        {/* TEXTO BIO */}
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Estudiante de Diseño Gráfico y Comunicación en UCES, con foco en
            identidad visual, editorial y comunicación estratégica.
          </p>
          <Link
            href="/bio"
            className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
          >
            Leer más
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
      <InteractiveHero />
      {/* AQUÍ USAMOS EL COMPONENTE NUEVO. MIRÁ: LE PASAMOS LA LISTA "services" */}
      <ProjectsGrid projects={services} />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
