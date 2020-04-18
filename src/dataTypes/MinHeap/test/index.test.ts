import getFolderName from "../../../testUtils/getFolderName"
import MinHeap from "../solution"

describe(getFolderName(), () => {
  const arr = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5]
  const sortedArr = arr.slice().sort((a, b) => a - b)

  const minHeap = new MinHeap()

  for (const num of arr) minHeap.add(num)

  test("add operation", () => expect(minHeap.size).toBe(arr.length))

  test("peek/pop operation", () => {
    expect(minHeap.peek()).toBe(sortedArr[0])

    expect(minHeap.pop()).toBe(sortedArr[0])

    expect(minHeap.peek()).toBe(sortedArr[1])

    expect(minHeap.size).toBe(arr.length - 1)
  })
})
