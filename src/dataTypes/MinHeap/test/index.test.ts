import getFolderName from "../../../testUtils/getFolderName"
import getRandomArr from "../../../testUtils/getRandomArr"
import MinHeap from "../solution"

describe(getFolderName(), () => {
  const arr = getRandomArr()
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
