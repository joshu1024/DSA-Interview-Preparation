/*
Problem: Find Pivot Index
Pattern: Prefix Sum
Difficulty: Easy

Brute Force:
For each index, calculate the sum of elements
to its left and the sum of elements to its right.
If the sums are equal, that index is the pivot.

Time: O(n²)
Space: O(1)

Optimized:
First, compute the total sum of the array.
Traverse the array while maintaining a running
left sum.

For each index:
- Calculate the right sum as:
  totalSum - leftSum - currentElement
- If left sum equals right sum, the current
  index is the pivot.

This avoids repeatedly summing subarrays.

Time: O(n)
Space: O(1)
*/
function pivotIndex(nums) {
  let totalSum = 0;
  for (let num of nums) {
    totalSum += num;
  }
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return nums[i];
    }
    leftSum += nums[i];
  }
  return -1;
}
const nums = [1, 7, 3, 6, 5, 6];
pivotIndex(nums);
