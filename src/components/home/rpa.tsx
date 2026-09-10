import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const chips = [
  "Sin cambios en tus sistemas",
  "Cero errores humanos",
  "Trabaja 24/7",
  "Retorno de inversión en semanas",
]

const steps = [
  {
    num: "1",
    title: "Observa",
    text: "El bot abre la aplicación web o el sistema de tu empresa, igual que lo haría un operario.",
  },
  {
    num: "2",
    title: "Ejecuta",
    text: "Hace clic, escribe, navega y completa las tareas paso a paso, con la lógica de tu negocio.",
  },
  {
    num: "3",
    title: "Entrega",
    text: "Guarda los resultados, genera reportes y notifica cuando termina. Tú solo revisas.",
  },
]

export function Rpa() {
  return (
    <section id="rpa" className="scroll-mt-20 border-y-2 border-border bg-main py-24 text-main-foreground">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <Badge className="mb-4 bg-secondary-background font-bold text-foreground">
            Automatización Robótica de Procesos
          </Badge>
          <h2 className="mb-6 text-3xl sm:text-4xl">
            Un bot que usa el computador{" "}
            <span className="text-secondary-background">como lo haría una persona</span>
          </h2>
          <p className="mb-5 leading-relaxed text-main-foreground/80">
            La RPA (Robotic Process Automation) consiste en bots de software que operan las
            aplicaciones de tu empresa <strong>imitando el comportamiento humano</strong>: abren el
            navegador, inician sesión, hacen clic, leen pantallas, copian información y llenan
            formularios. Estos bots controlan navegadores reales con una
            precisión milimétrica.
          </p>
          <p className="mb-8 leading-relaxed text-main-foreground/80">
            ¿La mejor parte? No necesitas cambiar tus sistemas ni contratar integraciones
            costosas. Si una persona puede hacerlo en un computador, un bot RPA puede
            hacerlo más rápido, sin pausas y sin errores.
          </p>
          <div className="flex flex-wrap gap-3">
            {chips.map((chip) => (
              <Badge
                key={chip}
                className="bg-secondary-background text-sm font-bold text-foreground"
              >
                {chip}
              </Badge>
            ))}
          </div>
        </Reveal>

        <div className="flex flex-col gap-5">
          {steps.map((step, index) => (
            <Reveal key={step.num} delay={index * 100}>
              <Card className="flex-row items-start gap-5 py-5 transition-transform duration-300 hover:translate-x-1.5">
                <span className="ml-6 grid size-11 shrink-0 place-items-center border-2 border-border bg-main font-heading text-lg font-black">
                  {step.num}
                </span>
                <div className="pr-6">
                  <h4 className="mb-1.5 text-lg">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-foreground/60">{step.text}</p>
                </div>
              </Card>
            </Reveal>
          ))}
          <Reveal delay={300}>
            <Card className="bg-secondary-background py-5">
              <p className="px-6 font-heading text-base leading-relaxed font-bold">
                Procesos que antes tomaban <strong className="text-main">un mes de trabajo manual</strong>{" "}
                se completan en <strong className="text-main">tres días</strong>
              </p>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
