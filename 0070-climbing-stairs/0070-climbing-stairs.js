/**
 * @param {number} n
 * @return {number}
 */


// APPROACH: BRUTE FORCE
// Decision Tree --- Recursion
// DEPTH-FIRST SEARCH because it is a tree
// 0 -> 1, 2 -> ETC. 
// Time Complexity: O(2^N)
// Space Complexity: O(N)


// APPROACH: CACHE THE RESULTS --- MEMOIZATION -- TOP DOWN
// Time Complexity: O(N)
// Space Complexity: O(N)

// -------------------------------------------------

// APPROACH: BOTTOM-UP 
// Fibonacchi Sequence? 
// Time Complexity: O(N)
// Space Complexity: O(1)

// define base cases
// if n is 1, there is only one way to reach the top with 1 step
// if n is 2, there are two ways to reach the top with 2 steps (1 + 1 OR 2)
// if n is 3, there are three ways to reach the top with 3 steps (1 + 2 OR 2 + 1 OR 1 + 1 + 1)

// initialize two variables 'prev1' and 'prev2' to keep track of the number of ways to reach the first and second steps
// prev1 = 1, prev2 = 2

// loop to iterate from the fourth step up to n
// initialize 'curr' to store the number of ways to reach the current step
// calculate 'curr' by adding 'prev1' and 'prev2'. this represents the sum of the number of ways to reach the previous two steps, which is equivalent to the Fibonacci sequence
// update 'prev1' to be the previous 'prev2' value (number of ways to reach the previous step)
// update 'prev2' to be 'curr' (number of ways to reach the current step) for the next iteration

// after loop, return 'curr', which represents number of ways to reach the top step

var climbStairs = function(n) {
    if (n <= 3) {
        return n;
    }
    
    let prev1 = 2;
    let prev2 = 3;
    let curr;
    
    for (let i = 4; i <= n; i++) {
        curr = prev1 + prev2;
        
        prev1 = prev2;
        prev2 = curr;
    }
    
    return curr; 
}


// n = 5
// i = 4
// curr = 2 + 3 = 5
// prev1 = 3
// prev2 = 5
// i = 5
// curr = 3 + 5 = 8
// return 8