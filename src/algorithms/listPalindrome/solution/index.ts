import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"
import reverseList from "../../sumListsReverse/solution/reverseList"
import copyList from "./copyList"

const listPalindrome = (list: LinkedListNode<string>) => {
  let revList: LinkedListNode<string> | null = reverseList(copyList(list))

  while (list && revList) {
    if (list.val !== revList.val) return false

    list = list.next as LinkedListNode<string>
    revList = revList.next
  }

  return true
}

export default listPalindrome
