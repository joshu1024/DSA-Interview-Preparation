/*
Problem: Best Time to Buy and Sell Stock
Pattern: Greedy / Running Minimum (Prefix Minimum)
Difficulty: Easy

Brute Force:
Try every possible buy day and sell day after it.
Calculate profit for each pair and keep the maximum.

Time: O(n²)
Space: O(1)

Optimized:
Traverse the array once while tracking the minimum
stock price seen so far (best buying opportunity).

For each price:
- Calculate the profit if sold today.
- Update the maximum profit if it's better.
- Update the minimum price if a lower price is found.

This is a Greedy approach because we continuously
keep the best buy price seen so far and make the
locally optimal decision at each step.

Time: O(n)
Space: O(1)
*/
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }
  return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
maxProfit(prices);
