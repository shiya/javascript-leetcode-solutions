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

//with dummy node 
var reverseList = function(head) {
    if (!head) {
        return head;
    }
    var dummy = ListNode(0);
    var pre = dummy;
    var cur = head;
    while (!!cur) {
        var tmp = cur;
        cur = cur.next;
        tmp.next = pre;
        pre = tmp;
    }
    head.next = null;
    return pre;
};

//no dummy node shortest version
//do not need to check if input is null
// if !cur, while loop won't run and pre = null, so it works out
var reverseList = function(head) {
    var pre = null;
    while (!!head) {
        var tmp = head;
        head = head.next;
        tmp.next = pre;
        pre = tmp;
    }
    return pre;
};