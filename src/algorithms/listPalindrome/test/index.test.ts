import LinkedListNode from "../../../dataTypes/LinkedList/solution/LinkedListNode"
import getFolderName from "../../../testUtils/getFolderName"
import genLinkedList from "../../../testUtils/getLinkedList"
import listPalindrome from "../solution"

describe(getFolderName(), () => {
  test("handle even palindrome", () => {
    const list = genLinkedList(["a", "b", "b", "a"]) as LinkedListNode<string>

    expect(listPalindrome(list)).toBe(true)
  })

  test("handle odd palindrome", () => {
    const list = genLinkedList(["a", "b", "c", "b", "a"]) as LinkedListNode<
      string
    >

    expect(listPalindrome(list)).toBe(true)
  })

  test("handle not palindrome", () => {
    const list = genLinkedList(["a", "b", "c"]) as LinkedListNode<string>

    expect(listPalindrome(list)).toBe(false)
  })
})
