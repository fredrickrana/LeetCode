// BRUTE FORCE

// Time Complexity: O(n^2)
// Two nested loops -> every pair compared

// Space Complexity: O(1)

// class Solution {
//     public boolean containsDuplicate(int[] nums) {
//         // Go through every number
//         for (int i = 0; i < nums.length; i++) {
//             // Compare it with every number that comes after it
//             for (int j = i + 1; j < nums.length; j++) {
//                 if (nums[i] == nums[j]) {
//                     return true; // duplicate found 
//                 }
//             }
//         }
//         // No duplicates found
//         return false;
//     }
// }

// HASHSET


class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();
        // Create a HashSet to store numbers we've seen

        // Loop through each number in the array
        for (int i = 0; i < nums.length; i++) {
            if (set.contains(nums[i])) { // if the number is already in the set, duplicate found
                return true;
            }

            set.add(nums[i]); // otherwise add it to set
        }

        // finished looping and no duplicates found
        return false; 
    }
}

// Time Complexity: O(n)
// Check each element once, and Set lookups are O(1)

// Space Complexity: O(n)
// In worst case (no duplicates), we store all numbers

// class ContainsDuplicate {
//     public boolean containsDuplicate(int[] nums) {
//         // A Set stores unique elements only
//         Set<Integer> seen = new HashSet<>();

//         // Loop through each number in the array
//         for (int i = 0; i < nums.length; i++) {
//             // Try to add it to the set
//             if (!seen.add(i)) {
//                 // add() returns false if n already exists in the set
//                 return true; // duplicate found
//             }
//         }
//         // 
//     }
// }

class ContainsDuplicate {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();
        // Create a HashSet to store numbers we've seen

        // Loop through each number in the array
        for (int i = 0; i < nums.length; i++) {
            if (set.contains(nums[i])) { // if the number is already in the set, duplicate found
                return true;
            }

            set.add(nums[i]); // otherwise add it to set
        }

        // finished looping and no duplicates found
        return false; 
    }
}