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


// APPROACH: ITERATIVELY --- TWO POINTERS
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(1)

var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let current = head;
    let prev = null;    // pointer to track the next node
    
    while (current !== null) {
        let next = current.next;    // pointer to track the next node
        current.next = prev;    // reverse the pointer of the current node to point to the previous node
        prev = current;     // move the prev pointer to the current node
        current = next;     // move the current pointer to the next ndoe
    }
    
    return prev;    // return the head of the reversed linked list
}


// APPROACH: RECURSION

// var reverseList = function(head) {
//     if (head === null || head.next === null) {
//         return head;
//     }
    
//     let reversedHead = reverseList(head.next);
//     head.next.next = head;
//     head.next = null;
//     return reversedHead;
// };