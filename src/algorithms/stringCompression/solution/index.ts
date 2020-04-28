/*
 *aaabbb a2b2
 */
const stringCompression = (str: string) => {
  const comp = []

  for (let i = 0, count = 1; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++
    } else {
      comp.push(str[i], count)
      count = 1
    }
  }

  const compStr = comp.join("")

  return compStr.length > str.length ? str : compStr
}

export default stringCompression
