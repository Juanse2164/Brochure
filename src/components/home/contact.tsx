import { Mail } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.83 9.83 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.89 9.88m8.42-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.41" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  )
}

export function Contact() {
  const { copy } = useLanguage()

  return (
    <section
      id="contacto"
      className="relative scroll-mt-20 overflow-hidden border-y-2 border-border bg-main py-24 text-main-foreground"
    >
      <div className="pointer-events-none absolute -right-14 -bottom-14 size-44 -rotate-12 border-2 border-border bg-chart-4/40" />
      <div className="pointer-events-none absolute -top-10 -left-10 size-28 rotate-6 border-2 border-border bg-chart-3/50" />

      <Reveal className="relative mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
        <h2 className="mb-5 text-3xl sm:text-4xl">
          {copy.contact.title}
        </h2>
        <p className="mb-10 text-main-foreground/80">{copy.contact.description}</p>
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-secondary-background font-bold text-foreground">
            <a href={copy.contact.whatsappUrl} target="_blank" rel="noopener">
              <WhatsAppIcon />
              {copy.contact.whatsapp}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-secondary-background font-bold"
          >
            <a href={`mailto:${copy.contact.email}`}>
              <Mail />
              {copy.contact.email}
            </a>
          </Button>
        </div>
        <a
          href="https://www.linkedin.com/in/juan-esteban-robles-chanaga"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 font-bold underline-offset-4 hover:underline"
        >
          <LinkedinIcon />
          {copy.contact.linkedin}
        </a>
      </Reveal>
    </section>
  )
}
