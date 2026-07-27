/**
 * Polices officielles de Kyrus Studio.
 */

export const FONTS = {
  primary: "'Inter', system-ui, sans-serif",
  secondary: "'Space Grotesk', system-ui, sans-serif",
  monospace: "'JetBrains Mono', monospace",
} as const;

export type FontToken = keyof typeof FONTS;
