import { COLORS } from "@/constants/colors";
import type { AuraConfig } from "@/types/global.types";

/**
 * Configuration officielle de l'effet Aura.
 */
export const auraConfig: AuraConfig = {
  enabled: true,
  color: COLORS.brightLightBlue,
  blur: 48,
  opacity: 0.35,
};
