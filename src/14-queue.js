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
    this.list = { next: null };
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(element) {
    this.list.value = element;
    this.list = { next: this.list };
    ListNode(element);
  }

  dequeue() {
    let obj = this.list;
    let res;
    let prevObj = obj;
    while (obj.next) {
      prevObj = obj;
      obj = obj.next;
      res = obj.value;
    }
    prevObj.next = null;

    return res;
  }
}

module.exports = Queue;
