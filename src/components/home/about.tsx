import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const certs = [
  "Certificación en Cálculo para Inteligencia Artificial",
  "Inglés C1 Advanced",
  "Linux",
  "SQL",
]

const results = [
  {
    value: "<1 segundo",
    text: "de tiempo de respuesta de un chatbot, 24/7. Una atención instantánea que ningún humano puede sostener.",
  },
  {
    value: "1 mes → 3 días",
    text: "en la migración de 2.000 registros, reemplazando el trabajo manual de 5 personas.",
  },
  {
    value: "10s → <1s",
    text: "de mejora en tiempos de carga críticos mediante optimización de bases de datos.",
  },
]

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 bg-background py-24">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <Card className="items-center text-center">
            <div className="overflow-hidden border-2 border-border bg-main">
              <img
                src="profile.jpg"
                alt="Juan Esteban Robles Chanagá"
                className="aspect-square w-32 object-cover"
              />
            </div>
            <h3 className="text-xl">Juan Esteban Robles Chanagá</h3>
            <p className="font-bold text-main">Arquitecto de Software · Ingeniero Full Stack</p>
            <p className="text-sm font-medium text-foreground/60">Colombia</p>
            <div className="flex flex-wrap justify-center gap-2 px-4">
              {certs.map((cert) => (
                <Badge key={cert} variant="secondary" className="font-bold">
                  {cert}
                </Badge>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={100}>
          <Badge className="mb-4 font-bold">Sobre mí</Badge>
          <h2 className="mb-5 text-3xl sm:text-4xl">Ingeniería seria, resultados medibles</h2>
          <p className="mb-5 leading-relaxed text-foreground/70">
            Soy Arquitecto de Software y Tech Lead con más de 6 años construyendo soluciones empresariales:
            he liderado equipos de desarrollo, modernizado sistemas legacy e integrado
            inteligencia artificial generativa (OpenAI, Gemini, Anthropic, DeepSeek) en procesos de negocio reales.
          </p>
          <p className="mb-8 leading-relaxed text-foreground/70">
            Construyo sistemas que reducen costos y se pueden medir.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {results.map((result) => (
              <Card key={result.value} className="gap-2 py-5">
                <strong className="px-6 font-heading text-lg font-black text-main">
                  {result.value}
                </strong>
                <p className="px-6 text-xs leading-relaxed text-foreground/60">
                  {result.text}
                </p>
              </Card>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
