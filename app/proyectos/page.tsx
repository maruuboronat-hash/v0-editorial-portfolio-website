"use client";

import { ProjectsGrid } from "@/components/projects-grid";
import { useLanguage } from "@/components/language-provider";
import { categoryCovers } from "@/lib/category-covers";

const allProjects = [
  {
    id: "diseno-grafico",
    description: "...",
    href: "/proyectos/diseno-grafico",
    imageStyle: "natural",
  },
  {
    id: "corporativo",
    description: "...",
    href: "/proyectos/corporativo",
    imageStyle: "natural",
  },
  {
    id: "indumentaria",
    description: "...",
    href: "/proyectos/indumentaria-ilustracion",
    imageStyle: "natural",
  },
  {
    id: "personales",
    description: "...",
    href: "/proyectos/personales",
    imageStyle: "natural",
  },
  {
    id: "edicion-video",
    description: "Edición, post-producción y animación de piezas audiovisuales para redes, eventos y proyectos personales.",
    href: "/proyectos/edicion-video",
    imageStyle: "natural",
    isWide: true,
  },
];

export default function ProjectsPage() {
  const { t, lang } = useLanguage()

  const projectsWithCovers = allProjects.map(project => ({
    ...project,
    image: categoryCovers[project.id][lang],
  }))

  return (
    <div className="pt-16">
      <ProjectsGrid
        projects={projectsWithCovers}
        title={t.proyectos.titulo}
        description={t.proyectos.descripcion}
      />
    </div>
  );
}
