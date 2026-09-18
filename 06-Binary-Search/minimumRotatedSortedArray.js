/*
Problem: Find Minimum in Rotated Sorted Array
Pattern: Modified Binary Search
Difficulty: Medium

Brute Force:
Scan through the entire array and keep track of the
smallest value found.

For each element:

* Compare the current element with the current minimum.
* If the current element is smaller, update the minimum.
* Continue until every element has been checked.

Because every element may need to be examined, the
algorithm takes linear time.

Time: O(n)
Space: O(1)

Optimized:
Use a modified Binary Search.

The array was originally sorted and then rotated.
Therefore, the minimum is located at the rotation point.

Initialize two pointers:

* left = 0
* right = nums.length - 1

While left < right:

* Calculate the middle index.
* Compare nums[mid] with nums[right].
* If nums[mid] > nums[right], the minimum must be to
  the right of mid.
* Move left to mid + 1.
* Otherwise, the minimum is at mid or somewhere to
  the left.
* Move right to mid.

When left === right, both pointers point to the minimum.

Return nums[left].

Time: O(log n)
Space: O(1)

Time Complexity:
The brute-force solution is O(n) because the loop may
inspect all n elements.

The optimized solution is O(log n) because each iteration
eliminates approximately half of the remaining search
space:

n → n/2 → n/4 → n/8 → ...

The number of times we can divide n by 2 is log₂(n).

Space Complexity:
O(1) because only left, right, and mid are used as
additional variables.

Where:
n = number of elements in nums
nums = rotated sorted array of distinct integers
left = left boundary of the search space
right = right boundary of the search space
mid = middle index of the current search space
*/
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}
const nums = [3, 4, 5, 1, 2];
