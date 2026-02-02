"use client"

import React from "react"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"

/* =========================
   HERO (no se toca)
========================= */

const projects = [
  { id: 1, title: "Proyecto Alpha", category: "Identidad Visual" },
  { id: 2, title: "Proyecto Beta", category: "Editorial" },
  { id: 3, title: "Proyecto Gamma", category: "Packaging" },
  { id: 4, title: "Proyecto Delta", category: "Digital" },
]

/* =========================
   SERVICES (con imágenes)
========================= */

const services = [
  {
    id: "diseno-grafico",
    description:
      "Proyectos de diseño editorial, diseño 3D, comunicación visual e investigación tipográfica desarrollados durante la carrera de Diseño Gráfico y Comunicación.",
    href: "/proyectos/diseno-grafico",
    image: "/images/generales/home-cover-grafico",
  },
  {
    id: "corporativo",
    description:
      "Trabajos realizados desde el área de Marketing y Comunicación. Combino diseño, estrategia y automatización para mejorar procesos y comunicación visual interna.",
    href: "/proyectos/corporativo",
    image: "/images/generales/home-cover-corporativo.jpg",
  },
  {
    id: "indumentaria",
    description:
      "Serie de proyectos vinculados al diseño de indumentaria y la experimentación visual desde el cuerpo, la forma y la textura.",
    href: "/proyectos/indumentaria-ilustracion",
    image: "/images/generales/home-cover-indumentaria.jpg",
  },
  {
    id: "personales",
    description:
      "Exploraciones creativas y proyectos experimentales. Trabajos que nacen de la curiosidad y la libertad creativa.",
    href: "/proyectos/personales",
    image: "/images/generales/home-cover-proyectos-personales.jpg",
  },
]

function InteractiveHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })

    const sectionWidth = rect.width / projects.length
    const projectIndex = Math.floor(x / sectionWidth)
    setActiveProject(Math.min(projectIndex, projects.length - 1))
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center cursor-crosshair overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && activeProject !== null && (
        <div
          className="pointer-events-none absolute z-10 transition-all duration-200 ease-out"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="relative w-64 h-40 md:w-80 md:h-52 bg-muted overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest">
              {projects[activeProject].title}
            </div>
          </div>
        </div>
      )}

      <div className="relative z-20 text-center px-6">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-8xl tracking-tight text-foreground leading-none">
          <span className="block font-sans">MARIA BORONAT</span>
          <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl font-sans font-light tracking-wide opacity-70">
            Diseño Gráfico y Comunicación
          </span>
        </h1>
      </div>

      <div className="absolute inset-0 flex">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex-1 h-full"
            onMouseEnter={() => setActiveProject(index)}
          />
        ))}
      </div>
    </section>
  )
}

/* =========================
   SERVICES SECTION (IMÁGENES REALES)
========================= */

function ServicesSection() {
  return (
    <ScrollReveal className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-1">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="scroll-reveal-child group relative aspect-square overflow-hidden"
            >
              {/* Imagen */}
              <Image
                src={service.image}
                alt={service.id}
                fill
                className="object-cover"
                priority
              />

              {/* Overlay hover */}
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
   ABOUT + CONTACT (sin tocar)
========================= */

function AboutSection() {
  return (
    <ScrollReveal className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <div className="aspect-[3/4] bg-muted" />
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Soy diseñadora gráfica y directora de arte con base en Buenos Aires.
            </p>
            <Link
              href="/bio"
              className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              Leer más
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

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
