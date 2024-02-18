import { describe, expect, test } from 'bun:test'
import { sleep } from 'bun'

describe('sleep', () => {
  test('block', async () => {
    const now = Date.now()
    await sleep(100)
    setTimeout(() => {
      expect(Date.now() - now).toBeGreaterThan(250)
    }, 200)
  })
  test('does not block', async () => {
    let i = 0
    expect(i).toBe(0)
    sleep(500).then(() => {
      expect(i).toBe(2)
    })
    setTimeout(() => {
      expect(i).toBe(1)
    }, 200)
    i++
  })
})
