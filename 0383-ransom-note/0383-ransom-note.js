/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */


// APPROACH: HASHMAP
// Time Complexity: O(m + n) where m and n are the lengths of the ransom note and the magazine
// Space Complexity: O(m) where m is the number of distinct characters in the magazine

// create an object to store the amount of times each character occurs using key-value pairs

// iterate over the magazine and update the number

// check if the ransomNote can be formed
// Check if the character char does not exist in the magazineObj (meaning it is not available in the magazine) or its frequency is already 0.
// If either condition is true, it indicates that the character char cannot be used to form the ransom note because there are not enough occurrences of that character in the magazine.
// In such a case, the function immediately returns false, indicating that the ransom note cannot be formed.
// If the character char exists in the magazineObj and its frequency is greater than 0, it means it can be used to form the ransom note. So, decrement the frequency of char in the magazineObj by 1 to indicate that it has been used.
// By decrementing the frequency, we ensure that each occurrence of the character in the magazine is accounted for and that it cannot be used again for forming the ransom note.


var canConstruct = function(ransomNote, magazine) {
    const magazineObj = {};
    
    for (let i = 0; i < magazine.length; i++) {
        let magazineElement = magazine[i];
        // magazineObj[i] = (magazineObj[char] || 0) + 1
        if (magazineObj[magazineElement]) {
            magazineObj[magazineElement]++;
        } else {
            magazineObj[magazineElement] = 1;
        }
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        let noteElement = ransomNote[i]; 
        if (!magazineObj[noteElement] || magazine[noteElement] === 0) {
            return false;
        }
        magazineObj[noteElement]--;
    }
    
    return true;
        
};