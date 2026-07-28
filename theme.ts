import { tokens } from "./tokens";

/**
 * Thème du Design System, construit à partir des Design Tokens officiels.
 */
export const designSystemTheme = {
  tokens,
} as const;

export type DesignSystemTheme = typeof designSystemTheme;
