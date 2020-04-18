export default (arr: number[]): number => {
  let maxSum = 0
  let subMaxSum = 0

  for (const num of arr) {
    subMaxSum += num
    maxSum = Math.max(maxSum, subMaxSum)

    if (subMaxSum < 0) subMaxSum = 0
  }

  return maxSum
}
