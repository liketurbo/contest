import getPrimes from "."

describe(`${getPrimes.name}`, () => {
  test("n = 10 return [2, 3, 5, 7]", () =>
    expect(getPrimes(10)).toStrictEqual([2, 3, 5, 7]))
})
