"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { categoriesData } from "@/lib/categories-data"

/* =========================
   HOME: CATEGORÍAS CON GALERÍA HORIZONTAL DE TRABAJOS
   (mismo scroll que la galería del manual de Cantiere,
   pero cada trabajo es clickeable)
========================= */

const categories = [
  { slug: "diseno-grafico", key: "diseno_grafico" },
  { slug: "corporativo", key: "corporativo" },
  { slug: "indumentaria-ilustracion", key: "indumentaria" },
  { slug: "personales", key: "personales" },
  { slug: "edicion-video", key: "edicion_video" },
] as const

const styles = `
.home-gallery-scroll {
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
}
.home-gallery-scroll::-webkit-scrollbar { height: 8px; }
.home-gallery-scroll::-webkit-scrollbar-track { background: transparent; }
.home-gallery-scroll::-webkit-scrollbar-thumb {
  background-color: var(--border);
  border-radius: 9999px;
}
`

export function CategoryGalleries() {
  const { t } = useLanguage()

  return (
    <section className="py-10 md:py-24 px-6 md:px-12">
      <style>{styles}</style>
      <div className="max-w-6xl mx-auto flex flex-col gap-14 md:gap-20">
        {categories.map(({ slug, key }) => {
          const projects = categoriesData[slug]?.projects ?? []
          const titulo = t.categorias[key]?.titulo

          return (
            <div key={slug} className="w-full">
              {/* Nombre de la categoría (lleva a la página de la categoría) */}
              <Link
                href={`/proyectos/${slug}`}
                className="group inline-block mb-5 md:mb-6"
              >
                <h2 className="font-heading text-3xl md:text-5xl tracking-tight">
                  {/* Subrayado rojo que se dibuja de izquierda a derecha al pasar el mouse */}
                  <span className="relative inline-block after:absolute after:left-0 after:-bottom-1 md:after:-bottom-1.5 after:h-0.5 md:after:h-[3px] after:w-full after:bg-brand after:origin-left after:scale-x-0 after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:after:scale-x-100">
                    {titulo}
                  </span>
                </h2>
              </Link>

              {/* Galería horizontal de trabajos */}
              <div className="home-gallery-scroll flex gap-4 overflow-x-auto pb-4 snap-x">
                {projects.map((project) => {
                  const tituloProyecto = t.proyectos_detalle?.[project.id]?.titulo || project.title

                  return (
                    <Link
                      key={project.id}
                      href={`/proyecto/${project.id}`}
                      className="group snap-start flex-shrink-0 w-60 md:w-72"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted transition-all duration-300 group-hover:border-brand group-hover:shadow-lg">
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={tituloProyecto}
                            fill
                            sizes="(max-width: 768px) 240px, 288px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <p className="mt-3 text-sm leading-snug text-muted-foreground transition-colors group-hover:text-foreground">
                        {tituloProyecto}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
