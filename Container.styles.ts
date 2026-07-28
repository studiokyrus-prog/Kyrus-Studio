import type { CSSProperties } from "react";
import { tokens } from "../tokens";

export const containerStyles: CSSProperties = {
  width: "100%",
  maxWidth: "1200px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: tokens.spacing.lg,
  paddingRight: tokens.spacing.lg,
};
