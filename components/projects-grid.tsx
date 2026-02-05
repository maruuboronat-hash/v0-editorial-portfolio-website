// components/projects-grid.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

interface ProjectItem {
  id: string;
  href: string;
  image: string;
  description: string;
}

// El componente ahora puede recibir un título y una descripción (son opcionales)
interface ProjectsGridProps {
  projects: ProjectItem[];
  title?: string;       // El "?" significa que es opcional
  description?: string; // El "?" significa que es opcional
}

export function ProjectsGrid({ projects, title, description }: ProjectsGridProps) {
  return (
    <ScrollReveal className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* ENCABEZADO (SOLO SE MUESTRA SI SE PASA "title") */}
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

        {/* LA CUADRÍCULA DE PROYECTOS (IGUAL QUE ANTES) */}
        <div className="grid grid-cols-2 gap-1">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group relative aspect-square overflow-hidden bg-white"
            >
              <Image
                src={project.image}
                alt={project.id}
                fill
                className="object-contain"
                priority
              />
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
