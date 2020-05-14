import LinkedListNode from "../dataTypes/LinkedList/solution/LinkedListNode"

const genLinkedList = <T>(arr: T[]) => {
  const dummyNode = new LinkedListNode(null) as LinkedListNode<unknown>

  let curNode = dummyNode

  arr.forEach((val) => {
    const newNode = new LinkedListNode(val)

    curNode.next = newNode
    curNode = newNode
  })

  return dummyNode.next
}

export default genLinkedList
