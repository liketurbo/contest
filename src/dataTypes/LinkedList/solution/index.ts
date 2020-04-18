import LinkedListNode from "./LinkedListNode"

class LinkedList<T = string> {
  private root: LinkedListNode<T> | null

  constructor() {
    this.root = null
  }

  add(val: T) {
    const newNode = new LinkedListNode(val)

    if (this.root === null) {
      this.root = newNode
    } else {
      let curNode = this.root

      while (curNode.next !== null) curNode = curNode.next

      curNode.next = newNode
    }
  }

  get(idx: number) {
    if (idx < 0) throw new RangeError("Only positive indices allowed.")

    let curNode = this.root

    for (let i = 0; curNode !== null && i < idx; i++) curNode = curNode.next

    return curNode ? curNode.val : null
  }

  delete(idx: number) {
    if (idx < 0) throw new RangeError("Only positive indices allowed.")

    let prevNode = this.root

    if (!prevNode) throw new RangeError("List is empty.")

    let curNode = prevNode.next

    if (idx === 0) {
      this.root = curNode

      return prevNode.val
    }

    for (let i = 1; curNode !== null && i < idx; i++) {
      prevNode = curNode
      curNode = curNode.next
    }

    if (curNode === null)
      throw new RangeError("Doesn't have node for given index.")

    prevNode.next = curNode.next

    return curNode.val
  }
}

export default LinkedList
