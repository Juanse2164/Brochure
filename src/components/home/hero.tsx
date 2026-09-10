import {
  Activity,
  ArrowRight,
  Check,
  Code2,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  HardDrive,
  Layers,
  Maximize2,
  Network,
  ShieldCheck,
} from "lucide-react"
import { useState, type KeyboardEvent } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"

type DeckCardId = "chat" | "rpa" | "database" | "aws" | "custom"

const deckPositions: Record<DeckCardId, { x: string; y: string; rotate: number }> = {
  chat: { x: "0px", y: "clamp(-110px, -18vw, -80px)", rotate: -4 },
  rpa: { x: "clamp(-112px, -22vw, -72px)", y: "clamp(150px, 40vw, 190px)", rotate: -7 },
  database: { x: "clamp(72px, 22vw, 112px)", y: "clamp(150px, 40vw, 190px)", rotate: 6 },
  aws: { x: "clamp(125px, 34vw, 165px)", y: "clamp(-180px, -36vw, -115px)", rotate: 8 },
  custom: { x: "clamp(-145px, -35vw, -80px)", y: "clamp(-190px, -38vw, -125px)", rotate: -8 },
}

const deckZIndexes: Record<DeckCardId, number> = {
  chat: 40,
  rpa: 10,
  database: 20,
  aws: 30,
  custom: 25,
}

function ChatCard({ copy }: { copy: ReturnType<typeof useLanguage>["copy"] }) {
  const chat = copy.hero.deck.chat

  return (
    <Card className="gap-0 overflow-hidden py-0">
      <div className="flex items-center gap-1.5 border-b-2 border-border px-4 py-3">
        <span className="size-2.5 rounded-base border-2 border-border bg-chart-4" />
        <span className="size-2.5 rounded-base border-2 border-border bg-chart-3" />
        <span className="size-2.5 rounded-base border-2 border-border bg-chart-2" />
        <span className="ml-2 text-xs font-bold text-foreground/60">{chat.title}</span>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="max-w-[85%] self-start rounded-base border-2 border-border bg-background px-3.5 py-2.5 text-sm">
          {chat.greeting}
        </div>
        <div className="max-w-[85%] self-end rounded-base border-2 border-border bg-main px-3.5 py-2.5 text-sm font-medium text-main-foreground">
          {chat.userMessage}
        </div>
        <div className="max-w-[85%] self-start rounded-base border-2 border-border bg-background px-3.5 py-2.5 text-sm">
          {chat.answer}
        </div>
        <div className="inline-flex w-fit items-center gap-2 self-start rounded-base border-2 border-border bg-chart-4 px-3 py-1.5 text-xs font-bold">
          <Check className="size-3.5" strokeWidth={3} />
          {chat.success}
        </div>
      </div>
    </Card>
  )
}

function RpaCard({ copy }: { copy: ReturnType<typeof useLanguage>["copy"] }) {
  const rpa = copy.hero.deck.rpa

  return (
    <Card className="gap-3 py-5">
      <div className="flex items-center gap-2 px-6 text-sm font-bold text-main">
        <Cpu className="size-5" />
        {rpa.title}
      </div>
      <p className="px-6 text-sm font-medium text-foreground/70">{rpa.task}</p>
      <div className="mx-6 h-2.5 overflow-hidden border-2 border-border bg-background">
        <span className="animate-progress block h-full bg-main" />
      </div>
      <p className="px-6 text-xs font-medium text-foreground/50">{rpa.meta}</p>
    </Card>
  )
}

function DatabaseCard({ copy }: { copy: ReturnType<typeof useLanguage>["copy"] }) {
  const database = copy.hero.deck.database

  return (
    <Card className="gap-4 py-5">
      <div className="flex items-center gap-2 px-6 text-sm font-bold text-main">
        <Database className="size-5" />
        {database.title}
      </div>
      <div className="flex flex-col gap-2 px-6">
        <div className="h-2 border-2 border-border bg-chart-3" />
        <div className="h-2 w-4/5 border-2 border-border bg-chart-1" />
        <div className="h-2 w-3/5 border-2 border-border bg-chart-4" />
      </div>
      <p className="px-6 text-sm font-medium text-foreground/70">{database.task}</p>
      <p className="px-6 text-xs font-medium text-foreground/50">{database.meta}</p>
    </Card>
  )
}

function AwsCard({ copy }: { copy: ReturnType<typeof useLanguage>["copy"] }) {
  const aws = copy.hero.deck.aws
  const infrastructureIcons = [HardDrive, Network, Activity] as const
  const iconBackgrounds = ["bg-chart-5", "bg-chart-1", "bg-chart-4"] as const

  return (
    <Card className="gap-4 py-5">
      <div className="flex items-center gap-2 px-6 text-sm font-bold text-main">
        <Cloud className="size-5" />
        {aws.title}
      </div>
      <div className="grid grid-cols-3 gap-2 px-6">
        {infrastructureIcons.map((Icon, index) => (
          <span
            key={aws.icons[index]}
            title={aws.icons[index]}
            aria-label={aws.icons[index]}
            className={`grid h-10 place-items-center border-2 border-border ${iconBackgrounds[index]}`}
          >
            <Icon className="size-5" aria-hidden="true" />
          </span>
        ))}
      </div>
      <p className="px-6 text-sm font-medium text-foreground/70">{aws.task}</p>
      <p className="px-6 text-xs font-medium text-foreground/50">{aws.meta}</p>
    </Card>
  )
}

function CustomDevelopmentCard({ copy }: { copy: ReturnType<typeof useLanguage>["copy"] }) {
  const custom = copy.hero.deck.custom
  const developmentIcons = [Layers, GitBranch, Maximize2, ShieldCheck] as const
  const iconBackgrounds = ["bg-chart-5", "bg-chart-1", "bg-chart-3", "bg-chart-4"] as const

  return (
    <Card className="gap-4 py-5">
      <div className="flex items-center gap-2 px-6 text-sm font-bold text-main">
        <Code2 className="size-5" />
        {custom.title}
      </div>
      <div className="grid grid-cols-2 gap-2 px-6">
        {developmentIcons.map((Icon, index) => (
          <div
            key={custom.icons[index]}
            title={custom.icons[index]}
            className="flex min-w-0 items-center gap-1.5 border-2 border-border bg-background px-1.5 py-1.5"
          >
            <span
              className={`grid size-7 shrink-0 place-items-center border-2 border-border ${iconBackgrounds[index]}`}
            >
              <Icon className="size-3.5" aria-hidden="true" />
            </span>
            <span className="truncate text-[9px] font-bold uppercase tracking-tight">
              {custom.icons[index]}
            </span>
          </div>
        ))}
      </div>
      <p className="px-6 text-sm font-medium text-foreground/70">{custom.task}</p>
      <p className="px-6 text-xs font-medium text-foreground/50">{custom.meta}</p>
    </Card>
  )
}

function DeckCard({
  id,
  active,
  copy,
  onActivate,
}: {
  id: DeckCardId
  active: boolean
  copy: ReturnType<typeof useLanguage>["copy"]
  onActivate: (id: DeckCardId) => void
}) {
  const title = copy.hero.deck[id].title
  const position = deckPositions[id]
  const transform = active
    ? "translate(-50%, -50%) rotate(0deg) scale(1.04)"
    : `translate(calc(-50% + ${position.x}), calc(-50% + ${position.y})) rotate(${position.rotate}deg) scale(0.91)`

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      onActivate(id)
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={title}
      aria-pressed={active}
      onMouseEnter={() => onActivate(id)}
      onFocus={() => onActivate(id)}
      onKeyDown={handleKeyDown}
      className={`absolute left-1/2 top-1/2 w-[min(82vw,330px)] cursor-pointer outline-none transition-[transform,filter] duration-300 ease-out focus-visible:ring-4 focus-visible:ring-ring/50 ${active ? "brightness-105 drop-shadow-[8px_8px_0_var(--border)]" : ""}`}
      style={{ transform, zIndex: active ? 50 : deckZIndexes[id] }}
    >
      {id === "chat" && <ChatCard copy={copy} />}
      {id === "rpa" && <RpaCard copy={copy} />}
      {id === "database" && <DatabaseCard copy={copy} />}
      {id === "aws" && <AwsCard copy={copy} />}
      {id === "custom" && <CustomDevelopmentCard copy={copy} />}
    </div>
  )
}

export function Hero() {
  const { copy } = useLanguage()
  const [activeCard, setActiveCard] = useState<DeckCardId>("chat")
  const deckCards: DeckCardId[] = ["chat", "rpa", "database", "aws", "custom"]

  return (
    <section id="inicio" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute -top-16 -right-16 size-40 rotate-12 border-2 border-border bg-chart-4/40 sm:size-56" />
      <div className="pointer-events-none absolute top-40 -left-10 size-20 -rotate-6 border-2 border-border bg-chart-3/50" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24 lg:pb-28">
        <div>
          <Badge variant="secondary" className="mb-6 rounded-base text-xs font-bold">
            {copy.hero.badge}
          </Badge>
          <h1 className="mb-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {copy.hero.titleLead}
            <span className="text-main">{copy.hero.titleAccent}</span>
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            {copy.hero.lead}
          </p>
          <div className="mb-12 flex flex-wrap gap-4">
            <Button asChild size="lg" className="font-bold">
              <a href={copy.contact.whatsappUrl} target="_blank" rel="noopener">
                {copy.hero.actions.schedule}
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-bold">
              <a href="#servicios">{copy.hero.actions.services}</a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {copy.hero.stats.map((stat) => (
              <div key={stat.value}>
                <strong className="block font-heading text-2xl font-black text-main sm:text-3xl">
                  {stat.value}
                </strong>
                <span className="text-sm font-medium text-foreground/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[620px] w-full max-w-[520px] sm:h-[630px] lg:h-[570px]">
          <div className="pointer-events-none absolute inset-x-8 top-1/2 h-72 -translate-y-1/2 rotate-[-4deg] border-2 border-border bg-main/10" />
          <div className="pointer-events-none absolute top-4 right-5 z-0 hidden w-36 rotate-6 border-2 border-border bg-secondary-background p-2 shadow-shadow lg:block">
            <img
              src="profile2.jpeg"
              alt=""
              className="aspect-[4/5] w-full border-2 border-border object-cover"
            />
          </div>
          {deckCards.map((id) => (
            <DeckCard
              key={id}
              id={id}
              active={activeCard === id}
              copy={copy}
              onActivate={setActiveCard}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
