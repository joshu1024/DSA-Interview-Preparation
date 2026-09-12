/*
Problem: Evaluate Reverse Polish Notation
Pattern: Stack
Difficulty: Medium

Brute Force:
Process the expression by finding an operator and the
two numbers immediately before it.

Perform the operation and replace those three tokens with
the calculated result.

Continue until only one value remains.

Time: O(n²)
Space: O(n)

Optimized:
Use a stack to evaluate the Reverse Polish Notation (RPN)
expression.

For each token:

* If the token is a number, convert it to a number and
  push it onto the stack.
* If the token is an operator, pop the two most recent
  numbers from the stack.
* The first value popped is b and the second value popped
  is a.
* Perform the operation as a op b.
* Push the result back onto the stack.

For division, Math.trunc() is used to truncate the result
toward zero, as required by the problem.

After processing all tokens, the stack contains one value,
which is the final result.

Time: O(n)
Space: O(n)

Where:
n = number of tokens in the expression
*/
function evalRPN(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      const b = stack.pop();
      const a = stack.pop();

      let result;

      if (token === "+") {
        result = a + b;
      } else if (token === "-") {
        result = a - b;
      } else if (token === "*") {
        result = a * b;
      } else {
        result = Math.trunc(a / b);
      }

      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}
tokens = ["2", "1", "+", "3", "*"];
