import type { CSSProperties } from "react";
import { tokens } from "../tokens";
import type { ButtonSize, ButtonVariant } from "./Button.types";

const sizeStyles: Record<ButtonSize, CSSProperties> = {
  sm: { padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`, fontSize: "13px" },
  md: { padding: `${tokens.spacing.sm} ${tokens.spacing.md}`, fontSize: "15px" },
  lg: { padding: `${tokens.spacing.md} ${tokens.spacing.lg}`, fontSize: "17px" },
};

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    backgroundColor: tokens.color.primary,
    color: tokens.color.onSurface,
    border: "none",
    boxShadow: tokens.shadow.flame,
  },
  secondary: {
    backgroundColor: tokens.color.surface,
    color: tokens.color.onSurface,
    border: `1px solid ${tokens.color.border}`,
  },
  danger: {
    backgroundColor: tokens.color.danger,
    color: tokens.color.onSurface,
    border: "none",
  },
  ghost: {
    backgroundColor: "transparent",
    color: tokens.color.onSurface,
    border: "none",
  },
  outline: {
    backgroundColor: "transparent",
    color: tokens.color.primary,
    border: `1px solid ${tokens.color.primary}`,
  },
};

export function getButtonStyles(variant: ButtonVariant, size: ButtonSize): CSSProperties {
  return {
    fontFamily: tokens.font.primary,
    borderRadius: tokens.radius.md,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.spacing.xs,
    fontWeight: 600,
    transition: "transform 150ms ease, box-shadow 150ms ease, opacity 150ms ease",
    ...sizeStyles[size],
    ...variantStyles[variant],
  };
}
