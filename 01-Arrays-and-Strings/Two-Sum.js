/*
Problem: Two Sum
Pattern: Hash Map

Brute Force:
Check every pair of numbers.
Time: O(n²)

Optimized:
Use a hash map to store previously seen numbers.
Time: O(n)
Space: O(n)
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
  return [];
}

const nums = [2, 7, 11, 15];
target = 9;
twoSum(nums, target);
