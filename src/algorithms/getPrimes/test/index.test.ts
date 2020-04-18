import path from "path"

import getPrimes from "../solution"

describe(path.basename(path.join(__dirname, "..")), () => {
  test("n <= 1 return []", () => {
    expect(getPrimes(1)).toStrictEqual([])
    expect(getPrimes(0)).toStrictEqual([])
    expect(getPrimes(-1)).toStrictEqual([])
  })

  test("n = 2 return [2]", () => expect(getPrimes(2)).toStrictEqual([2]))

  test("n = 10 return [2,3,5,7]", () =>
    expect(getPrimes(10)).toStrictEqual([2, 3, 5, 7]))
})
