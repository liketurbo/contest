class QueueNode<T> {
  value: T
  next: QueueNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

export default QueueNode
