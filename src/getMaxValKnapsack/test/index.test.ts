import path from "path"

import knapsackRecursive from "../solution"

describe(`${path.basename(path.join(__dirname, ".."))}`, () => {
  test("n = 2 return [2]", () =>
    expect(
      knapsackRecursive(
        [
          {
            value: 5,
            weight: 1,
          },
          {
            value: 3,
            weight: 2,
          },
          {
            value: 5,
            weight: 4,
          },
          {
            value: 3,
            weight: 2,
          },
          {
            value: 2,
            weight: 5,
          },
        ],
        10
      )
    ).toBe(16))
})
