/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// use a faster pointer and walk ahead 
// cases to consider: 
// when the node to delete is the head, need dummy nodes
var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(0);
    dummy.next = head;
    var fast = head;
    var slow = dummy;
    for (var i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (!!fast) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
};