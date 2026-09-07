/*
Problem: Minimum Size Subarray Sum
Pattern: Sliding Window
Difficulty: Medium

Brute Force:
Generate every possible contiguous subarray and calculate
its sum.

Whenever the sum is greater than or equal to target, update
the minimum length found.

Keep checking all possible subarrays to find the shortest
valid one.

Time: O(n²)
Space: O(1)

Optimized:
Use a sliding window with two pointers and a running sum.

Maintain:

* left: start of the current window.
* right: end of the current window.
* sum: sum of all elements inside the window.
* minLength: shortest valid window found.

For each element:

* Add nums[right] to the current sum.
* While the sum is greater than or equal to target,
  the current window is valid.
* Update minLength with the current window length.
* Remove nums[left] from the sum and move left forward
  to try to make the window smaller.

Because the array contains positive integers, removing
elements from the left always decreases the sum, allowing
the window to shrink efficiently.

If no valid subarray exists, return 0.

Time: O(n)
Space: O(1)

Where:
n = number of elements in the array
target = minimum required sum
*/

function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);

      sum -= nums[left];

      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}
const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
