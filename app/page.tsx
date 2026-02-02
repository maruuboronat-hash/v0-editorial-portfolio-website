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
    image: "/images/generales/home-cover-grafico.jpg",
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

/* =========================
   SERVICES SECTION (IMÁGENES BIEN MOSTRADAS)
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
              className="scroll-reveal-child group relative aspect-square overflow-hidden bg-white"
            >
              {/* Imagen SIN recorte */}
              <Image
                src={service.image}
                alt={service.id}
                fill
                className="object-contain"
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
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
