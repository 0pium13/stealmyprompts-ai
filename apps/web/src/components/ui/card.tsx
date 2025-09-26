import * as React from "react";
import { cn } from "@/lib/utils";
import { designTokens } from "@/lib/theme";

export function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-lg border transition-shadow hover:shadow-lg", className)}
      style={{ borderColor: designTokens.colors.neutral[200], background: designTokens.colors.white }}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}
