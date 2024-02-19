import { describe, expect, test } from 'bun:test'
import { intersectionBy } from '../intersectionBy'

describe('intersection by', () => {
  test('no intersection', () => {
    const arr1 = []
    const arr2 = []
    const arr3 = [1, 2, 3]
    const iteratee = String
    expect(intersectionBy(iteratee, arr1, arr2, arr3)).toEqual([])
  })
  test('one intersection', () => {
    const arr1 = [1.2, 2.4]
    const arr2 = [3.9, 2.9]
    const arr3 = [4.3, 2.3]
    const iteratee = Math.floor
    expect(intersectionBy(iteratee, arr1, arr2, arr3)).toEqual([2.4])
  })
  test('multi intersection', () => {
    const arr1 = [1.2, 2.4, 3.4, 10.1]
    const arr2 = [3.6, 1.5, 2.7]
    const arr3 = [2.5, 1.9, 3.10, 10.9]
    const iteratee = Math.floor
    expect(intersectionBy(iteratee, arr1, arr2, arr3)).toEqual([1.2, 2.4, 3.4])
  })
  test('reference values', () => {
    const arr1 = [{ id: 1 }, { id: 2 }]
    const arr2 = [{ id: 3 }, { id: 1 }]
    const arr3 = [{ id: 5 }, { id: 3 }, { id: 1 }]
    const iteratee = (obj: { id: number }) => obj.id
    expect(intersectionBy(iteratee, arr1, arr2, arr3)).toEqual([{ id: 1 }])
  })
  test('different iteratee values', () => {
    const arr1 = ['apple', 'banana', 'pear']
    const arr2 = ['orange', 'kiwi', 'banana']
    const arr3 = ['grape', 'pear', 'watermelon']
    const iteratee = (value: string) => value.length
    expect(intersectionBy(iteratee, arr1, arr2, arr3)).toEqual(['pear'])
  })
})
