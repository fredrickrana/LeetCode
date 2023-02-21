/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */

// brute force
// find the value of the index where the character appears in the string
// (hashmap) 
// loop through the string
// take note of which index the character appears
// assign each character as a key and index as value
// use while or for in loop to subtract the values of the each index with the character value(?)


// s = aab , c = b
// for (let i = 0; i < s.length; i++) {
    // if (i === b) {
    // store b somewhere    
    // }
// }
// let list = [3,5,6,11]
// res: [3,2,1,0, 1, 0, 0, ]
// when distance reaches equal, move to next numebr in the list
// res: [3,2,1,0,1,0,0,1,2,2,1,0]
// 


/*

aabab
[2,4]

[1,0,1,2,3]

Math.min((s[i] - i), (s[j] - i))

*/


var shortestToChar = function(s, c) {
    let characterIndex = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            characterIndex.push(i)
        }
    }
    // [3, 5, 6, 11]
    
    let list = [];
    for (let i = 0; i < s.length; i++) {
        let minimum = 99999;
        for (let j = 0; j < characterIndex.length; j++) {
            minimum = Math.min((Math.abs(characterIndex[j] - i)), minimum);
        }
        list.push(minimum);
    }
    return list;
};

// [3,2,1,0,1,2,3,4,5,6,7,8]