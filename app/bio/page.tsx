"use client"

import Link from "next/link"
import { ContactSection } from "@/components/contact-section"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"
import { BioImage } from "@/components/bio-image"
import { useLanguage } from "@/components/language-provider"

// LISTA ACTUALIZADA CON LAS RUTAS REALES DE LAS IMÁGENES
const bioImages = [
  { 
    alt: "Microsoft Paint 2011", 
    caption: "Microsoft Paint 2011",
    src: "/images/generales/BIO/Microsoft-Paint.jpg"
  },
  { 
    alt: "Microsoft Paint 2011", 
    caption: "Microsoft Paint 2011",
    src: "/images/generales/BIO/Microsoft-Paint2.jpg"
  },
  { 
    alt: "A mano 2013", 
    caption: "A mano 2013",
    src: "/images/generales/BIO/A-mano.jpg"
  },
  { 
    alt: "A mano 2013", 
    caption: "A mano 2013",
    src: "/images/generales/BIO/A-mano2.jpg"
  },
  { 
    alt: "Procreate 2024", 
    caption: "Procreate 2024",
    src: "/images/generales/BIO/Procreate.jpg"
  },
  { 
    alt: "Procreate 2024", 
    caption: "Procreate 2024",
    src: "/images/generales/BIO/Procreate2.jpg"
  },
]

export default function BioPage() {
  const { t } = useLanguage()

  return (
    <div className="pt-24 min-h-screen">
      <div className="pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* PORTRAIT CON LA IMAGEN REAL */}
            <ScrollReveal className="lg:col-span-4">
              <div className="sticky top-24 flex justify-center lg:justify-start">
                <BioImage size="large" />
              </div>
            </ScrollReveal>

            {/* BIO CONTENT */}
            <div className="lg:col-span-8">
              <ScrollReveal>
                <header className="mb-12">
                  <h1 className="font-heading text-4xl md:text-6xl tracking-tight mb-4">
                    {t.nav.bio}
                  </h1>
                </header>
              </ScrollReveal>

              <ScrollReveal className="space-y-6 text-base leading-relaxed">
                <p className="scroll-reveal-child">
                  {t.bio?.texto1 || "Dicen que cuando no tenes experiencia, hay que mostrar los trabajos que tengas, aunque no te encanten. Y yo me lo tome literal."}
                </p>

                <p className="scroll-reveal-child">
                  {t.bio?.texto2 || "Estos son algunos de mis primeros proyectos: algo hecho en Microsoft Paint en 2011, lienzo y acrilico en 2013, y Procreate en 2024."}
                </p>

                <p className="scroll-reveal-child">
                  {t.bio?.texto3 || "Algunos sienten pasion por un artista, un famoso o un deporte. Hace poco me preguntaron cual era la mia, y no supe que responder. Me quede pensando, hasta que entendi que mi pasion es lo que hago."}
                </p>

                <p className="scroll-reveal-child">
                  {t.bio?.texto4 || "Desde chica siempre me gusto crear: armar piezas de todo tipo, editar fotos de amigos, mirar Art Attack todos los dias o sacar fotos cada vez que podia. Mi vida siempre estuvo atravesada por el diseno, de distintas formas. Cualquier excusa para disenar —aunque no lo sabia— era, para mi, el mejor favor que me podian pedir."}
                </p>
              </ScrollReveal>

              {/* GALERÍA CON IMÁGENES REALES */}
              <ScrollReveal className="mt-20">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {bioImages.map((image, index) => (
                    <div key={index} className="scroll-reveal-child group">
                      <div className="aspect-square bg-muted relative overflow-hidden rounded-lg">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {image.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </div>

      {/* CTA CENTRADO ENTRE BIO Y CONTACTO */}
      <ScrollReveal className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto flex justify-center">
          <Link
            href="/cv"
            className="group inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-medium uppercase tracking-widest text-brand-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            {t.bio?.ver_cv || "Ver currículum completo"}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </ScrollReveal>

      <ContactSection />
    </div>
  )
}
