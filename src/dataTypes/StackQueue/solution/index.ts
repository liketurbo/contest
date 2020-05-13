import Stack from "../../Stack/solution"

class StackQueue<T> {
  private stackA: Stack<T>
  private stackB: Stack<T>

  constructor() {
    this.stackA = new Stack()
    this.stackB = new Stack()
  }

  add(value: T) {
    this.stackA.push(value)
  }

  delete() {
    while (this.stackA.size) this.stackB.push(this.stackA.pop() as T)

    const value = this.stackB.pop()

    while (this.stackB.size) this.stackA.push(this.stackB.pop() as T)

    return value
  }
}

export default StackQueue
