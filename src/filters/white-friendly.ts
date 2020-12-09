import { wordsWhitePeopleShouldntUse } from './reserved-words'
import { ContentFilter } from './content-filter'

export const isWhiteFriendly: ContentFilter = str => {
  for (const word of wordsWhitePeopleShouldntUse) if (str.toLowerCase().includes(word)) return false

  return true
}
