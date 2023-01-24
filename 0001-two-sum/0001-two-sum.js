/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// brute force
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

// hashmap
// create an object literal for data storage
// look through each index within the array
// subtract target by the selected index number and store within variable
// if the stored value exists within the object, return the value and the index of the matching number
// if the stored value does not exist, use bracket notation to store the value of the element in the array as a key with its index as its value

var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const number = target - nums[i];
        if (number in map) {
            return [map[number], i]
        }
        map[nums[i]] = i;
    }
};