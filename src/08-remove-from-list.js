/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let list = l;
  let tmp = l;
  let tmpNext = l.next;
  while (tmpNext) {
    if (tmpNext.value === k) {
      tmp.next = tmp.next.next;
      tmpNext = tmpNext.next;
    } else {
      tmp = tmp.next;
      tmpNext = tmpNext.next;
    }
  }
  if (list.value === k) list = list.next;
  return list;
}
module.exports = removeKFromList;
