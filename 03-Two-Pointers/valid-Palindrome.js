/*
Problem: Valid Palindrome
Pattern: Two Pointers
Difficulty: Easy

Brute Force:
Remove all non-alphanumeric characters, reverse
the cleaned string, and compare it with the
original cleaned string.

Time: O(n)
Space: O(n)

Optimized:
Clean the string by converting it to lowercase
and removing all non-alphanumeric characters.

Use two pointers:
- One starting at the beginning.
- One starting at the end.

Compare the characters at both pointers:
- If they differ, return false.
- Otherwise, move both pointers inward.

If all character pairs match, the string is
a palindrome.

Time: O(n)
Space: O(n)

Where:
n = length of the string
*/

function isPalindrome(s) {
  let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

const s = "A man, a plan, a canal: Panama";
isPalindrome(s);
