export default (arr: number[]): number => {
  let maxSum = 0

  for (let i = 0; i < arr.length; i++) {
    let subMaxSum = 0

    for (let j = i; j < arr.length; j++) {
      subMaxSum += arr[j]
      maxSum = Math.max(maxSum, subMaxSum)
    }
  }

  return maxSum
}
