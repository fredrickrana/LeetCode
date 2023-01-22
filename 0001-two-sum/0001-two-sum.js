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

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const number = target - nums[i];
    for (let x = i + 1; x < nums.length; x++) {
      if (number === nums[x]) {
        return [i, x];
      }
    }
  }
};