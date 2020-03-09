const getArithmeticSeriesIter = (n: number): number => {
  let sum = 0

  for (; n > 0; n--) sum += n

  return sum
}

export default getArithmeticSeriesIter
