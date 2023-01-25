/**
 * @param {string} s
 * @return {boolean}
 */

// by definition, permutation is a rearrangment of letters
// by definition, a palindrome is a word or phrase that reads the same backward as forward
// if there is more than one character without a match, it is not a palindrome

// connect any spaces within the string using the split method and join method
// create an empty object literal for data storage
// check each character in the string
// if the character already exists as a key, increment its value by one
// if character does not exist within the object, add as a key with the value of one
// create a counter to track numeric count
// go through each key and its value in the object
// for each key that has the value of one, increment the counter by one
// because a palindrome cannot have more than character without a match, return false if the counter has a count of more than one
// otherwise, return true

var canPermutePalindrome = function(s) {
    let connect = s.split(' ').join();
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    let counter = 0;
    for (let key in map) {
        if (map[key] % 2 === 1) {
            counter++;
        }
    }
    if (counter > 1) {
        return false;
    }
    return true;
};