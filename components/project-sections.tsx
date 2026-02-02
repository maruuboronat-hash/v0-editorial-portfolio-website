import Image from "next/image"
import { cn } from "@/lib/utils"

// =========================
// TYPES
// =========================

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

// =========================
// IMAGE HELPERS
// =========================

function ResponsiveImage({ src, alt }: { src: string; alt?: string }) {
  return (
    <Image
      src={src}
      alt={alt || ""}
      fill
      className="object-contain"
      sizes="(max-width: 768px) 100vw, 1200px"
    />
  )
}

// =========================
// SECTIONS
// =========================

export function FullWidthImage({ section, className }: { section: Extract<SectionType, { type: "full-width-image" }>; className?: string }) {
  return (
    <section className={cn("w-full", className)}>
      <div className="relative w-full aspect-[16/9] bg-black">
        <ResponsiveImage src={section.src} alt={section.alt} />
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
  const widthMap = {
    small: "max-w-md",
    medium: "max-w-2xl",
    large: "max-w-4xl",
  }

  return (
    <section className={cn("flex justify-center", className)}>
      <div className={cn("w-full", widthMap[section.width || "medium"])}>
        <div className="relative aspect-[4/3] bg-black">
          <ResponsiveImage src={section.src} alt={section.alt} />
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
    <section className={cn("flex flex-col gap-12", className)}>
      {section.images.map((img, i) => (
        <div key={i}>
          <div className="relative aspect-[16/9] bg-black">
            <ResponsiveImage src={img.src} alt={img.alt} />
          </div>
          {img.caption && (
            <p className="mt-4 text-xs text-muted-foreground text-center">
              {img.caption}
            </p>
          )}
        </div>
      ))}
    </section>
  )
}

export function TwoColumnGrid({ section, className }: { section: Extract<SectionType, { type: "two-column-grid" }>; className?: string }) {
  return (
    <section className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {section.images.map((img, i) => (
          <div key={i} className="relative aspect-[4/3] bg-black">
            <ResponsiveImage src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

export function ThreeColumnGrid({ section, className }: { section: Extract<SectionType, { type: "three-column-grid" }>; className?: string }) {
  return (
    <section className={className}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {section.images.map((img, i) => (
          <div key={i} className="relative aspect-square bg-black">
            <ResponsiveImage src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

// =========================
// TEXT
// =========================

export function TextSection({ section, className }: { section: Extract<SectionType, { type: "text" }>; className?: string }) {
  return (
    <section className={cn("max-w-3xl mx-auto", className)}>
      {section.title && (
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          {section.title}
        </h3>
      )}
      <p className="text-lg leading-relaxed">{section.content}</p>
    </section>
  )
}

export function QuoteSection({ section, className }: { section: Extract<SectionType, { type: "quote" }>; className?: string }) {
  return (
    <section className={cn("text-center max-w-4xl mx-auto py-12", className)}>
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

// =========================
// SWITCH
// =========================

export function ProjectSection({ section, className }: SectionProps) {
  switch (section.type) {
    case "full-width-image":
      return <FullWidthImage section={section} className={className} />
    case "centered-image":
      return <CenteredImage section={section} className={className} />
    case "single-column-stack":
      return <SingleColumnStack section={section} className={className} />
    case "two-column-grid":
      return <TwoColumnGrid section={section} className={className} />
    case "three-column-grid":
      return <ThreeColumnGrid section={section} className={className} />
    case "text":
      return <TextSection section={section} className={className} />
    case "quote":
      return <QuoteSection section={section} className={className} />
    default:
      return null
  }
}

export function ProjectSections({ sections }: { sections: SectionType[] }) {
  return (
    <div className="flex flex-col gap-20">
      {sections.map((section, i) => (
        <ProjectSection key={i} section={section} />
      ))}
    </div>
  )
}
