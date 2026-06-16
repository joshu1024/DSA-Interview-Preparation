/*
Problem: Two Sum
Pattern: Hash Map
Difficulty: Easy

Brute Force:
Check every pair of numbers in the array.
If the sum of any pair equals the target,
return their indices.

Time: O(n²)
Space: O(1)

Optimized:
Use a hash map to store numbers and their indices
as you iterate through the array.

For each number:
- Calculate its complement:
  complement = target - currentNumber
- Check if the complement already exists in the map.
- If it does, return the indices.
- Otherwise, store the current number and its index.

This allows us to find the answer in a single pass.

Time: O(n)
Space: O(n)

Where:
n = number of elements in the array
*/

function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return map;
}
const nums = [2, 7, 11, 15];
twoSum(nums, 9);
