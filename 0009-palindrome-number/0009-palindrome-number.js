/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let palindrome = '';
    let number = x.toString();
    for (let i = number.length - 1; i >= 0; i--) {
        palindrome += number[i];
    }
    return (parseInt(palindrome) === x);
};

// optimized

