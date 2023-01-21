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

// hashmap

// check to see if length of stringS is equal to length of stringT
// if length does not match, return false
// create two object literals for data storage
// check the each character in the string and store within the object with a counter as its value
// if the character already exists within the string, increment its counter
// go through each key within each object and if the values do not match, return false, otherwise, return true

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    } else {
        let mapS = {};
        let mapT = {};
        for (let i = 0; i < s.length; i++) {
            if (s[i] in mapS) {
                mapS[s[i]]++;
            } else {
                mapS[s[i]] = 1;
            }
            if (t[i] in mapT) {
                mapT[t[i]]++;
            } else {
                mapT[t[i]] = 1;
            }
        }
        for (let key in mapS) {
            if (mapT[key] !== mapS[key]) {
                return false;
            }
        }
    }
    return true;
};