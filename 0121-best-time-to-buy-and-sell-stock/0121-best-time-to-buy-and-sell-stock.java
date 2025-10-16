class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        // initialize the minimum price to a very large number

        int maxProfit = 0;
        // initialize the maximum profit to zero

        // loop through each price using an index
        for (int i = 0; i < prices.length; i++) {
            int currentPrice = prices[i]; // current day's price

            // if we find a cheaper price, update minPrice
            if (currentPrice < minPrice) {
                minPrice = currentPrice;
            }
            // otherwise, calculate the profit if we sold today
            else {
                int profit = currentPrice - minPrice; 

                // If this profit is greater than the previous max, update it
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }
        }

        // return the best profit found
        return maxProfit; 
    }
}

// walk through days left to right and keep two notes
// 1. cheapest price we've seen so far (best day to have bought up to now)
// 2. best profit we could have made by selling today (price today - cheapest so far), and update the global best if it's higher

// BIG-O
// Time Complexity: O(n)
// One pass, constant work per element. No nested loops or sorting
// Space Complexity: O(1)
// Store just two integers - minimum so far and best profit

// Any approach that compares each pair is O(n^2). Sorting is O(n log n) but breaks the buy-before-sell constraint. One-pass min-so-far preserves order and minimizes time.

// "Scan once while tracking the cheapest price seen so far. For each day, compute the profit if I sold today and update a running maximum."
// "That's O(n) time, O(1) space. Sorting doesn't work because it loses orer, and brute force is O(n^2)"
// "This approach preserves the buy-before-sell constraint"