import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-500"
      : "border border-white/20 text-white hover:bg-white/10 focus:ring-white/30";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
