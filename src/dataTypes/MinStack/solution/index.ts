import Stack from "../../Stack/solution"

class MinStack extends Stack<number> {
  private mins: Stack<number>

  constructor() {
    super()
    this.mins = new Stack()
  }

  min() {
    return this.mins.peek()
  }

  push(value: number) {
    super.push(value)

    if (value < this.mins.peek()) return this.mins.push(value)

    return this.mins.size - 1
  }

  pop() {
    const value = super.pop()

    if (value === this.mins.peek()) this.mins.pop()

    return value
  }
}

export default MinStack
