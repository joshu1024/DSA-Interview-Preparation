/*
Problem: Maximum Subarray
Pattern: Dynamic Programming (Kadane's Algorithm)
Difficulty: Medium

Brute Force:
Generate every possible contiguous subarray and
compute its sum, keeping track of the maximum.

Time: O(n²)
Space: O(1)

Optimized:
Let `currentSum` represent the maximum subarray
sum ending at the current index.

For each element, choose between:
- Starting a new subarray at the current element.
- Extending the previous maximum subarray.

Recurrence:
currentSum = max(nums[i], currentSum + nums[i])

Track the global maximum in `totalSum`.

This uses DP where each state depends only on
the previous state, allowing constant space.

Time: O(n)
Space: O(1)
*/

function maxSubArray(nums) {
  let currentSum = nums[0];
  let totalSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    totalSum = Math.max(totalSum, currentSum);
  }
  return totalSum;
}
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSubArray(nums);
