/*
Problem: Fruit Into Baskets
Pattern: Sliding Window / Hash Map
Difficulty: Medium

Brute Force:
Generate every possible contiguous subarray and
count the different types of fruits in each window.

Keep track of the longest subarray containing at
most two different types of fruit.

Time: O(n²)
Space: O(n)

Optimized:
Use a sliding window with a hash map to keep track
of the frequency of each fruit type in the current
window.

Maintain two pointers:
- left: start of the window.
- right: end of the window.

For each fruit:
- Add the fruit to the basket and increase its count.
- If the window contains more than two fruit types,
  shrink the window from the left.
- Remove a fruit type from the basket when its count
  reaches zero.
- Update the maximum window length.

The window always contains at most two different
fruit types.

Time: O(n)
Space: O(n)

Where:
n = number of fruits in the array
*/
function totalFruit(fruits) {
  let left = 0;
  let maxLength = 0;

  let basket = {};

  for (let right = 0; right < fruits.length; right++) {
    let fruit = fruits[right];

    basket[fruit] = (basket[fruit] || 0) + 1;

    while (Object.keys(basket).length > 2) {
      basket[fruits[left]]--;

      if (basket[fruits[left]] === 0) {
        delete basket[fruits[left]];
      }

      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
const fruits = [1, 2, 1];
