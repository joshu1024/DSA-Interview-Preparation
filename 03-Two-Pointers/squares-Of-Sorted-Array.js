/*
Problem: Squares of a Sorted Array
Pattern: Two Pointers
Difficulty: Easy

Brute Force:
Square every element in the array, then sort the
resulting array.

Time: O(n log n)
Space: O(n)

Optimized:
Use two pointers:
- One at the beginning of the array.
- One at the end of the array.

Since the largest square can come from either the
most negative or the most positive number:
- Compare the squares at both pointers.
- Place the larger square at the end of the
  result array.
- Move the corresponding pointer inward.
- Repeat until all elements are processed.

This builds the sorted squares array in a
single pass.

Time: O(n)
Space: O(n)

Where:
n = number of elements in the array
*/
function sortedSquares(nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = new Array(nums.length);
  let position = nums.length - 1;
  while (left <= right) {
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];
    if (leftSquare > rightSquare) {
      result[position] = leftSquare;
      left++;
    } else {
      result[position] = rightSquare;
      right--;
    }
    position--;
  }
  return result;
}
const nums = [-4, -1, 0, 3, 10];
sortedSquares(nums);
