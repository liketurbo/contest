import Stack from "../../../dataTypes/Stack/solution"

const sortStack = (stack: Stack<number>) => {
  const tempStack = new Stack<number>()

  let maxValue = -Infinity

  for (let i = 0; i < stack.size; i++) {
    while (stack.size - i) {
      const value = stack.pop() as number

      maxValue = Math.max(maxValue, value)

      tempStack.push(value)
    }

    stack.push(maxValue)

    while (tempStack.size) {
      const value = tempStack.pop() as number

      if (value === maxValue) maxValue = -Infinity
      else stack.push(value)
    }
  }
}

export default sortStack
