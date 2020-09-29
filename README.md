# wap

Query lyrics from Cardi B's 2020 hit song "WAP" in Node.JS.

## Basic Usage

```shell script
$ npm install --save wap.js

$ yarn add wap.js
```

```typescript
import wap from 'wap.js'

const myLyric = wap().random() // get a random lyric
const lyricArray = wap().array() // get an array of WAP lyrics
```

## Content Filter

Filter the lyrics for just clean ones. You can also filter for just the filthy ones 👀

Each one returns another wap() object, so you can chain the calls together.

```typescript
import wap from 'wap.js'

const myLyric = wap()
  .clean()
  .random() // get a random lyric
const lyricArray = wap()
  .filthy()
  .array() // get an array of WAP lyrics
```

Note that `filthy()` and `clean()` are inverse operations, so `wap().clean().filthy().array()` will return empty array.

## Length Filter

Filter for maximum and minimum string length. Since chaining filters returns new `WAP` objects, you can apply them both together to fix your size range.

```typescript
import wap from 'wap.js'

const myLyric = wap()
  .maxLength(15)
  .random() // get a random lyric with 15 characters or fewer
const lyricArray = wap()
  .minLength(24)
  .array() // get an array of WAP lyrics 24 characters or longer

const boundedLyric = wap()
  .minLength(15)
  .maxLength(24)
  .random() // get a random lyric between 15 and 24 characters
```

Note that `filthy()` and `clean()` are inverse operations, so `wap().clean().filthy().array()` will return empty array.

## Commmnand Line Usage

If you really want to use this on the command line, you can install it globally.

```typescript
import wap from 'wap'

const myLyric = wap()
  .maxLength(15)
  .random() // get a random lyric with 15 characters or fewer
const lyricArray = wap()
  .minLength(24)
  .array() // get an array of WAP lyrics 24 characters or longer

const boundedLyric = wap()
  .minLength(15)
  .maxLength(24)
  .random() // get a random lyric between 15 and 24 characters
```

Note that `filthy()` and `clean()` are inverse operations, so `wap().clean().filthy().array()` will return empty array.

## Contributing

Thank you for your contribution. Please implement it in TypeScript in the `src/` directory. Add unit tests in `__tests__/` to make sure it works properly. Submit a pull request on GitHub with a description of your changes.

## License

This project is licensed under the [MIT License](./LICENSE).

## Credits

Written by Wilson Hobbs, 2019.
