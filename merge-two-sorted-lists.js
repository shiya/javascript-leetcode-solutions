/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 // the point is to splice the two lists
var mergeTwoLists = function(l1, l2) {
    var dummy = new ListNode(0);
    var cur = dummy;
    while (!!l1 && !!l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    if (!!l1) {
        cur.next = l1;
    } else {
        cur.next = l2;
    }
    return dummy.next;
};