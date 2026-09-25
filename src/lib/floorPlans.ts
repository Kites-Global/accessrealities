export type Tower = "north" | "south";

export const TOWERS: Tower[] = ["north", "south"];

export function isTower(value: unknown): value is Tower {
  return value === "north" || value === "south";
}

/** Fixed S3 key each tower's floor plan PDF is stored/overwritten at — no DB record needed. */
export function floorPlanKey(tower: Tower): string {
  return `floor-plans/${tower}-tower.pdf`;
}

export function towerLabel(tower: Tower): string {
  return tower === "north" ? "North Tower" : "South Tower";
}
