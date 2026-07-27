/**
 * Fonctions utilitaires globales de Kyrus Studio.
 */

export function classNames(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function isBrowser(): boolean {
  return typeof window !== "undefined";
}
