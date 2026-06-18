/*
Problem: Top K Frequent Elements
Pattern: Hash Map + Sorting
Difficulty: Medium

Brute Force:
Count the frequency of each element, then compare
every frequency with every other frequency to find
the k most frequent elements.

Time: O(n²)
Space: O(n)

Optimized:
Use a hash map to count the frequency of each
number in the array.

1. Store each number and its frequency in a hash map.
2. Convert the map into an array of [number, frequency] pairs.
3. Sort the array in descending order based on frequency.
4. Return the first k elements.

Time: O(n log n)
Space: O(n)

Where:
n = number of elements in the array
*/
function topKFrequent(nums, k) {
  let map = {};
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  let arr = Object.entries(map);
  arr.sort((a, b) => b[1] - a[1]);
  return arr.slice(0, k).map((item) => Number(item[0]));
}
const nums = [1, 1, 1, 2, 2, 3];
console.log(topKFrequent(nums, 2));
