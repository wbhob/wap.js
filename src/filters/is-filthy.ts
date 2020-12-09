import { wordsWhitePeopleShouldntUse, filth } from './reserved-words'
import { ContentFilter } from './content-filter'

export const isFilthy: ContentFilter = str => {
  for (const filthiness of filth) if (str.toLowerCase().includes(filthiness)) return true

  return false
}
