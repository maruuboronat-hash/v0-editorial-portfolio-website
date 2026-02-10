"use client"

import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"

interface Project {
  id: string
  title: string
  image?: string
}

interface Empresa {
  id: string
  nombre: string
  imagen: string
  categorias: Array<{
    subtitulo: string
    imagenes: string[]
  }>
}

interface CategoryContentProps {
  categoryData: {
    title: string
    description: string
    projects?: Array<Project>
    empresas?: Array<Empresa>
  }
}

export function CategoryContent({ categoryData }: CategoryContentProps) {
  // ========== CASO CORPORATIVO ==========
  if (categoryData.empresas) {
    return (
      <>
        <ScrollReveal as="header" className="px-6 md:px-12 mb-16">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/proyectos"
              className="scroll-reveal-child text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
            >
              Proyectos
            </Link>
            <h1 className="scroll-reveal-child font-heading text-4xl md:text-6xl tracking-tight mb-6">
              {categoryData.title}
            </h1>
            <p className="scroll-reveal-child text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {categoryData.description}
            </p>
          </div>
        </ScrollReveal>

        {/* CONTENIDO CORPORATIVO */}
        <ScrollReveal as="section" className="px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-24">
            {categoryData.empresas.map((empresa) => (
              <div key={empresa.id} id={empresa.id} className="scroll-mt-20">
                {/* ENCABEZADO DE EMPRESA */}
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={empresa.imagen}
                      alt={empresa.nombre}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80px, 96px"
                    />
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl md:text-4xl tracking-tight">
                      {empresa.nombre}
                    </h2>
                  </div>
                </div>

                {/* CATEGORÍAS DENTRO DE LA EMPRESA */}
                <div className="space-y-16">
                  {empresa.categorias.map((categoria, index) => (
                    <div key={index} className="pl-6 md:pl-8 border-l-2 border-gray-200">
                      <h3 className="font-heading text-2xl md:text-3xl tracking-tight mb-8">
                        {categoria.subtitulo}
                      </h3>
                      
                      {/* GALERÍA DE IMÁGENES */}
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
              </div>
            ))}
          </div>
        </ScrollReveal>
      </>
    )
  }

  // ========== CASO NORMAL (DISEÑO GRÁFICO, PERSONALES, ETC.) ==========
  return (
    <>
      <ScrollReveal as="header" className="px-6 md:px-12 mb-16">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/proyectos"
            className="scroll-reveal-child text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            Proyectos
          </Link>
          <h1 className="scroll-reveal-child font-heading text-4xl md:text-6xl tracking-tight mb-6">
            {categoryData.title}
          </h1>
          <p className="scroll-reveal-child text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {categoryData.description}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {categoryData.projects?.map((project) => (
              <Link
                key={project.id}
                href={`/proyecto/${project.id}`}
                className="scroll-reveal-child group bg-background"
              >
                {/* PROJECT IMAGE - USANDO Image DE NEXT.JS */}
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  {project.image ? (
                    // USAMOS Image DE NEXT.JS EN LUGAR DE img
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest opacity-30 px-4 text-center">
                      {project.title}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                </div>
                
                {/* PROJECT INFO */}
                <div className="py-6">
                  <h2 className="font-heading text-lg md:text-xl group-hover:opacity-70 transition-opacity">
                    {project.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </>
  )
}
