/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// sort

// check to see if length of stringS is equal to length of stringT
// if length does not match, return false
// split each string and use the sort method to change order of the strings
// use the join method to create and return a new string by concatenating all the elements in the array
// if the sortedS string is equal to the sortedT string, return true, otherwise, return false

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    } else {
        let sortedS = s.split('').sort().join('');
        let sortedT = t.split('').sort().join('');
        return sortedS === sortedT;
    }
};