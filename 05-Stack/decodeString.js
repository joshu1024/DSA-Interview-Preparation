/*
Problem: Decode String
Pattern: Stack
Difficulty: Medium

Brute Force:
Find the innermost encoded section in the string.

Read the number before the opening bracket and repeat
the characters inside the brackets that many times.

Replace the encoded section with the decoded string and
continue until the entire string has been decoded.

Nested brackets may require repeatedly processing inner
sections before outer sections.

Time: O(n²)
Space: O(n)

Optimized:
Use two stacks:

* countStack: stores the repetition count for each nested
  level.
* stringStack: stores the string built before each opening
  bracket.

Maintain:

* currentNumber: repetition count currently being read.
* currentString: string being built at the current level.

For each character:

* If it is a digit, build the complete number using:
  currentNumber = currentNumber * 10 + Number(char)
* If it is "[", push the current number and current string
  onto their respective stacks, then reset both values.
* If it is "]", pop the repetition count and previous string,
  then repeat the current string and append it to the previous
  string.
* Otherwise, add the character to currentString.

The stacks allow the algorithm to correctly handle nested
structures because each "[" creates a new level and each "]"
returns to the previous level.

For example:
"3[a]2[bc]" → "aaa" + "bcbc" → "aaabcbc"

Time: O(n)*
Space: O(n)

Where:
n = length of the encoded string

*The decoded output can be larger than n, so more precisely,
the runtime is proportional to the size of the decoded output.
*/
function decodeString(s) {
  const countStack = [];
  const stringStack = [];

  let currentString = "";
  let currentNumber = 0;

  for (const char of s) {
    if (!isNaN(char)) {
      currentNumber = currentNumber * 10 + Number(char);
    } else if (char === "[") {
      countStack.push(currentNumber);
      stringStack.push(currentString);

      currentNumber = 0;
      currentString = "";
    } else if (char === "]") {
      const repeatCount = countStack.pop();
      const previousString = stringStack.pop();

      currentString = previousString + currentString.repeat(repeatCount);
    } else {
      currentString += char;
    }
  }

  return currentString;
}
const s = "3[a]2[bc]";
