import MinStackNode from "./MinStackNode"

class MinStack {
  private top: MinStackNode | null

  constructor() {
    this.top = null
  }

  min() {
    if (this.top) return this.top.min

    return null
  }

  pop() {
    let value = null

    if (this.top) {
      value = this.top.value
      this.top = this.top.next
    }

    return value
  }

  push(value: number) {
    const node = new MinStackNode(value)

    if (this.top) node.next = this.top

    this.top = node
  }
}

export default MinStack
