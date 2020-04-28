const checkStringsForPerm = (strA: string, strB: string) => {
  const setA = new Set(strA)

  for (const ch of strB) setA.delete(ch)

  return setA.size === 0
}

export default checkStringsForPerm
