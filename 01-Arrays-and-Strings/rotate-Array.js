/*
Problem: Rotate Array
Pattern: Array Reversal / In-Place Manipulation
Difficulty: Medium

Brute Force:
Rotate the array one step at a time, repeating
the process k times.

Time: O(n × k)
Space: O(1)

Optimized:
1. Normalize k using k % n.
2. Reverse the entire array.
3. Reverse the first k elements.
4. Reverse the remaining elements.

The three reversals place every element in its
correct rotated position while using constant
extra space.

Time: O(n)
Space: O(1)
*/
function rotate(nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
}
function reverse(nums, left, right) {
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}
const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
