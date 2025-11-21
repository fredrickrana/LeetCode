
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

// class Solution {
//     public int[] twoSum(int[] nums, int target) {
//         for (int i = 0; i < nums.length; i++) {
//             for (int j = i + 1; j < nums.length; j++) {
//                 if (nums[i] + nums[j] == target) {
//                     return new int[]{i, j};
//                 }
//             }
//         }
//         return new int[]{};
//     }
// }

// HashMap One-Pass
// Time Complexity: O(n)
// -> each number is only processed once
// Space Complexity: O(n)
// -> HashMap lookups (containsKey, get, put) are O(1) on average

// Create an empty map to keep track of numebrs already seen
// key will be number itself
// value will be the index where we saw it

// loop through array using index i
// check if the complement is already in the map
// if it is, number has been seen before and return with current number
// return empty array if not found


class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>(); // stores value -> index

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i]; // what number we need to reach the target

            if (map.containsKey(complement)) { // check if we already saw the complement 
                return new int[] { map.get(complement), i }; // found the pair
            }

            map.put(nums[i], i); // store current number with its index
        }

        return new int[] {}; // no pair found (edge case)
    }
}


// class Solution {
//     public int[] twoSum(int[] nums, int target) {
//         Map<Integer, Integer> map = new Hashmap<>();

//         for (int i = 0; i < nums.length; i++) {
//             int number = target - nums[i];

//             if (map.containsKey(number)) {
//                 return new int[] { map.get(complement), i };
//             }

//             map.put(nums[i], i);
//         }

//         return new int[] {};
//     }
// }