// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), 
 * design an algorithm to find the maximum profit.
 * 
 * Note that you cannot sell a stock before you buy one.
 * 
 * Example 1:

 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
 * Example 2:

 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

// Method 1 O(n^2)
const maxProfit = (prices) => {
    let currentMaxProfit = 0;
    let currentMinProfit = Infinity;
    for (let i = 0; i < prices.length; i++) {
        for (let j=i+1; j < prices.length; j++) {
            if ((prices[j] - prices[i]) > currentMaxProfit) {
                currentMaxProfit = prices[j] - prices[i];
            }
            if (((prices[j] - prices[i]) <= currentMinProfit) && (prices[j] > prices[i])) {
                currentMinProfit = prices[j] - prices[i];
            }
        }
    }
    return { currentMaxProfit, currentMinProfit: isNaN(currentMinProfit) ? currentMinProfit : 0 };
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));

// Method 2 O(n)
const maxProfit2 = (prices) => {
    let min = prices[0];
    let maxProfit = 0;
    let minProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        }
        if (maxProfit < (prices[i] - min)) {
            maxProfit = prices[i] - min
        }
        if (minProfit < (prices[i] - min)) {
            minProfit = prices[i] - min
        }
    }
    return maxProfit;
}

// console.log(maxProfit2([7,1,5,3,6,4]));
// console.log(maxProfit2([7,6,10,1,3]));