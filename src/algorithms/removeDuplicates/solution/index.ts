import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"

const removeDuplicates = (node: LinkedListNode<number>) => {
  const set = new Set()

  let prevNode: LinkedListNode<number> | null = node
  let curNode: LinkedListNode<number> | null = node

  while (curNode) {
    if (set.has(curNode.val)) {
      prevNode.next = curNode.next
    } else {
      set.add(curNode.val)

      prevNode = curNode
    }

    curNode = curNode.next
  }

  return node
}

export default removeDuplicates
