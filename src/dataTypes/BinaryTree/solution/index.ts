import BinaryNode from "./BinaryNode"

class BinaryTree<T> {
  root: BinaryNode<T> | null

  constructor(root: T | null = null) {
    if (root) this.root = new BinaryNode(root)
    else this.root = null
  }
}

export default BinaryTree
