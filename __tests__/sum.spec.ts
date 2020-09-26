import { sum } from '../src/sum'

describe('sum()', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).toEqual(3)
  })

  it('should work for negatives', () => {
    expect(sum(1, -3)).toEqual(-2)
  })
})