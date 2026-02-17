"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

interface ProjectItem {
  id: string;
  href: string;
  image: string;
  description: string;
  colSpan?: number;
  imageStyle?: "square" | "natural";
  isWide?: boolean;
}

interface ProjectsGridProps {
  projects: ProjectItem[];
  title?: string;
  description?: string;
}

export function ProjectsGrid({
  projects,
  title,
  description,
}: ProjectsGridProps) {
  // Separamos la imagen ancha del resto
  const wideProject = projects.find(p => p.isWide);
  const normalProjects = projects.filter(p => !p.isWide);

  return (
    <ScrollReveal className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
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

        {/* PRIMERO: Imágenes normales (en grid de 2 columnas) */}
        <div className="grid grid-cols-2 gap-1 mb-2"> {/* ← AGREGADO mb-12 */}
          {normalProjects.map((project) => {
            const isSquare = project.imageStyle === "square";

            return (
              <Link
                key={project.id}
                href={project.href}
                className={`group relative block bg-white ${
                  project.colSpan ? 'md:col-span-2' : ''
                }`}
              >
                {isSquare ? (
                  <div className="relative w-full aspect-square">
                    <Image
                      src={project.image}
                      alt={project.id}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                ) : (
                  <div className="relative w-full">
                    <Image
                      src={project.image}
                      alt={project.id}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>
                )}

                <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm md:text-base text-center leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* DESPUÉS: Imagen ancha (si existe) */}
        {wideProject && (
          <div className="mt-2"> {/* ← AGREGADO mt-8 para separar */}
            <Link
              href={wideProject.href}
              className="group relative block bg-white w-full"
            >
              <div className="relative w-full">
                <Image
                  src={wideProject.image}
                  alt={wideProject.id}
                  width={2400}
                  height={1600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-sm md:text-base text-center leading-relaxed">
                  {wideProject.description}
                </p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}
