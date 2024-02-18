export function clamp(
  value: number,
  lower: number,
  upper: number,
): number {
  return Math.min(value, Math.max(lower, upper))
}
