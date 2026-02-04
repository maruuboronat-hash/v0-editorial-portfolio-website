"use client"

import Link from "next/link"
import { ContactSection } from "@/components/contact-section"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"

const bioImages = [
  { alt: "Microsoft Paint 2011", caption: "Microsoft Paint 2011" },
  { alt: "Microsoft Paint 2011", caption: "Microsoft Paint 2011" },
  { alt: "A mano 2013", caption: "A mano 2013" },
  { alt: "A mano 2013", caption: "A mano 2013" },
  { alt: "Procreate 2024", caption: "Procreate 2024" },
  { alt: "Procreate 2024", caption: "Procreate 2024" },
]

export default function BioPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Portrait */}
            <ScrollReveal className="lg:col-span-5">
              <div className="aspect-[3/4] relative sticky top-24 overflow-hidden rounded-sm bg-white">
                <Image
                  src="/images/generales/BIO/Bio.png"   // ← ACA VA TU FOTO REAL
                  alt="Retrato de Maria Boronat"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Bio Content */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <header className="mb-12">
                  <h1 className="font-heading text-4xl md:text-6xl tracking-tight mb-4">
                    Bio
                  </h1>
                </header>
              </ScrollReveal>

              <ScrollReveal className="space-y-6 text-base leading-relaxed">
                <p className="scroll-reveal-child">
                  Dicen que cuando no tenes experiencia, hay que mostrar los trabajos que tengas, aunque no te encanten. Y yo me lo tome literal.
                </p>
                
                <p className="scroll-reveal-child">
                  Estos son algunos de mis primeros proyectos: algo hecho en Microsoft Paint en 2011, lienzo y acrilico en 2013, y Procreate en 2024.
                </p>

                <p className="scroll-reveal-child">
                  Algunos sienten pasion por un artista, un famoso o un deporte. Hace poco me preguntaron cual era la mia, y no supe que responder. Me quede pensando, hasta que entendi que mi pasion es lo que hago.
                </p>

                <p className="scroll-reveal-child">
                  Desde chica siempre me gusto crear: armar piezas de todo tipo, editar fotos de amigos, mirar Art Attack todos los dias o sacar fotos cada vez que podia. Mi vida siempre estuvo atravesada por el diseno, de distintas formas. Cualquier excusa para disenar —aunque no lo sabia— era, para mi, el mejor favor que me podian pedir.
                </p>
              </ScrollReveal>

              {/* Gallery with captions */}
              <ScrollReveal className="mt-20">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {bioImages.map((image, index) => (
                    <div key={index} className="scroll-reveal-child">
                      <div className="aspect-square bg-muted relative">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest opacity-30 p-2 text-center">
                          {image.alt}
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {image.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal className="mt-12">
                <Link
                  href="/cv"
                  className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Ver curriculum completo
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      
      <ContactSection />
    </div>
  )
}
