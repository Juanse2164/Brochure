import { useLanguage } from "@/lib/i18n"

export function Footer() {
  const { copy } = useLanguage()

  return (
    <footer className="border-t-2 border-border bg-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-sm font-medium text-background sm:px-6">
        <span>{copy.footer.copyright}</span>
        <span>{copy.footer.services}</span>
      </div>
    </footer>
  )
}
