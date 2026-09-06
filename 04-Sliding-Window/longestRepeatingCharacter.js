/*
Problem: Longest Repeating Character Replacement
Pattern: Sliding Window / Hash Map
Difficulty: Medium

Brute Force:
Generate every possible substring and count the frequency
of each character.

For each substring, find the most frequent character.
The substring is valid if the number of characters that
need to be replaced is at most k.

Keep track of the longest valid substring.

Time: O(n²)
Space: O(1)

Optimized:
Use a sliding window with a hash map to store the frequency
of each character inside the current window.

Maintain:

* left: start of the current window.
* right: end of the current window.
* maxFreq: frequency of the most frequent character.
* count: frequency of each character in the window.

The number of characters that need to be replaced is:

window length - maxFreq

If this value becomes greater than k, shrink the window
from the left until it becomes valid again.

Update maxLength after each valid window.

The key idea is that we can change all characters except
the most frequent character into that character.

Time: O(n)
Space: O(1)

Where:
n = length of the string
k = maximum number of character replacements
*/

function characterReplacement(s, k) {
  let left = 0;
  let maxFreq = 0;
  let maxLength = 0;

  let count = {};

  for (let right = 0; right < s.length; right++) {
    let char = s[right];

    count[char] = (count[char] || 0) + 1;

    maxFreq = Math.max(maxFreq, count[char]);

    while (right - left + 1 - maxFreq > k) {
      count[s[left]]--;

      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
const s = "ABAB";
const k = 2;
