/*
Problem: Next Greater Element I
Pattern: Monotonic Stack / Hash Map
Difficulty: Easy

Brute Force:
For each element in nums1, find its position in nums2
and scan the elements to its right until finding the
first greater element.

If no greater element exists, return -1.

Time: O(n²)
Space: O(1)

Optimized:
Use a monotonic decreasing stack while traversing nums2.

The stack stores elements whose next greater element has
not been found yet.

For each number in nums2:

* While the stack is not empty and the current number is
  greater than the top element, pop the top element.
* The current number is the next greater element for the
  popped element, so store this relationship in a Map.
* Push the current number onto the stack.

After processing nums2, any elements remaining in the stack
do not have a greater element to their right, so map them
to -1.

Finally, use nums1.map() to retrieve the next greater
element for each number from the Map.

Time: O(n + m)
Space: O(n)

Where:
n = length of nums2
m = length of nums1
*/

function nextGreaterElement(nums1, nums2) {
  const stack = [];
  const nextGreater = new Map();

  for (const num of nums2) {
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      const previous = stack.pop();

      nextGreater.set(previous, num);
    }

    stack.push(num);
  }
  while (stack.length > 0) {
    const previous = stack.pop();

    nextGreater.set(previous, -1);
  }
  return nums1.map((num) => nextGreater.get(num));
}
const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
