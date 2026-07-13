/*
Problem: Best Time to Buy and Sell Stock
Pattern: Sliding Window / Two Pointers
Difficulty: Easy

Brute Force:
Check every possible pair of buying and selling
days. Calculate the profit for each pair where
the selling day comes after the buying day.

Return the maximum profit found.

Time: O(n²)
Space: O(1)

Optimized:
Use two pointers:
- left: represents the buying day.
- right: represents the selling day.

Traverse the array once:
- If the selling price is higher than the buying
  price, calculate the profit and update the
  maximum profit.
- Otherwise, move the buying pointer to the
  current day since it offers a lower buying
  price.
- Continue until all days have been processed.

This finds the maximum profit in a single pass.

Time: O(n)
Space: O(1)

Where:
n = number of days (stock prices)
*/

function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }

    right++;
  }

  return maxProfit;
}

prices = [7, 1, 5, 3, 6, 4];
maxProfit(prices);
