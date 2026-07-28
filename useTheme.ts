import { useContext } from "react";
import { ThemeContext } from "@/providers";
import { themeService } from "@/core/services";
import type { UseThemeResult } from "@/core/types";

/**
 * Hook d'accès au thème officiel de Kyrus Studio.
 */
export function useTheme(): UseThemeResult {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme doit être utilisé à l'intérieur d'un ThemeProvider.");
  }

  const toggleMode = (): void => {
    const nextMode = context.mode === "dark" ? "light" : "dark";
    context.setMode(nextMode);
    themeService.setStoredMode(nextMode);
  };

  return {
    theme: context.theme,
    toggleMode,
  };
}
