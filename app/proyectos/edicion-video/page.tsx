import { notFound } from "next/navigation"
import { ContactSection } from "@/components/contact-section"
import { CategoryContent } from "../[category]/category-content"

// Datos específicos para Edición de Video
const categoryData = {
  title: "Edición de Video",
  description: "Edición, post-producción y animación de piezas audiovisuales para redes, eventos y proyectos personales.",
  projects: [
    { 
      id: "video-proyecto-1", 
      title: "Nombre del Proyecto de Video 1",
      image: "/images/edicion-video/proyecto1/portada.jpg"
    },
    { 
      id: "video-proyecto-2", 
      title: "Nombre del Proyecto de Video 2",
      image: "/images/edicion-video/proyecto2/portada.jpg"
    },
    // Agregá más proyectos acá
  ],
}

export default function EdicionVideoPage() {
  return (
    <div className="pt-24 min-h-screen">
      <CategoryContent categoryData={categoryData} />
      <ContactSection />
    </div>
  )
}
