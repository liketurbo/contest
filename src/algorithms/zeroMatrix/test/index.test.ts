import getFolderName from "../../../testUtils/getFolderName"
import zeroMatrix from "../solution"

describe(getFolderName(), () => {
  test("with one zero value", () => {
    const mtx = [
      [1, 2, 0],
      [4, 5, 6],
      [7, 8, 9],
    ]

    const zeroMtx = [
      [0, 0, 0],
      [4, 5, 0],
      [7, 8, 0],
    ]

    expect(zeroMatrix(mtx)).toStrictEqual(zeroMtx)
  })

  test("with two zero values", () => {
    const mtx = [
      [1, 2, 0],
      [4, 5, 6],
      [0, 8, 9],
    ]

    const zeroMtx = [
      [0, 0, 0],
      [0, 5, 0],
      [0, 0, 0],
    ]

    expect(zeroMatrix(mtx)).toStrictEqual(zeroMtx)
  })
})
