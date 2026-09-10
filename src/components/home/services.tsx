import type { ReactNode } from "react"
import { ArrowRight, Check, Cloud, Cpu, MessageSquare } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const chatbots = {
  icon: MessageSquare,
  title: "Chatbots inteligentes",
  description:
    "Diseño y desarrollo de chatbots que automatizan conversaciones y flujos de negocio de principio a fin: ventas, reservas, pedidos y atención al cliente.",
  items: [
    "Flujos de venta y catálogo de productos",
    "Reservas, pedidos y cotizaciones automáticas",
    "Atención al cliente 24/7",
    "Integración con WhatsApp y tus sistemas actuales",
  ],
}

const rpa = {
  icon: Cpu,
  title: "Bots RPA",
  description: (
    <>
      Bots que <strong>imitan el comportamiento humano en un computador</strong>: navegan,
      hacen clic, llenan formularios y mueven datos entre sistemas, igual que una
      persona, pero sin cansarse ni equivocarse.
    </>
  ),
  items: [
    "Automatiza sin necesidad de APIs ni integraciones",
    "Entrada y migración masiva de datos",
    "Extracción de información de sitios web",
    "Operación continua, rápida y sin errores",
  ],
}

const aws = {
  icon: Cloud,
  title: "Infraestructura en AWS",
  description:
    "Administración de tu infraestructura en la nube de Amazon: servidores, bases de datos, despliegues y monitoreo, con foco en seguridad y optimización de costos.",
  items: [
    "Arquitectura y despliegue de aplicaciones en AWS",
    "Optimización de costos en la nube",
    "Seguridad, respaldos y alta disponibilidad",
    "Monitoreo y escalabilidad bajo demanda",
  ],
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  items,
  featured = false,
  delay = 0,
}: {
  icon: typeof MessageSquare
  title: string
  description: ReactNode
  items: string[]
  featured?: boolean
  delay?: number
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <Card
        className={
          featured
            ? "relative h-full bg-main text-main-foreground"
            : "h-full transition-transform duration-300 hover:-translate-y-1.5"
        }
      >
        {featured && (
          <div className="absolute -top-3.5 left-6">
            <Badge className="font-bold">El más innovador</Badge>
          </div>
        )}
        <div className="flex flex-col gap-5 px-6">
          <span
            className={
              "grid size-13 place-items-center border-2 border-border " +
              (featured
                ? "bg-secondary-background text-main"
                : "bg-main text-main-foreground")
            }
          >
            <Icon className="size-6" />
          </span>
          <h3 className="text-xl">{title}</h3>
          <p className={"text-sm leading-relaxed " + (featured ? "text-main-foreground/70" : "text-foreground/70")}>
            {description}
          </p>
          <ul className="flex flex-col gap-2.5">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm font-medium">
                <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center border-2 border-border bg-chart-4">
                  <Check className="size-2.5" strokeWidth={4} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {featured && (
          <a
            href="#rpa"
            className="mt-auto flex items-center gap-2 px-6 pt-2 font-bold underline-offset-4 hover:underline"
          >
            Conoce cómo funciona
            <ArrowRight className="size-4" />
          </a>
        )}
      </Card>
    </Reveal>
  )
}

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-background py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <Badge className="mb-4 font-bold">Servicios</Badge>
          <h2 className="mb-4 text-3xl sm:text-4xl">
            Soluciones de automatización a la medida
          </h2>
          <p className="text-foreground/70">
            Tres líneas de servicio para eliminar el trabajo repetitivo, atender mejor a tus clientes y escalar tu operación.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-8 pt-3 md:grid-cols-3">
          <ServiceCard {...chatbots} delay={0} />
          <ServiceCard {...rpa} featured delay={100} />
          <ServiceCard {...aws} delay={200} />
        </div>
      </div>
    </section>
  )
}
