import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"

const sumLists = (
  listA: LinkedListNode<number>,
  listB: LinkedListNode<number>
) => {
  const dummyNode = new LinkedListNode(0)

  let nextNode = dummyNode
  let carry = 0

  while (listA || listB) {
    const res = (listA?.val || 0) + (listB?.val || 0) + carry

    const resNode = new LinkedListNode(res % 10)

    nextNode.next = resNode
    nextNode = resNode

    if (res >= 10) carry = 1
    else carry = 0

    listA = listA?.next as LinkedListNode<number>
    listB = listB?.next as LinkedListNode<number>
  }

  return dummyNode.next
}

export default sumLists
