import type { AppRoute } from "@/core/types";
import { ROUTES } from "@/constants/routes";

/**
 * Routes de base du Core.
 * Les modules métier (Landing, Auth, Dashboard, ...) enregistreront
 * leurs propres routes dans leurs lots respectifs.
 */
export const coreRoutes: AppRoute[] = [
  {
    path: ROUTES.HOME,
    element: null,
    isProtected: false,
  },
];
