import {
  Building2,
  Headset,
  ShoppingBag,
  TrendingUp,
  Utensils,
} from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const sectors = [
  {
    icon: ShoppingBag,
    title: "Retail & Moda",
    text: "Flujos de venta de ropa por chat: catálogo, tallas, pedidos y cierre de venta automático.",
  },
  {
    icon: TrendingUp,
    title: "Ventas",
    text: "Cotizaciones, seguimiento de clientes y embudos de venta que convierten sin intervención humana.",
  },
  {
    icon: Building2,
    title: "Hotelería",
    text: "Reservas, disponibilidad y atención a huéspedes respondida al instante, a cualquier hora.",
  },
  {
    icon: Utensils,
    title: "Restaurantes",
    text: "Toma de pedidos, reservas de mesas y menú digital directamente desde el chat.",
  },
  {
    icon: Headset,
    title: "Servicio al Cliente",
    text: "Respuestas instantáneas 24/7 que reducen la carga de tu equipo y mejoran la experiencia.",
  },
]

export function Sectors() {
  return (
    <section id="sectores" className="scroll-mt-20 bg-secondary-background py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <Badge className="mb-4 font-bold">Experiencia comprobada</Badge>
          <h2 className="mb-4 text-3xl sm:text-4xl">Sectores que ya he automatizado</h2>
          <p className="text-foreground/70">
            He construido flujos conversacionales y automatizaciones para empresas reales en estos sectores.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {sectors.map((sector, index) => (
            <Reveal key={sector.title} delay={index * 80} className="h-full">
              <Card className="h-full items-center text-center transition-transform duration-300 hover:-translate-y-1.5">
                <span className="grid size-13 place-items-center border-2 border-border bg-main text-main-foreground">
                  <sector.icon className="size-6" />
                </span>
                <div className="px-5">
                  <h4 className="mb-2">{sector.title}</h4>
                  <p className="text-xs leading-relaxed text-foreground/60">
                    {sector.text}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
