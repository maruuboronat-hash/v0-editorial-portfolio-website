"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n"

/* =========================
   TYPES
========================= */

export type SectionType =
  | { type: "full-width-image"; src: string; alt?: string; caption?: string }
  | { type: "centered-image"; src: string; alt?: string; caption?: string; width?: "small" | "medium" | "large" }
  | { type: "single-column-stack"; images: Array<{ src: string; alt?: string; caption?: string }>; compact?: boolean; bare?: boolean }
  | { type: "two-column-grid"; images: Array<{ src: string; alt?: string }> }
  | { type: "three-column-grid"; images: Array<{ src: string; alt?: string }>; bare?: boolean; whiteBg?: boolean; mobileCols?: 1 | 2 }
  | { type: "text"; title?: string; content: string }
  | { type: "video-embed"; src: string; caption?: string }
  | { type: "infinite-carousel"; images: Array<{ src: string; alt?: string }>; speed?: number }
  | { type: "skills"; skills: string[] }
  | { type: "tools"; tools: string[] }  // ← NUEVO TIPO

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
   CARRUSEL ORIGINAL (SOLO IMÁGENES) - ALTURA REDUCIDA
========================= */

export function InfiniteCarousel({ images }: { images: Array<{ src: string; alt?: string }> }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="w-full py-4">
      <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-muted">
        {/* Contador */}
        <div className="absolute right-4 top-4 z-20 rounded-full bg-background/80 px-3 py-1 text-xs font-medium tabular-nums text-foreground backdrop-blur">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Marco de imagen con relación fija para que no salte el layout */}
        <a href={images[currentIndex].src} target="_blank" rel="noopener noreferrer" className="block">
          <div className="relative flex h-72 w-full cursor-zoom-in items-center justify-center p-4 md:h-[30rem] md:p-8">
            <img
              key={currentIndex}
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt || ""}
              className="max-h-full max-w-full rounded-lg object-contain shadow-lg animate-in fade-in duration-500"
            />
          </div>
        </a>

        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-all hover:border-brand hover:text-brand"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              aria-label="Imagen siguiente"
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-all hover:border-brand hover:text-brand"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a la imagen ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-7 bg-brand"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  )
}

/* =========================
   SKILLS SECTION (ESTILO CV)
========================= */

export function SkillsSection({ section }: { section: Extract<SectionType, { type: "skills" }> }) {
  return (
    <section className="w-full py-1">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-4">
          Herramientas y tecnologías
        </h3>
        <div className="flex flex-wrap gap-2">
          {section.skills.map((skill, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1.5 border border-border bg-transparent text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   PROJECT TOOLS (HERRAMIENTAS DEL PROYECTO)
   Mismo estilo que los globos de Bosch/CV
========================= */

export function ProjectTools({ tools }: { tools: string[] }) {
  if (!tools || tools.length === 0) return null;
  
  return (
    <section className="w-full py-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-4">
          Herramientas utilizadas
        </h3>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1.5 border border-border bg-transparent text-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   SECTIONS CON IMÁGENES CLICKEABLES
========================= */

export function FullWidthImage({ section }: { section: Extract<SectionType, { type: "full-width-image" }> }) {
  return (
    <section className="w-full">
      <a href={section.src} target="_blank" rel="noopener noreferrer" className="block">
        <div className="aspect-[16/9] relative">
          <Img src={section.src} alt={section.alt} contain />
        </div>
      </a>
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
        <a href={section.src} target="_blank" rel="noopener noreferrer" className="block">
          <div className="aspect-[4/3] relative">
            <Img src={section.src} alt={section.alt} contain />
          </div>
        </a>
        {section.caption && (
          <p className="mt-4 text-xs text-muted-foreground text-center">{section.caption}</p>
        )}
      </div>
    </section>
  )
}

export function SingleColumnStack({ section }: { section: Extract<SectionType, { type: "single-column-stack" }> }) {
  return (
    <section className={cn("mx-auto flex max-w-5xl flex-col", section.compact ? "gap-2 md:gap-3" : "gap-6 md:gap-9")}>
      {section.images.map((img, i) => (
        <figure key={i} className="m-0">
          <a
            href={img.src}
            target="_blank"
            rel="noopener noreferrer"
            className={section.bare ? "block overflow-hidden rounded-xl" : "block overflow-hidden rounded-xl border border-border bg-white shadow-sm"}
          >
            <img
              src={img.src || "/placeholder.svg"}
              alt={img.alt || ""}
              loading="lazy"
              className="h-auto w-full object-contain"
            />
          </a>
          {img.caption && (
            <figcaption className="mt-3 text-xs text-muted-foreground text-center">{img.caption}</figcaption>
          )}
        </figure>
      ))}
    </section>
  )
}

export function TwoColumnGrid({ section }: { section: Extract<SectionType, { type: "two-column-grid" }> }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {section.images.map((img, i) => (
        <a
          key={i}
          href={img.src}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl border border-border bg-white"
        >
          <div className="aspect-[4/3] relative">
            <Img src={img.src} alt={img.alt} contain />
          </div>
        </a>
      ))}
    </section>
  )
}

export function ThreeColumnGrid({ section }: { section: Extract<SectionType, { type: "three-column-grid" }> }) {
  const colsClass = section.mobileCols === 2 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 md:grid-cols-3"
  const containerClass = section.bare
    ? "block overflow-hidden"
    : "block overflow-hidden rounded-2xl border border-border bg-white"
  return (
    <section className={cn("grid gap-6", colsClass)}>
      {section.images.map((img, i) => (
        <a
          key={i}
          href={img.src}
          target="_blank"
          rel="noopener noreferrer"
          className={containerClass}
        >
          <div className="aspect-square relative">
            <Img src={img.src} alt={img.alt} contain />
          </div>
        </a>
      ))}
    </section>
  )
}

export function VideoEmbed({ section }: { section: Extract<SectionType, { type: "video-embed" }> }) {
  const isYouTube = section.src.includes('youtube.com') || section.src.includes('youtu.be');
  
  let youtubeEmbedUrl = section.src;
  if (isYouTube) {
    if (section.src.includes('youtu.be')) {
      const videoId = section.src.split('youtu.be/')[1]?.split('?')[0];
      youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
    if (section.src.includes('watch?v=')) {
      const videoId = section.src.split('watch?v=')[1]?.split('&')[0];
      youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
  }

  return (
    <section className="w-full">
      <div className="aspect-video relative bg-black rounded-lg overflow-hidden">
        {isYouTube ? (
          <iframe
            src={youtubeEmbedUrl}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={section.caption || "Video de YouTube"}
          />
        ) : (
          <video 
            src={section.src}
            controls
            className="w-full h-full object-contain"
          >
            Tu navegador no soporta videos HTML5.
          </video>
        )}
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
    <section className="w-full">
      {section.title && (
        <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-heading tracking-tight pt-6 md:pt-10">
          <span className="h-6 w-1 rounded-full bg-brand" />
          {section.title}
        </h3>
      )}
      {section.content && (
        <div 
          className="text-base md:text-lg leading-relaxed text-foreground"
          dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br/>') }}
        />
      )}
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
    case "infinite-carousel":
      return <InfiniteCarousel images={section.images} />
    case "skills":
      return <SkillsSection section={section} />
    case "tools":  // ← NUEVO CASO
      return <ProjectTools tools={section.tools} />
    default:
      return null
  }
}

export function ProjectSections({ sections }: { sections: SectionType[] }) {
  return (
    <div className="flex flex-col gap-2">
      {sections.map((section, i) => (
        <ProjectSection key={i} section={section} />
      ))}
    </div>
  )
}
