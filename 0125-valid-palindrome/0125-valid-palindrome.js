/**
 * @param {string} s
 * @return {boolean}
 */


//APPROACH: TWO-POINTER

// Take in lowercase character
// Initialize two pointer variables, left and right and point them with the two ends of the input string

// Transverse the string using a while loop
// Move 'left' pointer to te right until it points to an alphanumeric character
// Move 'right' pointer to te right until it points to an alphanumeric character

// Move the left and right pointers to the next positions:
// Increment the left pointer by one to move it to the next alphanumeric character.
// Decrement the right pointer by one to move it to the previous alphanumeric character.
// If the loop completes without finding any unequal characters, return true because the string is a valid palindrome.

var isPalindrome = function(s) {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        while (left < right && !((s.charAt(left) >= 'a' && s.charAt(left) <= 'z') || (s.charAt(left) >= '0' && s.charAt(left) <= '9'))) {
            left++;
        }
        while (left < right && !((s.charAt(right) >= 'a' && s.charAt(right) <= 'z') || (s.charAt(right) >= '0' && s.charAt(right) <= '9'))) {
            right--;
        }
        if (s.charAt(left) !== s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
    
};