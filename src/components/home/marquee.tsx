import { useLanguage } from "@/lib/i18n"

function Track({ items }: { items: readonly string[] }) {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center">
          <span className="px-6 font-heading text-sm font-extrabold tracking-[0.08em] uppercase">
            {item}
          </span>
          <span className="size-2.5 border-2 border-current" />
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  const { copy } = useLanguage()

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y-2 border-border bg-main py-3.5 text-main-foreground"
    >
      <div className="animate-marquee flex w-max">
        <Track items={copy.marquee} />
        <Track items={copy.marquee} />
      </div>
    </div>
  )
}
