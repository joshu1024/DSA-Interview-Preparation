/*
Problem: Sort Colors
Pattern: Three Pointers (Dutch National Flag)
Difficulty: Medium

Brute Force:
Sort the array using a standard sorting algorithm.

Time: O(n log n)
Space: O(1)

Optimized:
Use three pointers:
- left: marks the boundary for 0s.
- current: traverses the array.
- right: marks the boundary for 2s.

Traverse the array once:
- If the current element is 0, swap it with the
  left pointer, then increment both pointers.
- If the current element is 1, it is already in
  the correct position, so move the current pointer.
- If the current element is 2, swap it with the
  right pointer and decrement the right pointer.
  Do not increment the current pointer because
  the swapped element still needs to be processed.

This partitions the array into three regions:
- 0s on the left
- 1s in the middle
- 2s on the right

Time: O(n)
Space: O(1)

Where:
n = number of elements in the array
*/
function sortColors(nums) {
  let left = 0;
  let current = 0;
  let right = nums.length - 1;
  while (current <= right) {
    if (nums[current] === 0) {
      [nums[current], nums[left]] = [nums[left], nums[current]];
      current++;
      left++;
    } else if (nums[current] === 2) {
      [nums[current], nums[right]] = [nums[right], nums[current]];
      right--;
    } else {
      current++;
    }
  }
}
const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
