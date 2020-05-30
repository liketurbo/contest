import BinarySearchNode from "./BinarySearchNode"
import getMiddle from "./utils/getMiddle"

class BinarySearchTree {
  static fromArray(arr: number[]) {
    arr.sort((a, b) => a - b)

    const buildTree = (start: number, end: number) => {
      if (end - start < 0) return null

      const middle = getMiddle(start, end)

      const node = new BinarySearchNode(arr[middle])

      node.left = buildTree(start, middle - 1)
      node.right = buildTree(middle + 1, end)

      return node
    }

    if (arr.length !== 0) {
      const tree = buildTree(0, arr.length - 1) as BinarySearchNode

      return tree
    }

    throw new Error("Expected at least on element in array.")
  }
}

export default BinarySearchTree
