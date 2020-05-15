import GraphNode from "../../../dataTypes/Graph/solution/GraphNode"
import Queue from "../../../dataTypes/Queue/solution"

const routeBetweenNodes = <T>(nodeA: GraphNode<T>, nodeB: GraphNode<T>) => {
  const queue = new Queue<GraphNode<T>>()

  const visited: GraphNode<T>[] = []

  queue.add(nodeA)
  visited.push(nodeA)

  while (queue.size !== 0) {
    const node = queue.delete() as GraphNode<T>

    if (node === nodeB) return true

    node.children.forEach((childNode) => {
      if (visited.includes(childNode)) return

      queue.add(childNode)
      visited.push(childNode)
    })
  }

  return false
}

export default routeBetweenNodes
