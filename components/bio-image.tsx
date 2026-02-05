// components/bio-image.tsx
"use client";

import Image from "next/image";

// Definimos las propiedades (props) que va a recibir el componente
interface BioImageProps {
  // Opcional: podés pasar un tamaño diferente si querés
  size?: "medium" | "large";
}

export function BioImage({ size = "medium" }: BioImageProps) {
  // Definimos las clases de tamaño según la prop
  const sizeClasses = {
    medium: "w-80 h-80 md:w-96 md:h-96",  // Tamaño de la Home
    large: "w-96 h-96 md:w-[28rem] md:h-[28rem]",  // Más grande para la página de Bio
  };

  return (
    <div className="flex justify-center">
      <div className={`relative ${sizeClasses[size]} overflow-hidden rounded-full`}>
        <Image
          src="/images/generales/BIO/Bioo.png"  // ¡IMPORTANTE: Usá el nuevo nombre!
          alt="Bio María Boronat"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
