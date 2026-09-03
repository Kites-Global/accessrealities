export function buildQuery(
  current: Record<string, string | undefined>,
  overrides: Record<string, string | number | undefined>,
): string {
  const merged: Record<string, string | number | undefined> = { ...current, ...overrides };
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(merged)) {
    if (value !== undefined && value !== "") params.set(key, String(value));
  }
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}
