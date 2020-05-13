import Stack from "../../Stack/solution"

const STACK_CAPACITY = 10

class SetStacks<T> {
  private stacks: Stack<T>[]

  constructor() {
    this.stacks = []
    this.stacks.push(new Stack())
  }

  push(value: T) {
    if (this.stacks[this.lastStackIdx].size >= STACK_CAPACITY)
      this.stacks.push(new Stack())

    this.stacks[this.lastStackIdx].push(value)
  }

  pop() {
    if (this.stacks[this.lastStackIdx].size - 1 === 0 && this.stacks.length > 1)
      this.stacks.pop()

    return this.stacks[this.lastStackIdx].pop()
  }

  popAt(idx: number) {
    if (!this.stacks[idx]) return undefined

    const value = this.stacks[idx].pop()

    this.rollOver(idx)

    return value
  }

  private rollOver(idx: number) {
    if (!this.stacks[idx + 1]) return

    const tempStack = new Stack()

    while (this.stacks[idx + 1].size !== 0) {
      tempStack.push(this.stacks[idx + 1].pop() as T)
    }

    this.stacks[idx].push(tempStack.pop() as T)

    while (tempStack.size !== 0) {
      this.stacks[idx + 1].push(tempStack.pop() as T)
    }

    this.rollOver(idx + 1)
  }

  private get lastStackIdx() {
    return this.stacks.length - 1
  }
}

export default SetStacks
