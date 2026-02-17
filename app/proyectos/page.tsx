"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

// Definimos la "forma" (tipo) de cada proyecto
interface ProjectItem {
  id: string;
  href: string;
  image: string;
  description: string;
  colSpan?: number; // Opcional, para el caso de home
}

// Props del componente
interface ProjectsGridProps {
  projects: ProjectItem[];
  title?: string;
  description?: string;
}

// Este es el componente que recibirá la lista de proyectos
export function ProjectsGrid({ projects, title, description }: ProjectsGridProps) {
  return (
    <ScrollReveal className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* ENCABEZADO OPCIONAL */}
        {title && (
          <div className="mb-16 md:mb-20">
            <h2 className="font-heading text-4xl md:text-5xl tracking-tight">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                {description}
              </p>
            )}
          </div>
        )}

        {/* GRID DE PROYECTOS */}
        <div className="grid grid-cols-2 gap-1">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className={`group relative overflow-hidden bg-white ${
                project.colSpan ? 'md:col-span-2' : ''
              }`}
            >
              {/* Contenedor de imagen con altura automática */}
              <div className="relative w-full" style={{ aspectRatio: 'auto' }}>
                <Image
                  src={project.image}
                  alt={project.id}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              {/* Overlay con descripción al hacer hover */}
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-sm md:text-base text-center leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
