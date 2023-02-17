/**
 * @param {string} s
 * @return {number}
 */

// hashmap
var romanToInt = function(s) {
    let romanNums = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && romanNums[s[i + 1]] > romanNums[s[i]]) {
            total -= romanNums[s[i]];
        } else {
            total += romanNums[s[i]];
        }
    }
    return total;
};


