/**
 * Types globaux de Kyrus Studio.
 * Module : Foundation
 */

export type ThemeMode = "light" | "dark";

export interface AppConfig {
  appName: string;
  version: string;
  environment: "development" | "production" | "test";
}

export interface ThemeConfig {
  mode: ThemeMode;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export interface FlameConfig {
  enabled: boolean;
  color: string;
  intensity: number;
}

export interface AuraConfig {
  enabled: boolean;
  color: string;
  blur: number;
  opacity: number;
}

export interface ProviderProps {
  children: React.ReactNode;
}
