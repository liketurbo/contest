import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"
import sumLists from "../../sumLists/solution"
import reverseList from "./reverseList"

const sumListsReverse = (
  listA: LinkedListNode<number>,
  listB: LinkedListNode<number>
) => {
  const revListA = reverseList(listA)
  const revListB = reverseList(listB)

  const sumList = sumLists(revListA, revListB)
  const revSumList = reverseList(sumList as LinkedListNode<number>)

  return revSumList
}

export default sumListsReverse
