import BinaryTree from "../../../dataTypes/BinaryTree/solution"
import BinaryNode from "../../../dataTypes/BinaryTree/solution/BinaryNode"

const inRange = (min: number, max: number, target: number) => {
  if (target >= min && target <= max) return true

  return false
}

const check = (
  node: BinaryNode<number> | null,
  min = -Infinity,
  max = Infinity
) => {
  if (node === null) return true

  const leftCheck = check(node.left, min, node.value)
  const rightCheck = check(node.right, node.value, max)

  if (inRange(min, max, node.value) && leftCheck && rightCheck) return true

  return false
}

const validateBst = (tree: BinaryTree<number>) => {
  return check(tree.root)
}

export default validateBst
