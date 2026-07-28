import type { CSSProperties } from "react";
import { tokens } from "../tokens";

export function getCardStyles(padded: boolean, glow: boolean): CSSProperties {
  return {
    backgroundColor: tokens.color.surface,
    borderRadius: tokens.radius.lg,
    border: `1px solid ${tokens.color.border}`,
    padding: padded ? tokens.spacing.lg : 0,
    boxShadow: glow ? tokens.shadow.flame : tokens.shadow.soft,
    transition: "box-shadow 200ms ease, transform 200ms ease",
  };
}
