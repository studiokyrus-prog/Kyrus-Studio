import type { CSSProperties } from "react";
import { tokens } from "../tokens";

export const inputWrapperStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: tokens.spacing.xs,
  fontFamily: tokens.font.primary,
};

export const inputLabelStyles: CSSProperties = {
  fontSize: "13px",
  color: tokens.color.onSurface,
  fontWeight: 600,
};

export function getInputFieldStyles(hasError: boolean): CSSProperties {
  return {
    fontFamily: tokens.font.primary,
    fontSize: "15px",
    padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
    borderRadius: tokens.radius.sm,
    border: `1px solid ${hasError ? tokens.color.danger : tokens.color.border}`,
    backgroundColor: tokens.color.surface,
    color: tokens.color.onSurface,
    outline: "none",
    transition: "border-color 150ms ease, box-shadow 150ms ease",
  };
}

export const inputHelperStyles = (hasError: boolean): CSSProperties => ({
  fontSize: "12px",
  color: hasError ? tokens.color.danger : "#9AA4B2",
});
