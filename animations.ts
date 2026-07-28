/**
 * Animations communes du Design System.
 * Respecte KYRUS_DESIGN_SYSTEM.md : transitions rapides, fluides,
 * effets lumineux subtils.
 */

export const animations = {
  fadeIn: {
    keyframes: "kyrus-fade-in",
    css: `
      @keyframes kyrus-fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `,
    duration: "200ms",
  },
  scaleIn: {
    keyframes: "kyrus-scale-in",
    css: `
      @keyframes kyrus-scale-in {
        from { opacity: 0; transform: scale(0.96); }
        to { opacity: 1; transform: scale(1); }
      }
    `,
    duration: "180ms",
  },
  flameGlowPulse: {
    keyframes: "kyrus-flame-glow-pulse",
    css: `
      @keyframes kyrus-flame-glow-pulse {
        0%, 100% { filter: drop-shadow(0 0 6px rgba(10, 132, 255, 0.55)); }
        50% { filter: drop-shadow(0 0 16px rgba(10, 132, 255, 0.9)); }
      }
    `,
    duration: "2400ms",
  },
} as const;

export type AnimationToken = keyof typeof animations;
