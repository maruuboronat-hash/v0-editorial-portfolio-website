// app/proyectos/page.tsx
"use client";

import { ProjectsGrid } from "@/components/projects-grid";
import { useLanguage } from "@/lib/i18n";

const allProjects = [
  {
    id: "diseno-grafico",
    description: "...",
    href: "/proyectos/diseno-grafico",
    image: "/images/generales/home-cover-grafico.jpg",
    imageStyle: "natural",
    // SIN isWide
  },
  {
    id: "corporativo",
    description: "...",
    href: "/proyectos/corporativo",
    image: "/images/generales/home-cover-corporativo.jpg",
    imageStyle: "natural", // ← IMPORTANTE
  },
  {
    id: "indumentaria",
    description: "...",
    href: "/proyectos/indumentaria-ilustracion",
    image: "/images/generales/home-cover-indumentaria.jpg",
    imageStyle: "natural", // ← IMPORTANTE
  },
  {
    id: "personales",
    description: "...",
    href: "/proyectos/personales",
    image: "/images/generales/home-cover-proyectos-personales.jpg",
    imageStyle: "natural", // ← IMPORTANTE
  },
  {
    id: "edicion-video",
    description: "Edición, post-producción y animación...",
    href: "/proyectos/edicion-video",
    image: "/images/generales/home-cover-ediciondevideo.jpg",
    imageStyle: "natural",
    isWide: true, // ← SOLO ESTA
  },
];

export default function ProjectsPage() {
  const { t } = useLanguage();
  return (
    <div className="pt-16">
      <ProjectsGrid
        projects={allProjects}
        title={t("projects.title")}
        description={t("projects.description")}
      />
    </div>
  );
}
