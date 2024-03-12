/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// approach 1) brute force
// look through each index in the array
// subtract target by the selected index number and store within variable
// check the rest of the numbers within the array
// if the result matches another number within the array, return the index of the selected number and the index of the matching number

// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const number = target - nums[i];
//     for (let x = i + 1; x < nums.length; x++) {
//       if (number === nums[x]) {
//         return [i, x];
//       }
//     }
//   }
// };


// brute force
// Time: O(n^2)
// Space: O(1)

// The time complexity of this solution is O(n^2), where n is the number of elements in the nums array. This is because there are nested loops where each iteration of the outer loop runs n times, and each iteration of the inner loop runs (n - i - 1) times on average, where i is the current index of the outer loop.

// The space complexity of this solution is O(1) because it only uses a constant amount of extra space regardless of the size of the input array.

// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         const number = target - nums[i];
//         for (let x = i + 1; x < nums.length; x++) {
//             if (number === nums[x]) {
//                 return [i, x];
//             }
//         }
//     }
// }


// approach 2) hashmap
// Time: O(n)
// Memory: O(n)
// create an object literal for data storage
// look through each index within the array
// subtract target by the selected index number and store within variable
// if the stored value exists within the object, return the value and the index of the matching number
// if the stored value does not exist, use bracket notation to store the value of the element in the array as a key with its index as its value

// var twoSum = function(nums, target) {
//     let map = {};
//     for (let i = 0; i < nums.length; i++) {
//         const number = target - nums[i];
//         if (number in map) {
//             return [map[number], i]
//         }
//         map[nums[i]] = i;
//     }
// };


// var twoSum = function(nums, target) {
//     let map = {};
//     for (let i = 0; i < nums.length; i++) {
//         const number = target - nums[i];
//         if (number in map) {
//             return [map[number], i]
//         }
//         map[nums[i]] = i;
//     }
// }

var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const number = target - nums[i];
        if (number in map) {
            return [map[number], i]
        }
        map[nums[i]] = i;
    }
}

// { 
// 2:0
// }
// [0, 1]
