import BinaryTree from "../../../dataTypes/BinaryTree/solution"
import BinaryNode from "../../../dataTypes/BinaryTree/solution/BinaryNode"

const depthCache = new Map<BinaryNode<number>, number>()

const getDepth = (node: BinaryNode<number> | null): number => {
  if (node === null) return 0

  let depth = depthCache.get(node)

  if (!depth) {
    depth = 1 + Math.max(getDepth(node.left), getDepth(node.right))

    depthCache.set(node, depth)
  }

  return depth
}

const checkBalanced = (tree: BinaryTree<number>) => {
  const isBalanced = (node: BinaryNode<number> | null): boolean => {
    if (node === null) return true

    const leftDepth = getDepth(node.left)
    const rightDepth = getDepth(node.right)

    const balanced = Math.abs(leftDepth - rightDepth) <= 1

    if (!balanced) return false

    return isBalanced(node.left) && isBalanced(node.right)
  }

  return isBalanced(tree.root)
}

export default checkBalanced
