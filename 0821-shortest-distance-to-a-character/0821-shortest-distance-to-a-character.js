/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */

var shortestToChar = function(s, c) {
    let characterIndex = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            characterIndex.push(i)
        }
    }
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
