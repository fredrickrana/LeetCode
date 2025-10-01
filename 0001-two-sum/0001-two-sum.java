
// Brute Force
// Time Complexity O(n^2)
// --> two nested loops, compare every pair
// Space Complexity O(1)
// --> no extra storage (just indices)

// PSEUDOCODE
// Loop through each element with index i
// Inside that, loop through every leter element with index j
// Check if nums[i] + nums[j] == target
// if yes, return [i, j]
// if no pairs match, return an empty array

class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{};
    }
}