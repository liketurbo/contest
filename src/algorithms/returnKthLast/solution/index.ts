import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"

const returnKthLast = (node: LinkedListNode<number>, k: number) => {
  let nodeA: LinkedListNode<number> | null = node
  let nodeB: LinkedListNode<number> | null = node

  for (let i = 0; i < k; i++) nodeB = (nodeB as LinkedListNode<number>).next

  while (nodeB) {
    nodeA = (nodeA as LinkedListNode<number>).next
    nodeB = nodeB.next
  }

  return nodeA
}

export default returnKthLast
