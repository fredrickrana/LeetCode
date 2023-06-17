/**
 * @param {number[]} prices
 * @return {number}
 */



// APPROACH: SLIDING WINDOW APPROACH
// APPROACH: window starts from the left and expands to the right, keeping track of the minimum price encountered and updating the maximum profit 

// the number zero is being assigned to the variable 'left', representing the index of the leftmost element in the sliding window
// the number one is being assigned to the variable 'right', representing the element to the right of the window
// the number zero is being assigned to the variable 'max', indicating profit and no profit has been made yet

// code enters a while loop that continues as long as the 'right' index is less than the length of the 'prices' array

// inside the loop, the code checks if the price at 'prices[right]' is less than or equal to the price at 'prices[left]'
// if it is, it means we can slide the window to the right and update the 'left' index to 'right' (makes sures that 'left' always points to the lowest price encountered so far)

// next, calculate the window's size by subtracting prices[left] from prices[right]
// use Math.max to update the 'max' variable, ensuring 'max' always holds the maximum profit 
// finally, right index is incremented to move the sliding window to the right

// once loop finishesm return max



// var maxProfit = function(prices) {
//     let left = 0;
//     let right = 1;
//     let max = 0;
    
//     while (right < prices.length) {
//         if (prices[right] <= prices[left]) {
//             left = right;
//         }
        
//         const window = prices[right] - prices[left];
        
//         max = Math.max(max, window);
//         right++;
//     }
//     return max; 
// }




// APPROACH: BUY LOW, SELL HIGH
// APPROACH: by keeping track of the minium price and calculating the potential profit at each step, it finds the maximum possible profit from buying and selling the stock

var maxProfit = function(prices) {
    let minPrice = Infinity; // set to Infinity to ensure that it will be updated with the lowest price encountered
    let maxProfit = 0; // set to zero, meaning no profit has been made yet
    
    for (let i = 0; i < prices.length; i++) { // loop through the prices array, starting from first element (i = 0) and continues until the end (i < prices.length)
        if (prices[i] < minPrice) { // check to see if the current price is less than the current 'minPrice'
            minPrice = prices[i]; // if less than 'minPrice', 'minPrice' is updated to the current price. ensures 'minPrice' always holds the lowest price encountered so far
        } else if (prices[i] - minPrice > maxProfit) { // if current price is not less than 'minPrice', there is potential selling opportunity. Calc profit by subtracting 'minPrice' from current price
            maxProfit = prices[i] - minPrice; // if profit is greater than current 'maxProfit', update 'maxProfit'
        }
    }
    return maxProfit; // return maxProfit
}

