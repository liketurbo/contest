import BinaryTree from "../../../dataTypes/BinaryTree/solution"
import BinaryNode from "../../../dataTypes/BinaryTree/solution/BinaryNode"
import LinkedList from "../../../dataTypes/LinkedList/solution"
import Queue from "../../../dataTypes/Queue/solution"

const listOfDepths = (tree: BinaryTree<number>) => {
  const queue = new Queue<BinaryNode<number>>()

  queue.add(tree.root)

  const lists: LinkedList<BinaryNode<number>>[] = []

  let nextLevelNode: BinaryNode<number> | null = tree.root

  while (queue.size !== 0) {
    const next = queue.delete() as BinaryNode<number>

    if (next === nextLevelNode) {
      nextLevelNode = null

      lists.push(new LinkedList(next))
    } else {
      lists[lists.length - 1].add(next)
    }

    if (nextLevelNode === null) nextLevelNode = next.left || next.right

    if (next.left) queue.add(next.left)
    else if (next.right) queue.add(next.right)
  }

  return lists
}

export default listOfDepths
