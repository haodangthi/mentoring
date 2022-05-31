import { insert } from './priority-queue/insert'
import { remove } from './priority-queue/remove'

const heap = []

const queue = [12, 8, 4, 35, 45, 20] // random array of numbers

queue.forEach((e) => insert(heap, e)) // create a heap

console.log(heap)

;[...heap].forEach((e) => {
    console.log(remove(heap)) // remove elements with a highest priority
})
