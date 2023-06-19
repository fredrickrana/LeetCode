/**
 * @param {number[]} nums
 * @return {number}
 */


// hashmap
// store key value pair with key as element and value as number of times appeared in the array

// create a counter
// use Math.max to determine if the previous key has a higher value

var majorityElement = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        if (map[element]) {
            map[element]++;
        } else {
            map[element] = 1;
        }
        // (map[element] ? map[element]++ : map[element] = 1); --> ternary
    }
    let highestElNum = 0;
    let highestElement = null;
    for (let key in map) {
        if (map[key] > highestElNum) {
            highestElNum = map[key]
            highestElement = key;
        }
    }
    return highestElement;
};