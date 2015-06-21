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
var inorderTraversal = function(root) {
    var result = [];
    traverse(root, result);
    return result;
};

var traverse = function (root, result) {
    if (!root) {
        return result;
    }
    traverse(root.left, result);
    result.push(root.val);
    traverse(root.right, result);
} 

 //iterative
 var inorderTraversal = function(root) {
    var result = [];
    if (!root) {
        return result;
    }
    var stack = [];

    // the stack cannot be empty, or the current node cannot be null
    while (stack.length > 0 || !!root) {
        if (!!root) {
            // if not null, push to stack
            stack.push(root);
            root = root.left;
        } else {
            // if null, means there's no left node
            // append current node, then push right node
            var node = stack.pop();
            result.push(node.val);
            root = node.right;
        }
    }
    return result;
};