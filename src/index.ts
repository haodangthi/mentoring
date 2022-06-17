import { Edge, WeightedGraph } from './graph-elements'
import { Dijkstra } from './dijkstra-algorithm'
import { VerticesMatrixService } from './dijkstra-algorithm/vertices-matrix.service'

const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

const edges = [
    new Edge('A', 'B', 8),
    new Edge('D', 'B', 2),
    new Edge('F', 'B', 13),
    new Edge('A', 'D', 5),
    new Edge('A', 'C', 2),
    new Edge('D', 'C', 2),
    new Edge('D', 'F', 6),
    new Edge('D', 'E', 1),
    new Edge('D', 'G', 3),
    new Edge('E', 'C', 5),
    new Edge('E', 'G', 1),
    new Edge('F', 'G', 2),
    new Edge('F', 'H', 3),
    new Edge('H', 'G', 6),
]

const graph = new WeightedGraph()
const AVertexMatrixService = new VerticesMatrixService(vertices, 'A', graph)

vertices.forEach((vertexName) => graph.addVertex(vertexName))
edges.forEach(({ vertexName1, vertexName2, weight }) => graph.addEdge(vertexName1, vertexName2, weight))

const shortestPathFromA = new Dijkstra(AVertexMatrixService)

console.log(shortestPathFromA.findAllShortestPaths())
