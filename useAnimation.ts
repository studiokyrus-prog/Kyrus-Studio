import { useContext } from "react";
import { AnimationContext } from "@/providers";
import type { UseAnimationResult } from "@/core/types";

/**
 * Hook d'accès aux paramètres d'animation officiels.
 */
export function useAnimation(): UseAnimationResult {
  const context = useContext(AnimationContext);

  if (!context) {
    throw new Error("useAnimation doit être utilisé à l'intérieur d'un AnimationProvider.");
  }

  return context;
}
