export function notUndefined<T>(item: T | undefined): item is T {
  return item !== undefined
}
