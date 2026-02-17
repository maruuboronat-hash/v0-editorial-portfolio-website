// app/proyectos/page.tsx
"use client";

import { ProjectsGrid } from "@/components/projects-grid";

const allProjects = [
  {
    id: "diseno-grafico",
    description: "...",
    href: "/proyectos/diseno-grafico",
    image: "/images/generales/home-cover-grafico.jpg",
    imageStyle: "natural", // ← IMPORTANTE
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
    description: "Edición, post-producción y animación de piezas audiovisuales.",
    href: "/proyectos/edicion-video",
    image: "/images/generales/home-cover-ediciondevideo.jpg",
    imageStyle: "natural",
    isWide: true, // ← NUEVO: marcamos esta como ancha
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <ProjectsGrid
        projects={allProjects}
        title="Proyectos"
        description="Una selección de trabajos en diseño gráfico, comunicación, indumentaria y proyectos personales."
      />
    </div>
  );
}
