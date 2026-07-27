import type { AppConfig } from "@/types/global.types";

/**
 * Configuration globale de l'application.
 */
export const appConfig: AppConfig = {
  appName: "Kyrus Studio",
  version: "1.0.0",
  environment: (import.meta.env.MODE as AppConfig["environment"]) ?? "development",
};
