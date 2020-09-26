import { sum } from './sum'

let result;
console.log(typeof (+process.argv[1]));

if (process.argv[3]) {
  result = sum(+process.argv[2], +process.argv[3])
} else {
  result = sum(+process.argv[1], +process.argv[2])
}
console.log(result)