import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-base text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          "bg-main text-main-foreground border-2 border-border shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
        secondary:
          "bg-secondary-background text-foreground border-2 border-border shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
        outline:
          "border-2 border-border bg-transparent text-foreground shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-main hover:text-main-foreground",
        ghost:
          "border-2 border-transparent text-foreground hover:border-border hover:bg-secondary-background",
        destructive:
          "bg-chart-2 text-foreground border-2 border-border shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
        link: "text-main underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
