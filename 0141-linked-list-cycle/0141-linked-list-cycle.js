/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// APPROACH: BRUTE FORCE --- HashSet
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(N)



// APPROACH: TWO POINTERS --- FLOYD'S CYCLE DETECTION ALGORITHM (AKA "TORTOISE AND HARE ALGORITHM")
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(1)

// Base Case
// if head is null or there is only one node, it means there is no cycle, so we return false

// Initialize Two Pointers
// initialize 'slow' and 'fast', both starting from the head of the linked list
// 'slow' moves one step at a time
// 'fast' moves two steps at a time

// Traverse the Linked List
// use a while loop to traverse the linked list until the 'slow' and 'fast' pointers meet
// in each iteration, check if the pointers have reached the end of the linked list
// if 'fast' pointer reaches the end (null) or the next node of the 'fast' pointer is null, it means there is no cycle, so we return false
// otherwise, we move the 'slow' pointer one step forward and the 'fast' pointer two steps forward

// Detect Cycle
// if the while loop terminates because the 'slow' and 'fast' pointers meet (slow === fast), it indicates the presence of a cycle in a linked list
// we return true to indicate that a cycle exists

var hasCycle = function(head) {
    if (head === null || head.next === null) {
        return false;
    }
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) return true;
    }
    
    return false;
};  