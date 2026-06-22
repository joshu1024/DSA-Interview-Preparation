/*
Problem: Longest Consecutive Sequence
Pattern: Hash Set / Sequence Expansion
Difficulty: Medium

Brute Force:
Sort the array first, then iterate through it while counting
the length of consecutive sequences. However, sorting dominates
the complexity.

Time: O(n log n)
Space: O(1) or O(n) depending on sorting

Optimized:
Use a Hash Set to allow O(1) lookups.

1. Insert all numbers into a set.
2. Iterate through each number in the set.
3. Only start counting if the number is the start of a sequence
   (i.e., num - 1 is not in the set).
4. From that starting point, expand forward (num + 1, num + 2, ...)
   while numbers exist in the set.
5. Track the maximum length found.

This ensures each sequence is processed only once.

Time: O(n)
Space: O(n)

Where:
n = length of the input array
*/

function longestConsecutive(nums) {
  let set = new Set(nums);

  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}

nums = [100, 4, 200, 1, 3, 2];
longestConsecutive(nums);
