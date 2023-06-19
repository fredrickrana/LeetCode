/**
 * @param {number[]} nums
 * @return {number}
 */



// Native Approach:

// In the native approach, you would typically use nested loops to consider all possible subarrays and calculate their sums.
// You would iterate over all possible starting and ending indices of subarrays and calculate the sum of each subarray.
// The maximum sum encountered among all subarrays would be the result.
// This approach has a time complexity of O(n^2) since it considers all possible subarrays.

// --- PSUEDO CODE ---
// initialize variable 'max1' to the value of the first element in the array
// initialize variable 'max2' to the value of the first element in the array (will store the max sum seen so far)

// iterate over the 'nums' array starting from the second element
// compare the current element 'nums[i]' with the sum of the current element and the previous sum ('max1 + nums[i]'). assign the larger value to 'max1'. step calculates the maximum sum of a subarray ending at the current element

// check if the current maximum sum 'max1' is greater than the overall maximum sum 'max2'
// if it is, update 'max2' to the value of 'max1', ensures that 'max2' always stores the maximum sum seen so far

// return the maximum sum 'max2', which represents the maxium sum of any contiguous subarray within the 'nums' array

var maxSubArray = function(nums) {
    let max1 = nums[0];
    let max2 = nums[0]; // maximum sum seen so far
    for (let i = 1; i < nums.length; i++) {
        max1 = Math.max(nums[i], max1 + nums[i])
        
        if (max1 > max2) {
            max2 = max1;
        }
    }
    return max2;
};

// [-2,1,-3,4,-1,2,1,-5,4]
// max1 = -2
// max2 = -2

// max1 = Math.max(-2, 1 + -2) -> -2, -1
// max1 = -1
// because -1 > -2, max2 = -1

// max1 = Math.max(-3, -1 + -3) -> -3, -4
// max1 = -3
// max2 = -3


// Kadane's Algorithm:

// Kadane's algorithm is an optimized approach to solve the Maximum Subarray problem in linear time.
// It uses a dynamic programming technique to calculate the maximum sum of a subarray ending at each index.
// The algorithm iterates through the array from left to right, keeping track of the current sum and the maximum sum seen so far.
// At each index, it compares the current element with the sum of the current element and the previous sum.
// The maximum between these two values becomes the new current sum.
// The maximum sum seen so far is updated if the current sum is greater.
// The final maximum sum represents the maximum sum of any contiguous subarray within the array.
// Kadane's algorithm has a time complexity of O(n) since it only requires a single pass through the array.

// --- PSUEDO CODE ---

// initialize 'maxSum' and 'currentSum' with the first element of the array
// it then iterates through the remaining elements of the array starting from index 1

// at each iteration, the function calculates the 'currentSum' by choosing the maximum between the current element 'nums[i]' and the sum of the current element and the previous sum 'currentSum + nums[i]'
// this step ensures that the 'currentSum' always represents the maximum sum of a subarray ending at the current element
// function also updates the 'maxSum' by comparing it with the 'currentSum' at each iteration, ensuring that 'maxSum' holds the maximum sum seen so far

// var maxSubArray = function(nums) {
//     let maxSum = nums[0];
//     let currentSum = nums[0];
    
//     for (let i = 1; i < nums.length; i++) {
//         currentSum = Math.max(nums[i], currentSum + nums[i]);
//         maxSum = Math.max(maxSum, currentSum);
//     }
//     return maxSum;
// };


// The key difference between the two approaches lies in their time complexity. The native approach has a quadratic time complexity, making it less efficient for large input sizes. On the other hand, Kadane's algorithm provides an optimized solution with linear time complexity, making it more efficient.