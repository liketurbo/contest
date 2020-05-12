class MinStackNode {
  private _next: MinStackNode | null
  min: number
  value: number

  constructor(value: number) {
    this._next = null
    this.min = value
    this.value = value
  }

  get next() {
    return this._next
  }

  set next(node: MinStackNode | null) {
    this._next = node

    if (this._next) this.min = Math.min(this.value, this._next.min)
  }
}

export default MinStackNode
