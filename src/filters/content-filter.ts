import { wordsWhitePeopleShouldntUse, filth } from './reserved-words'

export type ContentFilter = (str: string) => boolean
