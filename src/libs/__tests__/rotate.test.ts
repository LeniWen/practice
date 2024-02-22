import { describe, expect, test } from 'bun:test'
import { rotate } from '../rotate'

describe('rotate', () => {
  const rows = 2
  const cols = 3
  const input = [1, 2, 3, 4, 5, 6]
  const rotate90 = [4, 1, 5, 2, 6, 3]
  const rotate180 = [6, 5, 4, 3, 2, 1]
  const rotate270 = [3, 6, 2, 5, 1, 4]

  test('as-is', () => {
    expect(rotate(input, rows, cols, 90)).toEqual(rotate90)
    expect(rotate(input, rows, cols, 180)).toEqual(rotate180)
    expect(rotate(input, rows, cols, 270)).toEqual(rotate270)
  })
})
