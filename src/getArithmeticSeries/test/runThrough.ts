export default (fn: (n: number) => number) => {
  test("n = 1 return 1", () => {
    expect(fn(1)).toBe(1)
  })

  test("n = 2 return 3", () => {
    expect(fn(2)).toBe(3)
  })

  test("n = 3 return 6", () => {
    expect(fn(3)).toBe(6)
  })

  test("n = 4 return 10", () => {
    expect(fn(4)).toBe(10)
  })

  test("n = 100 return 5050", () => {
    expect(fn(100)).toBe(5050)
  })
}
