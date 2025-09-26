import * as React from "react";
import { cn } from "@/lib/utils";
import { designTokens } from "@/lib/theme";

export function Heading({ className = "", level = 1, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { level?: 1 | 2 | 3 | 4 }) {
  const Tag = (`h${level}` as unknown) as keyof JSX.IntrinsicElements;
  const sizes: Record<number, string> = { 1: "text-4xl", 2: "text-3xl", 3: "text-2xl", 4: "text-xl" };
  return (
    <Tag
      className={cn("font-semibold", sizes[level], className)}
      style={{ color: designTokens.colors.neutral[900] }}
      {...(props as any)}
    />
  );
}

export function Text({ className = "", muted = false, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { muted?: boolean }) {
  return (
    <p
      className={cn("text-sm", className)}
      style={{ color: muted ? designTokens.colors.neutral[600] : designTokens.colors.neutral[900] }}
      {...props}
    />
  );
}
