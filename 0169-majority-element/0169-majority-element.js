/**
 * @param {number[]} nums
 * @return {number}
 */


// hashmap
// store key value pair with key as element and value as number of times appeared in the array

// create a counter
// use Math.max to determine if the previous key has a higher value

// var majorityElement = function(nums) {
//     let map = {};
//     for (let i = 0; i < nums.length; i++) {
//         let element = nums[i];
//         if (map[element]) {
//             map[element]++;
//         } else {
//             map[element] = 1;
//         }
//         // (map[element] ? map[element]++ : map[element] = 1); --> ternary
//     }
//     let highestElNum = 0;
//     let highestElement = null;
//     for (let key in map) {
//         if (map[key] > highestElNum) {
//             highestElNum = map[key]
//             highestElement = key;
//         }
//     }
//     return highestElement;
// };

// APPROACH: BOYER - MOORE ALGORITHM
// O(1) SPACE
// count and result, increment and decrement per element

// initialize two varaibles: 'candidate' and 'count'

// iterate through array and for each element
// if 'count' is 0, assign the current element as the 'candidate'
// if current element is the same as the 'candidate', increment 'count' by 1
// if current element is different from the 'candidate', decrement 'count' by 1

// after iterating through array, 'candidate' will hold the potential majority element
// to verify 'candidate' is the majority element, perform a second iteration through the array and count the occurences of the 'candidate'

// if the count of the 'candidate' is greather than 'Math.floor(nums.length / 2)', is is the majority element. Return the 'candidate'.

var majorityElement = function(nums) {
    let candidate;
    let count = 0;
    
    // find the potential candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        // count = num === candidate ? count + 1 : count - 1; 
        (num === candidate ? count++ : count--)
        // if (num === candidate) {
        //     count++;
        // } else {
        //     count--;
        // }
    }
    
    // verify if the candidate is the majority element
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }
    
    // chek if candidate is the majority element
    if (count > Math.floor(nums.length / 2)) {
        return candidate;
    }
    
};