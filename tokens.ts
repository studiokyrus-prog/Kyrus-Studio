import { COLORS } from "@/constants/colors";
import { FONTS } from "@/constants/fonts";

/**
 * Design Tokens officiels du Design System Kyrus Studio.
 * Réutilise les constantes de Foundation (COLORS, FONTS) pour éviter
 * toute duplication (voir CODING_STANDARDS.md).
 */
export const tokens = {
  color: {
    primary: COLORS.blueFlame,
    secondary: COLORS.anthracite,
    accent: COLORS.brightLightBlue,
    background: COLORS.deepBlack,
    surface: COLORS.anthracite,
    onSurface: COLORS.white,
    border: "#3A3F47",
    danger: "#FF453A",
    success: "#32D74B",
    warning: "#FFD60A",
  },
  font: {
    primary: FONTS.primary,
    secondary: FONTS.secondary,
    mono: FONTS.monospace,
  },
  radius: {
    sm: "6px",
    md: "12px",
    lg: "20px",
    full: "9999px",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  shadow: {
    flame: `0 0 24px ${COLORS.blueFlame}66`,
    soft: "0 2px 8px rgba(0, 0, 0, 0.35)",
  },
} as const;

export type Tokens = typeof tokens;
