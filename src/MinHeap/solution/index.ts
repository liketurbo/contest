class MinHeap {
  private storage: number[]

  constructor() {
    this.storage = []
  }

  get size() {
    return this.storage.length
  }

  add(val: number) {
    this.storage.push(val)

    this.bubbleUp()
  }

  private bubbleUp() {
    const getParentI = (i: number) => Math.trunc((i - 1) / 2)

    let i = this.size - 1
    let pI = getParentI(i)

    while (this.storage[i] < this.storage[pI]) {
      ;[this.storage[i], this.storage[pI]] = [this.storage[pI], this.storage[i]]

      i = pI
      pI = getParentI(i)
    }
  }

  peek() {
    return this.storage[0]
  }

  pop() {
    ;[this.storage[0], this.storage[this.size - 1]] = [
      this.storage[this.size - 1],
      this.storage[0],
    ]

    const minVal = this.storage.pop()

    this.sinkDown()

    return minVal
  }

  private sinkDown() {
    const getLeftI = (i: number) => i * 2 + 1
    const getRightI = (i: number) => i * 2 + 2

    const getMinI = (i: number) => {
      const lI = getLeftI(i)
      const rI = getRightI(i)

      return this.storage[lI] < this.storage[rI] ? lI : rI
    }

    let i = 0
    let minI = getMinI(i)

    while (this.storage[i] > this.storage[minI]) {
      ;[this.storage[i], this.storage[minI]] = [
        this.storage[minI],
        this.storage[i],
      ]

      i = minI
      minI = getMinI(i)
    }
  }
}

export default MinHeap
