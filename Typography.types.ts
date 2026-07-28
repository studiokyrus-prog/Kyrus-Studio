import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "body" | "caption";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: ElementType;
  children: ReactNode;
}
