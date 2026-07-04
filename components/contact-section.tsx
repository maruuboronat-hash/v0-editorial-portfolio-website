"use client"

import React from "react"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"

export function ContactSection() {
  return (
    <ScrollReveal as="section" className="py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1">
          {/* Contact Info */}
          <div className="scroll-reveal-child">
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight mb-2 text-center">
              Contacto
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              ¿Conectamos?
            </p>

            <div className="max-w-2xl mx-auto rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5">
              {/* EMAIL */}
              <div className="text-center">
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Email
                </span>
                <a 
                  href="mailto:maruuboronat@gmail.com" 
                  className="link-underline text-lg transition-colors hover:text-brand"
                >
                  maruuboronat@gmail.com
                </a>
              </div>

              <div className="h-px w-full bg-border" />

              {/* TELÉFONO */}
              <div className="text-center">
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Teléfono
                </span>
                <a 
                  href="tel:+541159729469"
                  className="link-underline text-lg transition-colors hover:text-brand"
                >
                  +54 11 5972 9469
                </a>
              </div>

              <div className="h-px w-full bg-border" />

              {/* UBICACIÓN */}
              <div className="text-center">
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Ubicación
                </span>
                <p className="text-lg">Buenos Aires, Argentina</p>
              </div>

              <div className="h-px w-full bg-border" />

              {/* REDES SOCIALES */}
              <div className="text-center pt-2">
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-3">
                  Redes
                </span>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <a 
                    href="https://www.instagram.com/maria.born2art/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="link-underline transition-colors hover:text-brand"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mar%C3%ADa-boronat-6bb2b7245/?isSelfProfile=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="link-underline transition-colors hover:text-brand"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://www.behance.net/mariaboronat2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="link-underline transition-colors hover:text-brand"
                  >
                    Behance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
