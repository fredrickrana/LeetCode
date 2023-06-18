/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


// IDEA
// loop through both lists
// compare values and smaller value gets pushed into the array first

// APPROACH: BRUTE FORCE (time limit exceeded)

// var mergeTwoLists = function(list1, list2) {
//     let newList = new ListNode(0);
//     let headOfNewList = newList;

    
//     while (list1 !== null && list2 !== null) {
//         if (list1.val < list2.val) {
//             newList.next = list1;
//             list1.next;
//         } else {
//             newList.next = list2;
//             list2 = list2.next;
//         }
//         newList = newList.next;
//     }
//     if (list1 === null) {
//         newList.next = list2;
//     } else {
//         newList.next = list1;
//     }
//     return headOfNewList.next;
// }

// Approach:
// Recursive Approach:
// The recursive approach is based on the idea that we compare the values of the first nodes of the two lists, and whichever has the smaller value, we add that node to our merged linked list and call the same function recursively with the next node of that list and the other list's current node. We repeat this process until one of the lists exhausts, and we return the merged list.

// Iterative Approach:
// The iterative approach is based on the same idea as the recursive approach. Here, we maintain three pointers: one for the merged linked list's head, one for the current node of the merged list, and one for the current node of each of the two input linked lists. We compare the two lists' head nodes and add the smaller one to our merged linked list and advance the pointer of that list. We continue this process until we exhaust one of the input lists, and then we add the remaining nodes of the other list to our merged linked list.

// Complexity:
// Time complexity: Both approaches take O(n+m) time, where n and m are the sizes of the two linked lists because we iterate through all the nodes of both linked lists at most once.

// Space complexity: Recursive approach has a space complexity of O(n+m) due to the recursive stack space, while the iterative approach has a space complexity of O(1) since we are using constant space for storing the merged linked list.


// APPROACH: ITERATIVE
// Initialise a new LinkedList with a dummy ListNode
// Maintain a reference to the head of the new LinkedList

// Whilst both of the passed in lists contain more elements, the loop is used to merge the two lists based on the values of their nodes
// if current node in list1 is less than or equal to current node in list2, a new node with the value of 'list1.val' is created and appended to 'newList'. Then 'list1' is moved to its next node.
// otherwise, a new node with the value of 'list2.val' is created an appended to 'newList'. Then 'list2' is moved to its new node.
// Finally, 'newList' is moved to its next node to prepare for the next iteration


// After first loop, if there are remaining nodes in 'list1', a second while loop is used to append them to the end of 'newList'
// Similarly, if there are remaining nodes in 'list2', a third while loop is used to append them to the end of 'newList'

var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode();
    let headOfNewList = newList;
    
    while(list1 && list2){
        if(list1.val <= list2.val){
            newList.next = new ListNode(list1.val);
            list1 = list1.next;
        }
        else{
            newList.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        newList = newList.next;
    }
    
    while(list1){
        newList.next = new ListNode(list1.val);
        list1 = list1.next;
        newList = newList.next;
    }
    while(list2){
        newList.next = new ListNode(list2.val);
        list2 = list2.next;
        newList = newList.next;
    }
    
    return headOfNewList.next;
};




// APPROACH: RECURSION

// var mergeTwoLists = function(list1, list2) {
//     if (!list1) return list2;
//     if (!list2) return list1;
    
//     if (list1.val < list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     } else {
//         list1.next = mergeTwoLists(list1, list2.next);
//         return list2;
//     }
// };






