const fs = require('fs')
const path = require('path')

let wapTxt = fs.readFileSync(path.resolve(__dirname, './wap.txt'))
wapTxt = wapTxt.toString()

wapArray = wapTxt.split('\n').filter(item => !!item)

let fileContents = `export const lyrics = [\n`

for (let i = 0; i < wapArray.length; i++) {
  fileContents += '"' + wapArray[i] + '",\n'
}

fileContents += ']\n\nexport default lyrics;'

fs.writeFileSync(path.resolve(__dirname, './src/lyrics.ts'), fileContents, {
  flags: 'w',
})
