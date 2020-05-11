class Stack<T> {
  private readonly storage: T[]

  constructor() {
    this.storage = []
  }

  peek() {
    return this.storage[this.size]
  }

  pop() {
    return this.storage.pop()
  }

  push(value: T) {
    return this.storage.push(value)
  }

  get size() {
    return this.storage.length
  }
}

export default Stack
