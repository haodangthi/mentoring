import { Vertex, WeightedGraph } from '../graph-elements'

export class VerticesMatrixService {
    private verticesMatrix = {}

    constructor(public allVertices: string[], public startVertexName: string, public weightedGraph: WeightedGraph) {}

    public createMatrix(currentVertex: Vertex, currentVertexPathWeight: number, previousVertex?: string) {
        if (!currentVertex) {
            return this.verticesMatrix
        }

        const minVertex = { distance: 0 } as any
        const vertexRow = (this.verticesMatrix[currentVertex.name] = { isVisited: false })

        this.allVertices.forEach(
            this.createVertexMatrixRow(currentVertex, currentVertexPathWeight, vertexRow, minVertex, previousVertex)
        )

        vertexRow.isVisited = true

        const nextVertex = this.weightedGraph.graph[minVertex.name]

        return this.createMatrix(nextVertex, minVertex.distance, currentVertex.name)
    }

    public getPath(path: string[], toVertex: string): string[] {
        if (!toVertex) {
            return path
        }

        path.push(toVertex)
        const nextVertex = this.verticesMatrix[toVertex][toVertex].index

        return this.getPath(path, nextVertex)
    }

    private createVertexMatrixRow(
        currentVertex: Vertex,
        currentVertexPathWeight: number,
        nodeRow,
        minVertex,
        previousVertex?: string
    ) {
        return (vertexName) => {
            const prevNode = this.getPreviousVertex(previousVertex, vertexName)
            const isAnotherVertex = this.isAnotherVertex(vertexName, currentVertex)

            if (this.notVisited(vertexName)) {
                const distanceToVertex = currentVertex[vertexName]

                const distance =
                    distanceToVertex && isAnotherVertex ? currentVertexPathWeight + distanceToVertex : prevNode.distance

                const index = distanceToVertex && isAnotherVertex ? currentVertex.name : prevNode.index

                nodeRow[vertexName] = {
                    distance,
                    index,
                }

                if (isAnotherVertex) {
                    if (distance < minVertex.distance || minVertex.distance === 0) {
                        minVertex.distance = distance
                        minVertex.name = vertexName
                        minVertex.index = index
                    }
                }
            }
        }
    }

    private isAnotherVertex(vertexName, currentVertex): boolean {
        return vertexName !== currentVertex.name
    }

    private getPreviousVertex(previousVertex: string, vertexName: string) {
        const prevNode = previousVertex && this.verticesMatrix[previousVertex][vertexName]
        const emptyNode = vertexName === this.startVertexName ? { distance: 0 } : { distance: Infinity }

        return prevNode || emptyNode
    }

    private notVisited(vertexName: string) {
        return !this.verticesMatrix[vertexName]?.isVisited
    }
}
