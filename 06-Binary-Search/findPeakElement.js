/*
Problem: Find Peak Element
Pattern: Binary Search
Difficulty: Medium

Brute Force:
Scan through the array and check each element to determine
whether it is greater than its neighbors.

For each index:

* Check the element to the left.
* Check the element to the right.
* If the current element is greater than both neighbors,
  return its index.

The first and last elements can also be peaks because the
elements outside the array can be considered negative
infinity.

Because every element may need to be checked:

Time: O(n)
Space: O(1)

Optimized:
Use Binary Search by comparing nums[mid] with nums[mid + 1].

The array does not need to be sorted.

Instead, determine whether we are moving uphill or
downhill.

If:

nums[mid] < nums[mid + 1]

we are moving uphill.

A peak must exist somewhere to the right because the array
eventually has to either start decreasing or reach its end.

Therefore:

left = mid + 1

If:

nums[mid] > nums[mid + 1]

we are moving downhill.

A peak must exist at mid or somewhere to the left.

Therefore:

right = mid

Continue until:

left === right

At that point, left points to a peak element.

Time: O(log n)
Space: O(1)

Time Complexity:
The brute-force solution may inspect all n elements,
giving O(n).

The optimized solution eliminates approximately half of
the search space after every comparison:

n → n/2 → n/4 → n/8 → ...

Therefore, the number of iterations is log₂(n).

Time: O(log n)

Space Complexity:
O(1) because only left, right, and mid are used.

Where:
n = number of elements in nums
nums = array of integers
left = left boundary of the current search space
right = right boundary of the current search space
mid = middle index of the current search space
*/

function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
const nums = [1, 2, 3, 1];
