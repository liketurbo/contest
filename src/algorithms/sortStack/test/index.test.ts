import genRandomArr from "../../../testUtils/genRandomArr"
import genStack from "../../../testUtils/genStack"
import sortStack from "../solution"

describe(sortStack, () => {
  test("sort random stack", () => {
    const arr = genRandomArr()
    const stack = genStack(arr)

    sortStack(stack)

    arr.sort((a, b) => a - b)

    arr.forEach((value) => expect(value).toBe(stack.pop()))
  })
})
