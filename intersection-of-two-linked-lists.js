/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    }
    var aLength = getLength(headA);
    var bLength = getLength(headB);
    var first, second;
    var diff = getLength(headA) - getLength(headB);
    if (diff > 0) {
        first = headA;
        second = headB;
    } else {
        first = headB;
        second = headA;
    }
    diff = Math.abs(diff);
    for (var i = 0; i < diff; i++) {
        first = first.next;
    }
    while (!!first) {
        if (first === second) {
            return first;
        }
        first = first.next;
        second = second.next;
    }
    return null;
};

var getLength = function(head) {
    var length = 0;
    while (!!head) {
        length++;
        head = head.next;
    }
    return length;
}