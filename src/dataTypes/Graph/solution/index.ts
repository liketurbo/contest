import GraphNode from "./GraphNode"

class Graph<T> {
  root: GraphNode<T>

  constructor(root: GraphNode<T>) {
    this.root = root
  }
}

export default Graph
