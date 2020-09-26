import { isClean, isFilthy } from '../src/content-filter'

describe('isFilthy()', () => {
  it('should mark one filthy word as filthy', () => {
    expect(isFilthy('shit')).toEqual(true)
  })

  it('should mark multiple filthy words as filthy', () => {
    expect(isFilthy('pussy shit')).toEqual(true)
  })

  it('should detect filthy words in context', () => {
    expect(isFilthy("Macaroni in a pot, that's some wet-ass pussy, huh")).toEqual(true)
  })

  it('should recognize clean words', () => {
    expect(isFilthy('Now from the top, make it drop')).toEqual(false)
  })
})

describe('isClean()', () => {
  it('should mark one filthy word as unclean', () => {
    expect(isClean('shit')).toEqual(false)
  })

  it('should mark multiple filthy words as unclean', () => {
    expect(isClean('pussy shit')).toEqual(false)
  })

  it('should detect filthy words in context', () => {
    expect(isClean("Macaroni in a pot, that's some wet-ass pussy, huh")).toEqual(false)
  })

  it('should recognize clean words', () => {
    expect(isClean('Now from the top, make it drop')).toEqual(true)
  })
})
