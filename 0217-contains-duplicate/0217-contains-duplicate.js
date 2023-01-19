/**
 * @param {number[]} nums
 * @return {boolean}
 */

// brute force - linear search
// time: O(N^2)
// space: O(1)
// no additional data structures used

// check the value of the first element within the array
// compare value to each following element within the array
// if value matches, return false
// if no match, return true

var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) { // time: O(N)
        for (let j = i + 1; j < nums.length; j++) { // time: O(N)
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};