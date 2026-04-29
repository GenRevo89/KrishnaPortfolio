// Conway's Game of Life — Pattern Library
// Predefined patterns for spawning on interaction

export type Pattern = number[][];

// Still Lifes
export const BLOCK: Pattern = [
  [1, 1],
  [1, 1],
];

export const BEEHIVE: Pattern = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 0],
];

export const LOAF: Pattern = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
];

// Oscillators
export const BLINKER: Pattern = [[1, 1, 1]];

export const TOAD: Pattern = [
  [0, 1, 1, 1],
  [1, 1, 1, 0],
];

export const PULSAR: Pattern = [
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
];

// Spaceships
export const GLIDER: Pattern = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
];

export const LWSS: Pattern = [
  [0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 0],
];

// Methuselahs (long-lived patterns)
export const R_PENTOMINO: Pattern = [
  [0, 1, 1],
  [1, 1, 0],
  [0, 1, 0],
];

export const ACORN: Pattern = [
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 0, 1, 1, 1],
];

// All interactive patterns — weighted for variety
export const SPAWN_PATTERNS: { pattern: Pattern; weight: number }[] = [
  { pattern: GLIDER, weight: 5 },
  { pattern: R_PENTOMINO, weight: 3 },
  { pattern: LWSS, weight: 2 },
  { pattern: ACORN, weight: 2 },
  { pattern: PULSAR, weight: 1 },
  { pattern: BLINKER, weight: 4 },
  { pattern: TOAD, weight: 3 },
];

export function pickRandomPattern(): Pattern {
  const totalWeight = SPAWN_PATTERNS.reduce((sum, p) => sum + p.weight, 0);
  let rand = Math.random() * totalWeight;
  for (const entry of SPAWN_PATTERNS) {
    rand -= entry.weight;
    if (rand <= 0) return entry.pattern;
  }
  return GLIDER;
}
