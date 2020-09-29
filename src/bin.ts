import wap from './'

let command = process.argv[2] ? process.argv[2] : process.argv[1]

let result

if (command == 'array') {
  result = wap()
    .array()
    .join('\n')
} else if (command == 'random') {
  result = wap().random()
} else {
  result = 'Unknown command. Try `wap array` or `wap random`'
}

console.log(result)
