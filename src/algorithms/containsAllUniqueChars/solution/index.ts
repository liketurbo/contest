const containsAllUniqueChars = (str: string) => {
  if (str.length >= 2 ** 16) return false

  const viewedChars = new Set()

  for (const ch of str) {
    if (viewedChars.has(ch)) return false

    viewedChars.add(ch)
  }

  return true
}

export default containsAllUniqueChars
