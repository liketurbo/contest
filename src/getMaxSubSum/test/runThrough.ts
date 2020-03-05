export default (func: (arr: number[]) => number) => {
  test("arr = [-1, 2, 3, -9] return 5", () =>
    expect(func([-1, 2, 3, -9])).toBe(5))

  test("arr = [2, -1, 2, 3, -9] return 6", () =>
    expect(func([2, -1, 2, 3, -9])).toBe(6))

  test("arr = [-1, 2, 3, -9, 11] return 11", () =>
    expect(func([-1, 2, 3, -9, 11])).toBe(11))

  test("arr = [-2, -1, 1, 2] return 3", () =>
    expect(func([-2, -1, 1, 2])).toBe(3))

  test("arr = [100, -9, 2, -3, 5] return 100", () =>
    expect(func([100, -9, 2, -3, 5])).toBe(100))

  test("arr = [1, 2, 3] return 6", () => expect(func([1, 2, 3])).toBe(6))

  test("if all negative, arr = [-1, -2, -3] return 0", () =>
    expect(func([-1, -2, -3])).toBe(0))
}
