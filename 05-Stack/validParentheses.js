/*
Problem: Valid Parentheses
Pattern: Stack
Difficulty: Easy

Brute Force:
Repeatedly remove valid pairs of parentheses such as
"()", "[]", and "{}" from the string.

If all pairs can be removed and the string becomes empty,
the parentheses are valid.

Time: O(n²)
Space: O(n)

Optimized:
Use a stack to keep track of opening brackets.

For each character:

* If it is an opening bracket, push it onto the stack.
* If it is a closing bracket, check whether the stack is
  empty. If it is, return false.
* Pop the most recent opening bracket from the stack.
* Use the pairs object to check whether the opening bracket
  matches the current closing bracket.
* If they do not match, return false.

After processing the entire string, the stack must be empty.
If it is empty, every opening bracket had a matching closing
bracket in the correct order.

The stack follows LIFO (Last In, First Out), which is why
the most recently opened bracket is checked first.

Time: O(n)
Space: O(n)

Where:
n = length of the string
*/

function isValid(s) {
  const stack = [];

  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const top = stack.pop();

      if (top !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
const s = "([{}])";
