import path from "path"

import insertionSort from "../solution"

describe(`${path.basename(path.join(__dirname, ".."))}`, () => {
  test("[7,8,5,2,4,6,3] return [2,3,4,5,6,7,8]", () =>
    expect(insertionSort([7, 8, 5, 2, 4, 6, 3])).toStrictEqual([
      2,
      3,
      4,
      5,
      6,
      7,
      8,
    ]))
})
