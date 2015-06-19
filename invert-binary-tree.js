/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// recursive
var invertTree = function(root) {
    if (!root) {
        return root;
    }
    var temp = root.left;
    root.left = root. right;
    root.right = temp;
    root.left = invertTree(root.left);
    root.right = invertTree(root.right);
    return root;
};

// iterative
var invertTree = function(root) {
    if (!root) {
        return root;
    }
    var stack = [];
    stack.push(root);
    while (stack.length > 0) {
        if (root.left) stack.push(root.left);
        if (root.right) stack.push(root.right);
        var temp = root.left;
        root.left = root.right;
        root.right = temp;
        root = stack.pop();
    }
    return root;
};