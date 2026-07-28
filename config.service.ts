import { appConfig } from "@/config/app.config";
import { themeConfig } from "@/config/theme.config";
import { flameConfig } from "@/config/flame.config";
import { auraConfig } from "@/config/aura.config";

/**
 * Service de chargement de la configuration globale.
 * Point d'accès unique aux configurations de Foundation pour le Core.
 */
export const configService = {
  getAppConfig: () => appConfig,
  getThemeConfig: () => themeConfig,
  getFlameConfig: () => flameConfig,
  getAuraConfig: () => auraConfig,
};
