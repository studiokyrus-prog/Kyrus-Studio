/**
 * Routes principales de Kyrus Studio.
 * Les modules métier (Landing, Auth, Dashboard, ...) enregistreront
 * leurs propres routes dans leurs lots respectifs.
 */

export const ROUTES = {
  HOME: "/",
} as const;

export type RouteKey = keyof typeof ROUTES;
