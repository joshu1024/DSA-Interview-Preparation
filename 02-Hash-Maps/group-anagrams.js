/*
Problem: Group Anagrams
Pattern: Hash Map + Frequency Counting
Difficulty: Medium

Brute Force:
Compare every string with every other string to
determine whether they are anagrams.

One approach is to sort each pair of strings and
compare them, grouping matching anagrams together.

Time: O(n² × k log k)
Space: O(n)

Optimized:
Use a hash map to group words by their character
frequency.

For each word:
1. Create a frequency array of size 26.
2. Count the occurrences of each character.
3. Convert the frequency array into a unique key.
4. Use the key to group anagrams in a hash map.

Words with identical frequency counts are
anagrams and will share the same key.

Time: O(n × k)
Space: O(n × k)

Where:
n = number of strings
k = average length of a string
*/
function groupAnagrams(strs) {
  let map = {};

  for (let str of strs) {
    let count = new Array(26).fill(0);

    for (let char of str) {
      count[char.charCodeAt(0) - 97]++;
    }

    let key = count.join("#");

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(str);
  }

  return Object.values(map);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(strs);
