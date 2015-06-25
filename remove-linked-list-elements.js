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
var removeElements = function(head, val) {
    if (!head) {
        return null;
    }
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