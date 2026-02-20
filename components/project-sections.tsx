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
  | { type: "infinite-carousel"; images: Array<{ src: string; alt?: string }>; speed?: number }
  | { type: "skills"; skills: string[] } // ← NUEVO TIPO

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
   CARRUSEL
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
    <section className="w-full">
      <div className="relative w-full py-8">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[#111111] via-[#111111]/80 to-transparent" />

        <div className="relative h-96 w-full flex justify-center items-center">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt || ""}
            className="h-full w-auto rounded-lg shadow-lg"
          />
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
        >
          ←
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
        >
          →
        </button>

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
   SKILLS SECTION (NUEVO)
========================= */

export function SkillsSection({ section }: { section: Extract<SectionType, { type: "skills" }> }) {
  return (
    <section className="w-full py-2">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-sm font-heading tracking-tight mb-4">
          Herramientas y tecnologías
        </h3>
        <div className="flex flex-wrap gap-2">
          {section.skills.map((skill, index) => (
            <span 
              key={index}
              className="inline-block px-4 py-2 text-sm font-medium bg-gray-100 text-gray-800 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors"
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
  // Detectar si es un video de YouTube
  const isYouTube = section.src.includes('youtube.com') || section.src.includes('youtu.be');
  
  // Extraer ID de YouTube si es necesario
  let youtubeEmbedUrl = section.src;
  if (isYouTube) {
    // Convertir youtu.be/XXXX a youtube.com/embed/XXXX
    if (section.src.includes('youtu.be')) {
      const videoId = section.src.split('youtu.be/')[1]?.split('?')[0];
      youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
    // Asegurar que sea embed
    if (section.src.includes('watch?v=')) {
      const videoId = section.src.split('watch?v=')[1]?.split('&')[0];
      youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
  }

  return (
    <section className="w-full">
      <div className="aspect-video relative bg-black rounded-lg overflow-hidden">
        {isYouTube ? (
          // IFRAME PARA YOUTUBE
          <iframe
            src={youtubeEmbedUrl}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={section.caption || "Video de YouTube"}
          />
        ) : (
          // VIDEO LOCAL (MP4)
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
        <h3 className="text-2xl md:text-3xl font-heading tracking-tight">
          {section.title}
        </h3>
      )}
      {section.content && (
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          {section.content}
        </p>
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
    case "skills": // ← NUEVO CASO
      return <SkillsSection section={section} />
    default:
      return null
  }
}

export function ProjectSections({ sections }: { sections: SectionType[] }) {
  return (
    <div className="flex flex-col gap-8">
      {sections.map((section, i) => (
        <ProjectSection key={i} section={section} />
      ))}
    </div>
  )
}
