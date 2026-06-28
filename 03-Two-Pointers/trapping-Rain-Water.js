/*
Problem: Trapping Rain Water
Pattern: Two Pointers
Difficulty: Hard

Brute Force:
For each position, find the tallest bar to its
left and the tallest bar to its right.

The water trapped at that position is:
min(leftMax, rightMax) - currentHeight

Sum the trapped water for all positions.

Time: O(n²)
Space: O(1)

Optimized:
Use two pointers:
- One at the beginning of the array.
- One at the end of the array.

Maintain:
- leftMax: tallest bar seen from the left.
- rightMax: tallest bar seen from the right.

For each iteration:
- Move the pointer with the smaller height.
- Update the corresponding maximum height.
- If the current bar is lower than its maximum,
  add the trapped water at that position.

This computes the total trapped water in a
single pass without extra arrays.

Time: O(n)
Space: O(1)

Where:
n = number of elements in the array
*/

function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }
  return water;
}
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
trap(height);
