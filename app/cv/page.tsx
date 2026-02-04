const experience = [
  {
    period: "2024 — Presente",
    role: "Pasante de Marketing y Comunicación",
    company: "Bosch - Mobility Aftermarket",
    description: "Dirección de proyectos de identidad visual, diseño editorial y comunicación estratégica para clientes nacionales e internacionales.",
  },
  {
    period: "2021 — 2024",
    role: "Empleado Administrativo",
    company: "Cantiere SA",
    description: "Desarrollo de sistemas de identidad visual y campañas de comunicación para marcas de diferentes sectores.",
  },
  {
    period: "2022",
    role: "Runner",
    company: "AACI - Asociación Argentina de Cultura Inglesa",
    description: "Diseño de piezas gráficas para campañas publicitarias y branding de productos de consumo masivo.",
  },
  {
    period: "2021 - 2024",
    role: "Asistente en des les de moda",
    company: "Perpetua",
    description: "Diseño de piezas gráficas para campañas publicitarias y branding de productos de consumo masivo.",
  },
]

const education = [
  {
    period: "2024 - Presente",
    title: "Lic. Diseño Gráfico y Comunicación",
    institution: "UCES - Universidad de Ciencias Empresariales y Sociales",
  },
  {
    period: "2021 - 2024",
    title: "Lic. Diseño de Indumentaria - 60%",
    institution: "UBA/FADU - Univerisas de Buenos Aires",
  },
  {
    period: "2014 - 2020",
    title: "Bachillerato en Econocmía y Administración",
    institution: "Colegio Niño Jesús de Praga",
  },
]

const skills = [
  "Identidad Visual",
  "Diseño Editorial",
  "Diseño 3D",
  "P",
  "Diseño Web",
  "T",
  "I",
  "Motion Graphics",
]

const awards = [
  { year: "2024", title: "Rebranding - Identidades Visuales E cientes", category: "Foresti Design" },
  { year: "2023", title: "Figurines en Adobe Illustrator", category: "Estudio MG" },
  { year: "2023", title: "Adobe Illustrator para Diseño de Moda", category: "Estudio MG" },
  { year: "2022", title: "Adobe Photoshop e Illustrator", category: "Coderhouse" },
  { year: "2019", title: "Fotografía", category: "Colegio Niño Jesús de Praga" },
]

export default function CVPage() {
  return (
    <div className="pt-24 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 md:mb-24">
          <h1 className="font-heading text-4xl md:text-6xl tracking-tight mb-6">
            Curriculum 
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            {"Soy una persona creativa y con facilidad para el trabajo en\nequipo. Estoy siempre en la búsqueda de actividades y\ndesafíos de autosuperación. Busco un trabajo en el cual\npueda desarollar mis conocimientos en el área de diseño."}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Experience */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8">
                Experiencia
              </h2>
              <div className="space-y-12">
                {experience.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <span className="text-sm text-muted-foreground">
                      {item.period}
                    </span>
                    <div className="md:col-span-3">
                      <h3 className="font-heading text-lg mb-1">{item.role}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
                      <p className="text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8">
                Educación
              </h2>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <span className="text-sm text-muted-foreground">
                      {item.period}
                    </span>
                    <div className="md:col-span-3">
                      <h3 className="font-heading text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Awards */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8">
                CURSOS
              </h2>
              <div className="space-y-4">
                {awards.map((item, index) => (
                  <div key={index} className="flex items-baseline gap-4">
                    <span className="text-sm text-muted-foreground w-12">
                      {item.year}
                    </span>
                    <span className="text-sm">{item.title}</span>
                    <span className="text-xs text-muted-foreground">— {item.category}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8">
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8">
                Habilidades
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8">
                Idiomas
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Español</span>
                  <span className="text-muted-foreground">Nativo</span>
                </div>
                <div className="flex justify-between">
                  <span>Inglés</span>
                  <span className="text-muted-foreground">Avanzado</span>
                </div>
                <div className="flex justify-between">
                  <span>Italiano</span>
                  <span className="text-muted-foreground">Básico</span>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8">
                Descargar
              </h2>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:underline underline-offset-4"
              >
                CV en PDF &darr;
              </a>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}
