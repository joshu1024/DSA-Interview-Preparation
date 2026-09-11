/*
Problem: Min Stack
Pattern: Stack
Difficulty: Medium

Brute Force:
Use a single stack to store all values.

For push, pop, and top operations, use the normal stack
operations.

For getMin(), scan through the entire stack to find the
smallest value.

Time:
push: O(1)
pop: O(1)
top: O(1)
getMin: O(n)

Space: O(n)

Optimized:
Use two stacks:

* stack: stores all values normally.
* minStack: stores the minimum values needed to quickly
  retrieve the current minimum.

For push():

* Push the value onto the main stack.
* If minStack is empty or the new value is smaller than
  or equal to its current minimum, push it onto minStack.

For pop():

* Remove the top value from the main stack.
* If the removed value is equal to the current minimum,
  also remove the top value from minStack.

For top():

* Return the top value from the main stack.

For getMin():

* Return the top value of minStack, which is always the
  current minimum value.

The minStack keeps track of minimum values as the main
stack changes.

Time:
push: O(1)
pop: O(1)
top: O(1)
getMin: O(1)

Space: O(n)

Where:
n = number of elements stored in the stack
*/
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);

    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop() {
    const removed = this.stack.pop();

    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
