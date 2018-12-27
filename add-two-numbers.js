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

 // dummy node is your friend here
 // set a carry variable, use the value of carry as the value of each new node
var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    var dummy = new ListNode(0);
    var head = dummy;
    while (!!l1 || !!l2) {
        if (!!l1) {
            carry += l1.val;
            l1 = l1.next;
        }
        if (!!l2) {
            carry += l2.val;
            l2 = l2.next;
        }
        head.next = new ListNode(carry % 10);
        head = head.next;
        carry = parseInt(carry / 10);
    }
    if (carry > 0) {
        head.next = new ListNode(carry);
    }
    return dummy.next;
};