"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

/* =========================
   TYPES
========================= */

export type SectionType =
  | { type: "full-width-image"; src: string; alt?: string; caption?: string }
  | { type: "centered-image"; src: string; alt?: string; caption?: string; width?: "small" | "medium" | "large" }
  | { type: "single-column-stack"; images: Array<{ src: string; alt?: string; caption?: string }> }
  | { type: "two-column-grid"; images: Array<{ src: string; alt?: string }> }
  | { type: "three-column-grid"; images: Array<{ src: string; alt?: string }> }
  | { type: "text"; title?: string; content: string }
  | { type: "video-embed"; src: string; caption?: string }
  | { type: "infinite-carousel"; images: Array<{ src: string; alt?: string }>; speed?: number } // ← NUEVO TIPO

interface SectionProps {
  section: SectionType
  className?: string
}

/* =========================
   ANIMACIÓN CSS
========================= */

const styles = `
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
`;

// Inyectar los estilos en la página (solo en el cliente)
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

/* =========================
   IMAGE HELPERS
========================= */

function Img({ src, alt, contain = false }: { src: string; alt?: string; contain?: boolean }) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt || ""}
        fill
        className={contain ? "object-scale-down" : "object-cover"}
        sizes="(max-width: 768px) 100vw, 1200px"
      />
    </div>
  )
}

/* =========================
   CARRUSEL INFINITO (NUEVO)
========================= */

export function InfiniteCarousel({ images }: { images: Array<{ src: string; alt?: string }> }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalImages = images.length

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages)
  }

  return (
    <section className="w-full">
      <div className="relative w-full py-8">
        {/* Degradados */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[#111111] via-[#111111]/80 to-transparent" />

        {/* Contenedor del carrusel con flex y transform */}
        <div className="overflow-hidden">
          <div 
            className="flex items-center gap-4 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(50% - ${currentIndex * (280 + 16) + 140}px))`,
              width: 'max-content'
            }}
          >
            {/* Imagen anterior a la seleccionada (si existe) */}
            {[...images, ...images, ...images].map((img, idx) => {
              // Calculamos la posición relativa respecto al set central
              const relativePos = idx - totalImages
              const distance = Math.abs(relativePos - currentIndex)
              
              // Solo renderizamos un rango alrededor de la actual para no sobrecargar
              if (Math.abs(distance) > 5) return null
              
              const isSelected = relativePos === currentIndex
              
              return (
                <div
                  key={idx}
                  className="flex-shrink-0 cursor-pointer relative"
                  style={{
                    width: '280px',
                    height: '320px',
                  }}
                  onClick={() => setCurrentIndex(relativePos)}
                >
                  <img
                    src={img.src}
                    alt={img.alt || ""}
                    className="w-full h-full object-contain rounded-lg"
                  />
                  
                  {/* Overlay oscuro para imágenes no seleccionadas */}
                  {!isSelected && (
                    <div 
                      className="absolute inset-0 rounded-lg"
                      style={{ 
                        backgroundColor: '#111111',
                        opacity: 0.7
                      }}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Flechas */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? "w-6 bg-[#111111]" 
                  : "w-2 bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================
   SECTIONS
========================= */

export function FullWidthImage({ section }: { section: Extract<SectionType, { type: "full-width-image" }> }) {
  return (
    <section className="w-full">
      <div className="aspect-[16/9] relative">
        <Img src={section.src} alt={section.alt} contain />
      </div>
      {section.caption && (
        <p className="mt-4 text-xs text-muted-foreground text-center">{section.caption}</p>
      )}
    </section>
  )
}

export function CenteredImage({ section }: { section: Extract<SectionType, { type: "centered-image" }> }) {
  const widthMap = {
    small: "max-w-md",
    medium: "max-w-2xl",
    large: "max-w-4xl",
  }

  return (
    <section className="flex justify-center">
      <div className={cn("w-full", widthMap[section.width || "medium"])}>
        <div className="aspect-[4/3] relative">
          <Img src={section.src} alt={section.alt} contain />
        </div>
        {section.caption && (
          <p className="mt-4 text-xs text-muted-foreground text-center">{section.caption}</p>
        )}
      </div>
    </section>
  )
}

export function SingleColumnStack({ section }: { section: Extract<SectionType, { type: "single-column-stack" }> }) {
  return (
    <section className="flex flex-col gap-12">
      {section.images.map((img, i) => (
        <div key={i}>
          <div className="aspect-[16/9] relative">
            <Img src={img.src} alt={img.alt} contain />
          </div>
          {img.caption && (
            <p className="mt-4 text-xs text-muted-foreground text-center">{img.caption}</p>
          )}
        </div>
      ))}
    </section>
  )
}

export function TwoColumnGrid({ section }: { section: Extract<SectionType, { type: "two-column-grid" }> }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {section.images.map((img, i) => (
        <div key={i} className="aspect-[4/3] relative">
          <Img src={img.src} alt={img.alt} contain />
        </div>
      ))}
    </section>
  )
}

export function ThreeColumnGrid({ section }: { section: Extract<SectionType, { type: "three-column-grid" }> }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {section.images.map((img, i) => (
        <div key={i} className="aspect-square relative">
          <Img src={img.src} alt={img.alt} contain />
        </div>
      ))}
    </section>
  )
}

export function VideoEmbed({ section }: { section: Extract<SectionType, { type: "video-embed" }> }) {
  return (
    <section className="w-full">
      <div className="aspect-video relative bg-black rounded-lg overflow-hidden">
        <video 
          src={section.src}
          controls
          className="w-full h-full object-contain"
        >
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
      {section.caption && (
        <p className="mt-4 text-xs text-muted-foreground text-center">
          {section.caption}
        </p>
      )}
    </section>
  )
}

export function TextSection({ section }: { section: Extract<SectionType, { type: "text" }> }) {
  return (
    <section className="max-w-3xl mx-auto">
      {section.title && (
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          {section.title}
        </h3>
      )}
      <p className="text-lg leading-relaxed">{section.content}</p>
    </section>
  )
}

/* =========================
   DISPATCHER
========================= */

export function ProjectSection({ section }: SectionProps) {
  switch (section.type) {
    case "full-width-image":
      return <FullWidthImage section={section} />
    case "centered-image":
      return <CenteredImage section={section} />
    case "single-column-stack":
      return <SingleColumnStack section={section} />
    case "two-column-grid":
      return <TwoColumnGrid section={section} />
    case "three-column-grid":
      return <ThreeColumnGrid section={section} />
    case "text":
      return <TextSection section={section} />
    case "video-embed":
      return <VideoEmbed section={section} />
    case "infinite-carousel": // ← NUEVO CASO
      return <InfiniteCarousel images={section.images} />
    default:
      return null
  }
}

export function ProjectSections({ sections }: { sections: SectionType[] }) {
  return (
    <div className="flex flex-col gap-16">
      {sections.map((section, i) => (
        <ProjectSection key={i} section={section} />
      ))}
    </div>
  )
}
