"use client"

import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"
import { useLanguage } from "@/components/language-provider"

// Mapeo de URLs de categorías a claves del diccionario
const categoryMap: Record<string, string> = {
  "diseno-grafico": "diseno_grafico",
  "corporativo": "corporativo",
  "indumentaria-ilustracion": "indumentaria",
  "personales": "personales",
  "edicion-video": "edicion_video",
}

interface Project {
  id: string
  title: string
  image?: string
}

interface Empresa {
  id: string
  nombre: string
  imagen: string
  descripcion?: string
  categorias?: Array<{
    subtitulo: string
    imagenes: string[]
  }>
}

interface CategoryContentProps {
  categoryData: {
    title?: string
    description?: string
    projects?: Array<Project>
    empresas?: Array<Empresa>
  }
}

export function CategoryContent({ categoryData }: CategoryContentProps) {
  const { t } = useLanguage()

  // ========== CASO CORPORATIVO (con empresas) ==========
  if (categoryData.empresas) {
    // Por ahora, mostramos un mensaje simple
    // (la lógica completa de corporativo está en otra parte)
    return (
      <>
        <ScrollReveal as="header" className="px-6 md:px-12 mb-16">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/proyectos"
              className="group scroll-reveal-child text-xs uppercase tracking-widest text-muted-foreground hover:text-brand transition-colors mb-8 inline-flex items-center gap-1.5"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">&larr;</span> {t.nav.proyectos}
            </Link>
            <h1 className="scroll-reveal-child font-heading text-4xl md:text-6xl tracking-tight mb-6">
              {t.categorias.corporativo.titulo}
            </h1>
            <p className="scroll-reveal-child text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {t.categorias.corporativo.descripcion}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal as="section" className="px-6 md:px-12 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryData.empresas.map((empresa) => (
                <div
                  key={empresa.id}
                  className="group bg-background text-left w-full overflow-hidden rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    <Image
                      src={empresa.imagen}
                      alt={empresa.nombre}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                  </div>
                  
                  <div className="p-6">
                    <h2 className="font-heading text-xl md:text-2xl group-hover:opacity-70 transition-opacity mb-2">
                      {empresa.nombre}
                    </h2>
                    {empresa.descripcion && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {empresa.descripcion}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </>
    )
  }

  // ========== CASO NORMAL (con projects) ==========
  // Obtener la clave de la categoría actual
  let categoryKey = "diseno_grafico"
  
  // Intentar encontrar la categoría por título o descripción
  for (const [urlKey, dictKey] of Object.entries(categoryMap)) {
    const dictData = t.categorias[dictKey as keyof typeof t.categorias]
    if (dictData) {
      if (categoryData.title === dictData.titulo || categoryData.description === dictData.descripcion) {
        categoryKey = dictKey
        break
      }
    }
  }

  // Obtener el título y descripción traducidos
  const tituloTraducido = t.categorias[categoryKey as keyof typeof t.categorias]?.titulo || categoryData.title || ""
  const descripcionTraducida = t.categorias[categoryKey as keyof typeof t.categorias]?.descripcion || categoryData.description || ""

  return (
    <>
      <ScrollReveal as="header" className="px-6 md:px-12 mb-16">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/proyectos"
            className="group scroll-reveal-child text-xs uppercase tracking-widest text-muted-foreground hover:text-brand transition-colors mb-8 inline-flex items-center gap-1.5"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">&larr;</span> {t.nav.proyectos}
          </Link>
          <h1 className="scroll-reveal-child font-heading text-4xl md:text-6xl tracking-tight mb-6">
            {tituloTraducido}
          </h1>
          <p className="scroll-reveal-child text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {descripcionTraducida}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {categoryData.projects?.map((project) => {
              // Obtener el título traducido del proyecto desde el diccionario
              const tituloProyecto = t.proyectos_detalle?.[project.id]?.titulo || project.title

              return (
                <Link
                  key={project.id}
                  href={`/proyecto/${project.id}`}
                  className="scroll-reveal-child group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl"
                >
                  {/* PROJECT IMAGE */}
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={tituloProyecto}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest opacity-30 px-4 text-center">
                        {tituloProyecto}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                  </div>
                  
                  {/* PROJECT INFO */}
                  <div className="flex items-center justify-between gap-4 px-6 py-5">
                    <h2 className="font-heading text-lg md:text-xl transition-colors group-hover:text-brand">
                      {tituloProyecto}
                    </h2>
                    <span className="text-brand opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </ScrollReveal>
    </>
  )
}
