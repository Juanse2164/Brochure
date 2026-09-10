import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"

export function Rpa() {
  const { copy } = useLanguage()

  return (
    <section
      id="rpa"
      className="scroll-mt-20 border-y-2 border-border bg-main py-24 text-main-foreground"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <Badge className="mb-4 bg-secondary-background font-bold text-foreground">
            {copy.rpa.label}
          </Badge>
          <h2 className="mb-6 text-3xl sm:text-4xl">
            {copy.rpa.titleLead}
            <span className="text-secondary-background">{copy.rpa.titleAccent}</span>
          </h2>
          <p className="mb-5 leading-relaxed text-main-foreground/80">
            {copy.rpa.introBefore}
            <strong>{copy.rpa.introStrong}</strong>
            {copy.rpa.introAfter}
          </p>
          <p className="mb-8 leading-relaxed text-main-foreground/80">
            {copy.rpa.secondParagraph}
          </p>
          <div className="flex flex-wrap gap-3">
            {copy.rpa.chips.map((chip) => (
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
          {copy.rpa.steps.map((step, index) => (
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
                {copy.rpa.quoteBefore}
                <strong className="text-main">{copy.rpa.quoteStrongFirst}</strong>
                {copy.rpa.quoteMiddle}
                <strong className="text-main">{copy.rpa.quoteStrongSecond}</strong>
              </p>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
