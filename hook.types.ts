import type { ThemeConfig, FlameConfig, AuraConfig } from "@/types/global.types";

export interface UseThemeResult {
  theme: ThemeConfig;
  toggleMode: () => void;
}

export interface UseAnimationResult {
  transitionDuration: number;
  easing: string;
}

export interface UseFlameResult extends FlameConfig {}

export interface UseAuraResult extends AuraConfig {}
