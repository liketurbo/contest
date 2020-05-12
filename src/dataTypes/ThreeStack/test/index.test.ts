import ThreeStack from "../solution"

describe(ThreeStack, () => {
  const threeStack = new ThreeStack()

  threeStack.push(0, "a")
  threeStack.push(0, "b")
  threeStack.push(0, "c")

  threeStack.push(1, "d")
  threeStack.push(1, "e")

  threeStack.push(2, "f")

  test("push works", () => {
    expect(threeStack).toMatchSnapshot()
  })

  test("peek works", () => {
    expect(threeStack.peek(0)).toBe("c")
    expect(threeStack.peek(1)).toBe("e")
    expect(threeStack.peek(2)).toBe("f")
  })

  test("pop works", () => {
    expect(threeStack.pop(0)).toBe("c")
    expect(threeStack.pop(1)).toBe("e")
    expect(threeStack.pop(2)).toBe("f")
  })
})
