import { WeightedGraphModel } from '../models/weighted-graph.model'
import { Vertex } from './vetrex'

export class WeightedGraph implements WeightedGraphModel<string> {
    public graph = {}

    public addEdge(vertex1: string, vertex2: string, weight: number): void {
        this.graph[vertex1][vertex2] = weight
        this.graph[vertex2][vertex1] = weight
    }

    public addVertex(vertexName: string): void {
        this.graph[vertexName] = new Vertex(vertexName)
    }
}
