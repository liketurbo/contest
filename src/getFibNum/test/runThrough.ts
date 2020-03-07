export default (fn: (n: number) => number) => {
  test("n <= 2 return 1", () => {
    expect(fn(1)).toBe(1)
    expect(fn(2)).toBe(1)
  })

  test("n = 3 return 2", () => {
    expect(fn(3)).toBe(2)
  })

  test("n = 7 return 13", () => {
    expect(fn(7)).toBe(13)
  })
}
