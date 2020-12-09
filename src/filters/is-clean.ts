import { filth } from './reserved-words'
import { ContentFilter } from './content-filter'

export const isClean: ContentFilter = str => {
  for (const filthiness of filth) if (str.toLowerCase().includes(filthiness)) return false

  return true
}
