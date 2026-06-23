/*
Problem: First Missing Positive
Pattern: Cyclic Sort / Index Hashing
Difficulty: Hard

Brute Force:
Starting from 1, repeatedly check whether each
positive integer exists in the array.

The first positive integer that is not found is
the answer.

Time: O(n²)
Space: O(1)

Optimized:
Place each positive number x in its correct
position x - 1.

For each element:
- If the number is within the range [1, n]
  and is not already in its correct position,
  swap it into its proper index.

After rearranging:
- Traverse the array from left to right.
- The first index i where nums[i] !== i + 1
  indicates that i + 1 is the smallest missing
  positive integer.

If all positions contain the correct values,
the answer is n + 1.

Time: O(n)
Space: O(1)

Where:
n = number of elements in the array
*/

function firstMissingPositive(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      let correctIndex = nums[i] - 1;
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}
const nums = [3, 4, -1, 1];
firstMissingPositive(nums);
