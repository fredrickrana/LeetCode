/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


// APPROACH: TWO POINTER

// Binary Search runs on O(log n)
// midway point eliminates half and keep dividing by two

// initialize left pointer and right pointer at start and end of array

// enter a loop that continues as long as the left pointer is less than or equal to the right pointer
// inside loop, calculate the middle index 'mid' as the average of the left and right pointers (using Math.floor() to round down)

// compare value at the middle index with the target value
// if equal, return mid
// if less than target, target must be in the right half of the array, so update the left pointer to 'mid + 1'
// if more than target, target must be in the left half of the array, so update the right pointer to 'mid - 1'

// if loop finishes without finding target, function returns -1 to indicate target is not present

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid; // found target, return index
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};