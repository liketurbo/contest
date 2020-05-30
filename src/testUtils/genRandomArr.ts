import genRandomInt from "./genRandomInt"

const genRandomArr = (options: GenRandomArrOptions = {}) => {
  /**
   * TODO
   * 1. Check validity of minLen and maxLen relatively to each other.
   * 2. Check validity with uniq, minLen, maxLen, minValue, maxValue.
   *    In some cases you would be left with no available unique values.
   */

  const {
    minLen = 10,
    maxLen = 50,
    minVal = -100,
    maxVal = 100,
    uniq = false,
  } = options

  const used: number[] = []

  const arr = new Array(genRandomInt(minLen, maxLen)).fill(0).map(() => {
    let value = genRandomInt(minVal, maxVal)

    if (!uniq) return value

    while (used.includes(value)) value = genRandomInt(minVal, maxVal)

    used.push(value)

    return value
  })

  return arr
}

export interface GenRandomArrOptions {
  minLen?: number
  maxLen?: number
  minVal?: number
  maxVal?: number
  uniq?: boolean
}

export default genRandomArr
