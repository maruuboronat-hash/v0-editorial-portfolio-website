import { notFound } from "next/navigation"
import { ContactSection } from "@/components/contact-section"
import { CategoryContent } from "../[category]/category-content"

// Datos específicos para Edición de Video
const categoryData = {
  title: "Edición de Video",
  description: "Edición, post-producción y animación de piezas audiovisuales para redes, eventos y proyectos personales.",
projects: [
  { 
    id: "portfolio-video", 
    title: "Portfolio",
    image: "/images/edicion-video/portfolio-portada.jpg" // Necesitás una imagen de portada
  },
  { 
    id: "mini-skirts-video", 
    title: "Mini Skirts - Mary Quant",
    image: "/images/edicion-video/mini-skirts-portada.jpg" // Necesitás una imagen de portada
  },
  { 
    id: "vlog-diario-video", 
    title: "Vlog Diario",
    image: "/images/edicion-video/vlog-portada.jpg" // Necesitás una imagen de portada
  },
  { 
    id: "motocross-video", 
    title: "Motocross",
    image: "/images/edicion-video/motocross-portada.jpg" // Necesitás una imagen de portada
  },
  { 
    id: "indumentaria-video", 
    title: "Indumentaria",
    image: "/images/edicion-video/indumentaria-portada.jpg" // Necesitás una imagen de portada
  },
]

export default function EdicionVideoPage() {
  return (
    <div className="pt-24 min-h-screen">
      <CategoryContent categoryData={categoryData} />
      <ContactSection />
    </div>
  )
}
