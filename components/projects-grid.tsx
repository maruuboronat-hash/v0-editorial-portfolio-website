// components/projects-grid.tsx
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
}

// Este es el componente que recibirá la lista de proyectos
export function ProjectsGrid({ projects }: { projects: ProjectItem[] }) {
  return (
    <ScrollReveal className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
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
