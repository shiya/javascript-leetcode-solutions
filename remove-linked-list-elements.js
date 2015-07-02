/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

 // cases to consider:
 // 1. when head.val === val
 // 2. when there are multiple vals
var removeElements = function(head, val) {
    var dummy = new ListNode(0);
    dummy.next = head;
    var pre = dummy;
    while (!!head) {
        if (head.val === val) {
            pre.next = head.next;
        } else {
            pre = pre.next;
        }
        head = head.next;
    }
    return dummy.next;
};