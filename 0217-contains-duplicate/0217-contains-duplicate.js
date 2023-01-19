/**
 * @param {number[]} nums
 * @return {boolean}
 */

// brute force - linear search
// time: O(N^2)
// space: O(1)
// no additional data structures used

// check the value of each element within the array
// compare value to each following elements within the array
// if value matches, return false
// if no match, return true

// var containsDuplicate = function(nums) {
//     for (let i = 0; i < nums.length; i++) { // time: O(N)
//         for (let j = i + 1; j < nums.length; j++) { // time: O(N)
//             if (nums[i] === nums[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };


// sorting
// time: O(N * log(N))
// space: O(1)

// use sort() method to return a sorted array with element values in ascending order
// check the value of each element within the array
// compare the value of the current element with the next element in the array
// if value matches, return false
// if no match, return true

var containsDuplicate = function(nums) {
    nums.sort()
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};