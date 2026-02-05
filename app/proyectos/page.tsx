// app/projects/page.tsx
"use client";

import { ProjectsGrid } from "@/components/projects-grid";

// Esta es la MISMA lista de proyectos que en la Home.
// Podés cambiarla más tarde si querés mostrar cosas diferentes acá.
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
      {/* ENCABEZADO DE LA PÁGINA */}
      <section className="py-20 px-6 text-center">
        <h1 className="font-heading text-4xl md:text-5xl tracking-tight">
          Proyectos
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Una selección de trabajos en diseño gráfico, comunicación, indumentaria y proyectos personales.
        </p>
      </section>

      {/* LA CUADRÍCULA DE PROYECTOS (¡EL MISMO DISEÑO QUE EN HOME!) */}
      {/* Acá usamos el componente nuevo y le pasamos la lista "allProjects" */}
      <ProjectsGrid projects={allProjects} />
    </div>
  );
}
