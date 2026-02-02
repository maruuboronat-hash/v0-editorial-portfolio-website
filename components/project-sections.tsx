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

interface SectionProps {
  section: SectionType
  className?: string
}

/* =========================
   IMAGE SECTIONS
========================= */

export function FullWidthImage({ section }: { section: Extract<SectionType, { type: "full-width-image" }> }) {
  return (
    <section className="w-full">
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

export function CenteredImage({ section }: { section: Extract<SectionType, { type: "centered-image" }> }) {
  const widthMap = {
    small: "max-w-md",
    medium: "max-w-2xl",
    large: "max-w-4xl",
  }

  return (
    <section className="flex justify-center">
      <div className={cn("w-full", widthMap[section.width || "medium"])}>
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

export function SingleColumnStack({ section }: { section: Extract<SectionType, { type: "single-column-stack" }> }) {
  return (
    <section className="flex flex-col gap-12">
      {section.images.map((img, i) => (
        <div key={i}>
          <div className="relative aspect-[16/9]">
            <Image
              src={img.src}
              alt={img.alt || ""}
              fill
              className="object-contain"
            />
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

export function TwoColumnGrid({ section }: { section: Extract<SectionType, { type: "two-column-grid" }> }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {section.images.map((img, i) => (
        <div key={i} className="relative aspect-[4/3]">
          <Image
            src={img.src}
            alt={img.alt || ""}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </section>
  )
}

export function ThreeColumnGrid({ section }: { section: Extract<SectionType, { type: "three-column-grid" }> }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {section.images.map((img, i) => (
        <div key={i} className="relative aspect-square">
          <Image
            src={img.src}
            alt={img.alt || ""}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </section>
  )
}

/* =========================
   TEXT
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

/* =========================
   SWITCH
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
