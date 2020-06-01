import BinaryNode from "./BinaryNode"

class BinaryTree<T> {
  root: BinaryNode<T>

  constructor(value: T) {
    this.root = new BinaryNode(value)
  }
}

export default BinaryTree
