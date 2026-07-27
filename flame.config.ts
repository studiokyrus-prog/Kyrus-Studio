import { COLORS } from "@/constants/colors";
import type { FlameConfig } from "@/types/global.types";

/**
 * Configuration officielle des flammes bleues (signature visuelle Kyrus Studio).
 * Les flammes restent toujours bleues, quelle que soit la variante du logo.
 */
export const flameConfig: FlameConfig = {
  enabled: true,
  color: COLORS.blueFlame,
  intensity: 0.85,
};
