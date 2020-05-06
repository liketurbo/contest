import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"

const partition = (node: LinkedListNode<number>, part: number) => {
  let startNode: LinkedListNode<number> | null = node
  let endNode: LinkedListNode<number> | null = node

  while (node) {
    const curNode = node

    node = node.next as LinkedListNode<number>

    if (curNode.val < part) {
      curNode.next = startNode
      startNode = curNode
    } else {
      endNode.next = curNode
      endNode = curNode
    }
  }

  endNode.next = null

  return startNode
}

export default partition
