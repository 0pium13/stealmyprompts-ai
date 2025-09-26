"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { designTokens } from "@/lib/theme";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "text-white",
        outline: "border",
        ghost: "",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4",
        lg: "h-11 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, style, ...props }, ref) => {
    const baseStyle: React.CSSProperties =
      variant === "outline"
        ? { borderColor: "rgba(255,255,255,0.2)", color: designTokens.colors.white }
        : variant === "ghost"
        ? { color: designTokens.colors.white }
        : { background: designTokens.colors.primary[600], color: designTokens.colors.white };

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        style={style ? { ...baseStyle, ...style } : baseStyle}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
