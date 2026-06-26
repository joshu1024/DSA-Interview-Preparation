/*
Problem: 3Sum
Pattern: Sorting + Two Pointers
Difficulty: Medium

Brute Force:
Check every possible triplet in the array.
If the sum of the three numbers equals zero,
add the triplet to the result.

Time: O(n³)
Space: O(1)

Optimized:
1. Sort the array.
2. Iterate through the array, treating each
   element as the first number of a triplet.
3. Use two pointers to search for the remaining
   two numbers whose sum equals the negative of
   the current element.
4. Skip duplicate values to avoid duplicate
   triplets in the result.

Sorting allows the two-pointer technique to
efficiently find valid triplets in a single pass
for each starting element.

Time: O(n²)
Space: O(1) (excluding the output array)

Where:
n = number of elements in the array
*/
function threeSum(nums) {
  nums.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate first numbers
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);
