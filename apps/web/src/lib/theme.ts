export const designTokens = {
  colors: {
    primary: {
      50: "#eff6ff",
      500: "#3b82f6",
      600: "#2563eb",
      900: "#1e3a8a",
    },
    neutral: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      600: "#475569",
      900: "#0f172a",
    },
    dark: {
      800: "#1f2937",
      900: "#111827",
    },
    white: "#ffffff",
  },
  spacing: {
    1: "0.25rem",
    2: "0.5rem",
    4: "1rem",
    8: "2rem",
    16: "4rem",
  },
  borderRadius: {
    sm: "0.375rem",
    DEFAULT: "0.5rem",
    lg: "0.75rem",
  },
} as const;

export type DesignTokens = typeof designTokens;
