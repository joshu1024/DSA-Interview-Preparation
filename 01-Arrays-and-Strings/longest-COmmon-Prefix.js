/*
Problem: Longest Common Prefix
Pattern: String Traversal
Difficulty: Easy

Brute Force:
Compare every character of every string with
every other string and build the common prefix.

Time: O(n × m)
Space: O(1)

Optimized:
Use the first string as a reference.
Iterate through each character position and
compare that character with the character at
the same position in all other strings.

If a mismatch is found, return the prefix
constructed so far. If all characters match,
the first string itself is the common prefix.

Time: O(n × m)
Space: O(1)

Where:
n = number of strings
m = length of the shortest string
*/
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
}
strs = ["flower", "flow", "flight"];
longestCommonPrefix(strs);
