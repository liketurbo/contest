import QueueNode from "./QueueNode"

class Queue<T> {
  private first: QueueNode<T> | null
  private last: QueueNode<T> | null

  size: number

  constructor() {
    this.first = null
    this.last = null

    this.size = 0
  }

  add(value: T) {
    this.size++

    const node = new QueueNode(value)

    if (this.last) this.last.next = node

    this.last = node

    if (this.first === null) this.first = this.last
  }

  delete() {
    if (this.first === null) return null

    this.size--

    const value = this.first.value

    this.first = this.first.next

    if (this.first === null) this.last = null

    return value
  }

  peek() {
    if (this.first) return this.first.value

    return null
  }
}

export default Queue
