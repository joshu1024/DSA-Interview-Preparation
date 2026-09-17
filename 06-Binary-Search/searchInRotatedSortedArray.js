/*
Problem: Search in Rotated Sorted Array
Pattern: Modified Binary Search
Difficulty: Medium

Brute Force:
Use a linear search to check every element in the array.

For each index:

* Compare nums[i] with the target.
* If they are equal, return the index.
* Continue until the target is found or the array ends.

Because the array may contain n elements, the target
may be at the last position or may not exist at all.
Therefore, every element may need to be checked.

Time: O(n)
Space: O(1)

Optimized:
Use a modified Binary Search.

Although the entire array is rotated and is no longer
completely sorted, at least one half of the current
search space is always sorted.

For each iteration:

* Calculate the middle index.
* If nums[mid] equals the target, return mid.
* Determine whether the left half is sorted.
* If the left half is sorted, check whether the target
  lies inside that sorted range.
* If it does, search the left half.
* Otherwise, search the right half.
* If the left half is not sorted, the right half must
  be sorted.
* Check whether the target lies inside the sorted right
  half.
* If it does, search the right half.
* Otherwise, search the left half.

The important idea is that even though the entire array
is rotated, one half of the current search space remains
sorted. We use that sorted half to determine which side
can be eliminated.

Time: O(log n)
Space: O(1)

Time Complexity:
O(n) for the brute-force approach because a linear search
may inspect every element.

O(log n) for the optimized approach because Binary Search
eliminates approximately half of the remaining search
space after each iteration:

n → n/2 → n/4 → n/8 → ...

The logarithm comes from repeatedly dividing the search
space by 2.

Where:
n = number of elements in nums
nums = rotated sorted array of distinct integers
target = value being searched for
left = left boundary of the current search space
right = right boundary of the current search space
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
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
const nums = [4, 5, 6, 7, 0, 1, 2];
target = 0;
