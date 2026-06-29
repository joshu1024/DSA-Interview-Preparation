/*
Problem: Remove Duplicates from Sorted Array
Pattern: Two Pointers
Difficulty: Easy

Brute Force:
Create a new array and add each unique element
while skipping duplicates.

Copy the unique elements back to the original
array if an in-place solution is required.

Time: O(n)
Space: O(n)

Optimized:
Use two pointers:
- read: scans every element in the array.
- write: tracks the position where the next
  unique element should be placed.

For each element:
- If the current element differs from the
  previous one, write it to the write pointer
  and increment the write pointer.

After the traversal, the first 'write' elements
of the array contain all unique values in their
original order.

Time: O(n)
Space: O(1)

Where:
n = number of elements in the array
*/
function removeDuplicates(nums) {
  let write = 1;
  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[read - 1]) {
      nums[write] = nums[read];
      write++;
    }
  }
  return write;
}
const nums = [1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 7];
removeDuplicates(nums);
