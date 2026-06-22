/*
Problem: Subarray Sum Equals K
Pattern: Prefix Sum + Hash Map
Difficulty: Medium

Brute Force:
Generate every possible subarray and calculate
its sum. Count the subarrays whose sum equals k.

Time: O(n²)
Space: O(1)

Optimized:
Use a running prefix sum and a hash map to store
the frequency of previously seen prefix sums.

For each element:
1. Update the current prefix sum.
2. Check if (currentSum - k) exists in the map.
   If it does, a subarray ending at the current
   index sums to k.
3. Add the frequency of (currentSum - k) to the count.
4. Store the current prefix sum in the map.

The hash map allows us to efficiently determine
how many previous prefix sums can form a valid
subarray sum.

Time: O(n)
Space: O(n)

Where:
n = number of elements in the array
*/
function subarraySum(nums, k) {
  let map = { 0: 1 };
  let currentSum = 0;
  let count = 0;
  for (let num of nums) {
    currentSum += num;
    if (map[currentSum - k]) {
      count += map[currentSum - k];
    }
    map[currentSum] = (map[currentSum] || 0) + 1;
  }

  return count;
}

const nums = [1, 1, 1];
const k = 2;
subarraySum(nums, k);
