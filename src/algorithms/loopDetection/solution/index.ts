import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"

const loopDetection = <T>(list: LinkedListNode<T>) => {
  const listSet = new Set()

  while (list) {
    if (listSet.has(list)) return list

    listSet.add(list)

    list = list.next as LinkedListNode<T>
  }

  return null
}

export default loopDetection
