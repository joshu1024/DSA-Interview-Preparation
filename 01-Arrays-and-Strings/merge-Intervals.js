/*
Problem: Merge Intervals
Pattern: Sorting + Interval Merging
Difficulty: Medium

Brute Force:
Compare every interval with every other interval
and merge overlapping intervals until no more
merges are possible.

Time: O(n²)
Space: O(n)

Optimized:
1. Sort intervals by their start value.
2. Add the first interval to the result.
3. For each remaining interval:
   - If it overlaps with the last interval in
     the result, merge them by updating the end.
   - Otherwise, add it as a new interval.

Sorting ensures that all overlapping intervals
appear next to each other, allowing them to be
merged in a single pass.

Time: O(n log n)
Space: O(n)
*/
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    let last = result[result.length - 1];
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current);
    }
  }
  return result;
}
const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
merge(intervals);
