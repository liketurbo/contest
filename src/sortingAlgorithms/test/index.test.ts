import path from "path"

import insertionSort from "../solution/insertionSort"

const firstArr = {
  sorted: [2, 3, 4, 5, 6, 7, 8],
  unsorted: [7, 8, 5, 2, 4, 6, 3],
}

const secondArr = {
  sorted: [-1, -1, 0, 2, 3345, 10000],
  unsorted: [10000, -1, 2, -1, 0, 3345],
}

const thirdArr = {
  sorted: [-1, 100],
  unsorted: [100, -1],
}

describe(path.basename(path.join(__dirname, "..")), () => {
  describe(insertionSort.name, () => {
    test("empty array, [] return []", () =>
      expect(insertionSort([])).toStrictEqual([]))

    test("single element, [1] return [1]", () =>
      expect(insertionSort([1])).toStrictEqual([1]))

    test(`[${firstArr.unsorted}] return [${firstArr.sorted}]`, () =>
      expect(insertionSort(firstArr.unsorted)).toStrictEqual(firstArr.sorted))

    test(`[${secondArr.unsorted}] return [${secondArr.sorted}]`, () =>
      expect(insertionSort(secondArr.unsorted)).toStrictEqual(secondArr.sorted))

    test(`[${thirdArr.unsorted}] return [${thirdArr.sorted}]`, () =>
      expect(insertionSort(thirdArr.unsorted)).toStrictEqual(thirdArr.sorted))
  })
})
