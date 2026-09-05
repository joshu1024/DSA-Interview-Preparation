/*
Problem: Max Consecutive Ones III
Pattern: Sliding Window
Difficulty: Medium

Brute Force:
Generate every possible contiguous subarray and count
the number of zeros in each window.

A window is valid if it contains at most k zeros, since
we can flip those zeros into ones.

Keep track of the longest valid window.

Time: O(n²)
Space: O(1)

Optimized:
Use a sliding window with two pointers.

Maintain:

* left: start of the current window.
* right: end of the current window.
* zeros: number of zeros inside the window.

For each element:

* If nums[right] is 0, increase zeros.
* If zeros becomes greater than k, shrink the window
  from the left until it contains at most k zeros.
* Update the maximum window length.

The window always represents a sequence that can be
converted into all 1s by flipping at most k zeros.

Time: O(n)
Space: O(1)

Where:
n = number of elements in the array
k = maximum number of zeros that can be flipped
*/
function longestOnes(nums, k) {
  let left = 0;
  let zeros = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeros++;
    }

    while (zeros > k) {
      if (nums[left] === 0) {
        zeros--;
      }

      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
Input: ((nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]), (k = 2));
