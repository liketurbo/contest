import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"

const copyList = <T>(list: LinkedListNode<T>): LinkedListNode<T> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let tail = new LinkedListNode(null) as any
  const head = tail

  while (list) {
    tail.next = new LinkedListNode(list.val)

    tail = tail.next
    list = list.next as LinkedListNode<T>
  }

  return head.next
}

export default copyList
