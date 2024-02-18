import { describe, expect, test } from 'bun:test'
import { clamp } from './clamp'

describe('clamp', () => {
  test('as-is', () => {
    expect(clamp(3, 0, 5)).toBe(3)
  })
  test('less than', () => {
    expect(clamp(-10, 0, 2)).toBe(0)
  })
  test('greater than', () => {
    expect(clamp(20, 10, 19)).toBe(19)
  })
})
