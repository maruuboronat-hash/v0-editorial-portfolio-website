"use client"

import React from "react"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"

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
  const [activeProject, setActiveProject] = useState<number | null>(null)
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
   SERVICES (con imágenes)
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

function ServicesSection() {
  return (
    <ScrollReveal className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-1">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative aspect-square overflow-hidden bg-white"
            >
              <Image
                src={service.image}
                alt={service.id}
                fill
                className="object-contain"
                priority
              />

              <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-sm md:text-base text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}

/* =========================
   ABOUT
========================= */

function AboutSection() {
  return (
    <ScrollReveal className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg md:text-xl leading-relaxed mb-6 max-w-3xl">
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
    </ScrollReveal>
  )
}

/* =========================
   PAGE
========================= */

export default function HomePage() {
  return (
    <div className="pt-16">
      <InteractiveHero />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
