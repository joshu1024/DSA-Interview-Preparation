/*
Problem: Two Sum II - Input Array Is Sorted
Pattern: Two Pointers
Difficulty: Medium

Brute Force:
Check every pair of numbers in the array.
If a pair sums to the target, return their
1-based indices.

Time: O(n²)
Space: O(1)

Optimized:
Since the array is sorted, use two pointers:
- One at the beginning of the array.
- One at the end of the array.

For each iteration:
- Calculate the sum of the two numbers.
- If the sum equals the target, return the indices.
- If the sum is less than the target, move the
  left pointer right to increase the sum.
- If the sum is greater than the target, move the
  right pointer left to decrease the sum.

This eliminates the need to check every pair and
finds the solution in a single pass.

Time: O(n)
Space: O(1)

Where:
n = number of elements in the array
*/

function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}
numbers = [2, 7, 11, 15];
target = 9;
twoSum(numbers, target);
