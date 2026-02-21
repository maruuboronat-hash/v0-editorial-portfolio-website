"use client"

import React from "react"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"

export function ContactSection() {
  return (
    <ScrollReveal as="section" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div className="scroll-reveal-child lg:col-span-2"> {/* Cambiado a col-span-2 para centrar */}
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight mb-8 text-center">
              Contacto
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              ¿Conectamos?
            </p>

            <div className="space-y-8 max-w-2xl mx-auto">
              {/* EMAIL */}
              <div className="text-center">
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Email
                </span>
                <a 
                  href="mailto:maruuboronat@gmail.com" 
                  className="text-lg hover:opacity-70 transition-opacity"
                >
                  maruuboronat@gmail.com
                </a>
              </div>

              {/* TELÉFONO */}
              <div className="text-center">
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Teléfono
                </span>
                <a 
                  href="tel:+541159729469"
                  className="text-lg hover:opacity-70 transition-opacity"
                >
                  +54 11 5972 9469
                </a>
              </div>

              {/* UBICACIÓN */}
              <div className="text-center">
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Ubicación
                </span>
                <p className="text-lg">Buenos Aires, Argentina</p>
              </div>

              {/* REDES SOCIALES */}
              <div className="text-center pt-4">
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-4">
                  Redes
                </span>
                <div className="flex justify-center gap-6 text-sm">
                  <a 
                    href="https://www.instagram.com/maria.born2art/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mar%C3%ADa-boronat-6bb2b7245/?isSelfProfile=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://www.behance.net/mariaboronat2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
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
