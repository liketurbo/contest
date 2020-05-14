import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"
import genLinkedList from "../../../testUtils/genLinkedList"
import getFolderName from "../../../testUtils/getFolderName"
import sumLists from "../solution"

describe(getFolderName(), () => {
  test("book example", () => {
    const listA = genLinkedList([7, 1, 6]) as LinkedListNode<number>
    const listB = genLinkedList([5, 9, 2]) as LinkedListNode<number>

    const listSum = genLinkedList([2, 1, 9]) as LinkedListNode<number>

    expect(sumLists(listA, listB)).toStrictEqual(listSum)
  })
})
