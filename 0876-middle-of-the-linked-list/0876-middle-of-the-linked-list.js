/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// APPROACH: BRUTE FORCE 
// calculate the length of the linked list
// length divded by two and round

var middleNode = function(head) {
    let node = head;
    let memory = [];
    
    while (node !== null) {
        memory.push(node);
        node = node.next;
    }
    
    return memory[Math.floor(memory.length/2)];
};
// -------------------

// APPROACH: TWO POINTERS

// Fast pointer goes two spaces
// Slow pointer goes one spaces
// By the time the fast pointer reaches end or out of bounds, slow pointer will be in the middle

// Time Complexity: O(n)
// Space Complexity: O(1)

// var middleNode = function(head) {
//     let fast = head;
//     let slow = head;
    
//     while (fast !== null && fast.next !== null) {
//         fast = fast.next.next;
//         slow.next;
//     }
//     return slow;
// };