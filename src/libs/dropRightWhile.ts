export function dropRightWhile<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
): Array<T> {
  let i = array.length - 1
  while (i >= 0 && predicate(array[i], i, array)) i -= 1
  return array.slice(0, i + 1)
}
