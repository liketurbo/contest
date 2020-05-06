import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"

const reverseList = <T>(list: LinkedListNode<T>) => {
  let prev = list
  let next = list.next

  prev.next = null

  while (next) {
    const tempNext = next.next

    next.next = prev
    prev = next
    next = tempNext
  }

  return prev
}

export default reverseList
