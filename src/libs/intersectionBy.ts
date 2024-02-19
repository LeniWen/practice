export function intersectionBy<T, R>(
  iteratee: (value: T) => R,
  ...arrays: Array<Array<T>>
): Array<T> {
  if (arrays.length === 0)
    return []

  const x = arrays.map(array => array.map(iteratee))
  const y = x[0].filter(v => x.every(r => r.includes(v)))
  return y.map(v => arrays[0][x[0].indexOf(v)])
}
