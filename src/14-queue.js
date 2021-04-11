const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.list = {};
    this.a = this.list; // 7777777777777
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(element) {
    this.a.next = new ListNode(element);
    this.a = this.a.next;
  }

  dequeue() {
    const res = this.list.next.value;
    delete this.list.next.value;
    this.list = this.list.next;
    return res;
  }
}

module.exports = Queue;
