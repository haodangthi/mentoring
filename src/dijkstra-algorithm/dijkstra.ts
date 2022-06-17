import { DijkstraModel, Path } from '../models'
import { VerticesMatrixService } from './vertices-matrix.service'

export class Dijkstra implements DijkstraModel<string> {
    private verticesMatrix: any = {}

    constructor(private verticesMatrixService: VerticesMatrixService) {}

    public findAllShortestPaths() {
        const startVertex = this.verticesMatrixService.weightedGraph.graph[this.verticesMatrixService.startVertexName]
        const allShortestPaths = {}

        this.verticesMatrix = this.verticesMatrixService.createMatrix(startVertex, 0)

        this.verticesMatrixService.allVertices.forEach((vertexName) => {
            allShortestPaths[vertexName] = this.findShortestPath(vertexName)
        })

        return allShortestPaths
    }

    public findShortestPath(toVertex: string): Path {
        const { distance } = this.verticesMatrix[toVertex][toVertex]
        const path = this.verticesMatrixService.getPath([], toVertex).reverse()

        return {
            distance,
            path,
        }
    }
}
