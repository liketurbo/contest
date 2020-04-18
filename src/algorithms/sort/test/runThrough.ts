import getRandomArr from "../../../testUtils/getRandomArr"

const arr = getRandomArr()
const sortedArr = arr.slice().sort((a, b) => a - b)

export default (func: (arr: number[]) => number[]) => {
  test("empty array, [] return []", () => expect(func([])).toStrictEqual([]))

  test("single element, [1] return [1]", () =>
    expect(func([1])).toStrictEqual([1]))

  test(`[${arr}] return [${sortedArr}]`, () =>
    expect(func(arr)).toStrictEqual(sortedArr))
}
