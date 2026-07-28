import { themeConfig } from "@/config/theme.config";
import type { ThemeMode } from "@/types/global.types";
import { storageService } from "./storage.service";

const THEME_STORAGE_KEY = "theme-mode";

/**
 * Service officiel de gestion du thème.
 */
export const themeService = {
  getStoredMode(): ThemeMode {
    return storageService.get<ThemeMode>(THEME_STORAGE_KEY) ?? themeConfig.mode;
  },
  setStoredMode(mode: ThemeMode): void {
    storageService.set<ThemeMode>(THEME_STORAGE_KEY, mode);
  },
};
