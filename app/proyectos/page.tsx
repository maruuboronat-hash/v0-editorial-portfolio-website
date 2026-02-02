"use client"

import Link from "next/link"
import { ContactSection } from "@/components/contact-section"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"

const categories = [
  {
    id: "diseno-grafico",
    description: "Proyectos de diseno editorial, diseno 3D, comunicacion visual e investigacion tipografica desarrollados durante la carrera de Diseno Grafico y Comunicacion.",
  },
  {
    id: "corporativo",
    description: "Trabajos realizados desde el area de Marketing y Comunicacion. Combino diseno, estrategia y automatizacion para mejorar procesos y comunicacion visual interna.",
  },
  {
    id: "indumentaria-ilustracion",
    description: "Serie de proyectos vinculados al diseno de indumentaria y la experimentacion visual desde el cuerpo, la forma y la textura.",
  },
  {
    id: "personales",
    description: "Exploraciones creativas y proyectos experimentales. Trabajos que nacen de la curiosidad y la libertad creativa.",
  },
]

export default function ProyectosPage() {
  return (
    <div className="pt-24 min-h-screen">
      <ScrollReveal as="header" className="px-6 md:px-12 mb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="scroll-reveal-child font-heading text-4xl md:text-6xl tracking-tight mb-6">
            Proyectos
          </h1>
          <p className="scroll-reveal-child text-lg text-muted-foreground max-w-2xl">
            Una seleccion de trabajos organizados por categoria. 
            Cada proyecto cuenta su propia historia visual.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-1">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/proyectos/${category.id}`}
                className="scroll-reveal-child group relative bg-muted aspect-square overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground text-xs uppercase tracking-widest opacity-30">
                    {category.id}
                  </span>
                </div>
                
                {/* Hover overlay with description */}
                <div className="absolute inset-0 bg-foreground/90 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-background text-sm md:text-base text-center leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ContactSection />
    </div>
  )
}
