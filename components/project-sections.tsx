import Image from "next/image"
import { cn } from "@/lib/utils"

/* =========================
   TIPOS DE SECCIÓN
========================= */

export type SectionType =
  | { type: "full-width-image"; src: string; alt?: string; caption?: string }
  | { type: "centered-image"; src: string; alt?: string; caption?: string; width?: "small" | "medium" | "large" }
  | { type: "single-column-stack"; images: Array<{ src: string; alt?: string; caption?: string }> }
  | { type: "two-column-grid"; images: Array<{ src: string; alt?: string }> }
  | { type: "three-column-grid"; images: Array<{ src: string; alt?: string }> }
  | { type: "mixed-layout"; rows: Array<{ columns: 1 | 2 | 3; images: Array<{ src: string; alt?: string }> }> }
  | { type: "video-embed"; embedUrl?: string; caption?: string }
  | { type: "gallery-with-centered-last"; images: Array<{ src: string; alt?: string }>; columns: 2 | 3 }
  | { type: "text"; title?: string; content: string }
  | { type: "text-two-column"; leftContent: string; rightContent: string }
  | { type: "quote"; content: string; author?: string }

interface SectionProps {
  section: SectionType
  className?: string
}

/* =========================
   BLOQUES DE IMAGEN
========================= */

export function FullWidthImage({ section, className }: { section: Extract<SectionType, { type: "full-width-image" }>; className?: string }) {
  return (
    <section className={cn("w-full", className)}>
      <div className="relative aspect-[16/9]">
        <Image
          src={section.src}
          alt={section.alt || ""}
          fill
          className="object-contain"
        />
      </div>
      {section.caption && (
        <p className="mt-4 text-xs text-muted-foreground text-center">
          {section.caption}
        </p>
      )}
    </section>
  )
}

export function CenteredImage({ section, className }: { section: Extract<SectionType, { type: "centered-image" }>; className?: string }) {
  const widthClasses = {
    small: "max-w-md",
    medium: "max-w-2xl",
    large: "max-w-4xl",
  }

  return (
    <section className={cn("w-full flex justify-center", className)}>
      <div className={cn("w-full", widthClasses[section.width || "medium"])}>
        <div className="relative aspect-[4/3]">
          <Image
            src={section.src}
            alt={section.alt || ""}
            fill
            className="object-contain"
          />
        </div>
        {section.caption && (
          <p className="mt-4 text-xs text-muted-foreground text-center">
            {section.caption}
          </p>
        )}
      </div>
    </section>
  )
}

export function SingleColumnStack({ section, className }: { section: Extract<SectionType, { type: "single-column-stack" }>; className?: string }) {
  return (
    <section className={cn("w-full flex flex-col gap-12", className)}>
      {section.images.map((image, index) => (
        <div key={index}>
          <div className="relative aspect-[16/9]">
            <Image
              src={image.src}
              alt={image.alt || ""}
              fill
              className="object-contain"
            />
          </div>
          {image.caption && (
            <p className="mt-4 text-xs text-muted-foreground text-center">
              {image.caption}
            </p>
          )}
        </div>
      ))}
    </section>
  )
}

export function TwoColumnGrid({ section, className }: { section: Extract<SectionType, { type: "two-column-grid" }>; className?: string }) {
  return (
    <section className={cn("w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {section.images.map((image, index) => (
          <div key={index} className="relative aspect-[4/3]">
            <Image
              src={image.src}
              alt={image.alt || ""}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export function ThreeColumnGrid({ section, className }: { section: Extract<SectionType, { type: "three-column-grid" }>; className?: string }) {
  return (
    <section className={cn("w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {section.images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={image.src}
              alt={image.alt || ""}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

/* =========================
   TEXTO / VIDEO / CITA
========================= */

export function TextSection({ section }: { section: Extract<SectionType, { type: "text" }> }) {
  return (
    <section className="max-w-3xl mx-auto">
      {section.title && (
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          {section.title}
        </h3>
      )}
      <p className="text-lg leading-relaxed">
        {section.content}
      </p>
    </section>
  )
}

export function TextTwoColumn({ section }: { section: Extract<SectionType, { type: "text-two-column" }> }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <p>{section.leftContent}</p>
      <p>{section.rightContent}</p>
    </section>
  )
}

export function QuoteSection({ section }: { section: Extract<SectionType, { type: "quote" }> }) {
  return (
    <section className="max-w-4xl mx-auto text-center py-12">
      <blockquote className="text-2xl md:text-4xl italic">
        “{section.content}”
      </blockquote>
      {section.author && (
        <cite className="block mt-6 text-sm text-muted-foreground not-italic">
          {section.author}
        </cite>
      )}
    </section>
  )
}

/* =========================
   SWITCH PRINCIPAL
========================= */

export function ProjectSection({ section }: { section: SectionType }) {
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
    case "text-two-column":
      return <TextTwoColumn section={section} />
    case "quote":
      return <QuoteSection section={section} />
    default:
      return null
  }
}

export function ProjectSections({ sections }: { sections: SectionType[] }) {
  return (
    <div className="flex flex-col gap-20">
      {sections.map((section, index) => (
        <ProjectSection key={index} section={section} />
      ))}
    </div>
  )
}
