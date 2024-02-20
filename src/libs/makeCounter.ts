interface Counter {
  get: () => number
  increment: () => number
  decrement: () => number
  reset: () => number
}

export default function makeCounter(initialValue: number = 0): Counter {
  const _initialValue = initialValue
  let value = initialValue

  function get() {
    return value
  }

  function increment() {
    value += 1
    return value
  }

  function decrement() {
    value -= 1
    return value
  }

  function reset() {
    value = _initialValue
    return value
  }

  return { get, increment, decrement, reset }
}
