class Solution {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder merged = new StringBuilder();
        int i = 0;
        while (i < word1.length() || i < word2.length()) {
            if (i < word1.length()) {
                merged.append(word1.charAt(i));
            }
            if (i < word2.length()) {
                merged.append(word2.charAt(i));
            }
            i++;
        }
        return merged.toString();
    }
}

// PsuedoCode
// Start with an empty string called merged.
// Set a global variable counter i to 0.
// Keep looping as long as i is less than the length of either word1 or word2.
// --> This means the loop runs until we’ve checked every letter from both words.
// Inside the loop:
// --> If i is still within the length of word1:
// -----> Take the character at position i in word1 and add it to merged.
// --> If i is still within the length of word2:
// -----> Take the character at position i in word2 and add it to merged.
// Increase i by 1 to move to the next position.
// Once the loop is done (we’ve gone through all characters of both words), return the merged string.

// Time Complexity [O(n + m)]
// Loop runs until it has checked every character in both words -> max(len(word1), len(word2)) times
// Time = O(n + m)
// --> n = length of word1, m = length of word2
// equivalent to just saying O(n), if we let n be the total input size

// Space Complexity [O(n + m)]
// create a StringBuilder called merged
// in worst case, it will store all characters from both strings -> size = n + m
