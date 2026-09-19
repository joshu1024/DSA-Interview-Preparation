/*
Problem: Koko Eating Bananas
Pattern: Binary Search on the Answer
Difficulty: Medium

Brute Force:
Try every possible eating speed from 1 up to the
largest pile.

For each speed:

* Calculate how many hours Koko needs to finish every pile.
* For each pile, the required hours are:
  Math.ceil(pile / speed)
* Add the hours for all piles.
* If the total hours are <= h, return that speed.

The first speed that allows Koko to finish within h hours
is the minimum valid speed.

Time: O(n * m)
Space: O(1)

Where:
n = number of piles
m = maximum pile size

Optimized:
Use Binary Search on the possible eating speeds.

The possible answer is between:

* left = 1
* right = maximum pile size

For every middle speed:

* Calculate the total hours needed to finish all piles.
* If total hours <= h, the speed works.
* Since we need the minimum valid speed, search the
  smaller speeds by moving right to mid.
* If total hours > h, the speed is too slow.
* All smaller speeds will also be too slow, so move
  left to mid + 1.

Continue until left === right.

Return left.

The possible speeds form a monotonic pattern:

Too slow → Too slow → Too slow → Fast enough → Fast enough

Because every larger speed can only reduce or maintain
the number of hours required, Binary Search can find the
first valid speed.

Time: O(n log m)
Space: O(1)

Time Complexity:
The brute-force solution tries up to m different speeds.
For every speed, it checks all n piles.

Therefore:

O(m) × O(n) = O(nm)

The optimized solution performs Binary Search over the
range of possible speeds.

The speed range is divided approximately in half after
each iteration, giving O(log m) iterations.

For each iteration, all n piles are checked to calculate
the required hours.

Therefore:

O(n) × O(log m) = O(n log m)

Space Complexity:
O(1) because only a fixed number of variables are used.

Where:
n = number of piles
m = maximum pile size
piles = array containing the number of bananas in each pile
h = maximum number of hours Koko has
left = smallest possible eating speed
right = largest possible eating speed
mid = middle candidate eating speed
hours = total hours required at the current speed
*/
function minEatingSpeed(piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    let hours = 0;

    for (const pile of piles) {
      hours += Math.ceil(pile / mid);
    }

    if (hours <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

const piles = [3, 6, 7, 11], 
const h = 8;