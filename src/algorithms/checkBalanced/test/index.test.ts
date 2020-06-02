import BinaryTree from "../../../dataTypes/BinaryTree/solution"
import BinaryNode from "../../../dataTypes/BinaryTree/solution/BinaryNode"
import getFolderName from "../../../testUtils/getFolderName"
import checkBalanced from "../solution"

describe(getFolderName(), () => {
  test("false case", () => {
    /**
     * 0
     * |\
     * 1 2
     * |\
     * 3 4
     * |\
     * 5 6
     */

    const nodes: BinaryNode<number>[] = []

    new Array(7).fill(0).forEach((_, idx) => nodes.push(new BinaryNode(idx)))

    nodes[0].left = nodes[1]
    nodes[0].right = nodes[2]

    nodes[1].left = nodes[3]
    nodes[1].right = nodes[4]

    nodes[3].left = nodes[5]
    nodes[3].right = nodes[6]

    const tree = new BinaryTree<number>()

    tree.root = nodes[0]

    expect(checkBalanced(tree)).toBe(false)
  })

  test("tricky case", () => {
    /**
     * 0
     * |\
     * 1  2
     * |\ |\
     * 3    4
     * |\   |\
     * 5      6
     */

    const nodes: BinaryNode<number>[] = []

    new Array(7).fill(0).forEach((_, idx) => nodes.push(new BinaryNode(idx)))

    nodes[0].left = nodes[1]
    nodes[0].right = nodes[2]

    nodes[1].left = nodes[3]
    nodes[2].right = nodes[4]

    nodes[3].left = nodes[5]
    nodes[4].right = nodes[6]

    const tree = new BinaryTree<number>()

    tree.root = nodes[0]

    expect(checkBalanced(tree)).toBe(false)
  })
})
