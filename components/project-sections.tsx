import { cn } from "@/lib/utils"

// Section types for modular project layouts
export type SectionType = 
  | { type: "full-width-image"; src?: string; alt?: string; caption?: string }
  | { type: "centered-image"; src?: string; alt?: string; caption?: string; width?: "small" | "medium" | "large" }
  | { type: "single-column-stack"; images: Array<{ src?: string; alt?: string; caption?: string }> }
  | { type: "two-column-grid"; images: Array<{ src?: string; alt?: string }> }
  | { type: "three-column-grid"; images: Array<{ src?: string; alt?: string }> }
  | { type: "mixed-layout"; rows: Array<{ columns: 1 | 2 | 3; images: Array<{ src?: string; alt?: string }> }> }
  | { type: "video-embed"; embedUrl?: string; caption?: string }
  | { type: "gallery-with-centered-last"; images: Array<{ src?: string; alt?: string }>; columns: 2 | 3 }
  | { type: "text"; title?: string; content: string }
  | { type: "text-two-column"; leftContent: string; rightContent: string }
  | { type: "quote"; content: string; author?: string }

interface SectionProps {
  section: SectionType
  className?: string
}

function ImagePlaceholder({ alt }: { alt?: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground text-xs uppercase tracking-widest">
      {alt || "Imagen"}
    </div>
  )
}

export function FullWidthImage({ section, className }: { section: Extract<SectionType, { type: "full-width-image" }>; className?: string }) {
  return (
    <section className={cn("w-full", className)}>
      <div className="aspect-[16/9] relative bg-muted">
        <ImagePlaceholder alt={section.alt} />
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
        <div className="aspect-[4/3] relative bg-muted">
          <ImagePlaceholder alt={section.alt} />
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
    <section className={cn("w-full flex flex-col gap-8", className)}>
      {section.images.map((image, index) => (
        <div key={index}>
          <div className="aspect-[16/9] relative bg-muted">
            <ImagePlaceholder alt={image.alt} />
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

export function MixedLayout({ section, className }: { section: Extract<SectionType, { type: "mixed-layout" }>; className?: string }) {
  return (
    <section className={cn("w-full flex flex-col gap-6", className)}>
      {section.rows.map((row, rowIndex) => {
        const gridCols = row.columns === 1 ? "grid-cols-1" : row.columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"
        return (
          <div key={rowIndex} className={cn("grid gap-4 md:gap-6", gridCols)}>
            {row.images.map((image, imageIndex) => (
              <div key={imageIndex} className={cn("relative bg-muted", row.columns === 1 ? "aspect-[16/9]" : "aspect-[4/3]")}>
                <ImagePlaceholder alt={image.alt} />
              </div>
            ))}
          </div>
        )
      })}
    </section>
  )
}

export function VideoEmbed({ section, className }: { section: Extract<SectionType, { type: "video-embed" }>; className?: string }) {
  return (
    <section className={cn("w-full", className)}>
      <div className="aspect-video relative bg-muted">
        {section.embedUrl ? (
          <iframe
            src={section.embedUrl}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest">
            Video
          </div>
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

export function GalleryWithCenteredLast({ section, className }: { section: Extract<SectionType, { type: "gallery-with-centered-last" }>; className?: string }) {
  const gridImages = section.images.slice(0, -1)
  const lastImage = section.images[section.images.length - 1]
  const gridCols = section.columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"
  
  return (
    <section className={cn("w-full flex flex-col gap-8", className)}>
      <div className={cn("grid gap-4 md:gap-6", gridCols)}>
        {gridImages.map((image, index) => (
          <div key={index} className="aspect-[4/3] relative bg-muted">
            <ImagePlaceholder alt={image.alt} />
          </div>
        ))}
      </div>
      {lastImage && (
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="aspect-[4/3] relative bg-muted">
              <ImagePlaceholder alt={lastImage.alt} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export function TwoColumnGrid({ section, className }: { section: Extract<SectionType, { type: "two-column-grid" }>; className?: string }) {
  return (
    <section className={cn("w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {section.images.map((image, index) => (
          <div key={index} className="aspect-[4/3] relative bg-muted">
            <ImagePlaceholder alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

export function ThreeColumnGrid({ section, className }: { section: Extract<SectionType, { type: "three-column-grid" }>; className?: string }) {
  return (
    <section className={cn("w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {section.images.map((image, index) => (
          <div key={index} className="aspect-square relative bg-muted">
            <ImagePlaceholder alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

export function TextSection({ section, className }: { section: Extract<SectionType, { type: "text" }>; className?: string }) {
  return (
    <section className={cn("w-full max-w-3xl mx-auto", className)}>
      {section.title && (
        <h3 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4">
          {section.title}
        </h3>
      )}
      <p className="text-lg leading-relaxed text-foreground">
        {section.content}
      </p>
    </section>
  )
}

export function TextTwoColumn({ section, className }: { section: Extract<SectionType, { type: "text-two-column" }>; className?: string }) {
  return (
    <section className={cn("w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <p className="text-base leading-relaxed text-foreground">
          {section.leftContent}
        </p>
        <p className="text-base leading-relaxed text-foreground">
          {section.rightContent}
        </p>
      </div>
    </section>
  )
}

export function QuoteSection({ section, className }: { section: Extract<SectionType, { type: "quote" }>; className?: string }) {
  return (
    <section className={cn("w-full max-w-4xl mx-auto text-center py-8", className)}>
      <blockquote className="font-heading text-2xl md:text-4xl leading-relaxed italic">
        &ldquo;{section.content}&rdquo;
      </blockquote>
      {section.author && (
        <cite className="block mt-6 text-sm text-muted-foreground not-italic">
          {section.author}
        </cite>
      )}
    </section>
  )
}

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
    case "mixed-layout":
      return <MixedLayout section={section} className={className} />
    case "video-embed":
      return <VideoEmbed section={section} className={className} />
    case "gallery-with-centered-last":
      return <GalleryWithCenteredLast section={section} className={className} />
    case "text":
      return <TextSection section={section} className={className} />
    case "text-two-column":
      return <TextTwoColumn section={section} className={className} />
    case "quote":
      return <QuoteSection section={section} className={className} />
    default:
      return null
  }
}

export function ProjectSections({ sections }: { sections: SectionType[] }) {
  return (
    <div className="flex flex-col gap-12 md:gap-20">
      {sections.map((section, index) => (
        <ProjectSection key={index} section={section} />
      ))}
    </div>
  )
}
