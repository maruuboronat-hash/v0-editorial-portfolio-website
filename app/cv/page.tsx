const experience = [
  {
    period: "2020 — Presente",
    role: "Directora de Arte",
    company: "Estudio Propio",
    description: "Dirección de proyectos de identidad visual, diseño editorial y comunicación estratégica para clientes nacionales e internacionales.",
  },
  {
    period: "2016 — 2020",
    role: "Diseñadora Senior",
    company: "Estudio Creativo",
    description: "Desarrollo de sistemas de identidad visual y campañas de comunicación para marcas de diferentes sectores.",
  },
  {
    period: "2012 — 2016",
    role: "Diseñadora Gráfica",
    company: "Agencia de Publicidad",
    description: "Diseño de piezas gráficas para campañas publicitarias y branding de productos de consumo masivo.",
  },
]

const education = [
  {
    period: "2008 — 2012",
    title: "Licenciatura en Diseño Gráfico",
    institution: "Universidad de Buenos Aires",
  },
  {
    period: "2014",
    title: "Especialización en Dirección de Arte",
    institution: "Escuela de Creativos",
  },
]

const skills = [
  "Identidad Visual",
  "Diseño Editorial",
  "Dirección de Arte",
  "Packaging",
  "Diseño Web",
  "Tipografía",
  "Ilustración",
  "Motion Graphics",
]

const awards = [
  { year: "2023", title: "Premio FADU", category: "Identidad Visual" },
  { year: "2022", title: "Bienal de Diseño", category: "Diseño Editorial" },
  { year: "2021", title: "Latin American Design", category: "Packaging" },
  { year: "2019", title: "Premio Lápiz de Oro", category: "Branding" },
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
                Reconocimientos
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
                  <span>Portugués</span>
                  <span className="text-muted-foreground">Intermedio</span>
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
