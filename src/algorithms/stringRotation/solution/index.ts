const isSubstring = (strA: string, strB: string) => strA.includes(strB)

const stringRotation = (strA: string, strB: string) => {
  if (strA.length !== strB.length) return false

  const concat = strB.concat(strB)

  return isSubstring(concat, strA)
}

export default stringRotation
