const getFibNumRec = (n: number): number =>
  n <= 2 ? 1 : getFibNumRec(n - 1) + getFibNumRec(n - 2)

export default getFibNumRec
