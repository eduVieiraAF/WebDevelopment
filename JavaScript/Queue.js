class Queue {
    constructor() { this.items = [] }

    enqueue(element) { return this.items.push(element) }
    dequeue() { if (this.items.length > 0 ) return this.items.shift() }
    peek() { return this.items[this.items.length - 1] }
    isEmpty() { return this.isEmpty.legnth == 0 }
    size() { return this.items.length }
    clear() { this.items = [] }
}

const queue = new Queue()

for (let i = 1; i < 10; i++) {
    queue.enqueue(i)
}

console.log(queue.items)

queue.dequeue()
console.log(queue.items)

console.log(queue.peek())

console.log(queue.isEmpty())

console.log(queue.size())

queue.clear()
console.log(queue.items)