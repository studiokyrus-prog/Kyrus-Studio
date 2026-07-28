/**
 * Utilitaires de validation — module Core.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value);
}

export function isRequired(value: unknown): boolean {
  if (typeof value === "string") return value.trim().length > 0;
  return value !== null && value !== undefined;
}

export function hasMinLength(value: string, min: number): boolean {
  return value.length >= min;
}
