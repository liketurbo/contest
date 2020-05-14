import Stack from "../dataTypes/Stack/solution"

const genStack = <T>(arr: T[]) => {
  const stack = new Stack<T>()

  arr.forEach((value) => stack.push(value))

  return stack
}

export default genStack
