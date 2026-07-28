import { logger } from "@/utils";

/**
 * Service de journalisation du Core.
 * Réutilise le logger officiel de Foundation (src/utils/logger.ts)
 * afin d'éviter toute duplication de code (voir CODING_STANDARDS.md).
 */
export const loggerService = {
  info: logger.info,
  warn: logger.warn,
  error: logger.error,
  debug: logger.debug,
};
