import { bubbleUp } from './bubble-up'

export const insert = (heap: number[], element: number) => {
    const childIndex = heap.length

    heap.push(element)

    if (childIndex !== 0) {
        bubbleUp(heap, childIndex)
    }
}
