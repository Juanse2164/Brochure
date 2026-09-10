import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"
import { useLanguage } from "@/lib/i18n"

const linkTargets = ["#servicios", "#rpa", "#sectores", "#sobre-mi"]

export function Navbar() {
  const { theme, toggle } = useTheme()
  const { language, copy, setLanguage } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center border-2 border-border bg-main font-heading text-lg font-black text-main-foreground shadow-shadow">
            JR
          </span>
          <span className="hidden font-heading text-base font-extrabold sm:inline">
            Juan Esteban Robles
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {linkTargets.map((href, index) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {copy.nav.links[index]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            role="group"
            aria-label={copy.nav.languageLabel}
            className="flex items-center border-2 border-border bg-secondary-background p-1 shadow-shadow"
          >
            <button
              type="button"
              aria-label={copy.nav.spanish}
              aria-pressed={language === "es"}
              onClick={() => setLanguage("es")}
              className={`inline-flex h-8 items-center gap-1 px-1.5 text-xs font-bold transition-colors lg:px-2 ${language === "es" ? "bg-main text-main-foreground" : "text-foreground hover:bg-background"}`}
            >
              <span aria-hidden="true">🇨🇴</span>
              <span className="hidden lg:inline">{copy.nav.spanish}</span>
              <span className="lg:hidden">ES</span>
            </button>
            <button
              type="button"
              aria-label={copy.nav.english}
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
              className={`inline-flex h-8 items-center gap-1 px-1.5 text-xs font-bold transition-colors lg:px-2 ${language === "en" ? "bg-main text-main-foreground" : "text-foreground hover:bg-background"}`}
            >
              <span aria-hidden="true">🇺🇸</span>
              <span className="hidden lg:inline">{copy.nav.english}</span>
              <span className="lg:hidden">EN</span>
            </button>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={toggle}
            aria-label={copy.nav.themeLabel}
            title={copy.nav.themeLabel}
            className="hidden bg-secondary-background sm:inline-flex"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Button asChild size="sm" className="font-bold">
            <a href="#contacto">{copy.nav.cta}</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
