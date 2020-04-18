import getFolderName from "../../../testUtils/getFolderName"
import knapsackRecursive from "../solution"

describe(getFolderName(), () => {
  test("[5,1][3,2][5,4][3,2][2,5] return 16", () =>
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
