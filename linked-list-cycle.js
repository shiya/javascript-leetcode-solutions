/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// get a fast pointer and slow pointer
// fast one walk two steps, slow walks one
// if there's a cycle, they'll always meet

var hasCycle = function(head) {
    var fast = head;
    var slow = head;
    while (!!fast && !!fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
};