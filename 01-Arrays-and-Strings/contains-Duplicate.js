/*
Problem: Contains Duplicate
Pattern: Hash Set
Difficulty: Easy

Brute Force:
Compare every number with every other number.
If a duplicate is found, return true.

Time: O(n²)
Space: O(1)

Optimized:
Use a Set to track numbers already seen.
If the current number exists in the Set,
a duplicate has been found.

Time: O(n)
Space: O(n)
*/

function containsDuplicate(nums) {
  let seen = new Set();
  for (num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}
const nums = [1, 2, 3, 3, 4];
containsDuplicate(nums);
