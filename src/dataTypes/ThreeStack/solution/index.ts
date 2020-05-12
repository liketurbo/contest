const NUMBER_OF_STACKS = 3

class ThreeStack<T> {
  private storage: T[]
  private sizes: number[]

  constructor() {
    this.storage = []
    this.sizes = new Array(NUMBER_OF_STACKS).fill(0)
  }

  private getCurIdx(idx: ThreeStackIdx) {
    return Math.max(this.getSize(idx) - 1, 0) * NUMBER_OF_STACKS + idx
  }

  peek(idx: ThreeStackIdx) {
    const curIdx = this.getCurIdx(idx)

    return this.storage[curIdx]
  }

  pop(idx: ThreeStackIdx) {
    const curIdx = this.getCurIdx(idx)

    this.sizes[idx]--

    const value = this.storage[curIdx]

    delete this.storage[curIdx]

    return value
  }

  push(idx: ThreeStackIdx, value: T) {
    const nextIdx = this.getSize(idx) * NUMBER_OF_STACKS + idx

    this.storage[nextIdx] = value

    this.sizes[idx]++

    return this.sizes[idx]
  }

  getSize(idx: ThreeStackIdx) {
    return this.sizes[idx]
  }
}

export type ThreeStackIdx = 0 | 1 | 2

export default ThreeStack
