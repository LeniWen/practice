import { expect, test } from 'bun:test'
import { clamp } from './clamp'

test('clamp', () => {
  expect(clamp(3, 0, 5)).toBe(3)
})
