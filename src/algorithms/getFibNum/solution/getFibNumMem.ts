const cache: { [key: number]: number } = {}

const getFibNumMem = (n: number): number => {
  if (n <= 2) return 1

  if (cache[n]) return cache[n]

  return (cache[n] = getFibNumMem(n - 1) + getFibNumMem(n - 2))
}

export default getFibNumMem
