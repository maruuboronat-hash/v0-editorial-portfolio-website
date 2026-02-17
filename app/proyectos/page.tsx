// app/proyectos/page.tsx
"use client";

import { ProjectsGrid } from "@/components/projects-grid";

const allProjects = [
  {
    id: "diseno-grafico",
    description: "Proyectos de diseño editorial, diseño 3D, comunicación visual e investigación tipográfica.",
    href: "/proyectos/diseno-grafico",
    image: "/images/generales/home-cover-grafico.jpg",
    imageStyle: "natural", // ← AGREGADO
  },
  {
    id: "corporativo",
    description: "Trabajos desde Marketing y Comunicación. Diseño, estrategia y automatización.",
    href: "/proyectos/corporativo",
    image: "/images/generales/home-cover-corporativo.jpg",
    imageStyle: "natural", // ← AGREGADO
  },
  {
    id: "indumentaria",
    description: "Diseño de indumentaria y experimentación visual desde el cuerpo.",
    href: "/proyectos/indumentaria-ilustracion",
    image: "/images/generales/home-cover-indumentaria.jpg",
    imageStyle: "natural", // ← AGREGADO
  },
  {
    id: "personales",
    description: "Exploraciones creativas y proyectos experimentales.",
    href: "/proyectos/personales",
    image: "/images/generales/home-cover-proyectos-personales.jpg",
    imageStyle: "natural", // ← AGREGADO
  },
  {
    id: "edicion-video",
    description: "Edición, post-producción y animación de piezas audiovisuales.",
    href: "/proyectos/edicion-video",
    image: "/images/generales/home-cover-ediciondevideo.jpg",
    imageStyle: "natural", // ← AGREGADO
    // NOTA: Sin colSpan aquí, queremos que ocupe 1 columna en PROYECTOS
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
