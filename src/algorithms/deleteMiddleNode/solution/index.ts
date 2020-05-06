import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"

const deleteMiddleNode = (node: LinkedListNode<number>) => {
  let prevNodeA: LinkedListNode<number> | null = node
  let nodeA: LinkedListNode<number> | null = node
  let nodeB: LinkedListNode<number> | null = node

  while (nodeB) {
    prevNodeA = nodeA
    nodeA = nodeA.next as LinkedListNode<number>

    nodeB = nodeB.next

    if (nodeB) nodeB = nodeB.next
  }

  prevNodeA.next = nodeA.next

  return node
}

export default deleteMiddleNode
