// eslint-disable-next-line @typescript-eslint/no-empty-function
export function exhaustiveCheck(_: never) {}

export function isNotNullOrUndefined<T>(x: T | null | undefined): x is T {
  return x !== null && x !== undefined;
}
