export interface WeightedGraphModel<T> {
    addVertex(vertexName: string): void
    addEdge(vertex1: T, vertex2: T, weight: number): void
}
