import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"
import getFolderName from "../../../testUtils/getFolderName"
import removeDuplicates from "../solution"

describe(getFolderName(), () => {
  test("with 1 element", () => {
    const one = new LinkedListNode(1)

    expect(removeDuplicates(one)).toStrictEqual(one)
  })

  test("with 2 elements", () => {
    const one = new LinkedListNode(1)
    const oneDup = new LinkedListNode(1)
    const two = new LinkedListNode(2)

    one.next = oneDup

    removeDuplicates(one)

    expect(one.next).toBeNull()

    one.next = two

    removeDuplicates(one)

    expect(one.next).not.toBeNull()
  })

  test("with 3 elements", () => {
    const one = new LinkedListNode(1)
    const oneDup = new LinkedListNode(1)
    const two = new LinkedListNode(2)
    const three = new LinkedListNode(3)

    one.next = oneDup
    oneDup.next = two
    two.next = three

    removeDuplicates(one)

    expect(one.next).toStrictEqual(two)
  })
})
