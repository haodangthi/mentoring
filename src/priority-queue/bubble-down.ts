import { getLeftIndex, getRightIndex } from './helpers'

export const bubbleDown = (heap: number[], parentIndex: number, parent: number): void => {
    const left = getLeftIndex(parentIndex)
    const right = getRightIndex(parentIndex)
    let childToSwap

    const rightChild = heap[right]
    const leftChild = heap[left]

    if (!leftChild) {
        return
    }

    if (!rightChild && parent < leftChild) {
        return
    }

    if (parent < leftChild && parent < rightChild) {
        return
    }

    if (!rightChild && parent > leftChild) {
        childToSwap = left
    }

    if (parent > leftChild && parent > rightChild) {
        childToSwap = leftChild > rightChild ? right : left
    }

    if (parent > leftChild && parent < rightChild) {
        childToSwap = left
    }

    if (parent < leftChild && parent > rightChild) {
        childToSwap = left
    }

    const tempElement = heap[parentIndex]

    heap[parentIndex] = heap[childToSwap]
    heap[childToSwap] = tempElement

    bubbleDown(heap, childToSwap, tempElement)
}
