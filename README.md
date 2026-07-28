# Design System — Kyrus Studio

Module MOD-0003 — Bibliothèque officielle de composants réutilisables.

## Contenu du LOT-003

| Composant | ID Catalogue |
|-----------|--------------|
| Button | COMP-0101 |
| Input | COMP-0201 |
| Card | COMP-0301 |
| Typography | — |
| Container | COMP-0401 |
| Icon | COMP-0307 |
| Loader | COMP-0603 |
| Badge | COMP-0302 |
| Divider | COMP-0306 |
| Avatar | COMP-0303 |
| Tooltip | COMP-0703 |
| Modal | COMP-0701 |

## Fondations du module

- `tokens.ts` — Design Tokens (couleurs, typographie, espacements, ombres), construits à partir des constantes officielles de Foundation.
- `theme.ts` — Thème du Design System.
- `animations.ts` — Animations communes (fade, scale, pulsation de la lueur bleue).

## Règle de dépendance

Conformément à `MODULE_DEPENDENCY_GRAPH.md`, le Design System ne dépend que de **Foundation** et **Core**.

## Utilisation

```tsx
import { Button, Card, Typography } from "@/design-system";
```

## Statut

Tous les composants sont réutilisables et héritent automatiquement des tokens visuels officiels.
