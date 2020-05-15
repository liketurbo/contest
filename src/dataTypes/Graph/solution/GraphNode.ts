class GraphNode<T> {
  value: T
  children: GraphNode<T>[]

  constructor(value: T) {
    this.value = value
    this.children = []
  }
}

export default GraphNode
