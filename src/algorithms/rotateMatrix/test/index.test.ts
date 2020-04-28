import getFolderName from "../../../testUtils/getFolderName"
import rotateMatrix from "../solution"

describe(getFolderName(), () => {
  test("rotate 2x2 matrix", () => {
    const mtx = [
      [1, 2],
      [3, 4],
    ]

    const rotMtx = [
      [3, 1],
      [4, 2],
    ]

    expect(rotateMatrix(mtx)).toStrictEqual(rotMtx)
  })

  test("rotate 3x3 matrix", () => {
    const mtx = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]

    const rotMtx = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]

    expect(rotateMatrix(mtx)).toStrictEqual(rotMtx)
  })

  test("rotate 4x4 matrix", () => {
    const mtx = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ]

    const rotMtx = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ]

    expect(rotateMatrix(mtx)).toStrictEqual(rotMtx)
  })
})
