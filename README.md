# wap

Query lyrics from Cardi B's 2020 hit song "WAP" in Node.JS.

## Basic Usage

```typescript
import wap from 'wap'

const myLyric = wap().random() // get a random lyric
const lyricArray = wap().array() // get an array of WAP lyrics
```

## Content Filter

Filter the lyrics for just clean ones. You can also filter for just the filthy ones 👀

Each one returns another wap() object, so you can chain the calls together.

```typescript
import wap from 'wap'

const myLyric = wap().random() // get a random lyric
const lyricArray = wap().array() // get an array of WAP lyrics
```

## Contributing

Thank you for your contribution. Please implement it in TypeScript in the `src/` directory. Add unit tests in `__tests__/` to make sure it works properly. Submit a pull request on GitHub with a description of your changes.

## License

This project is licensed under the [MIT License](./LICENSE).

## Credits

Written by Wilson Hobbs, 2019.
