import Link from "next/link"
import Image from "next/image"

interface Empresa {
  id: string
  nombre: string
  imagen: string
  categorias: Array<{
    subtitulo: string
    imagenes: string[]
  }>
}

interface CorporativoContentProps {
  empresas: Empresa[]
}

export function CorporativoContent({ empresas }: CorporativoContentProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporativo</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Trabajos realizados desde el área de Marketing y Comunicación en distintas empresas.
        </p>
      </div>

      <div className="space-y-24">
        {empresas.map((empresa) => (
          <section key={empresa.id} id={empresa.id} className="scroll-mt-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                <Image
                  src={empresa.imagen}
                  alt={empresa.nombre}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold">{empresa.nombre}</h2>
            </div>

            <div className="space-y-12">
              {empresa.categorias.map((categoria, index) => (
                <div key={index} className="pl-8 border-l-2 border-gray-200">
                  <h3 className="text-2xl font-semibold mb-6">
                    {categoria.subtitulo}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoria.imagenes.map((imagen, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                      >
                        <Image
                          src={imagen}
                          alt={`${categoria.subtitulo} - Imagen ${imgIndex + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
