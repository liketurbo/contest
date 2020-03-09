const getArithmeticSeriesRec = (n: number): number =>
  n <= 1 ? 1 : n + getArithmeticSeriesRec(n - 1)

export default getArithmeticSeriesRec
