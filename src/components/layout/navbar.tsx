import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#rpa", label: "Bots RPA" },
  { href: "#sectores", label: "Sectores" },
  { href: "#sobre-mi", label: "Sobre mí" },
]

export function Navbar() {
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center border-2 border-border bg-main font-heading text-lg font-black text-main-foreground shadow-shadow">
            JR
          </span>
          <span className="font-heading text-base font-extrabold">
            Juan Esteban Robles
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={toggle}
            aria-label="Cambiar tema"
            className="hidden bg-secondary-background sm:inline-flex"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Button asChild size="sm" className="font-bold">
            <a href="#contacto">Hablemos</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
