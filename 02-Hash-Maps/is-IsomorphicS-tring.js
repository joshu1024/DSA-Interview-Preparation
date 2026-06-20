/*
Problem: Isomorphic Strings
Pattern: Hash Map / Bidirectional Mapping
Difficulty: Easy

Brute Force:
For each character, repeatedly check all previous
characters to ensure that:
- A character in the first string always maps to
  the same character in the second string.
- No two characters map to the same character.

This requires searching through previous mappings
for every character.

Time: O(n²)
Space: O(n)

Optimized:
Use two hash maps:
1. sToT: maps characters from string s to string t.
2. tToS: maps characters from string t back to string s.

For each character pair:
- If an existing mapping conflicts, return false.
- Otherwise, store the mapping in both hash maps.

Using two maps guarantees a one-to-one
correspondence (bijection) between characters.

Time: O(n)
Space: O(n)

Where:
n = length of the strings
*/

function isIsomorphic(s, t) {
  let sToT = {};
  let tToS = {};
  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];
    if (
      (sToT[charS] && sToT[charS] !== charT) ||
      (tToS[charT] && tToS[charT] !== charS)
    ) {
      return false;
    }
    sToT[charS] = charT;
    tToS[charT] = charS;
  }
  return true;
}
s = "egg";
t = "add";
isIsomorphic(s, t);
