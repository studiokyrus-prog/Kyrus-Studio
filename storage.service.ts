import type { StorageDriver } from "@/core/types";

const PREFIX = "kyrus:";

function isBrowser(): boolean {
  return typeof window !== "undefined" && !!window.localStorage;
}

/**
 * Service officiel de stockage local (localStorage) de Kyrus Studio.
 */
export const storageService: StorageDriver = {
  get<T>(key: string): T | null {
    if (!isBrowser()) return null;
    const raw = window.localStorage.getItem(PREFIX + key);
    if (raw === null) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  },
  set<T>(key: string, value: T): void {
    if (!isBrowser()) return;
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
  },
  remove(key: string): void {
    if (!isBrowser()) return;
    window.localStorage.removeItem(PREFIX + key);
  },
  clear(): void {
    if (!isBrowser()) return;
    Object.keys(window.localStorage)
      .filter((key) => key.startsWith(PREFIX))
      .forEach((key) => window.localStorage.removeItem(key));
  },
};
