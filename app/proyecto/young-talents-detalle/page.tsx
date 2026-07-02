import { ContactSection } from "@/components/contact-section"
import Link from "next/link"

export default function YoungTalentsDetallePage() {
  return (
    <article className="pt-24 pb-24 min-h-screen">
      <header className="px-6 md:px-12 mb-8">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/proyecto/carteles-bosch"
            className="group text-xs uppercase tracking-widest text-muted-foreground hover:text-brand transition-colors mb-8 inline-flex items-center gap-1.5"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">&larr;</span> Volver a Bosch
          </Link>
          
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            Young Talents – Automatización de pedidos
          </h1>
          
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Documentación detallada del proyecto desarrollado en el programa interno Young Talents 2025.
          </p>
        </div>
      </header>

      <div className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Aquí puedes mostrar el PDF */}
          <div className="w-full h-[800px] border border-border rounded-lg overflow-hidden">
            <iframe
              src="/pdf/young-talents-detalle.pdf"
              className="w-full h-full"
              title="Detalle Young Talents"
            />
          </div>
          
          {/* Opción de descarga alternativa */}
          <div className="mt-8 text-center">
            <a 
              href="/pdf/young-talents-detalle.pdf" 
              download="YoungTalents-Detalle.pdf"
              className="inline-block px-6 py-3 bg-[#111111] text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Descargar PDF ↓
            </a>
          </div>
        </div>
      </div>

      <ContactSection />
    </article>
  )
}
