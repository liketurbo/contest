import genStack from "../../../testUtils/genStack"
import getRandomArr from "../../../testUtils/getRandomArr"
import sortStack from "../solution"

describe(sortStack, () => {
  test("sort random stack", () => {
    const arr = getRandomArr()
    const stack = genStack(arr)

    sortStack(stack)

    arr.sort((a, b) => a - b)

    arr.forEach((value) => expect(value).toBe(stack.pop()))
  })
})
