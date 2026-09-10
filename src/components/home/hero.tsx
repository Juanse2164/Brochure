import { ArrowRight, Check, Cpu } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const WHATSAPP_URL =
  "https://wa.me/573015459744?text=Hola%20Juan%2C%20quiero%20automatizar%20procesos%20en%20mi%20empresa"

const stats = [
  { value: "+6 años", label: "de experiencia en software" },
  { value: "90%", label: "de ahorro en costos operativos" },
  { value: "24/7", label: "operación automatizada" },
]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute -top-16 -right-16 size-40 rotate-12 border-2 border-border bg-chart-4/40 sm:size-56" />
      <div className="pointer-events-none absolute top-40 -left-10 size-20 -rotate-6 border-2 border-border bg-chart-3/50" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24 lg:pb-28">
        <div>
          <Badge variant="secondary" className="mb-6 rounded-base text-xs font-bold">
            Arquitecto de Software · +6 años de experiencia
          </Badge>
          <h1 className="mb-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Automatización que <span className="text-main">trabaja por tu empresa</span>
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Diseño chatbots inteligentes, bots RPA que imitan el comportamiento humano
            e infraestructura en la nube de AWS. Soluciones de software a la medida para
            empresas que quieren vender más y operar mejor, sin aumentar costos.
          </p>
          <div className="mb-12 flex flex-wrap gap-4">
            <Button asChild size="lg" className="font-bold">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                Agenda una llamada
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-bold">
              <a href="#servicios">Ver servicios</a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {stats.map((stat) => (
              <div key={stat.value}>
                <strong className="block font-heading text-2xl font-black text-main sm:text-3xl">
                  {stat.value}
                </strong>
                <span className="text-sm font-medium text-foreground/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="pointer-events-none absolute top-8 -right-4 hidden w-44 rotate-6 border-2 border-border bg-secondary-background p-2 shadow-shadow lg:block">
            <img
              src="profile2.jpeg"
              alt=""
              className="aspect-[4/5] w-full border-2 border-border object-cover"
            />
          </div>

          <Card className="animate-float relative z-10 gap-0 py-0">
            <div className="flex items-center gap-1.5 border-b-2 border-border px-4 py-3">
              <span className="size-2.5 rounded-base border-2 border-border bg-chart-4" />
              <span className="size-2.5 rounded-base border-2 border-border bg-chart-3" />
              <span className="size-2.5 rounded-base border-2 border-border bg-chart-2" />
              <span className="ml-2 text-xs font-bold text-foreground/60">
                Chatbot de ventas · WhatsApp
              </span>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <div className="max-w-[85%] self-start rounded-base border-2 border-border bg-background px-3.5 py-2.5 text-sm">
                ¡Hola! Soy el asistente virtual. ¿En qué puedo ayudarte hoy?
              </div>
              <div className="max-w-[85%] self-end rounded-base border-2 border-border bg-main px-3.5 py-2.5 text-sm font-medium text-main-foreground">
                Quiero ver camisetas en talla M
              </div>
              <div className="max-w-[85%] self-start rounded-base border-2 border-border bg-background px-3.5 py-2.5 text-sm">
                Encontré 12 camisetas disponibles en talla M. Te comparto el catálogo…
              </div>
              <div className="inline-flex w-fit items-center gap-2 self-start rounded-base border-2 border-border bg-chart-4 px-3 py-1.5 text-xs font-bold">
                <Check className="size-3.5" strokeWidth={3} />
                Pedido #1024 confirmado
              </div>
            </div>
          </Card>

          <Card className="animate-float-delayed relative z-0 mt-6 gap-3 py-5 lg:absolute lg:-bottom-10 lg:left-0 lg:w-64">
            <div className="flex items-center gap-2 px-6 text-sm font-bold text-main">
              <Cpu />
              Bots RPA
            </div>
            <p className="px-6 text-sm font-medium text-foreground/70">
              Migrando registros al sistema…
            </p>
            <div className="mx-6 h-2.5 overflow-hidden border-2 border-border bg-background">
              <span className="animate-progress block h-full bg-main" />
            </div>
            <p className="px-6 text-xs font-medium text-foreground/50">
              1.842 / 2.000 · Un mes de trabajo, hecho en días
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
