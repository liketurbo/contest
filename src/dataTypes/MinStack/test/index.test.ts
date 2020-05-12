import getRandomArr from "../../../testUtils/getRandomArr"
import MinStack from "../solution"

describe(MinStack, () => {
  const arr = getRandomArr()

  test("push/pop works", () => {
    const minStack = new MinStack()

    arr.forEach((value) => minStack.push(value))

    const revArr = arr.reverse()

    revArr.forEach((value) => expect(minStack.pop()).toBe(value))
  })

  test("min works", () => {
    const minStack = new MinStack()

    arr.forEach((value) => minStack.push(value))

    const stackMins: number[] = []

    arr.forEach(() => {
      stackMins.push(minStack.min() as number)
      minStack.pop()
    })

    const sortedStackMins = stackMins.slice().sort((a, b) => a - b)

    sortedStackMins.forEach((_, idx) => {
      expect(sortedStackMins[idx]).toBe(stackMins[idx])
    })
  })
})
