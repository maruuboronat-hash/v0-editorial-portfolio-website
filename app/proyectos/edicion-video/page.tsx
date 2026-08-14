import { notFound } from "next/navigation"
import { ContactSection } from "@/components/contact-section"
import { CategoryContent } from "../[category]/category-content"

// Datos específicos para Edición de Video
const categoryData = {
  title: "Edición de Video",
  description: "Serie de piezas audiovisuales desarrolladas en el marco de la materia Diseño IV, a partir de material propio y preexistente. Las propuestas integran edición, animación y diseño sonoro, con foco en el ritmo, la construcción de sentido y la coherencia estética en cada proyecto.",
  projects: [
    {
      id: "animaciones-video",
      title: "Animaciones",
      image: "/images/edicion-video/portada06.png"
    },
    {
      id: "portfolio-video",
      title: "Portfolio",
      image: "/images/edicion-video/portada05.png"
    },
    { 
      id: "mini-skirts-video", 
      title: "Mini Skirts - Mary Quant",
      image: "/images/edicion-video/portada03.png"
    },
    
    { 
      id: "fanzine-infancia-video", 
      title: "Fanzine | Infancia",
      image: "/images/diseno-grafico/fanzine/fanzine-01.jpg"
    },
    
        { 
      id: "animated-teaser", 
      title: "Animated Teaser",
      image: "/images/edicion-video/interfaces.png"
    },
    
    
    { 
      id: "vlog-diario-video", 
      title: "Vlog Diario",
      image: "/images/edicion-video/portada04.png"
    },
    { 
      id: "motocross-video", 
      title: "Motocross",
      image: "/images/edicion-video/portada02.jpeg"
    },
    {
      id: "indumentaria-video",
      title: "Indumentaria",
      image: "/images/edicion-video/portada01.png"
    }
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
