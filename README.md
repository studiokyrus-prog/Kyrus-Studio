# Core — Kyrus Studio

Module technique central (MOD-0002).

## Contenu du LOT-002

- **router/** — Routeur principal, garde de routes génériques (`ProtectedRoute`, `PublicRoute`)
- **hooks/** — `useTheme`, `useAnimation`, `useFlame`, `useAura`
- **services/** — `storageService`, `themeService`, `loggerService`, `configService`
- **utils/** — chaînes, objets, dates, validation
- **types/** — types partagés du Core

## Règle de dépendance

Conformément à `MODULE_DEPENDENCY_GRAPH.md`, le Core ne dépend que de **Foundation**.
Il ne dépend jamais de Authentication, Dashboard, Marketplace ou Payments.

Les gardes de route (`ProtectedRoute`, `PublicRoute`) sont donc **agnostiques** :
la condition d'accès (`isAllowed`) est fournie par le module appelant.

## Statut

Aucune fonctionnalité métier n'est présente dans ce lot.
