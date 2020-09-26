const filth = ['pussy', 'nigga', 'shit', 'dick', 'ass']

export function isClean(str: string) {
  for (const filthiness of filth) if (str.toLowerCase().includes(filthiness)) return false

  return true
}

export function isFilthy(str: string) {
  for (const filthiness of filth) if (str.toLowerCase().includes(filthiness)) return true

  return false
}
