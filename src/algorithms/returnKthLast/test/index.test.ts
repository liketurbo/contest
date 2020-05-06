import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"
import getFolderName from "../../../testUtils/getFolderName"
import genLinkedList from "../../../testUtils/getLinkedList"
import returnKthLast from "../solution"

describe(getFolderName(), () => {
  test("with 3 nodes", () => {
    const list = genLinkedList([1, 2, 3]) as LinkedListNode<number>

    expect(returnKthLast(list, 2)).toStrictEqual(list.next)
  })
})
