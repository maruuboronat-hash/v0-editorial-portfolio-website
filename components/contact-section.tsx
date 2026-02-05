"use client"

import React from "react"
import { useState } from "react"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <ScrollReveal as="section" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div className="scroll-reveal-child">
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight mb-8">
              Contacto
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Si tenes un proyecto en mente o simplemente queres saludar, 
              no dudes en escribirme.
            </p>

            <div className="space-y-6">
              {/* EMAIL */}
              <div>
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

              {/* TELÉFONO - NUEVO */}
              <div>
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
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Ubicación
                </span>
                <p className="text-lg">Buenos Aires, Argentina</p>
              </div>

              {/* REDES SOCIALES ACTUALIZADAS */}
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Redes
                </span>
                <div className="flex gap-4 text-sm">
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

          {/* Contact Form */}
          <div className="scroll-reveal-child">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="contact-name" 
                  className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="contact-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-b border-muted-foreground/30 focus:border-foreground outline-none transition-colors text-base"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="contact-email" 
                  className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-b border-muted-foreground/30 focus:border-foreground outline-none transition-colors text-base"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="contact-message" 
                  className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-b border-muted-foreground/30 focus:border-foreground outline-none transition-colors text-base resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-foreground text-background text-xs uppercase tracking-widest hover:opacity-90 transition-opacity mt-4"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
