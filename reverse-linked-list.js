/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) {
        return head;
    }
    var pre = head;
    head = head.next;
    pre.next = null;
    while (!!head) {
        var tmp = head;
        head = head.next;
        tmp.next = pre;
        pre = tmp;
    }
    return pre;
};