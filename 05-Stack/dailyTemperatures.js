/*
Problem: Daily Temperatures
Pattern: Monotonic Stack
Difficulty: Medium

Brute Force:
For each day, scan the days after it until finding a
warmer temperature.

If a warmer temperature is found, store the number of
days between the two positions.

If no warmer temperature exists, keep the result as 0.

Time: O(n²)
Space: O(1)

Optimized:
Use a monotonic decreasing stack to store the indices
of days whose warmer temperature has not been found yet.

For each temperature:

* Check the top index of the stack.
* If the current temperature is warmer, pop that index.
* Calculate the number of days between the current day
  and the popped day.
* Store the difference in the result array.
* Continue popping while the current temperature is warmer
  than the temperature at the top of the stack.
* Push the current index onto the stack.

The stack stores indices of temperatures in decreasing
order. When a warmer temperature appears, it resolves all
previous temperatures that are smaller than it.

Days remaining in the stack have no warmer temperature
after them, so their result remains 0.

Time: O(n)
Space: O(n)

Where:
n = number of days in the temperatures array
*/

function dailyTemperatures(temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const previousIndex = stack.pop();

      result[previousIndex] = i - previousIndex;
    }

    stack.push(i);
  }

  return result;
}
temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
