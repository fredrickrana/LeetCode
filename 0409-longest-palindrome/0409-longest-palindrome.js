/**
 * @param {string} s
 * @return {number}
 */


// APPROACH: HASHMAP

    // in palindrome's there are an even amount of letters except for one odd occurance
    // while we have access to all the letters and amount of times it occurred, we can check if it appeared an even amount of times using the % remainder operator in javascript (if using (% 2) outputs 0 then it is even)
    // we are allowed one noneven number to include
    
    // create a counter to keep track of the amount of characters in palindrome
    // create a counter to keep track of the odd number of characters in odd occurance
    // check all the even values within the string and add those numbers to the counter
    // all the even values are added to the counter
    
    // now we check for odd numbers and take the highest odd occurance

var longestPalindrome = function(s) {
    if (s.length === 1) {
        return s.length;
    }
    
    let map = {};
    for (let i = 0; i < s.length; i++) {
        let stringChar = s[i];
        if (map[stringChar]) {
            map[stringChar]++;
        } else {
            map[stringChar] = 1;
        }
    }
    // map = { a:1, b:1, c:4, d: 2 }
    
    let counter = 0;
    let oddCounter = 0;
    
    for (let key in map) {
        if (map[key] % 2 === 0) {
            counter += map[key];
        } else {
            counter += map[key] - 1;
            oddCounter = 1;
        }
    }
    
    return counter += oddCounter;
};

// { c: 3, e: 5, a: 4 } --> eeaac e caaee

// FIXED SOLUTION ERROR
// 3 Cs and 5 Es Example
// you can still take two from C and four from E since we are looking for the Longest Palindrome

// so create a counter for the amount of odd occurances
// in the example of 3 Cs and 5 Es, add 2 Cs and 4 Es to the counter
// we are still left with the possibility to insert a value of one to make it a palindrome (odd number of characters)
// so when encountering an odd occurrance, change oddCounter to one and add at the end


