/**
 * @param {string} s
 * @return {boolean}
 */

// stack follows LIFO - last in, first out -

// check to see the length of the string
// if string is empty or is less than or equal to one, return false
// create an empty array literal (stack) for data storage
// create an object literal with the opening of each character as a key and closing of each character as its value 
// check each character in the string
// check to see if character exists in the map object as a key
// add any opening character to the stack
// if a string value is a closing character, compare it to the key value pair of the previous character within the stack
// if the two characters are not the same, return false
// continue to check each character within the string
// if the stack length is zero, return true, else return false


var isValid = function(s) {
    if (s.length <= 1) {
        return false;
    }
    let stack = [];
    let map = {
        '(':')',
        '[':']',
        '{':'}'
    }
    for (let i=0; i<s.length; i++) {
        if (s[i] in map) {
            stack.push(s[i])
        } else {
            if (s[i] != map[stack.pop()]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

// example 1: s = "()"

// i = 0
// ( in map === true
// stack = ["("]

// i = 1
// ")" is not in map
// else runs
// *** stack.pop() = "(" ---> *** map["("] ---> *** ")"
// ")" is equal to ")"

// stack length is now 0
// output: true

// example 3: s = "(]"

// i = 0
// ( in map === true
// stack = ["("]

// i = 1
// "]" is not map
// else runs
// *** stack.pop() = "(" ---> *** map["("] ---> *** ")"
// "]" is not equal to ")"
// return false; output: false

