import { Slot } from "@radix-ui/react-slot";
import type * as React from "react";
import { tv, type VariantProps } from "tailwind-variants/lite";

const buttonVariants = tv({
  base: "group relative flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-medium text-sm leading-none transition-all duration-300",
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground",
      outline: "border border-border bg-background text-foreground",
      text: "text-foreground",
      secondary:
        "border border-transparent bg-secondary text-secondary-foreground hover:border-border hover:bg-secondary/60",
    },
    size: {
      base: "h-10 rounded-full px-4",
      xs: "h-8 rounded-full px-3 text-sm",
      sm: "h-9 rounded-full px-4",
      md: "h-14 rounded-2xl rounded-full px-6",
      lg: "h-16 rounded-2xl rounded-full px-8",
      icon: "h-10 w-10 rounded-2xl bg-surface text-sm",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "base",
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = ({
  ref,
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={buttonVariants({ variant, size, className })}
      ref={ref}
      {...props}
    />
  );
};

Button.displayName = "Button";

export { Button, buttonVariants };
