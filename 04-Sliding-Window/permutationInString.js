/*
Problem: Permutation in String
Pattern: Sliding Window + Frequency Map
Difficulty: Medium

Brute Force:
Generate every substring of s2 with length equal to s1
and compare its character frequencies with s1.

Time: O(n * k)
Space: O(k)

Optimized:
Use a sliding window with a fixed size equal to s1.length.

1. Build a frequency map of characters in s1.
2. Expand the window by moving the right pointer.
3. Track the frequency of characters inside the window.
4. If the window becomes larger than s1.length,
   remove the character at the left pointer and move left forward.
5. Compare the frequency maps of s1 and the current window.
6. If they match, the window contains a permutation of s1.

For example:

s1 = "ab"
s2 = "eidbaooo"

When the window reaches:

"ba"

The frequency is:
a → 1
b → 1

This matches the frequency of "ab", so a permutation
of s1 exists inside s2.

Time: O(n * k)
Space: O(k)

Where:
n = length of s2
k = number of unique characters being tracked

Pattern:
Sliding Window + Frequency Map
*/

function checkInclusion(s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  let need = {};
  let window = {};

  for (let char of s1) {
    need[char] = (need[char] || 0) + 1;
  }

  let left = 0;

  for (let right = 0; right < s2.length; right++) {
    let char = s2[right];

    window[char] = (window[char] || 0) + 1;

    // keep window size equal to s1 length
    if (right - left + 1 > s1.length) {
      window[s2[left]]--;

      if (window[s2[left]] === 0) {
        delete window[s2[left]];
      }

      left++;
    }

    if (sameFrequency(need, window)) {
      return true;
    }
  }

  return false;
}

function sameFrequency(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (let key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}
const s1 = "ab";
const s2 = "eidbaooo";
