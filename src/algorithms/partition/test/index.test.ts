import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"
import genLinkedList from "../../../testUtils/genLinkedList"
import getFolderName from "../../../testUtils/getFolderName"
import partition from "../solution"

describe(getFolderName(), () => {
  test("book example", () => {
    const list = genLinkedList([3, 5, 8, 5, 10, 2, 1]) as LinkedListNode<number>

    expect(partition(list, 5)).toMatchSnapshot()
  })
})
