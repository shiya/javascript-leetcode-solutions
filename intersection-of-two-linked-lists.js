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

 // the lists will end together if they have intersection
 // so get the length of the two lists, get the difference
 // walk the distance of the longer list
 // if they intersect, there will be two nodes that are the same!


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

//second try
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    }
    var lengthA = getListLength(headA);
    var lengthB = getListLength(headB);
    var fast, slow;
    if (lengthA > lengthB) {
        fast = headA;
        slow = headB;
    } else {
        fast = headB;
        slow = headA;
    }
    for (var i = 0; i < Math.abs(lengthA - lengthB); i++) {
        fast = fast.next;
    }
    while (!!fast && !!slow) {
        if (fast === slow) {
            return fast;
        }
        fast = fast.next;
        slow = slow.next;
    }
    return null;
};
var getListLength = function(head) {
    var length = 0;
    while (!!head) {
        head = head.next;
        length++;
    }
    return length;
};