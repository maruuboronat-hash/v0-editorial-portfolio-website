import { notFound } from "next/navigation"
import { ContactSection } from "@/components/contact-section"
import { CategoryContent } from "../[category]/category-content"
import { categoriesData } from "@/lib/categories-data"

// Datos específicos para Edición de Video
const categoryData = {
  title: "Edición de Video",
  description: "Serie de piezas audiovisuales desarrolladas en el marco de la materia Diseño IV, a partir de material propio y preexistente. Las propuestas integran edición, animación y diseño sonoro, con foco en el ritmo, la construcción de sentido y la coherencia estética en cada proyecto.",
  projects: categoriesData["edicion-video"].projects,
}

export default function EdicionVideoPage() {
  return (
    <div className="pt-24 min-h-screen">
      <CategoryContent categoryData={categoryData} />
      <ContactSection />
    </div>
  )
}
