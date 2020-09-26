import wap from '../src/wap'
import { isClean, isFilthy } from '../src/content-filter'

describe('wap()', () => {
  describe('maxLength()', () => {
    const maxLength = 14
    let instance

    beforeEach(() => {
      instance = wap().maxLength(maxLength)
    })

    it('should return a random line shorter than maxLength', () => {
      const random = instance.random()
      expect(random.length).toBeLessThanOrEqual(maxLength)
    })

    it('should filter lines longer than maxLength', () => {
      const array = instance.array()
      for (let element of array) {
        expect(element.length).toBeLessThanOrEqual(maxLength)
      }
    })
  })

  describe('minLength()', () => {
    const minLength = 14
    let instance

    beforeEach(() => {
      instance = wap().minLength(minLength)
    })

    it('should return a random line longer than minLength', () => {
      const random = instance.random()
      expect(random.length).toBeGreaterThanOrEqual(minLength)
    })

    it('should filter lines longer than maxLength', () => {
      const array = instance.array()
      for (let element of array) {
        expect(element.length).toBeGreaterThanOrEqual(minLength)
      }
    })
  })

  describe('clean()', () => {
    let instance

    beforeEach(() => {
      instance = wap().clean()
    })

    it('should return a random line longer than minLength', () => {
      const random = instance.random()
      expect(isClean(random)).toEqual(true)
    })

    it('should filter lines longer than maxLength', () => {
      const array = instance.array()
      for (let element of array) {
        expect(isClean(element)).toEqual(true)
      }
    })
  })

  describe('filthy()', () => {
    let instance

    beforeEach(() => {
      instance = wap().filthy()
    })

    it('should return a random line longer than minLength', () => {
      const random = instance.random()
      expect(isFilthy(random)).toEqual(true)
    })

    it('should filter lines longer than maxLength', () => {
      const array = instance.array()
      for (let element of array) {
        expect(isFilthy(element)).toEqual(true)
      }
    })
  })
})
