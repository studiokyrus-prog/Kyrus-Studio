import type { ReactNode } from "react";

export interface AppRoute {
  path: string;
  element: ReactNode;
  isProtected?: boolean;
}

export interface GuardProps {
  children: ReactNode;
  /**
   * Condition d'accès. Le Core ne connaît pas le module Authentication
   * (voir MODULE_DEPENDENCY_GRAPH.md) : la condition est fournie par
   * le module appelant.
   */
  isAllowed: boolean;
  redirectTo: string;
}
