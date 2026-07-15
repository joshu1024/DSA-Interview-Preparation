/*
Problem: Minimum Window Substring
Pattern: Sliding Window
Difficulty: Hard

Brute Force:
Generate every possible substring of s and check
whether it contains all characters of t with the
required frequencies.

Keep track of the smallest valid substring.

Time: O(n³)
Space: O(n)

Optimized:
Use a sliding window with two hash maps:
- need: stores the required frequency of each
  character in t.
- window: stores the frequency of characters in
  the current window.

Maintain two pointers:
- left: start of the window.
- right: end of the window.

For each character:
- Expand the window by moving the right pointer.
- Update the character count in the window.
- If a required character reaches its required
  frequency, increment the matched count.

When all required characters are matched:
- Try shrinking the window from the left while
  it remains valid.
- Update the minimum window whenever a smaller
  valid substring is found.

This ensures each character is processed at most
twice.

Time: O(n)
Space: O(n)

Where:
n = length of string s
*/
function minWindow(s, t) {
  let need = {};
  let window = {};

  for (let char of t) {
    need[char] = (need[char] || 0) + 1;
  }
  let have = 0;
  let left = 0;
  let needCount = Object.values(need).length;
  let result = [-1, -1];
  let minLength = Infinity;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    window[char] = (window[char] || 0) + 1;
    if (need[char] && window[char] === need[char]) {
      have++;
    }
    while (have === needCount) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        result = [left, right];
      }
      window[s[left]]--;
      if (need[s[left]] && window[s[left]] < need[s[left]]) {
        have--;
      }
      left++;
    }
  }

  let [start, end] = result;
  return minLength === Infinity ? "" : s.slice(start, end + 1);
}
const s = "ADOBECODEBANC";
const t = "ABC";
minWindow(s, t);
