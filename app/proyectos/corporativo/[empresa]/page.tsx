import { notFound } from "next/navigation"
import { ContactSection } from "@/components/contact-section"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"
import Image from "next/image"

const empresasDetalle = {
  bosch: {
    title: "Robert Bosch Argentina",
    descripcion: "Trabajos realizados para Robert Bosch Argentina en el área de Marketing y Comunicación.",
    categorias: [
      {
        subtitulo: "Material POP",
        imagenes: [
          "/images/corporativo/bosch/pop-01.jpg",
          "/images/corporativo/bosch/pop-02.jpg",
          "/images/corporativo/bosch/pop-03.jpg",
        ]
      },
      {
        subtitulo: "Vía Pública",
        imagenes: [
          "/images/corporativo/bosch/viapublica-01.jpg",
          "/images/corporativo/bosch/viapublica-02.jpg",
          "/images/corporativo/bosch/viapublica-03.jpg",
        ]
      },
      {
        subtitulo: "Comunicación Interna",
        imagenes: [
          "/images/corporativo/bosch/interna-01.jpg",
          "/images/corporativo/bosch/interna-02.jpg",
        ]
      }
    ]
  },
  picklog: {
    title: "Pick&Log",
    descripcion: "Dashboard Power BI y herramientas de visualización de datos.",
    categorias: [
      {
        subtitulo: "Dashboard Power BI",
        imagenes: [
          "/images/corporativo/picklog/powerbi-01.jpg",
          "/images/corporativo/picklog/powerbi-02.jpg",
          "/images/corporativo/picklog/powerbi-03.jpg",
        ]
      }
    ]
  },
  cantiere: {
    title: "Cantiere SA",
    descripcion: "Catálogos de productos y material gráfico corporativo.",
    categorias: [
      {
        subtitulo: "Catálogo Productos",
        imagenes: [
          "/images/corporativo/cantiere/catalogo-01.jpg",
          "/images/corporativo/cantiere/catalogo-02.jpg",
          "/images/corporativo/cantiere/catalogo-03.jpg",
        ]
      },
      {
        subtitulo: "Presentaciones",
        imagenes: [
          "/images/corporativo/cantiere/presentacion-01.jpg",
          "/images/corporativo/cantiere/presentacion-02.jpg",
        ]
      }
    ]
  }
}

type PageParams = Promise<{ empresa: string }>

export default async function EmpresaPage({ params }: { params: PageParams }) {
  const { empresa } = await params
  const empresaData = empresasDetalle[empresa as keyof typeof empresasDetalle]

  if (!empresaData) {
    notFound()
  }

  return (
    <div className="pt-24 min-h-screen">
      <ScrollReveal as="header" className="px-6 md:px-12 mb-16">
        <div className="max-w-6xl mx-auto">
          <a
            href="/proyectos/corporativo"
            className="scroll-reveal-child text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            ← Volver a Corporativo
          </a>
          <h1 className="scroll-reveal-child font-heading text-4xl md:text-6xl tracking-tight mb-6">
            {empresaData.title}
          </h1>
          <p className="scroll-reveal-child text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {empresaData.descripcion}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-16">
          {empresaData.categorias.map((categoria, index) => (
            <div key={index} className="pl-6 md:pl-8 border-l-2 border-gray-200">
              <h3 className="font-heading text-2xl md:text-3xl tracking-tight mb-8">
                {categoria.subtitulo}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {categoria.imagenes.map((imagen, imgIndex) => (
                  <div 
                    key={imgIndex} 
                    className="aspect-square bg-muted relative rounded-lg overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={imagen}
                      alt={`${categoria.subtitulo} - Imagen ${imgIndex + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
      
      <ContactSection />
    </div>
  )
}
