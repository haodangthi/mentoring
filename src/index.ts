import { insert } from './priority-queue/insert'
import { remove } from './priority-queue/remove'

const heap = []

const queue = [12, 8, 4, 35, 45, 20] // random array of numbers

queue.forEach((e) => insert(heap, e)) // create a heap

let heapSize = heap.length;

while (heapSize) {
    console.log(remove(heap)) // remove element with a highest priority
    heapSize--
}
