import { useContext } from "react";
import { AuraContext } from "@/providers";
import type { UseAuraResult } from "@/core/types";

/**
 * Hook d'accès à la configuration officielle de l'effet Aura.
 */
export function useAura(): UseAuraResult {
  const context = useContext(AuraContext);

  if (!context) {
    throw new Error("useAura doit être utilisé à l'intérieur d'un AuraProvider.");
  }

  return context;
}
