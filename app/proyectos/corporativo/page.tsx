import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ContactSection } from "@/components/contact-section"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"

const empresasData = {
  title: "Corporativo",
  description: "Trabajos realizados desde el area de Marketing y Comunicacion. En empresas como Robert Bosch Argentina, Pick&Log y Cantiere SA. Combino diseno, estrategia y automatizacion para mejorar procesos y comunicacion visual interna.",
  empresas: [
    { 
      id: "bosch", 
      title: "Robert Bosch Argentina",
      image: "/images/corporativo/via-publica/viapublica-02.jpg",
      descripcion: "Diseño de material POP, campañas de vía pública y comunicación visual interna."
    },
    { 
      id: "picklog", 
      title: "Pick&Log",
      image: "/images/corporativo/powerbi/power-01.jpg",
      descripcion: "Dashboard Power BI y herramientas de visualización de datos."
    },
    { 
      id: "cantiere", 
      title: "Cantiere SA",
      image: "/images/corporativo/cantiere/portada.jpg",
      descripcion: "Catálogos de productos y material gráfico corporativo."
    },
  ]
}

export default function CorporativoPage() {
  return (
    <div className="pt-24 min-h-screen">
      <ScrollReveal as="header" className="px-6 md:px-12 mb-16">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/proyectos"
            className="scroll-reveal-child text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            Proyectos
          </Link>
          <h1 className="scroll-reveal-child font-heading text-4xl md:text-6xl tracking-tight mb-6">
            {empresasData.title}
          </h1>
          <p className="scroll-reveal-child text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {empresasData.description}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {empresasData.empresas.map((empresa) => (
              <Link
                key={empresa.id}
                href={`/proyectos/corporativo/${empresa.id}`}
                className="scroll-reveal-child group bg-background"
              >
                {/* IMAGEN DE LA EMPRESA */}
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <Image
                    src={empresa.image}
                    alt={empresa.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                </div>
                
                {/* INFO DE LA EMPRESA */}
                <div className="py-6">
                  <h2 className="font-heading text-lg md:text-xl group-hover:opacity-70 transition-opacity mb-2">
                    {empresa.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {empresa.descripcion}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>
      
      <ContactSection />
    </div>
  )
}
