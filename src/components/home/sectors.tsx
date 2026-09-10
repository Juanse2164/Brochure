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
import { useLanguage } from "@/lib/i18n"

const sectorIcons = [ShoppingBag, TrendingUp, Building2, Utensils, Headset] as const

export function Sectors() {
  const { copy } = useLanguage()

  return (
    <section id="sectores" className="scroll-mt-20 bg-secondary-background py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <Badge className="mb-4 font-bold">{copy.sectors.label}</Badge>
          <h2 className="mb-4 text-3xl sm:text-4xl">{copy.sectors.title}</h2>
          <p className="text-foreground/70">{copy.sectors.description}</p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {copy.sectors.items.map((sector, index) => {
            const Icon = sectorIcons[index]

            return (
              <Reveal key={sector.title} delay={index * 80} className="h-full">
                <Card className="h-full items-center text-center transition-transform duration-300 hover:-translate-y-1.5">
                  <span className="grid size-13 place-items-center border-2 border-border bg-main text-main-foreground">
                    <Icon className="size-6" />
                  </span>
                  <div className="px-5">
                    <h4 className="mb-2">{sector.title}</h4>
                    <p className="text-xs leading-relaxed text-foreground/60">
                      {sector.text}
                    </p>
                  </div>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
