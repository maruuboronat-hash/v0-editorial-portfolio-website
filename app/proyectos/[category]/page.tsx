import Link from "next/link"
import { notFound } from "next/navigation"
import { ContactSection } from "@/components/contact-section"
import { CategoryContent } from "./category-content"

const categoriesData: Record<string, {
  title: string
  description: string
  projects: Array<{ id: string; title: string }>
}> = {
  "diseno-grafico": {
    title: "Diseno Grafico",
    description: "Proyectos de diseno editorial, diseno 3D, comunicacion visual e investigacion tipografica desarrollados durante la carrera de Diseno Grafico y Comunicacion.",
    projects: [
      { id: "diario-oasis", title: "Diario de Oasis I Backstage Times" },
      { id: "postales-cortazar", title: "Postales I Julio Cortazar" },
      { id: "revista-clara-cava", title: "Revista Clara Cava" },
      { id: "afiche-3d-cordoba", title: "Afiche 3D I Cordoba" },
      { id: "afiches-tipograficos", title: "Afiches tipograficos" },
      { id: "cuento-infantil-3d", title: "Cuento infantil I Ilustracion 3D" },
      { id: "modelado-3d-objetos", title: "Modelado 3D I Objetos cotidianos" },
      { id: "revista-balvanera", title: "Revista Balvanera I Tapa y contratapa" },
    ],
  },
  "corporativo": {
    title: "Corporativo",
    description: "Trabajos realizados desde el area de Marketing y Comunicacion. En empresas como Bosch Mobility Aftermarket y Pick&Log. Combino diseno, estrategia y automatizacion para mejorar procesos y comunicacion visual interna.",
    projects: [
      { id: "carteles-bosch", title: "Carteles en via publica I Robert Bosch Argentina" },
      { id: "power-bi-picklog", title: "Power BI I Plantillas de logistica I Pick&Log" },
    ],
  },
  "indumentaria-ilustracion": {
    title: "Indumentaria e Ilustracion",
    description: "Serie de proyectos vinculados al diseno de indumentaria y la experimentacion visual desde el cuerpo, la forma y la textura.",
    projects: [
      { id: "indumentaria-placeholder", title: "Proyecto de Indumentaria" },
    ],
  },
  "personales": {
    title: "Proyectos Personales",
    description: "Exploraciones creativas y proyectos experimentales. Trabajos que nacen de la curiosidad y la libertad creativa.",
    projects: [
      { id: "video-casamiento-1995", title: "Video de Casamiento y Luna de Miel I 1995" },
      { id: "fotografia-analogica", title: "Fotografia analogica" },
    ],
  },
}

type PageParams = Promise<{ category: string }>

export default async function CategoryPage({ params }: { params: PageParams }) {
  const { category } = await params
  const categoryData = categoriesData[category]

  if (!categoryData) {
    notFound()
  }

  return (
    <div className="pt-24 min-h-screen">
      <CategoryContent categoryData={categoryData} />
      <ContactSection />
    </div>
  )
}
