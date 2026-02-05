/* =========================
   ABOUT (BIO CON RETRATO CIRCULAR)
========================= */

function AboutSection() {
  return (
    <ScrollReveal className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        
        {/* CONTENEDOR CIRCULAR GRANDE SIN BORDE */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-full">
            <Image
              src="/images/generales/BIO/Bio.png"
              alt="Bio María Boronat"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* TEXTO BIO (ESTE QUEDA EXACTAMENTE IGUAL) */}
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Estudiante de Diseño Gráfico y Comunicación en UCES, con foco en
            identidad visual, editorial y comunicación estratégica.
          </p>
          <Link
            href="/bio"
            className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
          >
            Leer más
          </Link>
        </div>

      </div>
    </ScrollReveal>
  )
}
