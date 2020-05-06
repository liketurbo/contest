import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"

const getOffsetBtwLists = <T>(
  listA: LinkedListNode<T>,
  listB: LinkedListNode<T>
) => {
  let offset = 0

  while (listA.next) {
    offset++
    listA = listA.next
  }

  while (listB.next) {
    offset--
    listB = listB.next
  }

  return offset
}

const equalizeLists = <T>(
  listA: LinkedListNode<T>,
  listB: LinkedListNode<T>,
  offset: number
) => {
  while (offset !== 0) {
    if (offset > 0) {
      listA = listA.next as LinkedListNode<T>
      offset--
    } else {
      listB = listB.next as LinkedListNode<T>
      offset++
    }
  }

  return [listA, listB]
}

const listIntersection = <T>(
  listA: LinkedListNode<T>,
  listB: LinkedListNode<T>
): LinkedListNode<T> | null => {
  let nodeA: LinkedListNode<T> | null = listA
  let nodeB: LinkedListNode<T> | null = listB

  while (nodeA && nodeB) {
    if (nodeA.next === null && nodeB.next === null) {
      return null
    } else if (nodeA.next === null || nodeB.next === null) {
      const offset = getOffsetBtwLists(nodeA, nodeB)

      ;[nodeA, nodeB] = equalizeLists(listA, listB, offset)

      return listIntersection(nodeA, nodeB)
    } else if (nodeA === nodeB) {
      return nodeA
    }

    nodeA = nodeA.next
    nodeB = nodeB.next
  }

  return null
}

export default listIntersection
