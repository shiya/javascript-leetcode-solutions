/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 //recursive
var preorderTraversal = function(root) {
    var result = [];
    traverse(root, result);
    return result;
};

var traverse = function (root, result) {
    if (!root) {
        return;
    }
    result.push(root.val);
    traverse(root.left, result);
    traverse(root.right, result);
}

// iterative
var preorderTraversal = function(root) {
    var result = [];
    if (!root) {
        return result;
    }
    var stack = [];
    stack.push(root);
    while (stack.length > 0) {
        var node = stack.pop();
        result.push(node.val);
        if (!!node.right) {
            stack.push(node.right);
        }
        if (!!node.left) {
            stack.push(node.left);
        }
    }
    return result;
};