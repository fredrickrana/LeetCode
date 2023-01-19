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

// var containsDuplicate = function(nums) {
//     nums.sort()
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] === nums[i + 1]) {
//             return true;
//         }
//     }
//     return false;
// };

// set / map
// time: O(N)
// space: O(N)

// create a new set which will remove all duplicates within the array
// use the size method to compare the element count to the array length
// if values match, return false
// if values do not match, return true

var containsDuplicate = function(nums) {
    const set = new Set(nums);
    return set.size !== nums.length;
};

// create a map
// check each element within the array
// use the set method to store the current array element value by its key
// at the beginning of each iteration, use the has method to check if the element value exists within the map
// if it exists, return false
// if there are no existing values, return true

// var containsDuplicate = function(nums) {
//     let hashMap = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (hashMap.has(nums[i])) {
//            return true; 
//         } else {
//             hashMap.set(nums[i], i);
//         }
//     }
//     return false;
// };




