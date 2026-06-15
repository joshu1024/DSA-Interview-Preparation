/*
Problem: Valid Anagram
Pattern: Hash Map / Frequency Counting
Difficulty: Easy

Brute Force:
Sort both strings and compare the results.
If the sorted strings are identical, they are
anagrams.

Time: O(n log n)
Space: O(n)

Optimized:
Use a hash map to count the frequency of each
character in the first string.

Traverse the second string:
- If a character does not exist in the map,
  return false.
- Otherwise, decrement its count.

If all character frequencies match, the strings
are anagrams.

Time: O(n)
Space: O(n)

Where:
n = length of the strings
*/

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let map = {};
  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }
  for (let char of t) {
    if (!map[char]) {
      return false;
    }
    map[char]--;
  }
  return true;
}
const s = "anagram";
const t = "nagaram";
isAnagram(s, t);
