"use client";

import { ProjectsGrid } from "@/components/projects-grid";
import { useLanguage } from "@/components/language-provider";

const allProjects = [
  {
    id: "diseno-grafico",
    description: "...",
    href: "/proyectos/diseno-grafico",
    image: "/images/generales/home-cover-grafico.jpg",
    imageStyle: "natural",
  },
  {
    id: "corporativo",
    description: "...",
    href: "/proyectos/corporativo",
    image: "/images/generales/home-cover-corporativo.jpg",
    imageStyle: "natural",
  },
  {
    id: "indumentaria",
    description: "...",
    href: "/proyectos/indumentaria-ilustracion",
    image: "/images/generales/home-cover-indumentaria.jpg",
    imageStyle: "natural",
  },
  {
    id: "personales",
    description: "...",
    href: "/proyectos/personales",
    image: "/images/generales/home-cover-proyectos-personales.jpg",
    imageStyle: "natural",
  },
  {
    id: "edicion-video",
    description: "Edición, post-producción y animación de piezas audiovisuales para redes, eventos y proyectos personales.",
    href: "/proyectos/edicion-video",
    image: "/images/generales/home-cover-ediciondevideo.jpg",
    imageStyle: "natural",
    isWide: true,
  },
];

export default function ProjectsPage() {
  const { t } = useLanguage()
  
  return (
    <div className="pt-16">
      <ProjectsGrid
        projects={allProjects}
        title={t.proyectos.titulo}
        description={t.proyectos.descripcion}
      />
    </div>
  );
}
