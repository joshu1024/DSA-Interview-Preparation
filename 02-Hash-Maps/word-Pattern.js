/*
Problem: Word Pattern
Pattern: Hash Map / Bidirectional Mapping
Difficulty: Easy

Brute Force:
For each character in the pattern, check whether
it consistently maps to the same word and verify
that no other character maps to that word.

This may require repeatedly searching through
previous mappings.

Time: O(n²)
Space: O(n)

Optimized:
Use two hash maps:
1. charToWord: maps pattern characters to words.
2. wordToChar: maps words back to pattern characters.

For each position:
- If an existing mapping conflicts, return false.
- Otherwise, store the mapping in both hash maps.

Using two maps ensures a one-to-one correspondence
(bijection) between pattern characters and words.

Time: O(n)
Space: O(n)

Where:
n = number of characters in the pattern
*/

function wordPattern(pattern, s) {
  let words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  let charToWord = {};
  let wordToChar = {};

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];

    if (
      (charToWord[char] && charToWord[char] !== word) ||
      (wordToChar[word] && wordToChar[word] !== char)
    ) {
      return false;
    }

    charToWord[char] = word;
    wordToChar[word] = char;
  }

  return true;
}

const pattern = "abba";
const s = "dog cat cat dog";

wordPattern(pattern, s);
