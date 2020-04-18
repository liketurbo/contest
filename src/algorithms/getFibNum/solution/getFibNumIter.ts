const getFibNumIter = (n: number): number => {
  let a = 1
  let b = 1
  let c = a + b

  if (n <= 2) return 1

  for (let i = 3; i < n; i++) {
    a = b
    b = c
    c = a + b
  }

  return c
}

export default getFibNumIter
