// Queues

function createQueue() {
  const queue = [];

  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    }
  };
}

const q = createQueue();
console.log(q.isEmpty());

q.enqueue("Make a pasta");
q.enqueue("Help out");
q.enqueue("No way jose");

q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.peek());
console.log(q.isEmpty());

module.exports = {
  createQueue: createQueue
};
