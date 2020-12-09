import { isClean, isFilthy, isWhiteFriendly } from '../src/filters'

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

describe('isWhiteFriendly()', () => {
  it('should mark one filthy word as unclean', () => {
    expect(isWhiteFriendly('nigga')).toEqual(false)
  })

  // it('should mark multiple filthy words as unclean', () => {
  //   expect(isWhiteFriendly('pussy shit')).toEqual(false)
  // })

  it('should detect filthy words in context', () => {
    expect(isWhiteFriendly("run down on him 'fore I have a nigga runnin' me")).toEqual(false)
  })

  it('should recognize clean words', () => {
    expect(isWhiteFriendly('Now get your boots and your coat for this wet-ass pussy (Ah, ah, ah)')).toEqual(true)
  })
})
