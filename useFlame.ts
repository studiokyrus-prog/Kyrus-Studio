import { useContext } from "react";
import { FlameContext } from "@/providers";
import type { UseFlameResult } from "@/core/types";

/**
 * Hook d'accès à la configuration officielle des flammes bleues.
 */
export function useFlame(): UseFlameResult {
  const context = useContext(FlameContext);

  if (!context) {
    throw new Error("useFlame doit être utilisé à l'intérieur d'un FlameProvider.");
  }

  return context;
}
