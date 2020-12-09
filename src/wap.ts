import { isClean, isFilthy, isWhiteFriendly } from './filters'
import { lyrics } from './lyrics'

class WAP {
  constructor(private lyricsArray: string[]) {}

  public array(): string[] {
    return this.lyricsArray
  }

  public random(): string {
    const length = this.lyricsArray.length
    const random = Math.floor(Math.random() * length)

    return this.lyricsArray[random]
  }

  /**
   * Lyrics that do not contain curse words
   */
  public clean(): WAP {
    const lyrics = this.lyricsArray.filter(lyric => isClean(lyric))

    return new WAP(lyrics)
  }

  /**
   * Only lyrics that contain curse words
   */
  public filthy(): WAP {
    const lyrics = this.lyricsArray.filter(lyric => isFilthy(lyric))

    return new WAP(lyrics)
  }

  /**
   * Avoid controversy by taking out words that white people aren't allowed to use
   */
  public whitePeopleMode(): WAP {
    const lyrics = this.lyricsArray.filter(lyric => isWhiteFriendly(lyric))

    return new WAP(lyrics)
  }

  /**
   * Fix the length of responses
   *
   * @param l the maximum character length
   */
  public maxLength(l: number): WAP {
    const lyrics = this.lyricsArray.filter(element => element.length <= l)
    return new WAP(lyrics)
  }

  /**
   * Fix the length of responses
   *
   * @param l the minimum character length
   */
  public minLength(l: number): WAP {
    const lyrics = this.lyricsArray.filter(element => element.length >= l)
    return new WAP(lyrics)
  }
}

function wap(): WAP {
  return new WAP(lyrics)
}

export default wap
