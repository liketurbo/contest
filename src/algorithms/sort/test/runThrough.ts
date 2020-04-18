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

export default (func: (arr: number[]) => number[]) => {
  test("empty array, [] return []", () => expect(func([])).toStrictEqual([]))

  test("single element, [1] return [1]", () =>
    expect(func([1])).toStrictEqual([1]))

  test(`[${firstArr.unsorted}] return [${firstArr.sorted}]`, () =>
    expect(func(firstArr.unsorted.slice())).toStrictEqual(firstArr.sorted))

  test(`[${secondArr.unsorted}] return [${secondArr.sorted}]`, () =>
    expect(func(secondArr.unsorted.slice())).toStrictEqual(secondArr.sorted))

  test(`[${thirdArr.unsorted}] return [${thirdArr.sorted}]`, () =>
    expect(func(thirdArr.unsorted.slice())).toStrictEqual(thirdArr.sorted))
}
