import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"
import genLinkedList from "../../../testUtils/genLinkedList"
import getFolderName from "../../../testUtils/getFolderName"
import sumListsReverse from "../solution"

describe(getFolderName(), () => {
  test("same length", () => {
    const listA = genLinkedList([6, 1, 7]) as LinkedListNode<number>
    const listB = genLinkedList([2, 9, 5]) as LinkedListNode<number>

    const listSum = genLinkedList([9, 1, 2]) as LinkedListNode<number>

    expect(sumListsReverse(listA, listB)).toStrictEqual(listSum)
  })

  test("different length", () => {
    const listA = genLinkedList([6, 1, 7, 2]) as LinkedListNode<number>
    const listB = genLinkedList([2, 9, 5]) as LinkedListNode<number>

    const listSum = genLinkedList([6, 4, 6, 7]) as LinkedListNode<number>

    expect(sumListsReverse(listA, listB)).toStrictEqual(listSum)
  })
})
