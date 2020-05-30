class BinarySearchNode {
  value: number
  left: BinarySearchNode | null
  right: BinarySearchNode | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export default BinarySearchNode
