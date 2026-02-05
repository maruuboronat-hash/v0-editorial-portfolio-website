// app/projects/page.tsx
"use client";

import { ProjectsGrid } from "@/components/projects-grid";

const allProjects = [
  {
    id: "diseno-grafico",
    description: "Proyectos de diseño editorial, diseño 3D, comunicación visual e investigación tipográfica.",
    href: "/proyectos/diseno-grafico",
    image: "/images/generales/home-cover-grafico.jpg",
  },
  {
    id: "corporativo",
    description: "Trabajos desde Marketing y Comunicación. Diseño, estrategia y automatización.",
    href: "/proyectos/corporativo",
    image: "/images/generales/home-cover-corporativo.jpg",
  },
  {
    id: "indumentaria",
    description: "Diseño de indumentaria y experimentación visual desde el cuerpo.",
    href: "/proyectos/indumentaria-ilustracion",
    image: "/images/generales/home-cover-indumentaria.jpg",
  },
  {
    id: "personales",
    description: "Exploraciones creativas y proyectos experimentales.",
    href: "/proyectos/personales",
    image: "/images/generales/home-cover-proyectos-personales.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      {/* QUITAMOS EL ENCABEZADO CENTRADO QUE HABÍA ACÁ */}
      
      {/* USAMOS EL COMPONENTE CON TÍTULO Y DESCRIPCIÓN */}
      <ProjectsGrid 
        projects={allProjects}
        title="Proyectos"
        description="Una selección de trabajos en diseño gráfico, comunicación, indumentaria y proyectos personales."
      />
    </div>
  );
}
