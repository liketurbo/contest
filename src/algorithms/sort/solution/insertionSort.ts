const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++)
    for (let j = i; j > 0; j--)
      if (arr[j - 1] > arr[j]) [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]

  return arr
}

export default insertionSort
