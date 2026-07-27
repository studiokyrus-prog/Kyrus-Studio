/**
 * Journalisation officielle de Kyrus Studio.
 */

type LogLevel = "info" | "warn" | "error" | "debug";

function format(level: LogLevel, message: string): string {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
}

export const logger = {
  info(message: string): void {
    console.info(format("info", message));
  },
  warn(message: string): void {
    console.warn(format("warn", message));
  },
  error(message: string): void {
    console.error(format("error", message));
  },
  debug(message: string): void {
    if (import.meta.env.DEV) {
      console.debug(format("debug", message));
    }
  },
};
