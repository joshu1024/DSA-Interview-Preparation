/*
Problem: Binary Search
Pattern: Binary Search
Difficulty: Easy

Brute Force:
Use a linear search to check every element in the array.

For each index:

* Compare nums[i] with the target.
* If they are equal, return the index.
* Continue until the target is found or the array ends.

Because every element may need to be checked, the search
takes linear time.

Time: O(n)
Space: O(1)

Optimized:
Use Binary Search to repeatedly divide the sorted array
into two halves.

Initialize two pointers:

* left = 0
* right = nums.length - 1

While left <= right:

* Calculate the middle index.
* If nums[mid] equals the target, return mid.
* If nums[mid] is less than the target, eliminate the
  left half and move left to mid + 1.
* If nums[mid] is greater than the target, eliminate the
  right half and move right to mid - 1.

Because the array is sorted, half of the remaining search
space can be eliminated after every comparison.

Time: O(log n)
Space: O(1)

Where:
n = number of elements in the array
nums = sorted array of integers
target = value we are searching for
left = left boundary of the search space
right = right boundary of the search space
mid = middle index of the current search space
*/
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
const nums = [-1, 0, 3, 5, 9, 12];
target = 9;
