/**
 * Couleurs officielles du Design System Kyrus Studio.
 * Source : KYRUS_DESIGN_SYSTEM.md
 */

export const COLORS = {
  blueFlame: "#0A84FF",
  white: "#FFFFFF",
  deepBlack: "#0B0B0F",
  anthracite: "#2A2D34",
  brightLightBlue: "#5AC8FA",
} as const;

export type ColorToken = keyof typeof COLORS;
