/*
Problem: Container With Most Water
Pattern: Two Pointers
Difficulty: Medium

Brute Force:
Check every pair of lines and calculate the
amount of water they can contain.

The maximum area among all pairs is the answer.

Time: O(n²)
Space: O(1)

Optimized:
Use two pointers:
- One at the beginning of the array.
- One at the end of the array.

For each pair:
1. Calculate the width between the pointers.
2. The container's height is the shorter of the
   two lines.
3. Compute the area and update the maximum area.
4. Move the pointer pointing to the shorter line,
   since moving the taller line cannot increase
   the area.

Repeat until the pointers meet.

Time: O(n)
Space: O(1)

Where:
n = number of elements in the array
*/

function maxArea() {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;
  while (left < right) {
    let width = right - left;
    let currentHeight = Math.min(height[left], height[right]);
    const area = width * currentHeight;
    maxWater = Math.max(maxWater, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
maxArea(height);
