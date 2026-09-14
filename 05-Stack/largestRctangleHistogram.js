/*
Problem: Largest Rectangle in Histogram
Pattern: Monotonic Stack
Difficulty: Hard

Brute Force:
For each bar, expand to the left and right while the
neighboring bars are at least as tall as the current bar.

Calculate the rectangle area using the current bar's height
and the total width where that height can extend.

Keep track of the largest area found.

Time: O(n²)
Space: O(1)

Optimized:
Use a monotonic increasing stack to store the indices of
bars whose maximum rectangle has not been calculated yet.

Add a 0 to the end of the heights array as a sentinel value.
This forces all remaining bars in the stack to be processed.

For each bar:

* If its height is greater than or equal to the height at
  the top of the stack, push its index.
* If its height is smaller, pop bars from the stack while
  they are taller than the current bar.
* The popped bar's height becomes the height of the rectangle.
* The current index determines the right boundary.
* The new top of the stack determines the left boundary.
* Calculate the width between these boundaries.
* Calculate the rectangle area and update maxArea.

The width is calculated as:

* If the stack is empty, width = i.
* Otherwise, width = i - stack[top] - 1.

The stack maintains indices of bars in increasing height
order, allowing each bar to be pushed and popped only once.

Time: O(n)
Space: O(n)

Where:
n = number of bars in the histogram
*/

function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;

  heights.push(0);

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()];

      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

      const area = height * width;

      maxArea = Math.max(maxArea, area);
    }

    stack.push(i);
  }

  return maxArea;
}
const heights = [2, 1, 5, 6, 2, 3];
