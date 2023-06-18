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
 * @return {TreeNode}
 */

// Depth-First Search (DFS) && RECURSION
// Algo for tranversing or searching tree or graph structures

// function invertTree takes the root node of a binary tree as input and returns the inverted tree
// base case checks if the current node 'root' is null and if it is, we have reached end of subtree, so return null

// swap the left and right subtrees of the current node. this is done by...
// first, temporarily storing the left subtree in a variable 'temp'
// then, assign the right subtree to the left subtree
// finally, assign 'temp' (original left subtree) to the right subtree

// recursively call 'invertTree' on the left and right subtrees. This step inverts the subtrees further down the tree until we reach the leaf nodes

// finally, return the inverted tree by returning the 'root' node

// var invertTree = function(root) {
//     if (root === null) return null;
    
//     let temp = root.left;
//     root.left = root.right;
//     root.right = temp;
    
//     invertTree(root.left);
//     invertTree(root.right);
    
//     return root;
// };

// ITERATIVE APPROACH && QUEUE - LEVEL ORDER TRANSVERSAL
// queue = first in, first out

// base case checks if the current node 'root' is null and if it is, we have reached end of subtree, so return null

// create a queue to perform level-order transversal

// enter loop that continues as long as queue is not empty
// remove the front node from the queue using shift(). this node represents the current level we are processing

// swap the left and right subtrees of the current node by using a temporary variable 'temp'

// add the left and right children to the queue
// return the root node

var invertTree = function(root) {
    if (root === null) return null;
    
    const queue = [root];
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
    }
    return root;
};