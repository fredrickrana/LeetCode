/**
 * @param {string} s
 * @return {boolean}
 */

// stack follows LIFO - last in, first out -

// check to see the length of the string
// if string is empty or is less than or equal to one, return false

// create an empty array literal for data storage
// create an object literal with the opening of each character as a key and closing of each character as its value 

var isValid = function(s) {
    if (!s || s.length <= 1) {
        return false;
    }
    let stack = [];
    let map = {
        '(':')',
        '[':']',
        '{':'}'
    }
    for (let i=0; i<s.length; i++) {
        if (map[s[i]]) {
            stack.push(map[s[i]])
        } else {
            if (stack.pop() != s[i]) {
                return false;
            }
        }
    }
    return stack.length > 0 ? false : true;
};