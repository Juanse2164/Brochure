import { ArrowRight, Check, Cloud, Cpu, MessageSquare, type LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"

function ServiceCard({
  icon: Icon,
  title,
  description,
  items,
  featured = false,
  tag,
  link,
  delay = 0,
}: {
  icon: LucideIcon
  title: string
  description: ReactNode
  items: readonly string[]
  featured?: boolean
  tag?: string
  link?: string
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
        {featured && tag && (
          <div className="absolute -top-3.5 left-6">
            <Badge className="font-bold">{tag}</Badge>
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
          <p
            className={
              "text-sm leading-relaxed " +
              (featured ? "text-main-foreground/70" : "text-foreground/70")
            }
          >
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
        {featured && link && (
          <a
            href="#rpa"
            className="mt-auto flex items-center gap-2 px-6 pt-2 font-bold underline-offset-4 hover:underline"
          >
            {link}
            <ArrowRight className="size-4" />
          </a>
        )}
      </Card>
    </Reveal>
  )
}

export function Services() {
  const { copy } = useLanguage()
  const cards = copy.services.cards

  return (
    <section id="servicios" className="scroll-mt-20 bg-background py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <Badge className="mb-4 font-bold">{copy.services.label}</Badge>
          <h2 className="mb-4 text-3xl sm:text-4xl">{copy.services.title}</h2>
          <p className="text-foreground/70">{copy.services.description}</p>
        </Reveal>

        <div className="grid items-stretch gap-8 pt-3 md:grid-cols-3">
          <ServiceCard
            icon={MessageSquare}
            title={cards.chatbots.title}
            description={cards.chatbots.description}
            items={cards.chatbots.items}
          />
          <ServiceCard
            icon={Cpu}
            title={cards.rpa.title}
            description={
              <>
                {cards.rpa.descriptionBefore}
                <strong>{cards.rpa.descriptionStrong}</strong>
                {cards.rpa.descriptionAfter}
              </>
            }
            items={cards.rpa.items}
            featured
            tag={cards.rpa.tag}
            link={cards.rpa.link}
            delay={100}
          />
          <ServiceCard
            icon={Cloud}
            title={cards.aws.title}
            description={cards.aws.description}
            items={cards.aws.items}
            delay={200}
          />
        </div>
      </div>
    </section>
  )
}
