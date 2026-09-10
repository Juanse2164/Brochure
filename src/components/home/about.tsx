import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"

export function About() {
  const { copy } = useLanguage()

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
            <h3 className="text-xl">{copy.about.card.name}</h3>
            <p className="font-bold text-main">{copy.about.card.role}</p>
            <p className="text-sm font-medium text-foreground/60">
              {copy.about.card.location}
            </p>
            <div className="flex flex-wrap justify-center gap-2 px-4">
              {copy.about.card.certifications.map((certification) => (
                <Badge key={certification} variant="secondary" className="font-bold">
                  {certification}
                </Badge>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={100}>
          <Badge className="mb-4 font-bold">{copy.about.label}</Badge>
          <h2 className="mb-5 text-3xl sm:text-4xl">{copy.about.title}</h2>
          <p className="mb-5 leading-relaxed text-foreground/70">
            {copy.about.firstParagraph}
          </p>
          <p className="mb-8 leading-relaxed text-foreground/70">
            {copy.about.secondParagraph}
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {copy.about.results.map((result) => (
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
