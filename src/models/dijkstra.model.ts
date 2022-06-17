import { Path } from './path'

export interface DijkstraModel<T> {
    findShortestPath(vertex2: T): Path
    findAllShortestPaths(vertex: T): void
}
