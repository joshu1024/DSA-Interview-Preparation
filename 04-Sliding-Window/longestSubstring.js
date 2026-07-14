/*
Problem: Longest Substring Without Repeating Characters
Pattern: Sliding Window
Difficulty: Medium

Brute Force:
Generate every possible substring and check
whether it contains duplicate characters.

Keep track of the longest valid substring.

Time: O(n³)
Space: O(n)

Optimized:
Use a sliding window with a hash set to store
the unique characters currently in the window.

Maintain two pointers:
- left: start of the window.
- right: end of the window.

For each character:
- If it already exists in the set, shrink the
  window from the left until the duplicate is
  removed.
- Add the current character to the set.
- Update the maximum window size.

This ensures each character is added and removed
at most once.

Time: O(n)
Space: O(n)

Where:
n = length of the string
*/
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
const s = "abcabcbb";
lengthOfLongestSubstring(s);
