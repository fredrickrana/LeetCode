/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// APPROACH: Recursive Depth First Search (DFS)

// Time Complexity: O(N)
// Space Complexity: O(N)

var maxDepth = function(root) {
    // Base Case: If the root is null, the depth is 0
    if (root === null) {
        return 0;
    };
    
    return dfs(root);
};

// Recursively calculate the maximum depth of the left and right subtrees.
// The depth of the tree is the maximum depth among the left and right subtrees, plus 1 for the current node.

const dfs = (root) => {
    const left = maxDepth(root.left); 
    const right = maxDepth(root.right);

    const height = Math.max(left, right);

    return height + 1;
}