import { bubbleDown } from './bubble-down'

export const remove = (heap: number[]) => {
    const first = heap.shift()
    const last = heap.pop()

    heap.unshift(last)

    bubbleDown(heap, 0, last)

    return first
}
