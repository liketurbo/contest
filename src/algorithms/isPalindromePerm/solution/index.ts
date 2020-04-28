const isPalindromePerm = (str: string) => {
  const map: { [key: string]: number } = {}

  let oddCount = 0

  for (const ch of str) {
    if (ch in map) map[ch]++
    else map[ch] = 0

    if (map[ch] % 2 === 0) oddCount--
    else oddCount++
  }

  return oddCount <= 1
}

export default isPalindromePerm
