import { getParentIndex } from './helpers'

export const bubbleUp = (heap: number[], childIndex: number): void => {
    const parentIndex = getParentIndex(childIndex)

    if (childIndex === 0 || heap[parentIndex] < heap[childIndex]) {
        return
    }
    const tempElement = heap[parentIndex]

    heap[parentIndex] = heap[childIndex]
    heap[childIndex] = tempElement

    bubbleUp(heap, parentIndex)
}
